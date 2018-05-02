import * as firebase from 'firebase';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import * as firebaseConfig from './firebase.config.json';

import './index.css';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
