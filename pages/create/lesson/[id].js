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
import { useRouter } from 'next/router';
import axios from 'axios';

function lesson() {
  const router = useRouter();
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

  const handleChange = function (e) {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleChangeDesc = function (e) {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://hackathon-backend.azurewebsites.net/createLearning', {
        image: image,
        description: desc,
        lessonID: router.query.id,
      })
      .then((response) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
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
            onChange={handleChangeDesc}
          >
            {desc}
          </TextField>
          <Button
            type='submit'
            onClick={handleSubmit}
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
