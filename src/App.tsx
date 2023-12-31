import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Homepage from './pages/Homepage';
import Login from './pages/Login'
import Register from './pages/Register'
import Menu from './pages/Menu';
import Extra from './pages/Extra';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';




setupIonicReact();

const App: React.FC = () => {


  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" >
            <Redirect to='/login'></Redirect>
          </Route>
          <Route exact path="/login" component={Login}/>
          <Route path="/app" component={Menu}/>
          <Route path="/register" component={Register} exact/>
          <Route exact path="/extra" component={Extra} />
          <Route exact path="/homepage" component={Homepage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App; 

