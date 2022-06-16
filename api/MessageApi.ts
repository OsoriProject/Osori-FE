import { getRequest, postRequest } from "./common";

export const getMessages = async (userid:string) => {
  const response = await getRequest(`/chat/${userid}`);
  return response;
};

export const postMessage = async (userid:string, content:string) => {
  const response = await postRequest(`/chat/${userid}`, { content });
  return response;
};