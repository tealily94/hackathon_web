import { TextField, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

function quiz() {
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);

  const uploadToClient = function (File) {
    var imageString = File.base64;
    var comma = imageString.indexOf(',');
    var newImageString = imageString.substring(comma + 1, imageString.length);
    setImage(newImageString);
    setShow(true);
  };
  return (
    <div>
      <Typography variant='h3' sx={{ textAlign: 'center', margin: '2rem' }}>
        Quiz
      </Typography>

      {/* Input Field */}
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <form>
          {/* Question */}
          <TextField
            required
            label='Question'
            sx={{
              display: 'block',
              marginTop: '2rem',
            }}
          >
            {question}
          </TextField>

          <Box sx={{ width: '70%' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                  <img
                    src={`data:image/png;base64,${image}`}
                    style={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                  />
                  <FileBase64
                    name='myImage'
                    onDone={uploadToClient.bind(this)}
                  ></FileBase64>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                  <img
                    src={`data:image/png;base64,${image}`}
                    style={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                  />
                  <FileBase64
                    name='myImage'
                    onDone={uploadToClient.bind(this)}
                  ></FileBase64>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                  <img
                    src={`data:image/png;base64,${image}`}
                    style={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                  />
                  <FileBase64
                    name='myImage'
                    onDone={uploadToClient.bind(this)}
                  ></FileBase64>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                  <img
                    src={`data:image/png;base64,${image}`}
                    style={{
                      width: '10rem',
                      height: '10rem',
                      objectFit: 'cover',
                    }}
                  />
                  <FileBase64
                    name='myImage'
                    onDone={uploadToClient.bind(this)}
                  ></FileBase64>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default quiz;
