import { ProductType } from "@/types/ProductType";
import Products from "./components/Product";

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
}

export default async function Home() {

  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {products.map((e: ProductType) => (
          <Products key={e.id} product={e} />
        ))}
      </div>
    </div>
  );
}