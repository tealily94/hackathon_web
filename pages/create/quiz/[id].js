import { setArgs } from '@craco/craco/lib/args';
import { TextField, Grid, Typography, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from "axios";
import { useRouter } from "next/router";

function quiz() {
    const router = useRouter();
    const [question, setQuestion] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [desc1, setDesc1] = useState('');
    const [desc2, setDesc2] = useState('');
    const [desc3, setDesc3] = useState('');
    const [desc4, setDesc4] = useState('');
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [answer, setAnswer] = useState('');

    const uploadToClient1 = function (File) {
        var imageString = File.base64;
        var comma = imageString.indexOf(",");
        var newImageString = imageString.substring(comma + 1, imageString.length);
        setImage1(newImageString);
        setShow1(true);
    };

    const uploadToClient2 = function (File) {
        var imageString = File.base64;
        var comma = imageString.indexOf(",");
        var newImageString = imageString.substring(comma + 1, imageString.length);
        setImage2(newImageString);
        setShow2(true);
    };

    const uploadToClient3 = function (File) {
        var imageString = File.base64;
        var comma = imageString.indexOf(",");
        var newImageString = imageString.substring(comma + 1, imageString.length);
        setImage3(newImageString);
        setShow3(true);
    };

    const uploadToClient4 = function (File) {
        var imageString = File.base64;
        var comma = imageString.indexOf(",");
        var newImageString = imageString.substring(comma + 1, imageString.length);
        setImage4(newImageString);
        setShow4(true);
    };

    const handleChange = function (e) {
        setQuestion(e.target.value);
    };

    const handleChangeDesc1 = function (e) {
        setDesc1(e.target.value);
    };

    const handleChangeDesc2 = function (e) {
        setDesc2(e.target.value);
    };

    const handleChangeDesc3 = function (e) {
        setDesc3(e.target.value);
    };

    const handleChangeDesc4 = function (e) {
        setDesc4(e.target.value);
    };

    const handleChangeAnswer = function (e) {
        setAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://hackathon-backend.azurewebsites.net/createQuiz", {
                question: question,
                answer: answer,
                lessonID: router.query.id,
                pic1: image1,
                pic2: image2,
                pic3: image3,
                pic4: image4,
                desc1: desc1,
                desc2: desc2,
                desc3: desc3,
                desc4: desc4
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
                        onChange={handleChange}
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
                                {show1 ? (
                                    <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                                        <img
                                            src={`data:image/png;base64,${image1}`}
                                            style={{
                                                width: '10rem',
                                                height: '10rem',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ) : ("")}
                                <FileBase64
                                    name='myImage'
                                    onDone={uploadToClient1.bind(this)}
                                ></FileBase64>
                                <TextField
                                    required
                                    label='Desc1'
                                    sx={{
                                        display: 'block',
                                        marginTop: '2rem',
                                    }}
                                    onChange={handleChangeDesc1}
                                >
                                    {desc1}
                                </TextField>
                            </Grid>

                            <Grid item xs={6}>
                                {show2 ? (
                                    <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                                        <img
                                            src={`data:image/png;base64,${image2}`}
                                            style={{
                                                width: '10rem',
                                                height: '10rem',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ) : ("")}
                                <FileBase64
                                    name='myImage'
                                    onDone={uploadToClient2.bind(this)}
                                ></FileBase64>
                                <TextField
                                    required
                                    label='Desc2'
                                    sx={{
                                        display: 'block',
                                        marginTop: '2rem',
                                    }}
                                    onChange={handleChangeDesc2}
                                >
                                    {desc2}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                {show3 ? (
                                    <Box sx={{ width: '10rem', height: '10rem', border: 'solid' }}>
                                        <img
                                            src={`data:image/png;base64,${image3}`}
                                            style={{
                                                width: '10rem',
                                                height: '10rem',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ) : ("")}
                                <FileBase64
                                    name='myImage'
                                    onDone={uploadToClient3.bind(this)}
                                ></FileBase64>
                                <TextField
                                    required
                                    label='Desc3'
                                    sx={{
                                        display: 'block',
                                        marginTop: '2rem',
                                    }}
                                    onChange={handleChangeDesc3}
                                >
                                    {desc3}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                {show4 ? (
                                    <Box sx={{ width: '10rem', height: '10rem', border: 'solid', marginTop: '10px' }}>
                                        <img
                                            src={`data:image/png;base64,${image4}`}
                                            style={{
                                                width: '10rem',
                                                height: '10rem',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ) : ("")}
                                <FileBase64
                                    name='myImage'
                                    onDone={uploadToClient4.bind(this)}
                                ></FileBase64>
                                <TextField
                                    required
                                    label='Desc4'
                                    sx={{
                                        display: 'block',
                                        marginTop: '2rem',
                                    }}
                                    onChange={handleChangeDesc4}
                                >
                                    {desc4}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                    <TextField
                        required
                        label='Answer'
                        sx={{
                            display: 'block',
                            marginTop: '2rem',
                        }}
                        onChange={handleChangeAnswer}
                    >
                        {answer}
                    </TextField>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        style={{ display: "block" }}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
}

export default quiz;
