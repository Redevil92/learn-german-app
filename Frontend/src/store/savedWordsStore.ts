import { createStore } from "zustand/vanilla";
import Word from "../models/Word";
import { persist, createJSONStorage } from "zustand/middleware";

interface SavedWordsState {
  savedWords: Word[];
  addWord: (word: Word) => void;
  removeWord: (word: Word) => void;
}

export const useSavedWordsStore = createStore<SavedWordsState>()(
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
      partialize: (state) => ({ savedWords: state.savedWords }),
    }
  )
);

// import create from "zustand";
// import Word from "../models/Word";
// import { persist } from "zustand/middleware";

// interface SavedWordsState {
//   savedWords: Word[];
//   addWord: (word: Word) => void;
//   removeWord: (word: Word) => void;
// }

// const useSavedWordsStore = create<SavedWordsState>(
//   persist(
//     (set) => ({
//       savedWords: [] as Word[],
//       addWord: (word: Word) => set({ savedWords: [...state.savedWords, word] }),
//       removeWord: (word: Word) =>
//         set({ savedWords: state.savedWords.filter((w: Word) => w !== word) }),
//     }),
//     {
//       name: "saved-word", // Name for local storage key
//       getStorage: () => localStorage,
//       setStorage: (value) =>
//         localStorage.setItem("saved-word", JSON.stringify(value)),
//     }
//   )
// );

// export default useSavedWordsStore;
