import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import useStyles from './style'

import Friends from './friends/friends'
import {fetchRoom, fetchOneRoom} from '../../actions/room'

function ResponsiveDrawer() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoom())
    
  }, [dispatch])

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Friends />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <TextField
          id="outlined-full-width"
          label="Label"  
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{top: "auto", bottom: 0}}
          variant="outlined"
          position="absolute"
          bottom="0"
          InputProps={{
            endAdornment: (
              <>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <SendIcon />
              </IconButton>
            </label>
              </>
            ),
          }}
        />
      </main>
      

    </div>
  );
}



export default ResponsiveDrawer;