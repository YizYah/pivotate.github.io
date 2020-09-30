import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from '@material-ui/core';
import styled from 'styled-components';

const CustomDialog = styled(DialogContent)`
  display: flex;
  flex-direction: column;
`;
const CustomWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;
const CustomDialogTitle = styled(DialogTitle)`
  font-size: 0.8rem;
`;

function ItemEditFormModal({
  label,
  value,
  open,
  handleClose,
  descValue,
  desc,
  handleAppValueChange,
  handleAppValueSave,
  handleCancelEdit,
  handleDescValue,
  isSaving
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      maxWidth='sm'
      disableBackdropClick
      disableEscapeKeyDown
    >
      <CustomDialogTitle id='form-dialog-title'>
        Edit your Application Name and Description
      </CustomDialogTitle>
      <CustomDialog>
        <CustomWrapper>
          <TextField
            type='text'
            autoFocus
            label={label}
            value={value}
            variant='outlined'
            onChange={handleAppValueChange}
            disabled={isSaving}

          />
        </CustomWrapper>
        <CustomWrapper>
          <TextField
            type='text'
            label={desc}
            value={descValue}
            variant='outlined'
            multiline
            rows={4}
            onChange={handleDescValue}
            disabled={isSaving}

          />
        </CustomWrapper>
      </CustomDialog>
      <DialogActions>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleCancelEdit}
          disabled={isSaving}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleAppValueSave}
          disabled={isSaving}

        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ItemEditFormModal;
