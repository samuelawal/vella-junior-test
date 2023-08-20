import React, { useState, useEffect } from "react";
import {
  IonCol,
  IonGrid,
  IonRow,
  IonHeader,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import { searchCircle } from "ionicons/icons";
import { Link } from "react-router-dom";
import { getCartTotal } from "../store/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../store/types";

const NavBar = ({
  searchValue,
  handleSearch,
}: {
  searchValue: string;
  handleSearch: (e: any) => void;
}) => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, []);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow className='ion-justify-content-between ion-align-items-center'>
              <IonCol>
                <p className='font-bold ml-5'>
                  <Link to='/'>
                    Shop<span className='text-orange-500'>Savvy</span>
                  </Link>
                </p>
              </IonCol>
              <IonCol>
                <IonSearchbar
                  searchIcon={searchCircle}
                  value={searchValue}
                  onIonInput={handleSearch}
                  placeholder='Search'
                ></IonSearchbar>
              </IonCol>
              <IonCol>
                <p className='text-right mr-5'>
                  <Link to='/cart'>
                    Cart<span className='font-bold'>({totalItems})</span>
                  </Link>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default NavBar;
