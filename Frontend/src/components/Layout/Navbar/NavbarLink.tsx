import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

interface NavbarLinkProps {
  text: string;
  route: string;
}

function NavbarLink(props: NavbarLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === props.route;

  const navigateTo = () => {
    navigate(props.route, { replace: true });
    navigate(0);
  };

  return (
    <>
      <div
        onClick={navigateTo}
        className={`font-semibold h-min mt-2 mx-5 cursor-pointer hover:text-[--primary-color] ${
          isActive ? "text-[--primary-color]" : ""
        }`}
      >
        {props.text}
      </div>
    </>
  );
}

export default NavbarLink;
