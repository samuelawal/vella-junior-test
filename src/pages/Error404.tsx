// src/pages/Error404.tsx

import React from "react";
import { IonContent, IonPage } from "@ionic/react";

const Error404: React.FC = () => (
  <IonPage>
    <IonContent className='ion-padding'>
      <h2 className='text-3xl text-center'>Page not found</h2>
      <p className='text-center'>The page you're looking for doesn't exist.</p>
    </IonContent>
  </IonPage>
);

export default Error404;
