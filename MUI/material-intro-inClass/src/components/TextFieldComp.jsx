import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
  // inputlardaki erro durumu için
  const [error, setError] = useState(false);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" color="secondary.light" align="center" m={4}>
        TEXT FIELD
      </Typography>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        placeholder="Enter Your Email"
        fullWidth
        margin="normal"
        required
        error={error}
        helperText={error && "Incorrect email format"}
      />
      <TextField
        id="password"
        label="password"
        type="password"
        variant="filled"
        placeholder="Enter Your password"
        fullWidth
        margin="normal"
        required
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  );
};

export default TextFieldComp;
