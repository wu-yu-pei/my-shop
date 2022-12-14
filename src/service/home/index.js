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
  });
}

export function requestShops(params) {
  return request.get({
    url: '/shops',
    params,
  });
}
