import { IonBadge, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonPopover, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { duplicateSharp, funnel, mic, micCircle, micOffCircle, person, search, thumbsUp } from 'ionicons/icons';
import { faker } from '@faker-js/faker';
import Detail from './Detail';
import { useEffect, useState } from 'react';

const colormap =(v)=>{
  if(v<50)
  {
    return "danger"
  }
  if(v<80)
  {
    return "warning"
  }
  return "success"
}
interface v {
  setFilter: Function,
  setVoiceOpen: Function
}
function VoiceSearch(props: v) {
  let mediaRecorder = null;
  const [transcript, setTranscript] = useState('Say what you want, like "I want to rent a snowboard on this Thursday, I want it for 7 days, and it should be cheaper than $500 total."')
  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia supported.");
      navigator.mediaDevices
        .getUserMedia(
          // constraints - only audio needed for this app
          {
            audio: true,
          },
        )

        // Success callback
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream); mediaRecorder.start(); let chunks = [];

          mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
          };
          // setTimeout(()=>{mediaRecorder.stop();}, 1000)
          mediaRecorder.onstop = (e) => {
            const blob = new Blob(chunks, { type: "audio/ogg" }) //cannot define codec
            const audioURL = window.URL.createObjectURL(blob);
            console.log(chunks, blob, audioURL);
            let formData = new FormData()
            formData.append("file", blob)
            formData.append("model", "whisper-1")

            fetch("https://api.openai.com/v1/audio/transcriptions", {
              method: "POST", headers: {
                "Authorization": `Bearer ${localStorage.getItem("APIKey")}`
              },
              body: formData
            }).then(x => x.json()).then(
              (x) => {
                setTranscript("You said: " + x.text)
                fetch("https://api.openai.com/v1/chat/completions", {
                  headers: { Authorization: `Bearer ${localStorage.getItem("APIKey")}`, "Content-Type": "application/json" },
                  method: "POST", body: JSON.stringify(
                    {
                      "model": "gpt-3.5-turbo",
                      "messages": [{ "role": "system", "content": "You will get a text input from user, please return a JSON format (ONLY JSON FORMAT ONLY, NOTHING ELSE) including user's search detial, in format as {price_range: [low, high] (total price for all days), time_range: [start_date (YYYY/MM/DD), end date (YYYY/MM/DD)], item_name: name, rating: min_rating } if something that is not said by the user, return null. REMEMBER, ONLY JSON, nothing else, since it will be processed by a JSON engine and user will not drectly see your output. If user provided nothing, return everything as null. Remember DO NOT SAY ANYTHING OTHER THAN THE JSON. current time is " + Date() }, { "role": "user", "content": x.text }]
                    },
                  )
                }).then(x => x.json()).then(x => { props.setFilter(JSON.parse(x.choices[0].message.content)); props.setVoiceOpen(false); })
              }
            )
          }
        })

        // Error callback
        .catch((err) => {
          console.error(`The following getUserMedia error occurred: ${err}`);
        });
    } else {
      alert("getUserMedia not supported on your browser!");
    }
  })
  return (
    <>
      <div className='bg-gray-100 w-full h-full text-center place-content-cente grid'>
        <div className='place-self-center'>
          <IonIcon className="p-5 text-6xl" icon={mic} ></IonIcon>
          <p className='p-5'>{transcript}</p>
          <IonButton onClick={() => { mediaRecorder.stop() }}>Stop</IonButton></div>
      </div>
    </>
  )
}
const Tab1: React.FC = () => {

  let trending_ = [
    {
      "id": 1,
      "image": "/sample (3).png",
      "title": "Snowboard",
      "description": "Brand new snow board, I am going out of town and cannot take it so you guys can rent it.",
      "from": "Steven J.",
      "price": 10,
      "rating": 100
    },
    {
      "id": 1,
      "image": "/sample (2).png",
      "title": "Advanced HPLC-ESI-MS",
      "description": "High-Performance Liquid Chromatography with Electrospray Ionization Mass Spectrometry equipment, ideal for detailed chemical analysis. Available for short-term lease for research purposes.",
      "from": "Dr. Rachel K.",
      "price": 2000,
      "rating": 80
    },
    {
      "id": 1,
      "image": "/sample (1).png",
      "title": "Sleek Coffee Machine",
      "description": "Modern, high-efficiency coffee machine perfect for coffee enthusiasts. Available for rent, includes a variety of brewing options and easy-to-clean features.",
      "from": "Barista Mike",
      "price": 100,
      "rating": 50
    },
    {
      "id": 1,
      "image": "/cat.png",
      "title": "Cute cat",
      "description": "A VERY CUTE CAT JUST LIKE MYSELF! I will be out of town so someone please take care of it!",
      "from": "Barista Mike",
      "price": 50,
      "rating": 30
    }
  ];
  useEffect(()=>{
    let new_items = localStorage.getItem("newItems") || "[]";
    trending_ = trending_.concat(JSON.parse(new_items))
    console.log(trending_)
  },[])
  const [info, setInfo] = useState({});
  const [isDetileOpen, setDetileOpen] = useState(false);
  const [filter, setFilter] = useState({ item_name: null, low:0, high:Infinity });
  const [isVoiceOpen, setVoiceOpen] = useState(false);
  const [itemId, setItemId] = useState(-1);
  const [trending, setTrending] = useState(trending_);
  useEffect(() => { localStorage.getItem("APIKey") || localStorage.setItem("APIKey", prompt("Enter Your API Key")) }, [])
  useEffect(() => {
    if (!filter.item_name) {
      // setTrending([...trending_])
      // return;
      filter.item_name = ""
    }
    setTrending([...trending_.filter((x) => {
      //@ts-ignore
      return x.title.toLowerCase().includes(filter.item_name.toLowerCase())
    }).filter(x=>{
      return filter.low<x.price && x.price<filter.high
    })])
  }, [filter])
  return (
    <IonPage>
      <IonModal isOpen={isVoiceOpen}>
        <VoiceSearch setFilter={setFilter} setVoiceOpen={setVoiceOpen}></VoiceSearch>
      </IonModal>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best @ Rent</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton><IonIcon aria-hidden="true" icon={person} /></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonModal isOpen={isDetileOpen}>
          <Detail setDetileOpen={setDetileOpen} itemId={itemId} info={info}></Detail>
        </IonModal>
        <div>

          <IonRow>
            <IonCol size="auto" className='grid text-center place-content-center m-2'><IonIcon id="filter" icon={funnel} className="text-xl"></IonIcon></IonCol>
            <IonCol className="m-0 p-0"><IonSearchbar value={filter.item_name} className="pl-0 ml-0 mr-0 pr-0" placeholder="Default" onIonChange={(e) => {
              console.log(e.detail.value)
              filter.item_name = e.detail.value;
              setFilter({...filter})
              console.log(filter)
            }}></IonSearchbar></IonCol>
            <IonCol size="auto" className='grid text-center place-content-center m-2'><IonIcon icon={mic} className="text-xl" onClick={() => { setVoiceOpen(true) }}></IonIcon></IonCol>

          </IonRow>
        </div>
        <div className='grid grid-cols-2'>
          {
            trending.map((x, index) => (
              <IonCard key={index} onClick={() => {
                setDetileOpen(true);
                setInfo(x);
                setItemId(x.id);
              }} className="p-3 m-1 max-h-half">
                <img src={x.image} className='width-full mb-1'></img>
                <IonBadge>CA${x.price}/day</IonBadge>
                <IonBadge className="ml-1" color={colormap(x.rating)}><IonIcon icon={thumbsUp}></IonIcon>{x.rating}%</IonBadge><br/>
                <IonLabel>  <h3>{x.title}</h3>
                  <p>{x.description}</p></IonLabel>
              </IonCard>
            ))
          }
        </div>
        <IonPopover size="auto" trigger="filter" triggerAction="click">
          <IonContent style={{width: "10000px"}} class="ion-padding">
            <IonList>
              <IonItem>
                <IonLabel>Lowest Price: </IonLabel>
                <IonInput value={filter.low} onIonChange={(e)=>{
                  console.log(filter)
                  filter.low = Number(e.target.value);
                  setFilter({...filter})
                }}></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel>Highest Price: </IonLabel>
                <IonInput value={filter.high} onIonChange={(e)=>{
                  console.log(filter)
                  filter.high = Number(e.target.value);
                  setFilter({...filter})
                }}></IonInput>
              </IonItem>

              <IonItem>
                Date
                <IonInput type="date"></IonInput>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPopover>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
