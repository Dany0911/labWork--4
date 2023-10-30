import React, { useState } from 'react';
import { IonButton, IonToast, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import MessageButton from './MessageButton';

const Homepage: React.FC = () => {
  return (  
      
      <body> 
          <h1> This is our official homepage </h1> 
          
          <div className="App">
            <MessageButton />
          </div>
      </body>
  );
  

};


export default Homepage;