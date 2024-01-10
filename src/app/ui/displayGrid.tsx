"use client"

import {Grid} from "@mui/material";
import {DataGrid, GridActionsCellItem} from "@mui/x-data-grid";
import {useMemo} from "react";
import type {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";
import {IBook} from "@/interface";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useAppDispatch, useAppSelector} from "@/store";
import {edit} from "@/store/bookModal";
import {deleteBook} from "@/store/bookList";
import {showMessage} from "@/store/message";

export default function DisplayGrid() {
  const bookList = useAppSelector((state) => state.bookList);
  const dispatch = useAppDispatch();


  const columns = useMemo<GridColDef<IBook>[]>(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 3,
        align: 'center',
        headerAlign: 'center',
        renderCell: ({row}) => <div className="clickable" onClick={() => {
          dispatch(edit({selectedId: row.id}));
        }}>{row.name}</div>,
      },
      {
        field: 'price',
        headerName: 'Price',
        flex: 2,
        align: 'center',
        headerAlign: 'center'
      },
      {
        field: 'category',
        headerName: 'Category',
        flex: 3,
        align: 'center',
        headerAlign: 'center'
      }, {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            key="delete"
            icon={<DeleteIcon/>}
            label="Delete"
            onClick={() => {
              if (confirm(`Are you sure to delete "${params.row.name}" from the list?`)) {
                dispatch(deleteBook({deleteId: params.id}));
                dispatch(showMessage({message: `Successfully deleted "${params.row.name}" from the list`}))
              }
            }}
          />,
          <GridActionsCellItem
            key="edit"
            icon={<EditIcon/>}
            label="Toggle Admin"
            onClick={() => {
              dispatch(edit({selectedId: params.id}));
            }}
          />
        ],
      },
    ],
    [dispatch]
  );

  return (
    <Grid container style={{height: 650}}>
      <DataGrid<IBook>
        rows={bookList ?? []}
        pageSizeOptions={[10, 15, 20, 100]}
        columns={columns}
        getRowId={({id}) => id}
        showCellVerticalBorder={true}
      />
    </Grid>
  )
}
