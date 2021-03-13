import React from 'react'
import {useSelector} from 'react-redux'

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import GroupIcon from '@material-ui/icons/Group';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

import useStyles from './style'


const Rooms = () => {
  const room = useSelector((state) => state.room)
  const classes = useStyles()

  console.log(room)
    return (
        <>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <Divider />
        <List>
              <ListItem button key={'Home'}>
                <ListItemIcon> <HomeIcon /> </ListItemIcon>
                <ListItemText />
              </ListItem>
            
          </List> 
          <Divider/>
          <List>
            {['Room 1', 'Room 2', 'Room 3', 'Room 4'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <GroupIcon /> : <GroupIcon />}</ListItemIcon>
                <ListItemText  />
              </ListItem>
            ))}
          </List> 
        </div>
      </Drawer>
      </>
    )
}

export default Rooms