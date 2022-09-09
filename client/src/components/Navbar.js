import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import logo from "./Safran_-_logo_2016.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authAction";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function AppNavBar(props) {
  const token = localStorage.getItem("token");
  const auth = useSelector(state => state.AuthReducer.auth);
  const dispatch = useDispatch(); 
  const Navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ color: "white", backgroundColor: "#31525B" }}>
          <Toolbar>
            {token && auth === true ? 
            <div style={{display: "flex"}}>
             <Typography variant="h6" component="div">
              <Link to="/Profile">
                <img src={logo} alt="LOGO" />
              </Link>
            </Typography>
            <div
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "350px",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                style={{ marginRight: "60px" }}
              >
                Dashboard
              </Typography>
              <Link
                to="/Profile/Article"
                className="Nav-element"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  style={{ marginRight: "60px" }}
                >
                  Article
                </Typography>
              </Link>
              <Link
                to="/Profile/ajouterArticle"
                className="Nav-element"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  style={{ marginRight: "60px" }}
                >
                  Ajouter
                </Typography>
              </Link>
              <Link
                to="/Profile/calendrier"
                className="Nav-element"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  className="Nav-element"
                  style={{ marginRight: "60px" }}
                >
                  Calendrier
                </Typography>
              </Link>
              <Link
                to="/Profile/xls"
                className="Nav-element"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  className="Nav-element"
                  style={{ marginRight: "60px" }}
                >
                  xls
                </Typography>
              </Link>
              <Link
                to="/Profile/mq2706"
                className="Nav-element"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  className="Nav-element"
                  style={{ marginRight: "60px" }}
                >
                  mq2706
                </Typography>
              </Link>
              <Typography
                  variant="h6"
                  component="div"
                  className="Nav-element"
                  style={{ marginRight: "60px" }}
                  onClick = {()=>dispatch(logout(Navigate))}
                >
                  logout
                </Typography>
            </div>
            </div>
            :
            <div style={{display: "flex", justifyContent:"space-between"}}>
              <Typography variant="h6" component="div">
              <Link to="/">
                <img src={logo} alt="LOGO" />
              </Link>
            </Typography>
            </div>
            }
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}></Box>
      </Container>
    </React.Fragment>
  );
}
