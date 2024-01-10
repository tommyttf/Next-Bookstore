"use client"

import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {useAppDispatch} from "@/store";

import {open} from '@/store/bookModal'

export default function TopBar() {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(open(null));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid item>
          <Button
            style={{color: '#ffffff', backgroundColor: '#000066'}}
            onClick={openModal}
          >
            Add a new book
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}