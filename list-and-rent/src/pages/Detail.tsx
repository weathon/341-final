import { faker } from "@faker-js/faker"
import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"
import "./Tab1.css"
import { bookmark, bookmarkOutline, bookmarks, calendar } from "ionicons/icons"
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

interface detail { setDetileOpen: Function, itemId: Number };

const Detail = (props: detail) => {
    const [icon, setIcon] = useState(bookmarkOutline);
    const [calendarOpen, setCalenderOpen] = useState(false)
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
                    <IonButtons slot="end">
                        <IonButton onClick={() => {
                            if (icon == bookmarkOutline) {
                                setIcon(bookmark)
                                localStorage.setItem("saved", (1 + Number(localStorage.getItem("saved"))).toString())
                            }
                            else {
                                setIcon(bookmarkOutline)
                                localStorage.setItem("saved", (Number(localStorage.getItem("saved")) - 1).toString())
                            }
                        }} ><IonIcon icon={icon} key={icon}></IonIcon></IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonModal isOpen={calendarOpen}>
                    <IonPage>
                        <IonContent>
                            <div>
                                <DateRangePicker
                                    range={{
                                        startDate: new Date(),
                                        endDate: new Date(),
                                        key: 'selection',
                                    }}
                                />
                            </div>

                        </IonContent>
                    </IonPage>
                </IonModal>
                <img src={detail.image} className="p-5 rounded-3xl"></img>
                <IonItem>
                    <p>{detail.description}</p>
                </IonItem>
                <IonItem>
                    May 20, 2023 - Dec 10, 2023 <IonButton slot="end" onClick={() => {
                        setCalenderOpen(true);
                    }}><IonIcon icon={calendar}></IonIcon></IonButton>
                </IonItem>
                <IonItem><img width="100%" src={"https://maps.googleapis.com/maps/api/staticmap?center=" + detail.location[0] + "," + detail.location[1] + "&markers=" + detail.location[0] + "," + detail.location[1] + "&zoom=12&size=800x400&key=AIzaSyAbagbe5fdVhIHTe_RVFkRoyWDeiw-T1DQ"}></img></IonItem>
                {/* 
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton>
                    <IonIcon icon=""></IonIcon>
                    </IonFabButton>
                </IonFab> */}
            </IonContent>
        </>
    )
}

export default Detail;