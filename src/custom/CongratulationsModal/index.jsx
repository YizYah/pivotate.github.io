import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
} from '@material-ui/core';
import Icons from '../../images/confetti.svg';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  customDialog: {
    borderRadius: '20px',
  },
}));

const CustomImage = styled.img`

height: 75px;
width: 100%;
}

`;
const CustomWrapper = styled.div`
  margin-bottom: 1em;
  font-size: 1.2rem;
  font-size: bold;
`;
const CustomWrap = styled.div`
  font-size: 1.2rem;
  font-size: bold;
`;
const CustomTitle = styled(DialogTitle)`
  font-weight: bold;
  text-align: center;
`;

function CongratulationsModal({
  title,
  content,
  buttonLabel,
  open,
  handleButton,
  buttonBack,
  handleClose
}) {
  const styles = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='sm'
      classes={{ paper: styles.customDialog }}
      aria-labelledby='form-dialog-title'
    >
      <CustomTitle className='modal'>
        <CustomWrapper>
          <CustomImage src={Icons} alt='icons' />
        </CustomWrapper>
        <CustomWrap>{title}</CustomWrap>
      </CustomTitle>
      <DialogContent>
        <DialogContentText className='context-text'>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions className='button-wrapper'>
      <Button
          className='button-next-schedule  '
          onClick={handleButton}
          variant='contained'
        >
          {' '}
          {buttonLabel}{' '}
        </Button>
      </DialogActions>
      <DialogActions className='contact-us'>
        <Button color='primary'> Contact Us</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CongratulationsModal;
