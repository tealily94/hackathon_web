import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";

function main() {
  return (
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
          <Button
            variant="outlined"
            style={{ padding: "10em 15em", borderRadius: "15px" }}
          >
            Quiz
          </Button>
          <Link href="lesson">
            <Button
              variant="outlined"
              style={{ padding: "10em 15em", borderRadius: "15px" }}
            >
              Lesson
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack>
        <Apitest />
      </Stack>
    </div>
  );
}

export default main;
