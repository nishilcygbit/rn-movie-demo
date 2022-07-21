
import axios, { AxiosError, AxiosRequestHeaders, Method } from 'axios';

export default class Api {

  private static apiBaseUrl: string = 'https://api.themoviedb.org/3';
  private static api_key: string = 'd24ff0affc163fe180a853849e4c3599';

  private static async axiosCallApi(method: Method, url: string, data?: any,): Promise<any> {
    // const headerObj: AxiosRequestHeaders = { 'client-id': Api.clientId, ...additionalHeaders, platform: 'mobile' };
    // try {
    //   headerObj.authorization = `Bearer ${session.getIdToken().getJwtToken()}`;
    // } catch { }
    console.log('url:', `${Api.apiBaseUrl}${url}?api_key=${Api.api_key}`);

    try {
      const response = await axios.request({
        method,
        url: `${Api.apiBaseUrl}${url}?api_key=${Api.api_key}`
        // url: `https://api.themoviedb.org/3/movie/upcoming?api_key=d24ff0affc163fe180a853849e4c3599`,
        // data,
        // headers: headerObj,
      });
      // const response = await fetch('https://www.themoviedb.org/documentation/api/movie/upcoming?api_key=d24ff0affc163fe180a853849e4c3599');
      // console.log("response.data ==> ", JSON.stringify(response, null, 4));
      return response?.data;
    } catch (err) {
      const error = err as AxiosError;
      throw {
        code: error?.response?.status,
        message: error?.response?.data?.message,
        errorObject: error?.response?.data,
      };
    }
  }

  static get(url: string, data?: any): Promise<any> {
    return Api.axiosCallApi('GET', url, data);
  }

}
