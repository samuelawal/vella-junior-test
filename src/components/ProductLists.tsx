import { Product } from "../store/types";
interface ProductListProps {
  products: Array<Product>;
  qty: number;
  status: string;
  decreaseQty: (id: number) => void;
  increaseQty: (id: number) => void;
  addToCartHandler: (prod: Product) => void;
}
const ProductLists = ({
  products,
  qty,
  status,
  decreaseQty,
  increaseQty,
  addToCartHandler,
}: ProductListProps) => {
  if (status === "error") return "Eiya!, You just encountered an error";
  if (status === "loading")
    return <p className='text-center mt-8'>Loading...</p>;
  return (
    <>
      <section className='container px-4 mx-auto pt-4'>
        <h3 className='font-bold text-3xl'>Our Products</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {products.map((product) => (
            <article
              key={product.id}
              className='bg-white p-4 rounded-lg shadow-md'
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-full h-40 object-cover rounded-md'
                />
              </div>
              <h2 className='text-base font-semibold'>{product.title}</h2>
              <p className='text-green-600 font-semibold'>${product.price}</p>
              <button
                className='mt-3 px-4 w-full py-2 bg-orange-500 text-white rounded-md'
                onClick={() => addToCartHandler(product)}
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductLists;
