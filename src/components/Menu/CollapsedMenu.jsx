import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Menu } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    color: '#ffffff',
  },
}));

const CollapsedMenu = ({ children, IconComponent }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [renderLocation, setRenderLocation] = useState(null);

  const handleClick = (event) => {
    setRenderLocation(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setRenderLocation(null);
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={handleClick}>
        <IconComponent />
      </Button>
      <Menu
        anchorEl={renderLocation}
        open={open}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export default CollapsedMenu;
