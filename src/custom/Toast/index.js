import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider, withSnackbar } from 'notistack';

export default {
  error: function (msg) {
    this.toast(msg, 'error');
  },
  toast: function (msg, variant) {
    const Display = withSnackbar(({ message, enqueueSnackbar }) => {
      enqueueSnackbar(message, { variant });
      return null;
    });
    const mountPoint = document.getElementById('snackbarhelper');
    ReactDOM.render(
      <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}>
        <Display message={msg} variant={variant} />
      </SnackbarProvider>,
      mountPoint)
  }
}