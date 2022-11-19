import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/router";

function create() {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
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
            <Link href={`lesson/${router.query.id}`}>
              <Button
                variant="outlined"
                style={{ padding: "10em 15em", borderRadius: "15px" }}
              >
                Lesson
              </Button>
            </Link>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default create;
