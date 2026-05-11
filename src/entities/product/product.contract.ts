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
