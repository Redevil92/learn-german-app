import { Tab } from "./Tab";

export default function BaseTabs({
  tabs,
  onTabSelect,
}: {
  tabs: Tab[];
  onTabSelect: (tab: Tab) => void;
}) {
  const tabClickHandler = (tab: Tab) => {
    if (tab.disabled) {
      return;
    }
    onTabSelect(tab);
  };

  return (
    <>
      <div className="flex p-0.5 w-fit rounded-lg bg-slate-200 text-sm">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-1 cursor-pointer px-2 rounded-lg hover:bg-slate-100 flex items-center ${
              tab.selected ? "!bg-white rounded-lg" : ""
            } ${tab.disabled ? "disabled" : ""}`}
            onClick={() => tabClickHandler(tab)}
          >
            <span className="mr-1 material-icons !text-sm">
              {tab.materialIcon}
            </span>
            {tab.textToDisplay}
          </div>
        ))}
      </div>
    </>
  );
}
