import axios from 'axios';

class Request {
  constructor(config) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      config.interceptors.interceptorsRequest,
      config.interceptors.InterceptorsRequestCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors.interceptorsResponse,
      config.interceptors.InterceptorsResponseCatch
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      // 请求拦截器
      if (config.interceptors.interceptorsRequest) {
        config = config.interceptors.interceptorsRequest(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          // 响应拦截器
          if (config.interceptors.interceptorsResponse) {
            res = config.interceptors.interceptorsRequest(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, methods: 'GET' });
  }

  post(config) {
    return this.request({ ...config, methods: 'POST' });
  }
}

const config = {
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  interceptors: {
    // 请求拦截器
    interceptorsRequest() {},
    interceptorsRequestCatch() {},
    // 响应拦截器
    interceptorsResponse() {},
    interceptorsResponseCatch() {},
  },
};

const request = new Request(config);

request.get({
  url: '/login',
  interceptors: {
    interceptorsRequest(config) {},
    interceptorsResponse(res) {},
  },
});
