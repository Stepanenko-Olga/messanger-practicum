import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { expect } from 'chai';
import type AuthApiType from './AuthApi';
import type BaseApiType from '../BaseApi/BaseApi';

const apiMethodsMock = {
  get: sinon.fake(),
  post: sinon.fake(),
};

const { default: BaseApi } = proxyquire('../BaseApi/BaseApi', {
  '../../utils/HTTPTransport/HTTPTransport': {
    default: class {
      get = apiMethodsMock.get;
      post = apiMethodsMock.post;
    },
  },
}) as { default: typeof BaseApiType };

const { default: AuthApi } = proxyquire('./AuthApi', {
  '../BaseApi/BaseApi': {
    default: BaseApi
  }
}) as { default: typeof AuthApiType };

describe('AuthApi', () => {
  it('should use post signin mock', () => {
    const authApi = new AuthApi();
    const data = {     
      login: '',      
      password: '',  
    };
    authApi.signin(data);
    expect(apiMethodsMock.post.calledWith('/signin', data)).to.eq(true);
  });
  
  it('should use post signup mock', () => {
    const authApi = new AuthApi();
    const data = {
      first_name: '',
      second_name: '',
      login: '',
      email: '',
      password: '',
      phone: '',
    };
    authApi.signup(data);
    expect(apiMethodsMock.post.calledWith('/signup', data)).to.eq(true);
  });

  it('should use get mock', () => {
    const authApi = new AuthApi();    
    authApi.read();
    expect(apiMethodsMock.get.calledWith('/user')).to.eq(true);
  });

  it('should use post logout mock', () => {
    const authApi = new AuthApi();    
    authApi.logout();
    expect(apiMethodsMock.post.calledWith('/logout')).to.eq(true);
  });
});
