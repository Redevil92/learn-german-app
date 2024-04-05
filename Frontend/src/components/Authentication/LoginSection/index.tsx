import "./LoginSection.css";
import BaseButton from "../../shared/BaseButton";
import LoginDialog from "../LoginDialog";
import RegisterDialog from "../RegisterDialog";
import { useState } from "react";
import { ButtonVariant } from "../../shared/BaseButton/ButtonVariant";

export default function LoginSection() {
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState<boolean>(false);

  return (
    <>
      <div className="login-section-position">
        <BaseButton
          text="Log in"
          variant={ButtonVariant.PRIMARY}
          onClick={() => setShowLoginDialog(true)}
        />
        <div className="margin-left">
          <BaseButton
            text="Sign in"
            variant={ButtonVariant.SECONDARY}
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
