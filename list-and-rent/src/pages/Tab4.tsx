import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { airplane, backspace, chevronBack, paperPlane } from 'ionicons/icons';


const Tab4: React.FC = () => (
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
      </IonContent>
    </IonPage>
  </>
);

export default Tab4;
