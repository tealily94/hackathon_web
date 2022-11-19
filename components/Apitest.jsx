import axios from "axios";

import { useState, useEffect } from "react";
function Apitest() {
  const baseURL = "https://hackathon-backend.azurewebsites.net/lessons";
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);
  return <div></div>;
}

export default Apitest;
