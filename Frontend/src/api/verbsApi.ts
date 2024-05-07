import axios from "../plugins/axios/axiosConfig";
import Verb from "../models/Verb";

const baseUrl = "/verb";

export const getVerb = async (infinitiveVerb:string): Promise<Verb> => {
  const response = await axios.get<Verb>(`${baseUrl}/${infinitiveVerb}`);
  return response.data;
};
