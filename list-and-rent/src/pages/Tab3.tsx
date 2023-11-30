import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { images } from 'ionicons/icons';
import { useState } from 'react';

const Tab3: React.FC = () => {
  const catOptions = ["Books", "Sport Gears", "Electronics"];
  const [image, setImage] = useState("");
  return (
    <IonPage>
      <input type='file' hidden id="file" onChange={(e) => {
        let reader = new FileReader();
        let res = reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          console.log(reader.result)
          //@ts-ignore
          setImage(reader.result)
        }
      }}></input>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post a new Listing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div onClick={() => {
          //@ts-ignore
          document.getElementById("file").click()
        }} className='m-5 bg-slate-200 h-2/6 rounded-lg grid text-center place-content-center'>
          {/* now i do not need text-center wtf oh i have child in div */}
          <div>
            {
              !image ?<><IonIcon icon={images} className="text-4xl"></IonIcon>
                <p>Add a photo here</p></>
              :<img src={image}></img>
            }
          </div>
        </div>
        <IonList>
          <IonItem>
            <IonInput label="Title" placeholder='Input your title here'></IonInput>
          </IonItem>
          <IonItem>
            <IonTextarea label="Description" placeholder='Input your text here'></IonTextarea>
          </IonItem>
          <IonItem>
            <IonInput label="Location" placeholder='Select your location'></IonInput>
          </IonItem>
          <IonItem>
            <IonSelect interface="action-sheet" label="Category">
              {
                catOptions.map(x => (
                  <IonSelectOption key={x} value={x}>{x}</IonSelectOption>
                ))
              }
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonInput type="number" label="Price" placeholder='Enter price'></IonInput>
          </IonItem>
          <IonButton className="m-3" expand='block' onClick={()=>{
            setTimeout(()=>{
              alert("Submited!")
              window.location.href = window.location.href
            }, 500)
          }}>Submit</IonButton>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
