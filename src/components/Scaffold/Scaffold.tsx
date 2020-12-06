import React from 'react';

/* https://material-ui.com/components/css-baseline/ */
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    background: 'whitesmoke',
  },
}));

interface IScaffoldProps {
  title?: string;
  children?: React.ReactNode;
}

export const Scaffold = ({
  title = 'My amazing app',
  children = null,
}: IScaffoldProps) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}/>
      <Container className={classes.container}>
        <div>
          {children}
        </div>
      </Container>
    </>
  );
};

export default Scaffold;
