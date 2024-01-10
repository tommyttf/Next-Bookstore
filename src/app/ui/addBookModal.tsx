"use client"

import {Box, Button, Grid, InputLabel, Modal, Stack, TextareaAutosize, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "@/store";
import {close} from '@/store/bookModal'
import {IAddBookFormInput} from "@/interface";
import {useEffect} from "react";
import {addBook, updateBook} from "@/store/bookList";
import {showMessage} from "@/store/message";

const defaultValues = {
  name: '',
  price: 0,
  category: '',
  description: ''
}

const modalBoxStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddBookModal() {
  const {isOpen, selectedId} = useAppSelector((state) => state.bookModalDetail);
  const bookList = useAppSelector((state) => state.bookList);

  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(close(null));
  };

  const {handleSubmit, reset, register} = useForm<IAddBookFormInput>({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    if (selectedId !== undefined) {
      reset(bookList.find((book) => book.id === selectedId))
    } else {
      reset(defaultValues);
    }
  }, [selectedId, bookList, reset])

  const onSubmit = (data: IAddBookFormInput) => {
    data.price = Number(data.price);
    if (selectedId !== undefined) {
      dispatch(updateBook({...data, id: selectedId}));
      dispatch(showMessage({message: `Successfully updated "${data.name}"`}))
    } else {
      dispatch(addBook({...data, id: (new Date()).getTime()}));
      dispatch(showMessage({message: `Successfully added "${data.name}"`}))
    }

    reset(defaultValues);
    closeModal();
  }

  return <Modal
    open={isOpen}
    onClose={closeModal}
  >
    <Box sx={modalBoxStyle}>
      <Grid container>
        <Grid item xs={12} textAlign="center">
          Add Book Details
        </Grid>

        <Grid container justifyContent="center" alignItems="center" padding="8px">
          <InputLabel>Book name: </InputLabel>
          <TextField {...register("name", {required: true})}/>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" padding="8px">
          <InputLabel>Price: </InputLabel>
          <TextField {...register("price", {required: true})} type="number"/>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" padding="8px">
          <InputLabel>Category: </InputLabel>
          <TextField {...register("category", {required: true})}/>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" padding="8px">
          <InputLabel>Description: </InputLabel>
          <TextareaAutosize {...register("description", {required: true})} minRows={5}/>
        </Grid>


        <Grid item xs={12} justifyContent="right">
          <Stack direction="row" justifyContent="end">
            <Button onClick={handleSubmit(onSubmit)} variant="contained" disableElevation>
              Submit
            </Button>
            <Button onClick={() => reset(defaultValues)} variant="outlined">
              Reset
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Modal>
}