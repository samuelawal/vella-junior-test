import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductLists from "../components/ProductLists";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { fetchProducts } from "../store/products/productSlice";
import { getCartTotal } from "../store/cart/cartSlice";
import { addToCart } from "../store/cart/cartSlice";
import { toast } from "react-toastify";
import { Product } from "../store/types";

const Home: React.FC = () => {
  // const navigate = useHistory();
  interface ProductState {
    data: any[];
    status: "idle" | "loading" | "error";
  }
  const dispatch = useDispatch<ThunkDispatch<ProductState, undefined, any>>();
  const { data: products, status: productStatus } = useSelector(
    (state: any) => state.product
  );
  const [qty, setQty] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event: Event) => {
    let query = "";
    const target = event.target as HTMLIonSearchbarElement;
    if (target) {
      query = target.value!.toLowerCase();
      setSearchValue(query);
    }
  };
  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };
  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 0;
      }
      return newQty;
    });
  };
  const addToCartHandler = (product: Product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
    toast.success("Product added successfully");
  };
  const filterAndUpdateProducts = products.filter(
    (product: Product) =>
      product.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  const displayProducts = searchValue ? filterAndUpdateProducts : products;
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state: any) => state.cart)]);
  return (
    <IonPage>
      <NavBar searchValue={searchValue} handleSearch={handleSearch} />
      <IonContent>
        {!displayProducts.length && productStatus !== "loading" ? (
          <div className='flex justify-center items-center mt-8'>
            <p className='text-red-500 font-bold'>No search results</p>
          </div>
        ) : (
          <ProductLists
            products={displayProducts}
            qty={qty}
            status={productStatus}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
            addToCartHandler={addToCartHandler}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
