export interface IAddon {
  id: number;
  name: string;
  price: number;
  group: string;
  visible: boolean;
  img?: string;
}

export interface IAddonCreateForm {
  name: string;
  group: string;
  price: string;
  minSelection: string;
  maxSelection: string;
  visible: boolean;
  description: string;
}
