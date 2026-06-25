interface IProductTags {
  id: string;
  [key: string]: string;
}

export interface IProductDto {
  title: string;
  price: number;
  product_id: number;
  img: string[];
  tags: IProductTags;
}

export interface IProduct {
  title: string;
  price: number;
  count: number;
  description: string;
  img: File[];
}

export interface IPositionCard {
  id: number;
  title: string;
  price: number;
  img: string;
  visible: boolean;
  menuName: string;
  tags: string[];
  views?: number;
}

export interface IPositionEditForm {
  title: string;
  price: string;
  weight: string;
  description: string;
  visible: boolean;
  menuId: string;
}
