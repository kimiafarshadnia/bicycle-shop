export interface Variant {
  variant_value: string;
  sku: string;
  title: string;
  price: number;
  discount_type: string;
  discount: number;
  stock: number;
}
export interface Category {
  id: number;
  title: string;
}

export interface Brand {
  id: number;
  title: string;
  image?: string;
}

export interface ProductDetail {
  data: {
    item: Product;
  };
}

export interface ApiResponse {
  data: {
    items: Product[];
    query: any[];
  };
  meta: {
    pagination: {
      total: number;
      per_page: number;
      current_page: number;
      total_pages: number;
    };
  };
}

export interface ProductFeature {
  feature_title: string;
  feature_value: string;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  category: Category;
  brand: Brand;
  features: ProductFeature[];
  images?: string[];
  tags: string[];
  shipping_info: {
    product_id: number;
    width: number | null;
    width_unit: string | null;
    height: number | null;
    height_unit: string | null;
    length: number | null;
    length_unit: string | null;
    weight: number | null;
    weight_unit: string | null;
  };
  creator: {
    id: number;
    name: string;
  };
  tax: number | null;
  published: string;
  created_at: string;
  updated_at: string;
  sku?: string;
  price: number;
  discount_type: string;
  discount_amount: number | null;
}

export interface BrandResponse {
  data: {
      items: Brand[];
  };
}