import React, { useEffect, useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { Product, RootState } from "../store/types";
import { formatPrice } from "../utils/helpers";
import NavBar from "../components/NavBar";
import { ThunkDispatch } from "redux-thunk";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import {
  removeFromCart,
  toggleCartQty,
  getCartTotal,
  clearCart,
} from "../store/cart/cartSlice";

const ShoppingCart: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event: Event) => {
    let query = "";
    const target = event.target as HTMLIonSearchbarElement;
    if (target) {
      query = target.value!.toLowerCase();
      setSearchValue(query);
    }
  };
  const history = useHistory();
  const { data: cartProducts, totalAmount } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch<ThunkDispatch<Product, undefined, any>>();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state: RootState) => state.cart)]);
  const emptyCartMsg = <h4 className='text-red-500'>No items found!</h4>;
  return (
    <IonPage>
      <NavBar searchValue={searchValue} handleSearch={handleSearch} />
      <IonContent>
        <div className='container px-4 mt-8'>
          <h3 className='font-bold'>My Cart</h3>
          <div>
            {cartProducts.length === 0 ? (
              emptyCartMsg
            ) : (
              <div className='flex flex-col md:flex-row md:justify-between'>
                <div className='w-full md:w-2/3'>
                  {cartProducts.map((cartProduct: any) => (
                    <div
                      className='bg-white p-4 rounded-lg shadow-md mt-3'
                      key={cartProduct.id}
                    >
                      <img
                        src={cartProduct.image}
                        alt={cartProduct.title}
                        className='w-full h-40 object-cover rounded-md'
                      />
                      <h2 className='text-lg font-semibold'>
                        {cartProduct.title}
                      </h2>
                      <p className='text-gray-600 text-sm'>
                        {cartProduct.description}
                      </p>
                      <p className='text-green-600 font-semibold'>
                        ${cartProduct.price}
                      </p>
                      <div className='flex items-center mt-2'>
                        <button
                          className='px-3 py-1 bg-blue-500 text-white rounded-md mr-2'
                          onClick={() =>
                            dispatch(
                              toggleCartQty({ id: cartProduct.id, type: "DEC" })
                            )
                          }
                        >
                          -
                        </button>
                        <span>{cartProduct.quantity}</span>
                        <button
                          className='px-3 py-1 bg-blue-500 text-white rounded-md ml-2'
                          onClick={() =>
                            dispatch(
                              toggleCartQty({ id: cartProduct.id, type: "INC" })
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className='mt-3 px-4 py-2 bg-red-500 text-white rounded-md'
                        onClick={() => dispatch(removeFromCart(cartProduct.id))}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className='w-full md:w-1/3 pl-8 md:pl-0 mt-6 md:mt-0 md:fixed md:top-28 md:right-4'>
                  <div className='shadow p-3 text-gray-500'>
                    <h3 className='text-xl font-semibold uppercase'>
                      Cart Summary
                    </h3>
                    <div className='flex justify-between '>
                      <p className='text-sm'>Subtotal</p>
                      <p className='font-bold'> {formatPrice(totalAmount)}</p>
                    </div>
                    <div className='flex justify-between '>
                      <p className='text-sm'>Discount</p>
                      <p className='font-bold'> $0.00</p>
                    </div>
                    <button
                      className='mt-8 px-4 py-2 bg-orange-500 w-full text-white rounded-md'
                      onClick={() => history.push("/checkout")}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShoppingCart;
