import {
  Box,
  Button,
  FormLabel,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function lesson() {
  return (
    <div>
      <Typography>Lesson</Typography>
      <Container>
        <form>
          <FormLabel>Upload Image</FormLabel>
          <Box sx={{ border: 'solid', width: '15rem', height: '15rem' }}></Box>
          <Button>upload an image</Button>
          <br />
          <FormLabel>Description</FormLabel>
          <TextField placeholder='Write the description'></TextField>

          <Button>Submit</Button>

          <FormLabel>Categories</FormLabel>
        </form>
      </Container>
    </div>
  );
}

export default lesson;
