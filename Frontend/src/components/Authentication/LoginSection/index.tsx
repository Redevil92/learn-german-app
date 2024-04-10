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
      <div className="absolute right-5 top-5 flex z-10">
        <BaseButton
          text="Log in"
          variant={ButtonVariant.PRIMARY}
          onClick={() => setShowLoginDialog(true)}
        />
        <div className="ml-5">
          <BaseButton
            text="Sign up"
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
