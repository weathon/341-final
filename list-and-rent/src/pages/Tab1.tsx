import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { person, search } from 'ionicons/icons';
import { faker } from '@faker-js/faker';

const Tab1: React.FC = () => {

  const trending = [
    {
      "image": "/sample (1).png",
      "title": "Snow Board",
      "description": "Brand new snow board, I am going out of town and cannot take it so you guys can rent it.",
      "from": "Steven J."
    },
    {
      "image": "/sample (2).png",
      "title": "Advanced HPLC-ESI-MS",
      "description": "High-Performance Liquid Chromatography with Electrospray Ionization Mass Spectrometry equipment, ideal for detailed chemical analysis. Available for short-term lease for research purposes.",
      "from": "Dr. Rachel K."
    },
    {
      "image": "/sample (3).png",
      "title": "Sleek Coffee Machine",
      "description": "Modern, high-efficiency coffee machine perfect for coffee enthusiasts. Available for rent, includes a variety of brewing options and easy-to-clean features.",
      "from": "Barista Mike"
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Best @ Rent</IonTitle>
          <IonButtons collapse={true} slot="end">
            <IonButton><IonIcon aria-hidden="true" icon={person} /></IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ margin: "10px" }}>
          <IonSearchbar placeholder="Default"></IonSearchbar>
        </div>
        <div className='grid grid-cols-2'>
          {
            trending.map(x => (
              <>
                <IonCard className="p-3 m-1 max-h-half">
                  <img src={x.image} className='width-full mb-1'></img>
                  <IonLabel>  <h3>{x.title}</h3>
                    <p>{x.description}</p></IonLabel>

                </IonCard>
              </>
            ))
          }
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
