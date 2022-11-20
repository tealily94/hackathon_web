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
                    marginTop="-2%"
                >
                    <Typography variant="h1" component="div" gutterBottom>
                        What do you want to Upload?
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link href={`quiz/${router.query.id}`}>
                            <Button
                                variant="contained"
                                style={{ padding: "2em 7em", borderRadius: "15px" }}
                            >
                                <h1>Quiz</h1>
                            </Button>
                        </Link>
                        <Link href={`lesson/${router.query.id}`}>
                            <Button
                                variant="outlined"
                                style={{ padding: "2em 7em", borderRadius: "15px" }}
                            >
                                <h1>Lesson</h1>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default create;
