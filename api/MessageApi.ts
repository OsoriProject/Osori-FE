import { getRequest, postRequest } from "./common";

export const getMessages = async () => {
  const response = await getRequest(`/chat`);
  return response;
};

export const postMessage = async (content:string) => {
  const response = await postRequest(`/chat`, { content });
  return response;
};

export const getChatById = async (id: number) =>{
  const response = await getRequest(`/chat/${id}`);
  return response;
}