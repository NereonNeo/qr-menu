import { Link } from "@tanstack/react-router";
import { Icon } from "../icon";

export const Logo = () => {
  return (
    <Link to="/">
      <Icon name="logo" className="size-6" />
    </Link>
  );
};
