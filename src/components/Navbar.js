import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { blue } from "@mui/material/colors";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "110px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: " 229px", height: " 210px", margin: "-79px -41px" }}
        />
      </Link>
      <Stack direction="row" gap="53px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #1437ba",
          }}
        >
          Home{" "}
        </Link>
        <a
          href="#exercise"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #1437ba",
          }}
        >
          Exercises
        </a>
        {isAuthenticated ? (
          <a>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </a>
        ) : (
          <a>
            <button
              style={{
                border: "none",
                textAlign: "center",
                padding: "3px",
                fontSize: "22px",
                textTransform: "none",
                color: "#3A1212",
                borderBottom: "3px solid #1437ba",
                backgroundColor: "#fffafb", 
              }}
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </a>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
