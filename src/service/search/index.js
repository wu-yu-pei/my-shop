import request from '..';

export function requestSearch(keyword) {
  return request.get({
    url: '/search',
    params: {
      keyword,
    },
  });
}
