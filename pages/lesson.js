import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function lesson() {
  return (
    <div>
      <Typography variant='h3' sx={{ textAlign: 'center' }}>
        Lesson
      </Typography>
      <Container sx={{ marginTop: '3rem' }}>
        <form>
          <FormLabel>Image</FormLabel>
          <Box
            sx={{
              border: 'solid',
              width: '15rem',
              height: '15rem',
            }}
          ></Box>
          <Button>upload an image</Button>
          <br />
          <FormLabel>Description</FormLabel>
          <TextField
            required
            size='medium'
            placeholder='Write the description'
            sx={{ display: 'block' }}
          ></TextField>
          <FormControl sx={{ width: '15rem' }}>
            <InputLabel id='demo-simple-select-label'>
              Categodfdfries
            </InputLabel>
            <Select
            // labelId='demo-simple-select-label'
            // id='demo-simple-select'
            // value={category}
            // label='Cagetory'
            // onChange={handleChange}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Math</MenuItem>
              <MenuItem value={30}>Korean</MenuItem>
            </Select>
          </FormControl>

          <Button>Submit</Button>
        </form>
      </Container>
    </div>
  );
}

export default lesson;
