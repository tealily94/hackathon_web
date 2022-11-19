import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import main from "./main";

export default function Home() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const baseUrl = "https://hackathon-backend.azurewebsites.net/createLesson";

  const handleSubmit = (e) => {
    axios
      .post(baseUrl, {
        title: title,
        category: category,
      })
      .then((response) => {
        console.log(`create/${response.data}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Stack spacing={2}>
        <Typography variant="h1">Welcome to the Infinite Classroom</Typography>
        <form>
          <div>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Category"
              variant="outlined"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <Button type="submit" onClick={handleSubmit}>
              Create a Lesson
            </Button>
          </div>
        </form>
      </Stack>
      <Routes>
        <Route path={"main"} element={<main />}></Route>
      </Routes>
      ;
    </div>
  );
}
