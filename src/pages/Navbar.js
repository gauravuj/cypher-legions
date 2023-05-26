import React, { useState } from "react";

import Logo from "../images/LogoWhite.png";
import { AppsRounded } from "grommet-icons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-scroll";
import { HomeRounded } from "grommet-icons";
import { ContactInfo } from "grommet-icons";
import { Group } from "grommet-icons";
import { ChatOption } from "grommet-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeRounded />,
    },
    {
      text: "About",
      icon: <ContactInfo />,
    },
    {
      text: "16 Personality",
      icon: <Group />,
    },
    {
      text: "Contact",
      icon: <ChatOption />,
    },
  ];

  /* Sign Up link to the Login Page */
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
        <Link to="/about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
        <Link
          to="/personality"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          16 Personality
        </Link>
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
        <button className="primary-button" onClick={handleClick}>
          Sign In
        </button>
      </div>

      <div className="navbar-menu-container">
        <AppsRounded onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
