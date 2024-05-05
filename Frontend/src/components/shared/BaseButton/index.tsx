import "./BaseButton.css";
import { ButtonVariant } from "./ButtonVariant";

export default function BaseInput({
  text,
  type,
  variant,
  disabled = false,
  onClick = () => {},
}: {
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  variant?: ButtonVariant;
  onClick?: () => void;
}) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={`base-button base-button-${
          variant ? variant : ButtonVariant.PRIMARY
        } ${disabled ? "base-button-disabled" : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
