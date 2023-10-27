import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter, useIonToast } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../firebaseConfig'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [present] = useIonToast()

    const navigation = useIonRouter()

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
            setUsername('')
            setPassword('')
            setCPassword('')
            navigation.push('/login', 'root', 'push')

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
                <IonInput placeholder="Username?" value={username} onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput type="password" value={password} placeholder="Password?" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonInput type="password" value={cpassword} placeholder="Confirm Password?" onIonChange={(e: any) => setCPassword(e.target.value)} />
                <IonButton onClick={register}>Register</IonButton>

                <p>Already have an account? <Link to="/login">Login</Link></p>

            </IonContent>
        </IonPage>
    );
};

export default Register;