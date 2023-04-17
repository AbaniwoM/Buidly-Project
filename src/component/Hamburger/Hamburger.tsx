// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { makeStyles } from "@material-ui/core";
// import { Link } from "react-scroll";
// import "./Hamburger.scss";

// const useStyles = makeStyles((theme) => ({
//   menu: {
//     [theme.breakpoints.down("sm")]: {
//       marginLeft: "18px",
//       marginTop: "5px",
//       maxWidth: "68%",
//     },
//     [theme.breakpoints.between("sm", "md")]: {
//       marginLeft: "80px",
//       marginTop: "5px",
//     }
//   },
// }));

// export default function Hamburger() {
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const classes = useStyles();
//   const open = Boolean(anchorEl);
//   const handleClick = (event:any) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <div className="hamburger-menu">
//           <GiHamburgerMenu />
//         </div>
//       </Button>
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//           className={classes.menu}
//         >
//           <MenuItem onClick={() => navigate("/home")}>Home</MenuItem>
//           <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
//           <Link to="projs" smooth={true} duration={1000}>
//             <MenuItem>Projects</MenuItem>
//           </Link>
//           <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
//         </Menu>
//     </div>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Link } from "react-scroll";
// import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Hamburger() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{display: "flex", flexDirection: "column", gap: "7px", color: "#213F7D", paddingLeft: "25px"}}>
            {/* <div style={{display: "flex", alignItems: "center", fontSize: "1.4rem", paddingTop: "15px"}}>User</div> */}
            <div onClick={() => navigate("/home")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px"}}>Home</div>
            <div onClick={() => navigate("/about")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px"}}>About</div>
            <Link to="projs" smooth={true} duration={1000}>
              <div style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px"}}>Projects</div>
            </Link>
            <div onClick={() => navigate("/contact")} style={{display: "flex", justifyContent: "center", fontSize: "1.4rem", paddingTop: "15px", paddingBottom: "30px"}}>Contact</div>
            {/* <div className="drop-down">
                <ProfileDropdown />
            </div> */}
        </List>
    </Box>
  );

  return (
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{ fontSize: "1.8rem"}}>
              <GiHamburgerMenu />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}