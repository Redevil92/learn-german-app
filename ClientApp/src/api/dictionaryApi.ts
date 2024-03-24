import axios from "axios";
import Word from "../models/Word";

const getTraslations = async (lang: string): Promise<Word> => {
  const response = await axios.get<Word>(`/dictionary/${lang}`);

  return response.data;
};
