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
import React, { useState } from 'react';

function lesson() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append('file', image);
    const response = await fetch('/api/file', {
      method: 'POST',
      body,
    });
  };

  return (
    <div>
      <Typography variant='h3' sx={{ textAlign: 'center', margin: '2rem' }}>
        Lesson
      </Typography>

      {/* Input Field */}
      <Container
        sx={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form>
          {/* Image Select */}
          <img src={createObjectURL} />
          <Box
            hidden
            sx={{
              border: 'solid',
              width: '15rem',
              height: '15rem',
            }}
          ></Box>
          <input type='file' name='myImage' onChange={uploadToClient} />
          <br />

          {/* Description */}
          <TextField
            required
            label='Write the description'
            sx={{
              display: 'block',
              marginTop: '2rem',
            }}
          ></TextField>

          {/* Category Select */}
          <FormControl sx={{ width: '15rem', marginY: '3rem' }}>
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
          <Button
            type='submit'
            onClick={uploadToServer}
            style={{ display: 'block' }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default lesson;
