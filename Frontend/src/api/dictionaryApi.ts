import axios from "../plugins/axios/axiosConfig";
import Word from "../models/Word";

export const getTraslations = async (word: string): Promise<Word[]> => {
  const response = await axios.get<Word[]>(`/dictionary/${word}`);

  return response.data;
};

export const getTraslationsById = async (id: number): Promise<Word[]> => {
  const response = await axios.get<Word[]>(`/dictionary/word_by_id/${id}`);

  return response.data;

}

export const getSuggestions = async (word: string): Promise<Word[]> => {
  const response = await axios.get<Word[]>(`/dictionary/suggestions/${word}`);

  return response.data;
}
