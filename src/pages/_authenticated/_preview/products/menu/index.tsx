import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink } from "@/shared/components/button-link/button-link.entry";
import { Drawer } from "@/shared/ui/drawer/drawer.entry";

import { MenuCard } from "@/entities/menu/menu.entry";

export const Route = createFileRoute("/_authenticated/_preview/products/menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-flow-row gap-10">
      <Drawer id="drawer.settings" title="Settings" position="right" sizeVariant="m">
        <p>Content here</p>
      </Drawer>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-gotham font-medium">Меню</h1>
        <ButtonLink sizeVariant="m" content="Создать меню" to="/products/menu/create" />
      </div>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        <button className="text-left" onClick={() => window.ezzyModal["drawer.settings"].showModal()}>
          <MenuCard
            name="Холодные напитки"
            banner="https://dyj6gt4964deb.cloudfront.net/images/crop-38fe91aa-9d32-4d0f-bfc4-c7ae9154d273.jpeg"
            positionsCount={10}
            visible={true}
            tags={["Хит", "Новинка"]}
          />
        </button>

        <button className="text-left" onClick={() => window.ezzyModal["drawer.settings"].showModal()}>
          <MenuCard
            name="Холодные напитки"
            banner="https://dyj6gt4964deb.cloudfront.net/images/crop-4a6aa339-bb0f-422b-8049-46f62fb1ca4e.jpeg"
            positionsCount={10}
            visible={false}
            tags={["Хит", "Новинка"]}
          />
        </button>
      </div>
    </div>
  );
}
