import axios from "../plugins/axios/axiosConfig";
import Word from "../models/Word";

const baseUrl = "/savedWords";

export const getSavedWords = async (): Promise<Word[]> => {
  const response = await axios.get<Word[]>(`${baseUrl}/getAll`);

  return response.data;
};
