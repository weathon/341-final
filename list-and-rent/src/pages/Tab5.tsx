import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { airplane, backspace, chevronBack, paperPlane } from 'ionicons/icons';
import Detail from './Detail';

const Tab5 = ()=>{
 try{
  const his = JSON.parse(localStorage.getItem("history")) 
  const start = new Date(his.state[0].startDate).toLocaleDateString();
  const end = new Date(his.state[0].endDate).toLocaleDateString();
  const [isOpen, setOpen] = useState(false)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>History</IonTitle></IonToolbar>
      </IonHeader>
      <IonModal isOpen={isOpen}>
        <Detail itemId={1} setDetileOpen={setOpen} info={his}></Detail>
      </IonModal>
      <IonContent>
          {
            <IonItem onClick={()=>{setOpen(true)}}>{his && (<img style={{width:"30%"}} className="m-3 rounded-lg" src={his.image}></img>)}
            <IonText><h3>{his.title}</h3><br/><p>{start} - {end}</p><br/>CA${his.price}</IonText></IonItem>
          }
      </IonContent>
    </IonPage>
  )
 }
 catch{
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar><IonTitle>History</IonTitle></IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>)
 }
}

export default Tab5;