import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import main from './main';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function Home() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const baseUrl = 'https://hackathon-backend.azurewebsites.net/createLesson';
  const [lesson, setLesson] = useState(0);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(baseUrl, {
        title: title,
        category: category,
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        router.push({ pathname: `create/${data}`, query: `${data}` });
      })

      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = function (e) {
    setCategory(e.target.value);
    console.log(category);
  };
  return (
    <div>
      <Stack spacing={2}>
        <Typography variant='h2' sx={{ textAlign: 'center', marginY: '1rem' }}>
          Welcome to the Infinite Classroom
        </Typography>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <TextField
                sx={{ display: 'inline-block', marginX: '1rem' }}
                id='outlined-basic'
                label='Title'
                variant='outlined'
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              {/* Category Select */}
              <FormControl
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginY: '1rem',
                  marginX: 'auto',
                }}
              >
                <InputLabel id='demo-simple-select-label'>Category</InputLabel>
                <Select
                  value={category}
                  label='Cagetory'
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='Math'>Math</MenuItem>
                  <MenuItem value='Korean'>Korean</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant='outlined'
                type='submit'
                onClick={handleSubmit}
                sx={{ display: 'block' }}
              >
                Create a Lesson
              </Button>
            </div>
          </div>
        </form>
      </Stack>
    </div>
  );
}
