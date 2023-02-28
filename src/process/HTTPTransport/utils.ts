export function queryStringify(data: unknown[]) {
  let str = '?';
  Object.keys(data).forEach((key, index) => { str = `${str + key}=${data[index]}&`; });
  return str.slice(0, -1);
}
