import Inputs from "@/components/Inputs";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (!response.ok) {
      setError("User Already exists!");
    } else {
      setMessage(result.message);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box sx={{ width: "50%", height: "inherit", position: "relative" }}>
        <Typography
          sx={{
            px: 4,
            py: 4,
            fontSize: "24px",
            fontWeight: 600,
            color: "#1C4532",
          }}
        >
          NEWSHUB
        </Typography>
        <Box
          sx={{
            px: 10,
            pb: 4,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{ fontSize: "35px", fontWeight: 700, color: "#171923" }}
          >
            Sign Up
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{
                color: "#718096",
                fontSize: "16px",
              }}
            >
              Already have an account?
            </Typography>
            <Typography
              sx={{
                color: "#1C4532",
                borderBottom: "2px solid #1C4532",
                fontWeight: 600,
                alignSelf: "center",
              }}
            >
              <Link href="/login">Sign In</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 10 }}>
          <form onSubmit={submitHandler}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Inputs
                name="name"
                label="Username"
                type="text"
                onChange={(event) => {
                  setUserData((prev) => {
                    return { ...prev, name: event.target.value };
                  });
                }}
              />
              <Inputs
                name="email"
                label="E-mail"
                type="email"
                onChange={(event) => {
                  setUserData((prev) => {
                    return { ...prev, email: event.target.value };
                  });
                }}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                onChange={(event) => {
                  setUserData((prev) => {
                    return { ...prev, password: event.target.value };
                  });
                }}
              />
              {loading && <CircularProgress />}
              {message && <Alert severity="success">{message}</Alert>}
              {error && <Alert severity="error">{error}</Alert>}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: 2,
                  "&.MuiButton-root": {
                    backgroundColor: "#1C4532",
                    color: "white",
                    borderRadius: "15px",
                    boxShadow: "none",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "inherit",
          backgroundColor: "#1C4532",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#F7FAFC",
            width: "400px",
            height: "fit-content",
            borderRadius: "12px",
            boxSizing: "border-box",
            p: 3,
          }}
        >
          <Typography
            sx={{
              color: "#1C4532",
              fontSize: "26px",
              fontWeight: 800,
              letterSpacing: "0.05em",
            }}
          >
            Get Latest News Faster
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#718096", mt: 2 }}>
            Get the latest news only on our website , sign up for latest news
            updates
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              "&.MuiButton-root": {
                backgroundColor: "#1C4532",
                color: "white",
                borderRadius: "25px",
                boxShadow: "none",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#F7FAFC",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            Introducing new features
          </Typography>
          <Typography
            sx={{
              width: "400px",
              mt: 3,
              fontSize: "15px",
              color: "#CFD9E0",
              textAlign: "center",
            }}
          >
            Analyzing previous trends ensures that businesses always make the
            right decision. And as the scale of the decision and it’s impact
            magnifies...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Signup.guestGuard = true;
export default Signup;
