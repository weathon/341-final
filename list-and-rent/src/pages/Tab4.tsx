import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { airplane, backspace, chevronBack, paperPlane } from 'ionicons/icons';

const items = [
  {
    "id": 1,
    "image": "/sample (1).png",
    "title": "Snowboard",
    "description": "Brand new snow board, I am going out of town and cannot take it so you guys can rent it.",
    "from": "Steven J."
  },
  {
    "id": 1,
    "image": "/sample (2).png",
    "title": "Advanced HPLC-ESI-MS",
    "description": "High-Performance Liquid Chromatography with Electrospray Ionization Mass Spectrometry equipment, ideal for detailed chemical analysis. Available for short-term lease for research purposes.",
    "from": "Dr. Rachel K."
  },
  {
    "id": 1,
    "image": "/sample (3).png",
    "title": "Sleek Coffee Machine",
    "description": "Modern, high-efficiency coffee machine perfect for coffee enthusiasts. Available for rent, includes a variety of brewing options and easy-to-clean features.",
    "from": "Barista Mike"
  },
  {
    "id": 1,
    "image": "/sample (1).png",
    "title": "Sleek Coffee Machine",
    "description": "Modern, high-efficiency coffee machine perfect for coffee enthusiasts. Available for rent, includes a variety of brewing options and easy-to-clean features.",
    "from": "Barista Mike"
  },
  {
    "id": 1,
    "image": "/sample (2).png",
    "title": "Sleek Coffee Machine",
    "description": "Modern, high-efficiency coffee machine perfect for coffee enthusiasts. Available for rent, includes a variety of brewing options and easy-to-clean features.",
    "from": "Barista Mike"
  }
];

const Tab4: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Saved Items</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Saved Items</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList lines="none" key={localStorage.getItem("saved")}>
            {
              items.slice(0, Number(localStorage.getItem("saved"))).map((x, index) => (
                <IonItem key={index} className='p-2'>
                  <img src={x.image} className='w-20 rounded-lg'></img>
                  <IonLabel className='p-3'>{x.title}</IonLabel>
                </IonItem>
              ))
            }
          </IonList>
        </IonContent>
      </IonPage>
    </>
  )
};

export default Tab4;
