import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'whitesmoke',
  },
  title: {
    color: '#FE6B8B',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
  },
  container: {
    width: 325,
    minHeight: 375,
    background: 'white',
    borderRadius: 20,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    '& > *': {
      paddingBottom: theme.spacing(1),
    },
  },
  bottomButton: {
    position: 'absolute',
    left: 'calc(50% - 50px)',
    width: '100px',
    bottom: '0px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-35px',
  },
  styledFab: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
}));

const styles = {
  whatever: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

export const LoginPage = ({
  initialLogin = '',
  initialPassword = '',
  onAuth = ({login, password}, fallback) => console.log({login, password}, fallback), 
}) => {
  const classes = useStyles();
  const [login, setLogin] = useState(initialLogin);
  const [password, setPassword] = useState(initialPassword);

  const handleError = ({error}) => console.log(error);

  const handleAuth = () => onAuth({login, password}, handleError);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>

        <Typography variant="h6" className={classes.title}>
          MyAmazingApp
        </Typography>

        <TextField
          variant="outlined"
          type="email"
          label="Почта"
          placeholder="tripolskypetr@gmail.com"
          onChange={({target}) => setLogin(target.value)}
          value={login}
        />

        <TextField
          variant="outlined"
          type="password"
          label="Пароль"
          placeholder="123456789"
          onChange={({target}) => setPassword(target.value)}
          value={password}
        />

        <Box className={classes.bottomButton}>
          <Fab onClick={handleAuth} className={classes.styledFab}>
            <ArrowForward />
          </Fab>
        </Box>

      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuth: ({login, password}, fallback) => dispatch(actions.authUser({login, password}, fallback)),
});

export default compose<typeof LoginPage>(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(LoginPage);
