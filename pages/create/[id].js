import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Create() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      <div style={{ height: '100vh' }}>
        <Stack
          spacing={2}
          justifyContent='center'
          alignItems='center'
          style={{ height: '100vh' }}
          marginTop='-2%'
        >
          {/* Title */}
          <Typography
            variant='h2'
            component='div'
            gutterBottom
            sx={{ paddingX: '2rem' }}
          >
            What do you want to Upload?
          </Typography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 3 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link href={`quiz/${router.query.id}`}>
              {/* Quiz Button */}
              <Button
                variant='contained'
                sx={{
                  padding: { xs: '0.5em 5em', md: '2em 7em' },
                  borderRadius: '15px',
                }}
              >
                <h1>Quiz</h1>
              </Button>
            </Link>
            <Link href={`lesson/${router.query.id}`}>
              {/* Learning Button */}
              <Button
                variant='outlined'
                sx={{
                  padding: { xs: '0.5em 2em', md: '2em 7em' },
                  borderRadius: '15px',
                }}
              >
                <h1>Learning</h1>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default Create;
