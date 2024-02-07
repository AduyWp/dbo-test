import "../styles/globals.css";
import Layout from "../src/app/Theme/layout";
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  marginRight: {
    marginRight: '5px',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  }
}));

export default function MyApp({ Component, pageProps }) {
  const classes = useStyles();
  const [isLogin, setIsLogin] = useState()
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    window.location.href = '/'
  }

  useEffect(() => {
    if (localStorage.getItem('isLogin') !== null) {
      setIsLogin(localStorage.getItem('isLogin'))
    }
    if (localStorage.getItem('isLogin') === null) {
      router.push('/');
    }
    if (router.pathname === "/register") {
      router.push('/register');
    }
  }, []);

  return (
    <Layout>
      {isLogin ?
        <>
          <AppBar position="static">
            <Toolbar className={classes.flexEnd}>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Typography variant="body2" className={classes.marginRight}>Hi, Administrator</Typography>
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </>
      : null }
      <Component {...pageProps} />
    </Layout>
  );
}