import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Home() {
  <div style={{ height: "100vh" }}>
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        What do you want to Upload?
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Quiz</Button>
        <Button variant="outlined">Lesson</Button>
      </Stack>
    </Stack>
  </div>;
}
