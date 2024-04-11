import { useState } from "react";
import BaseDialog from "../../shared/BaseDialog";
import BaseInput from "../../shared/BaseInput";
import BaseButton from "../../shared/BaseButton";
import { login } from "../../../api/authenticationApi";

export default function LoginDialog({ onClose }: { onClose: () => any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loginHandler = async () => {
    await login(username, password);
  };

  return (
    <>
      <BaseDialog
        onClose={onClose}
        content={
          <div>
            <h2 className="text-xl font-bold">Log in</h2>
            <form onSubmit={loginHandler}>
              <div className="mt-5">
                <BaseInput
                  label="Username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="mt-5">
                <BaseInput
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className=" mt-10 mb-5">
                <BaseButton
                  type="submit"
                  text="Log in"
                  disabled={!username || !password}
                  onClick={loginHandler}
                />
              </div>
              <div>
                <p className="text-sm text-error-color mt-5 text-error-color">
                  {errorMessage}
                </p>
              </div>
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
