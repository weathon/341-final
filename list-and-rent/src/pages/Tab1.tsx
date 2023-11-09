import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { person, search } from 'ionicons/icons';

const Tab1: React.FC = () => {
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
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
