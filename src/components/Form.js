import axios from "axios";
import React, { useState } from "react";

export default function Form(props) {
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      props.onSubmit(res.data);
      setUsername("");
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="enter username"
      />
      <input type="submit" value="submit" />
    </form>
  );
}
