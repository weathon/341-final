import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { airplane, backspace, chevronBack, paperPlane } from 'ionicons/icons';

const Tab5 = ()=>{
  const his = JSON.parse(localStorage.getItem("history"))
  const start = new Date(his.state[0].startDate).toLocaleDateString();
  const end = new Date(his.state[0].endDate).toLocaleDateString();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>History</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent>
          <IonItem>{his && (<img style={{width:"30%"}} className="m-3 rounded-lg" src={his.image}></img>)}
          <IonText><h3>{his.title}</h3><br/><p>{start} - {end}</p></IonText></IonItem>
      </IonContent>
    </IonPage>
  )
}

export default Tab5;