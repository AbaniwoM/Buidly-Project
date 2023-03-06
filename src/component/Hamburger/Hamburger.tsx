import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import "./Hamburger.scss";

const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "18px",
      marginTop: "5px",
      maxWidth: "68%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginLeft: "80px",
      marginTop: "5px",
    }
  },
}));

export default function Hamburger() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="hamburger-menu">
          <GiHamburgerMenu />
        </div>
      </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          className={classes.menu}
        >
          <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
          <Link to="projs" smooth={true} duration={1000}>
            <MenuItem>Projects</MenuItem>
          </Link>
          <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
        </Menu>
    </div>
  );
}