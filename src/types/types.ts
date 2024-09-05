export interface productType {
  _id: String;
  title: String;
  description: String;
  price: Number;
  images: productImage[];
  category: String;
  inStock: Number;
  rating: Number;
  reviews: [];
  createdAt: Date;
  updatedAt: Date;
  __v: Number;
}
interface productImage {
  _id: String;
  imageUrl: String;
}
