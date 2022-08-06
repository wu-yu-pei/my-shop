import request from '..';

export function getData() {
  request.get({
    url: '/cheat',
    interceptors: {
      interceptorsRequest(config) {
        return config;
      },
      interceptorsResponse(res) {},
    },
  });
}
