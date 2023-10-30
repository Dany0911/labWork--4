import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuToggle, IonPage, IonRouterLink, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';

import { homeOutline, newspaperOutline, logOutOutline, atOutline, heart } from 'ionicons/icons'
import { logoIonic } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Homepage from './Homepage';
import Extra from './Extra';


const Menu: React.FC = () => {
  const paths = [
    { name: 'Home', url: '/app/homepage', icon: homeOutline },
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
              <IonMenuToggle key={index} autoHide={false}>
                <IonRouterLink routerLink="homepage" routerDirection='none'>
                  <IonItem>
                    <IonIcon icon={item.icon} slot='start' />
                    {item.name}
                  </IonItem>
                </IonRouterLink>
              </IonMenuToggle>
            ))}
            
            <IonMenuToggle autoHide={false}>
              <IonRouterLink routerLink="extra">
                <IonItem>
                 <IonIcon icon={logoIonic} slot='start' />
                  Extra
                </IonItem>
              </IonRouterLink>
            </IonMenuToggle>
            
            <IonButton routerLink='/login' routerDirection='back' expand='full'>
              <IonIcon icon={logOutOutline} slot='start' />
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>
        
        <IonRouterOutlet id='main'>
          <Route path='/app/homepage' component={Homepage} />
          <Route path='/app/extra' component={Extra} /> 
          <Route exact path='/app'>
            {/* <Redirect to='/app/homepage' /> */}
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;