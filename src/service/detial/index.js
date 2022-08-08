import request from '..';
import local from '../../utils/index';

export function requestDetial(id) {
  return request.get({
    interceptors: {
      interceptorsRequest(config) {
        const token = local.get('home').token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      InterceptorsRequestCatch(err) {
        return err;
      },
    },
    url: '/detial',
    params: {
      id,
    },
  });
}

export function getTag(id) {
  return request.get({
    url: '/tag',
    params: {
      id,
    },
  });
}
