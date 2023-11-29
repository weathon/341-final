import { faker } from "@faker-js/faker"
import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from "@ionic/react"
import "./Tab1.css"

interface detail { setDetileOpen: Function, itemId: Number };

const Detail = (props: detail) => {
    const detail = {
        image: faker.image.urlLoremFlickr({ category: 'abstract' }),
        name: "HPLC-ESI-MS",
        description: "High-Performance Liquid Chromatography with Electrospray Ionization Mass Spectrometry equipment, ideal for detailed chemical analysis. Available for short-term lease for research purposes.",
        location: [49.9975, -119.4710],
        cat: "lab",
        price: 123.78
    }
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{detail.name}</IonTitle>
                    <IonButtons>
                        <IonButton onClick={() => { props.setDetileOpen(false) }}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <img src={detail.image} className="p-5 rounded-3xl"></img>
                <IonItem>
                    <p>{detail.description}</p>
                </IonItem>
                <IonItem>
                    May 20, 2023 - Dec 10, 2023 <IonButton slot="end">More Available Dates</IonButton>
                </IonItem>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton>
                    <IonIcon icon=""></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </>
    )
}

export default Detail;