import { useState } from "react";
import BaseDialog from "../../shared/BaseDialog";
import BaseInput from "../../shared/BaseInput";

export default function LoginSection({ onClose }: { onClose: () => any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");

  return (
    <>
      <BaseDialog
        onClose={onClose}
        content={
          <div>
            <h1>Register</h1>
            <form>
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

              <button type="submit">Register</button>
            </form>
          </div>
        }
      ></BaseDialog>
    </>
  );
}
