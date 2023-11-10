import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { backspace, chevronBack } from 'ionicons/icons';


const Tab2: React.FC = () => {
  const chatData_ = [];
  for (var i = 0; i < 20; i++) {
    chatData_.push({
      id: i,
      avatar: faker.image.urlLoremFlickr({ category: 'abstract' }),
      name: faker.internet.displayName(),
      preview: faker.lorem.sentence()
    })
  }
  const [chatData, setChatData] = useState(chatData_)
  const [open, setOpen] = useState(false);
  const [currentName, setCurrentName] = useState("")
  return (
    <IonPage>
       <IonModal isOpen={open}>
          <IonHeader>
          <IonToolbar>
            <IonTitle>{currentName}</IonTitle>
            <IonButtons>
              <IonButton onClick={()=>{setOpen(false)}}><IonIcon aria-hidden="true" icon={chevronBack}/></IonButton>
            </IonButtons>
            </IonToolbar>
          </IonHeader>
       </IonModal>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chat</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar onIonChange={(e)=>{
          setChatData([...chatData.filter((x)=>{
            console.log(e)
            return x.name.includes(e.detail.value)
          })])
        }}></IonSearchbar>
        <IonList>
          {
            chatData.map(x => (
              <IonItem onClick={()=>{setOpen(true);setCurrentName(x.name)}} key={x.id}>
                <img slot="start" className='rounded-full h-14 aspect-square' src={x.avatar}></img>
                <div>
                  <IonLabel><b>{x.name}</b></IonLabel>
                  <IonLabel>{x.preview}</IonLabel>
                </div>
              </IonItem>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
