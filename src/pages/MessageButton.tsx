import React, { useState } from 'react';
import { IonButton, IonAlert } from '@ionic/react';

const MessageButton: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <>
      <IonButton onClick={handleClick}>Show Message</IonButton>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Alert'}
        message={'Lorem ipsum!'}
        buttons={['OK']}
      />
    </>
  );
};

export default MessageButton;


