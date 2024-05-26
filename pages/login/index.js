import Inputs from "@/components/Inputs";
import Link from "next/link";
import {
  Box,
  Typography,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rememberme: false,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter()

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.status !== 201 && response.status !== 200) {
        setError(result.message);
        setLoading(false);
      } else {
        setLoading(false);
        setError(null);
        setMessage(result.message);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("token", result.token);
        setTimeout(()=>{
            router.push('/')
        },2000)
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
            Sign In
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{
                color: "#718096",
                fontSize: "16px",
              }}
            >
              Don’t have an account?
            </Typography>
            <Typography
              sx={{
                color: "#1C4532",
                borderBottom: "2px solid #1C4532",
                fontWeight: 600,
                alignSelf: "center",
              }}
            >
              <Link href="/signup">Create now</Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ px: 10 }}>
          <form onSubmit={submitHandler}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Inputs
                    type="checkbox"
                    label="Remember me"
                    name="remember"
                    onChange={(event) => {
                      setUserData((prev) => {
                        return { ...prev, rememberme: event.target.checked };
                      });
                    }}
                  />
                  <Typography
                    sx={{
                      alignSelf: "center",
                      color: "#718096",
                      fontSize: "15px",
                    }}
                  >
                    Remember me
                  </Typography>
                </Box>
                <Typography sx={{ color: "#718096", fontSize: "15px" }}>
                  Forgot Password?
                </Typography>
              </Box>
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
                Sign In
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

Login.guestGuard = true;
export default Login;
