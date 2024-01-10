import {Box, CssBaseline} from '@mui/material';

import DisplayGrid from "@/app/ui/displayGrid";
import TopBar from "@/app/ui/topBar";
import StoreProvider from "@/app/StoreProvider";
import AddBookModal from "@/app/ui/addBookModal";
import MessageBar from "@/app/ui/messageBar";


export default function Home() {
  return (
    <StoreProvider>
      <CssBaseline/>
      <Box component="nav">
        <TopBar/>
        <AddBookModal/>
        <DisplayGrid/>
        <MessageBar/>
      </Box>
    </StoreProvider>
  )
}
