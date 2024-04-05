import { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./BaseDialog.css";

export default function BaseDialog({
  header,
  content,
  footer,
  onClose,
}: {
  content: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  onClose?: () => any;
}) {
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      {createPortal(
        <div className="dialog-container" onClick={onClose}>
          <div className="dialog" onClick={stopPropagation}>
            {header && <div className="dialog-header">{header}</div>}

            <div className="dialog-content">{content}</div>
            {footer && <div className="dialog-footer">{footer}</div>}
          </div>
        </div>,
        document.getElementById("root") as HTMLElement
      )}
    </>
  );
}
