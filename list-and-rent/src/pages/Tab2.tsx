import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { airplane, backspace, chevronBack, paperPlane } from 'ionicons/icons';


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

  const [chat, setChat] = useState([
    {
        "username": "Alice",
        "content": ["Hey, how's it going?"]
    },
    {
        "username": "user",
        "content": ["Hi Alice! I'm doing well, thanks. How about you?"]
    },
    {
        "username": "Alice",
        "content": ["I'm good too, thanks for asking!", "Actually, I'm in the process of renting some equipment for our upcoming project."]
    },
    {
        "username": "user",
        "content": ["Oh, what kind of equipment are you renting?"]
    },
    {
        "username": "Alice",
        "content": ["We're renting an HPLC-ICP-MS and an ICP-MS."]
    },
    {
        "username": "user",
        "content": ["Wow, that sounds pretty specialized. What are you planning to do with them?"]
    },
    {
        "username": "Alice",
        "content": ["We're planning to analyze some environmental samples for trace metal content. It's part of a research project I'm working on."]
    },
    {
        "username": "user",
        "content": ["That sounds fascinating! I hope you get some interesting results."]
    },
    {
        "username": "Alice",
        "content": ["Thank you! We're excited to see what we'll discover. How about you? Anything exciting happening on your end?"]
    },
    {
        "username": "user",
        "content": ["I'm planning a weekend getaway with my friends. Can't wait!"]
    }
])
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
              <IonButton onClick={() => { setOpen(false) }}><IonIcon aria-hidden="true" icon={chevronBack} /></IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {
            chat.map((x, index) => {
              if (x.username == "user") {
                return (
                  x.content.map(i => (
                    <div className='rounded-lg bg-sky-300 float-right p-2 m-2 ml-4 mr-4 w-9/12'>
                      {i}
                    </div>
                  ))
                )
              }
              else
                return (
                  <div className='float-left'>
                    <img className="rounded-full aspect-square w-9 float-left m-2" src={faker.image.urlLoremFlickr({ category: 'abstract' })}></img>
                    {x.content.map(i => (
                      <div className='rounded-lg bg-gray-300 p-2 m-2 ml-12 mr-4 w-9/12'>
                        {i}
                      </div>
                    ))}</div>
                )
            })
          }

        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonInput id="inp" placeholder='Input message here' onIonChange={()=>{
              //@ts-ignore
              chat.push({username: "user", content: [document.getElementById("inp").value]})
              setChat([...chat])
              //@ts-ignore
              document.getElementById("inp").value = ""
            }}></IonInput>
            <IonButtons slot="end"><IonButton onClick={()=>{
              //@ts-ignore
              chat.push({username: "user", content: [document.getElementById("inp").value]})
              setChat([...chat])
              //@ts-ignore
              document.getElementById("inp").value = ""
            }}><IonIcon icon={paperPlane}></IonIcon></IonButton></IonButtons>
          </IonToolbar>
        </IonFooter>

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
        <IonSearchbar onIonChange={(e) => {
          setChatData([...chatData.filter((x) => {
            console.log(e)
            return x.name.includes(e.detail.value)
          })])
        }}></IonSearchbar>
        <IonList>
          {
            chatData.map(x => (
              <IonItem onClick={() => { setOpen(true); setCurrentName(x.name) }} key={x.id}>
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
