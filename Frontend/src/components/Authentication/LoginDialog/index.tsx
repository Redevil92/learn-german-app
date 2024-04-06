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
            <h2>Log in</h2>
            <form onSubmit={loginHandler}>
              <div className="input-container">
                <BaseInput
                  label="Username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="input-container">
                <BaseInput
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="submit-button-container">
                <BaseButton
                  type="submit"
                  text="Log in"
                  disabled={!username || !password}
                  onClick={loginHandler}
                />
              </div>
              <div>
                <p className="error-message">{errorMessage}</p>
              </div>
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
