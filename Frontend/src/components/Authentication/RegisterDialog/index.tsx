import { useState } from "react";
import BaseDialog from "../../shared/BaseDialog";
import BaseInput from "../../shared/BaseInput";
import BaseButton from "../../shared/BaseButton";
import "./RegisterDialog.css";

export default function RegisterDialog({ onClose }: { onClose: () => any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const registerHandler = () => {};

  return (
    <>
      <BaseDialog
        onClose={onClose}
        content={
          <div>
            <h2>Sign up</h2>
            <form onSubmit={registerHandler}>
              <BaseInput
                label="Username"
                name="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <BaseInput
                label="Password"
                name="password"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <BaseInput
                label="Repeat password"
                name="Repeat password"
                type="text"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
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
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
