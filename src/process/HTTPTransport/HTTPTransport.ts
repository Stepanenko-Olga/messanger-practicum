import { METHODS } from './consts';
import { HTTPMethods, HTTPRequest } from './types';
import { queryStringify } from './utils';

// eslint-disable-next-line no-unused-vars
class HTTPTransport {
  get: HTTPMethods = (url, options = {}) => {
    let urlFromOptions: string = '';
    if (options.data) urlFromOptions = url.concat(queryStringify(options.data));
    return this.request(urlFromOptions, { ...options, method: METHODS.GET }, options.timeout);
  };

  put: HTTPMethods = (url, options = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethods = (url, options = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethods = (url, options = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["request"]}] */
  request: HTTPRequest = (url, options, timeout = 5000) => {
    const { headers, data, method = METHODS.GET } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      if (headers) xhr.setRequestHeader(headers.name, headers.value);

      xhr.onload = () => {
        resolve(xhr);
      };
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === 'GET' || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
