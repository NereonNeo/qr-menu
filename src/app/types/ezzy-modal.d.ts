import "ezzy-modal";

interface ModalNames {
  drawer: {
    settings: "Settings Drawer";
    position: "Position Drawer";
    addons: "Addons Drawer";
  };
}

declare module "ezzy-modal" {
  export interface EzzyModalExtraNames extends ModalNames {}
}
