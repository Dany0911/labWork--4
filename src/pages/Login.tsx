import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter, useIonToast } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [present] = useIonToast()

    const navigation = useIonRouter()

    async function login() {
        
        const res = await loginUser(username, password)

        if (!res) {
            present("Error logging with your credentials", 2000)
        } else {
            present("You have logged in!", 2000)
            navigation.push('/app', 'root', 'replace')
            navigation.push('/app/homepage')


        }

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonButton onClick={login}>Login</IonButton>

                <p>New here? <Link to="/register">Register</Link></p>

            </IonContent>
        </IonPage>
    );
};

export default Login;