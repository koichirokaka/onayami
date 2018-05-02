import * as firebase from 'firebase';
import { Theme } from 'material-ui';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import withStyles, { StyleRulesCallback } from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography';
import * as React from 'react';

import withMuiRoot from '../withMuiRoot';

import fb from './facebook.svg';
import google from './google.svg';
import twitter from './twitter.svg';

const styles: StyleRulesCallback = (theme: Theme) => ({
  actions: {
    margin: 'auto'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: 275
  },
  image: {
    height: '25px'
  },
  outer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 'xx-large',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.loginWithFb = this.loginWithFb.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
    this.loginWithTwitter = this.loginWithTwitter.bind(this);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.outer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>Login</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <IconButton
              className={classes.button}
              onClick={this.loginWithGoogle}
            >
              <img src={google} className={classes.image} alt="google-login" />
            </IconButton>
            <IconButton className={classes.button} onClick={this.loginWithFb}>
              <img src={fb} className={classes.image} alt="fb-login" />
            </IconButton>
            <IconButton
              className={classes.button}
              onClick={this.loginWithTwitter}
            >
              <img
                src={twitter}
                className={classes.image}
                alt="twitter-login"
              />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }

  private loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: 'user@example.com'
    });
    this.login(provider);
  }

  private loginWithFb() {
    const provider = new firebase.auth.FacebookAuthProvider();
    this.login(provider);
  }

  private loginWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    this.login(provider);
  }

  private login(provider: firebase.auth.AuthProvider) {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        this.props.onAfter();
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default withMuiRoot(withStyles(styles)(Login));
