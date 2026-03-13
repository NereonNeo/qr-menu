import { Icon } from "@/shared/ui/icon";
import { Logo } from "@/shared/ui/logo";

import { useSidebarContextHandler } from "../hooks/use-sidebar-context/use-sidebar-context";

export const Header = () => {
  const handlers = useSidebarContextHandler();

  const handleClickBurger = () => handlers?.onToggle();

  return (
    <header className="tablet:hidden block bg-white fixed top-0 left-0 w-full">
      <div className="px-5 flex gap-2 items-center min-h-14">
        <div>
          <Logo />
        </div>
        <div className="flex-1 flex gap-3 justify-end">
          <button type="button" className="inline-flex gap-1 items-center">
            <Icon name="share" className="size-4" />
            Share
          </button>
          <button onClick={handleClickBurger} type="button" className="tablet:hidden block">
            Burger
          </button>
        </div>
      </div>
    </header>
  );
};
