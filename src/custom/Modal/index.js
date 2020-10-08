import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Dialog } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '40%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },


    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: '1rem'
  },
}));
 
export default function TransitionsModal({label, children, open, onClose}) {
  const classes = useStyles();
  const [openModal, setOpen] = React.useState(open);

  const handleClose = () => {
    setOpen(false);
    onClose()
  };

  return (
    <>
    {openModal ? (
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      
      
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {children}
        </div>
      </Fade>
    </Modal>) : null}
   
    </>
  );
}