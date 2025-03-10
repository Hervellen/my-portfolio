import { AppBar, MenuItem, Toolbar } from "@mui/material"
import { styled } from "@mui/system";


const NavBar = () => {
    const StyledToobar= styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
      }));

    return (
      <>
       <AppBar position="absolute">
        <StyledToobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        </StyledToobar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  