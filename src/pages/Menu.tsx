import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

import { homeOutline, newspaperOutline, logOutOutline } from 'ionicons/icons'
import { Redirect, Route } from 'react-router';
import Page1 from './Page1';


const Menu: React.FC = () => {

  const paths = [
    { name: 'Home', url: '/app/page1', icon: homeOutline },
  ]
  return (
    <IonPage>
      <IonSplitPane contentId='main'>
        <IonMenu contentId='main'>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false} >
                <IonItem routerLink={item.url} routerDirection='none'>
                  <IonIcon icon={item.icon} slot='start'></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonButton routerLink='/login' routerDirection='back' expand='full'>
              <IonIcon icon={logOutOutline} slot='start'></IonIcon>
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id='main'>
          <Route exact path='/app/page1' component={Page1} />
          <Route exact path='/app'>
            <Redirect to='/app/page1' />
            </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu