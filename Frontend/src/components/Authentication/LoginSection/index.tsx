import BaseButton from "../../Shared/BaseButton";
import LoginDialog from "../LoginDialog";
import RegisterDialog from "../RegisterDialog";
import { useState } from "react";
import { ButtonVariant } from "../../Shared/BaseButton/ButtonVariant";

export default function LoginSection() {
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState<boolean>(false);

  return (
    <>
      <div className="flex z-10 mt-5 mr-5">
        <div>
          <BaseButton
            text="Log in"
            variant={ButtonVariant.PRIMARY}
            onClick={() => setShowLoginDialog(true)}
          />
        </div>

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
