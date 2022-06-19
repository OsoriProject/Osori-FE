import { postRequest } from "./common";

export const postSignUp = async (email: string, password:string, nickname:string) => {
  const response = await postRequest("/signup", { email, password, nickname });
  return response;
};

export const postSignIn = async (email: string, password: string) => {
  const response = await postRequest("/signin", { email, password });
  return response;
};

export const checkLogin = ()=>{
  if(localStorage.getItem("authToken")){
    return true;
  }else return false;
}