import LoginSection from "../../Authentication/LoginSection";
import NavbarLink from "./NavbarLink";
import logo from "@/assets/logo/logo.svg";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 h-[--header-height] flex w-full justify-between z-50 bg-white shadow">
        <div className="flex content-baseline m-5">
          <img src={logo} className="h-[30px] mr-5" alt="Logo" />
          <NavbarLink text="Dictionary" route="/" />
          <NavbarLink text="Grammar" route="/grammar" />

          {/* <div>Review</div>
        <div>Grammar</div> */}
        </div>
        <LoginSection></LoginSection>
      </div>
    </>
  );
}

export default Navbar;
