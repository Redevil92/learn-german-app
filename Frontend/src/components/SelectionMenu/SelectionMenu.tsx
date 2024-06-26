import SelectionMenuCategory from "./SelectionMenuCategory";

interface SelectionMenuProps {
  categories: SelectionMenuCategory[];
  selectedItem: string;
  onItemSelected: (item: string) => void;
}

export default function SelectionMenu(props: SelectionMenuProps) {
  const removeIndexFromTitle = (title: string) => {
    return title.split("-").slice(1).join(" ");
  };

  return (
    <>
      <aside
        style={{ height: `calc(100vh - var(--header-height))` }}
        className="list fixed m-0 pt-[40px] text-base overflow-y-scroll"
      >
        <div className="w-[--selection-menu-width] pl-[40px] ">
          {props.categories.map((category) => (
            <div key={category.title} className="mb-6">
              <div className="mb-1">
                <strong>{removeIndexFromTitle(category.title)}</strong>
              </div>
              <div>
                {category.items.map((item) => (
                  <div
                    onClick={() =>
                      props.onItemSelected(`${category.title}/${item}`)
                    }
                    key={item}
                    className={`category-item py-1 pl-4 cursor-pointer border-l hover:border-[--primary-color] ${
                      item === props.selectedItem.split("/")[1]
                        ? "border-[--primary-color] !text-[--primary-color]"
                        : ""
                    }   text-[--font-color_light]`}
                  >
                    {removeIndexFromTitle(item)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
