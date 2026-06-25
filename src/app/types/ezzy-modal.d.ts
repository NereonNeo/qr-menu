import "ezzy-modal";

interface ModalNames {
  drawer: {
    settings: "Settings Drawer";
    position: "Position Drawer";
  };
}

declare module "ezzy-modal" {
  export interface EzzyModalExtraNames extends ModalNames {}
}
