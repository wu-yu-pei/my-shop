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
