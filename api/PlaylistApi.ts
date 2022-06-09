import { deleteRequest, getRequest, postRequest } from "./common";

export const getPlaylistsRequest = async (userid: string) => {
  const response = await getRequest(`/playlist/${userid}`);
  return response;
};

export const getPlaylistDetailRequest = async (userid:string, playlistId:number) => {
  const response = await getRequest(`/playlist/${userid}/${playlistId}`);
  return response;
};

export const postSavePlaylistRequest = async (userid:string, name:string, musics:any) => {
  const response = await postRequest(`/playlist/${userid}`, { name, musics });
  return response;
};

export const deletePlaylistsRequest = async (userid:string, playlistId:number) => {
  const response = await deleteRequest(`/playlist/${userid}/${playlistId}`);
  return response;
};