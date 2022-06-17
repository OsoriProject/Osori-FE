import { deleteRequest, getRequest, postRequest } from "./common";

export const getPlaylistsRequest = async () => {
  const response = await getRequest(`/playlist`);
  return response;
};

export const getPlaylistDetailRequest = async (playlistId: number) => {
  const response = await getRequest(`/playlist/${playlistId}`);
  return response;
};

export const postSavePlaylistRequest = async (name: string, musics: object[]) => {
  const response = await postRequest(`/playlist`, { name, musics });
  return response;
};

export const deletePlaylistsRequest = async (playlistId: number) => {
  const response = await deleteRequest(`/playlist/${playlistId}`);
  return response;
};