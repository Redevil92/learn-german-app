import "./LoginSection.css";
import BaseButton from "../../shared/BaseButton";
import LoginDialog from "../LoginDialog";
import RegisterDialog from "../RegisterDialog";
import { useState } from "react";
import { ButtonType } from "../../shared/BaseButton/ButtonType";

export default function LoginSection() {
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState<boolean>(false);

  return (
    <>
      <div className="login-section-position">
        <BaseButton
          text="Log in"
          type={ButtonType.PRIMARY}
          onClick={() => setShowLoginDialog(true)}
        />
        <div className="margin-left">
          <BaseButton
            text="Sign in"
            type={ButtonType.SECONDARY}
            onClick={() => setShowRegisterDialog(true)}
          />
        </div>
      </div>
      {showLoginDialog && (
        <LoginDialog onClose={() => setShowLoginDialog(false)} />
      )}
      {showRegisterDialog && (
        <RegisterDialog onClose={() => setShowRegisterDialog(false)} />
      )}

      {/* <div className="login-section-position">Logged</div> */}
    </>
  );
}
