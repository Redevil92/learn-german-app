import { useState } from "react";
import BaseDialog from "../../Shared/BaseDialog";
import BaseInput from "../../Shared/BaseInput";
import BaseButton from "../../Shared/BaseButton";
import { register } from "../../../api/authenticationApi";

export default function RegisterDialog({ onClose }: { onClose: () => any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  const registerHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            <h2 className="text-xl  font-bold">Sign up</h2>
            <form onSubmit={registerHandler}>
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
              <div className="mt-5">
                <BaseInput
                  label="Repeat password"
                  name="Repeat password"
                  type="password"
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
              </div>

              <div className="mt-10 mb-5">
                <BaseButton
                  type="submit"
                  text="Sign up"
                  disabled={
                    !username ||
                    !password ||
                    !repeatPassword ||
                    password !== repeatPassword
                  }
                />
              </div>
              <div>
                <p className="mt-5 text-sm text-error-color">
                  {errorMessage()}
                </p>
              </div>
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
