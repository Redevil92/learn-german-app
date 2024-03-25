import axios from "axios";
import Word from "../models/Word";

export const getTraslations = async (word: string): Promise<Word> => {
  const response = await axios.get<Word>(`/dictionary/${word}`);

  return response.data;
};
