import { useState } from "react";
import BaseDialog from "../../shared/BaseDialog";
import BaseInput from "../../shared/BaseInput";
import BaseButton from "../../shared/BaseButton";
import "./RegisterDialog.css";
import { register } from "../../../api/authenticationApi";

export default function RegisterDialog({ onClose }: { onClose: () => any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const registerHandler = () => {
    register(username, password);
  };

  const errorMessage = () => {
    if (!username) {
      return "Username is required";
    }
    if (!password) {
      return "Password is required";
    }
    if (!repeatPassword) {
      return "Repeat password is required";
    }
    if (password !== repeatPassword) {
      return "Passwords do not match";
    }
  };

  return (
    <>
      <BaseDialog
        onClose={onClose}
        content={
          <div>
            <h2>Sign up</h2>
            <form onSubmit={registerHandler}>
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
              <div className="input-container">
                <BaseInput
                  label="Repeat password"
                  name="Repeat password"
                  type="password"
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
              </div>

              <div className="submit-button-container">
                <BaseButton
                  type="submit"
                  text="Sign up"
                  disabled={
                    !username ||
                    !password ||
                    !repeatPassword ||
                    password !== repeatPassword
                  }
                  onClick={registerHandler}
                />
              </div>
              <div>
                <p className="error-message">{errorMessage()}</p>
              </div>
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
