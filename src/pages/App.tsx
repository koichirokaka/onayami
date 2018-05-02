import * as firebase from 'firebase';
import * as React from 'react';

import Home from './Home';
import Login from './Login';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.renderAfterLogin = this.renderAfterLogin.bind(this);
  }

  private get isLogin(): boolean {
    return firebase.auth().currentUser !== null;
  }

  public renderAfterLogin() {
    this.forceUpdate();
  }

  public render() {
    if (this.isLogin) {
      return <Home />;
    } else {
      return <Login onAfter={this.renderAfterLogin} />;
    }
  }
}

export default App;
