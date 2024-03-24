import React from "react";
import { Alert, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const [pic, setPic] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics == undefined) {
      <Alert severity="error">No image selected</Alert>;
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/jpeg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dda4l3sle");
      fetch(process.env.CLOUDINARY_URL, {
        method: "POST",
        body: data,
      })
        .then((res) =>
          res.json().then((data) => {
            setPic(data.url.toString());
            setLoading(false);
          })
        )
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      <Alert severity="error">Selected file is not an image!</Alert>;
    }
  };
  const submitHandler = () => {};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        margin: "auto",
      }}
    >
      <Typography variant="body1">Enter Name</Typography>
      <TextField
        id="usrnm"
        variant="outlined"
        size="small"
        style={{ marginBottom: "2vh" }}
        onChange={(e) => setName(e.target.value)}
      />
      <Typography variant="body1">Enter Email</Typography>
      <TextField
        id="usremail"
        variant="outlined"
        size="small"
        style={{ marginBottom: "2vh" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Typography variant="body1">Enter Password</Typography>
      <TextField
        id="pwd"
        variant="outlined"
        size="small"
        type="password"
        style={{ marginBottom: "2vh" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Typography variant="body1">Confirm Password</Typography>
      <TextField
        id="confirm-pwd"
        variant="outlined"
        size="small"
        type="password"
        style={{ marginBottom: "2vh" }}
        onChange={(e) => setCpassword(e.target.value)}
      />
      <Typography variant="body1">Upload Profile Picture</Typography>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => postDetails(e.target.files[0])}
      />
      <LoadingButton
        variant="contained"
        loading={loading}
        onClick={() => {
          console.log(name);
          console.log(email);
          console.log(password);
          console.log(cpassword);
        }}
      >
        Signup
      </LoadingButton>
    </div>
  );
};

export default SignUp;
