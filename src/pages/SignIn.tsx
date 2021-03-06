import React, { FC, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Link } from "react-router-dom";

const theme = createTheme();

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
};

export const SignIn: FC<Props> = (props) => {
  const { setName, name } = props;
  const [disabled, setDisabled] = React.useState(true);
  const [string, setString] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const disabled = string === "";
    setDisabled(disabled);
  }, [string]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setName(string);
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
  };

  useEffect(() => {
    if (name !== "") {
      navigate("/main");
    }
  }, [name, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(e) => setString(e.target.value)}
              value={string}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={() => setName(string)}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Link to="/main">main</Link>
      </Container>
    </ThemeProvider>
  );
};
