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
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useRouter } from "next/router";
import axios from "axios";

function Lesson() {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");

  const uploadToClient = function (File) {
    var imageString = File.base64;
    var comma = imageString.indexOf(",");
    var newImageString = imageString.substring(comma + 1, imageString.length);
    setImage(newImageString);
    setShow(true);
  };

  const uploadToServer = function (e) {
    setDesc(e.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://hackathon-backend.azurewebsites.net/createLearning", {
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
      <Typography variant="h3" sx={{ textAlign: "center", margin: "2rem" }}>
        Learning
      </Typography>

      {/* Input Field */}
      <Container
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form>
          {show ? (
            <Box
              sx={{
                border: "solid",
                width: "16rem",
                height: "16rem",
              }}
            >
              <img
                src={`data:image/png;base64,${image}`}
                style={{ width: "16rem", height: "16rem", objectFit: "cover" }}
              />
            </Box>
          ) : (
            <></>
          )}
          <FileBase64
            name="myImage"
            onDone={uploadToClient.bind(this)}
          ></FileBase64>
          <br />
          <TextField
            required
            label="Description"
            sx={{ marginTop: "2rem", width: "100%" }}
            onchange={uploadToServer}
          >
            {desc}
          </TextField>
          <Button
            type="submit"
            onClick={handleSubmit}
            style={{ display: "block" }}
            sx={{ width: "30%", marginLeft: "35%", marginTop: "2rem" }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Lesson;
