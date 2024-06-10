export interface ServerFormError {
  [x: string]: string[];
}

export interface IListCategoryBlog {
  id: string;
  title: any;
  description: JSON;
  updated_at: Date;
  created_at: Date;
}

export interface IReport {
  total: number;
  daily: number
}

export interface IListBlog {
  id: string;
  title: any;
  description: any;
  content: any;
  video: string;
  category_blog: IListCategoryBlog;
  updated_at: Date;
  created_at: Date;
}

export interface IListNumerology {
  id: string;
  title: any;
  description: any;
  content: any;
  code: string;
  category_numerology: IListCategoryBlog;
  updated_at: Date;
  created_at: Date;
}

export interface IListCustomer {
  id: string;
  phone: any;
  full_name: any;
  birthday: any;
  email: string;
  created_at: Date;
  status: number;
}

export interface IListPackage {
  id: string;
  title: any;
  description: any;
  package_type: string;
  price: number;
  sale_price: number;
  updated_at: Date;
  created_at: Date;

  quantity: number
}

export interface IListOrder {
  id: string;
  title: any;
  description: any;
  code: string;
  customer_info: IListCustomer,
  package_customer: IListPackage,
  updated_at: Date;
  created_at: Date;

  status: number
}

