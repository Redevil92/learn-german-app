import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SelectionMenu from "../../components/SelectionMenu/SelectionMenu";

import "../../css/markdown.css";

import SelectionMenuCategory from "../../components/SelectionMenu/SelectionMenuCategory";

export default function GrammarPage() {
  const [mdFile, setMdFile] = useState<string>("");

  const [showSelectionMenu, setShowSelectionMenu] = useState<boolean>(true);
  const [selectedItem, setSelectedItem] =
    useState<string>("Nouns and Articles");

  useEffect(() => {
    getFile(selectedItem);
  }, [selectedItem]);

  const categories: SelectionMenuCategory[] = [
    {
      title: "1-Beginner Level",
      items: ["1-Der die das", "2-Basic noun phrases", "3-Sentence Structure"],
    },
  ];

  const getFile = async (selectedItem: string) => {
    const mdFilePath = "src/germanGrammarFiles/GermanNounsAndArticles.md";

    const response = await fetch(
      `${
        import.meta.env.VITE_FRONTEND_BASE_PATH
      }/src/germanGrammarFiles/${selectedItem}.md`
    );
    const data = await response.text();
    setMdFile(data);
  };

  return (
    <>
      <div className="flex mt-5">
        <SelectionMenu
          categories={categories}
          selectedItem={selectedItem}
          onItemSelected={(item) => setSelectedItem(item)}
        />

        <div
          className={`markdown-body pl-[40px] pt-[40px] pr-[40px] ${
            showSelectionMenu ? "!ml-[--selection-menu-width]" : ""
          }`}
        >
          <Markdown remarkPlugins={[remarkGfm]}>{mdFile}</Markdown>
        </div>
      </div>
    </>
  );
}
