import { Link } from "@tanstack/react-router";
import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";
import { Logo } from "@/shared/ui/logo";

import { useSidebarContext } from "../hooks/use-sidebar-context/use-sidebar-context";
import { listLink } from "../layout.const";

export const Sidebar = () => {
  const isSidebarOpen = useSidebarContext();

  return (
    <aside
      className={clsx(
        isSidebarOpen && "translate-x-full",
        "transition-transform top-0 tablet:left-0 -left-full fixed size-full tablet:p-1 tablet:w-60 tablet:translate-y-0 translate-y-14",
      )}
    >
      <div className="h-full bg-white flex flex-col gap-1 tablet:py-6 tablet:rounded-lg">
        <div className="tablet:mb-4 tablet:px-6 tablet:block hidden">
          <Logo />
        </div>
        <nav className="flex-1">
          <ul>
            {listLink.map((item) => (
              <li key={item.text}>
                <Link to={item.href} activeProps={activeLinkProps} className="p-2.5 rounded-md mx-3.5 flex items-center gap-4 transition-colors">
                  {(state: { isActive: boolean; isTransitioning: boolean }) => (
                    <>
                      <Icon className={clsx(state.isActive && "text-primary-500", "size-5 transition-colors")} name={item.icon} />
                      <span className={clsx(state.isActive && "text-primary-500", "font-gotham leading-6 text-m transition-colors")}>
                        {item.text}
                      </span>
                    </>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button className="flex p-2 shadow rounded-full">
            <div>
              <span>T</span>
            </div>
            <p>@luv2kmail.ru</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

const activeLinkProps = {
  className: "bg-gray-100",
};
