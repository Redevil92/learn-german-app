export default function BaseInput({
  mdiIcon,
  text,
  onClick,
}: {
  mdiIcon?: string;
  text?: string;
  onClick?: () => void;
}) {
  return (
    <>
      <div
        onClick={onClick}
        className="border h-[25px] w-[25px] rounded-md flex justify-center cursor-pointer hover:bg-gray-200 items-center"
      >
        {mdiIcon && (
          <span className="material-icons absolute left-[15px] top-[15px] cursor-pointer ">
            search
          </span>
        )}
        {text}
      </div>
    </>
  );
}
