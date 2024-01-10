"use client"

import {Alert, Snackbar} from "@mui/material";
import React from "react";
import {useAppDispatch, useAppSelector} from "@/store";
import {hideMessage} from "@/store/message";

export default function MessageBar() {
  const {isShow, message} = useAppSelector((state) => state.message);
  const dispatch = useAppDispatch();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideMessage());
  };

  return <Snackbar
    open={isShow}
    autoHideDuration={6000}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
      {message}
    </Alert>
  </Snackbar>
}