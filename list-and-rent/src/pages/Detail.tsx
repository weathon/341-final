import { faker } from "@faker-js/faker"
import { IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react"
import "./Tab1.css"
import { bookmark, bookmarkOutline, bookmarks, calendar, information } from "ionicons/icons"
import { useState } from "react"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


interface detail { setDetileOpen: Function, itemId: Number, info: Object };

const Detail = (props: detail) => {
    let endDate = "Dec 30, 2023"
    const [icon, setIcon] = useState(bookmarkOutline);
    const [calendarOpen, setCalenderOpen] = useState(false)
    const detail = {
        //@ts-ignore
        image: props.info.image,
        //@ts-ignore
        name: props.info.title,
        //@ts-ignore
        description: props.info.description,
        location: [49.9975, -119.4710],
        price: 123.78
    }
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: Date(),
            key: 'selection'
        }
    ]);
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
                            <DateRange
                                className="w-full"
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                minDate={(new Date())}
                                maxDate={(new Date(endDate))}
                                editableDateInputs={true}
                                direction="horizontal"
                            />
                            <IonButton expand="block" onClick={()=>{
                                alert("Booked");
                                setCalenderOpen(false);
                            setTimeout(()=>{
                                props.setDetileOpen(false)
                            }, 300)
                            }}>Book</IonButton>


                    </IonPage>
                </IonModal>
                <img src={detail.image} className="p-5 rounded-3xl"></img>
                <IonItem>
                    <p>{detail.description}</p>
                </IonItem>
                <IonItem>
                    May 20, 2023 - {endDate} <IonButton slot="end" onClick={() => {
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