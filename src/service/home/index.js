import request from '..';

export function requestLogin(account, password) {
  return request.post({
    url: '/login',
    data: {
      account,
      password,
    },
  });
}

export function requestCategory() {
  return request.get({
    url: '/category',
    params: {
      a: 10,
    },
  });
}

export function requestShops(params) {
  return request.get({
    url: '/shops',
    params,
  });
}
