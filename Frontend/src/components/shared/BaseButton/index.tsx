import "./BaseButton.css";
import { ButtonType } from "./ButtonType";

export default function BaseInput({
  text,
  type,
  onClick,
}: {
  text: string;
  type?: ButtonType;
  onClick: () => void;
}) {
  return (
    <>
      <button
        className={`base-button base-button-${
          type ? type : ButtonType.PRIMARY
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
