import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [present] = useIonToast()



    async function register() {

        if (password !== cpassword) {
            return present('Passwords do not match', 2000)
        }
        if (password.length < 6 || cpassword.length < 6) {
            return present('Password too short, min 6 charachters', 3000)
        }
        if (username.trim() === '' || password.trim() === '') {
            return present('Username and password are required', 2000)
        }

        const res = await registerUser(username, password)
        if (res) {
            present('You have registered successfully!', 2000)

        }

    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                <IonInput placeholder="Username?" onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput type="password" placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonInput type="password" placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
                <IonButton onClick={register}>Register</IonButton>

                <p>Already have an account? <Link to="/login">Login</Link></p>

            </IonContent>
        </IonPage>
    );
};

export default Register;