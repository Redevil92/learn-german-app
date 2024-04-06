import axios from "../plugins/axios/axiosConfig";

export const login = async (
  username: string,
  password: string
): Promise<any> => {
  const response = await axios.post<any>(`/auth/login`, {
    username,
    password,
  });

  console.log(response.data);

  return response.data;
};

export const register = async (
  username: string,
  password: string
): Promise<any> => {
  const response = await axios.post<any>(`/auth/register`, {
    username,
    password,
  });

  console.log(response.data);

  return response.data;
};
