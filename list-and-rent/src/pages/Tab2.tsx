import { IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useState } from 'react';


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
  return (
    <IonPage>
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
              <IonItem key={x.id}>
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
