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
import FileBase64 from 'react-file-base64';

function lesson() {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState(null);
  const [category, setCategory] = useState('');

  const uploadToClient = function (File) {
    var imageString = File.base64;
    var comma = imageString.indexOf(',');
    var newImageString = imageString.substring(comma + 1, imageString.length);
    setImage(newImageString);
    setShow(true);
  };

  const uploadToServer = async (event) => {
    setDesc(desc);
    setCategory(category);
  };

  const handleChange = function (e) {
    setCategory(e.target.value);
    console.log(category);
  };

  return (
    <div>
      <Typography variant='h3' sx={{ textAlign: 'center', margin: '2rem' }}>
        Learning
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
          {show ? (
            <Box
              sx={{
                border: 'solid',
                width: '15rem',
                height: '15rem',
              }}
            >
              <img
                src={`data:image/png;base64,${image}`}
                style={{ width: '15rem', height: '15rem', objectFit: 'cover' }}
              />
            </Box>
          ) : (
            ''
          )}
          <FileBase64
            name='myImage'
            onDone={uploadToClient.bind(this)}
          ></FileBase64>
          <br />

          {/* Description */}
          <TextField
            required
            label='Description'
            sx={{
              display: 'block',
              marginTop: '2rem',
            }}
          >
            {desc}
          </TextField>

          {/* Category Select */}
          <FormControl sx={{ width: '15rem', marginY: '3rem' }}>
            <InputLabel id='demo-simple-select-label'>Category</InputLabel>
            <Select
              // labelId='demo-simple-select-label'
              // id='demo-simple-select'
              value={category}
              label='Cagetory'
              onChange={handleChange}
            >
              <MenuItem value='English'>English</MenuItem>
              <MenuItem value='Math'>Math</MenuItem>
              <MenuItem value='Korean'>Korean</MenuItem>
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
