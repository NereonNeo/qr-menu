import { useState } from "react";

import { Link, useMatches, useRouterState } from "@tanstack/react-router";
import clsx from "clsx/lite";

import { Icon } from "@/shared/ui/icon";
import { Logo } from "@/shared/ui/logo";

import { useSidebarContext } from "../hooks/use-sidebar-context/use-sidebar-context";
import { type LinkType, listLink } from "../layout.const";

export const Sidebar = () => {
  const isSidebarOpen = useSidebarContext();
  const { location } = useRouterState();

  const getInitialExpanded = () =>
    listLink.reduce<Record<string, boolean>>((acc, item) => {
      if (item.children?.some((c) => c.href === location.pathname)) {
        acc[item.href as string] = true;
      }
      return acc;
    }, {});

  const [expanded, setExpanded] = useState<Record<string, boolean>>(getInitialExpanded);

  const toggle = (href: string) => setExpanded((prev) => ({ ...prev, [href]: !prev[href] }));

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
          <ul className="child:not-last:mb-1.5 w-full px-3.5">
            {listLink.map((item) => (
              <NavItem item={item} key={item.href} isExpanded={!!expanded[item.href as string]} onToggle={() => toggle(item.href as string)} />
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

type NavItemProps = {
  item: LinkType;
  isExpanded: boolean;
  onToggle: () => void;
};

const NavItem = ({ item, isExpanded, onToggle }: NavItemProps) => {
  const matches = useMatches();
  const hasChildren = !!item.children?.length;
  const isChildActive = matches?.some((match) => match.pathname.startsWith(item.href as string)) ?? false;

  if (hasChildren) {
    return (
      <li>
        <button
          onClick={onToggle}
          className={clsx(
            (isExpanded || isChildActive) && "bg-gray-100",
            "p-2.5 rounded-md flex items-center gap-4 transition-colors hover:bg-gray-100 group w-full",
          )}
        >
          <Icon className={clsx(isChildActive && "text-primary-500", "size-5 transition-colors")} name={item.icon} />
          <span className={clsx(isChildActive && "text-primary-500", "font-gotham leading-6 text-m transition-colors flex-1 text-left")}>
            {item.text}
          </span>

          <Icon
            name="chevron-down"
            className={clsx(isExpanded ? "rotate-180" : "rotate-0", isChildActive && "text-primary-500", "size-4 transition-all")}
          />
        </button>

        <ul className={clsx(isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]", "grid transition-all duration-200 ")}>
          <li className="overflow-hidden ">
            <ul className="pt-1 pb-0.5 ">
              {item.children?.map((child) => {
                return (
                  <li key={child.href} className="child:mb-1">
                    <Link
                      to={child.href}
                      activeOptions={{ exact: false }}
                      activeProps={activeLinkProps}
                      className={clsx("px-5 py-2 rounded-md flex items-center transition-colors hover:bg-gray-100 ")}
                    >
                      {(state: { isActive: boolean }) => (
                        <>
                          <Icon className={clsx(state.isActive && "text-primary-500", "size-4 mr-3 transition-colors")} name={child.icon} />
                          <span className={clsx(state.isActive && "text-primary-500", "font-gotham leading-6 text-m transition-colors")}>
                            {child.text}
                          </span>
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.href}
        activeProps={activeLinkProps}
        className=" p-2.5 rounded-md flex items-center gap-4 transition-colors hover:bg-gray-100 group"
      >
        {(state: { isActive: boolean }) => (
          <>
            <Icon className={clsx(state.isActive && "text-primary-500", "size-5 transition-colors")} name={item.icon} />
            <span className={clsx(state.isActive && "text-primary-500", "font-gotham leading-6 text-m transition-colors")}>{item.text}</span>
          </>
        )}
      </Link>
    </li>
  );
};

const activeLinkProps = {
  className: "bg-gray-100",
};
