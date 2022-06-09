import { wrapRequest, instance } from "./instance";

export interface CommonRequest{
  url: string,
  data: object,
}

// 기본 post 요청
export const postRequest = wrapRequest(async (url:string, data:object) => {
  console.log(url, data);
  return instance().post(url, data);
});

// 기본 get 요청
export const getRequest = wrapRequest(async (url:string, data:object) => {
  return instance().get(url, { params: data });
});

// 기본 put 요청
export const putRequest = wrapRequest(async (url:string, data:object) => {
  return instance().put(url, data);
});

// method patch
export const patchRequest = wrapRequest(async (url:string, data:object) => {
  return instance().patch(url, data);
});

// method delete
export const deleteRequest = wrapRequest(async (url: string) => {
  return instance().delete(url);
});