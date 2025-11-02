import { Button } from "@/shared/ui/button";
import { IButtonProps } from "@/shared/ui/button/button";
import type { ToSubOptions } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

interface IButtonLinkProps extends IButtonProps, ToSubOptions {}

export const ButtonLink = (props: IButtonLinkProps) => {
  const { hash, params, from, search, state, to, ...otherProps } = props;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate({
      hash,
      params,
      from,
      search,
      state,
      to,
    });
  };

  return <Button onClick={handleNavigate} {...otherProps} />;
};
