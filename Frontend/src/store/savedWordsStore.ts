import { createStore } from "zustand/vanilla";
import Word from "../models/Word";
import { persist, createJSONStorage } from "zustand/middleware";

interface SavedWordsState {
  savedWords: Word[];
  addWord: (word: Word) => void;
  removeWord: (word: Word) => void;
}

export const savedWordsStore = createStore<SavedWordsState>()(
  persist(
    (set, get) => ({
      savedWords: [] as Word[],
      addWord: (word: Word) => set({ savedWords: [...get().savedWords, word] }),
      removeWord: (word: Word) =>
        set({ savedWords: get().savedWords.filter((w: Word) => w !== word) }),
    }),
    {
      name: "saved-word", // name of item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
      partialize: (state) => ({ bears: state.savedWords }),
    }
  )
);
