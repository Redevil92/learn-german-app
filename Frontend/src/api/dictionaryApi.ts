import axios from "axios";
import Word from "../models/Word";

export const getTraslations = async (word: string): Promise<Word[]> => {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_PATH;
  const response = await axios.get<Word[]>(`/dictionary/${word}`);

  return response.data;
};
