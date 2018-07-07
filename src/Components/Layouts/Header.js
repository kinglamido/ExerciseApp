import React from 'react';
import{AppBar, Typography, Toolbar, IconButton, Button, } from "@material-ui/core"

class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
            <Toolbar>
                <Typography variant="headline" color="inherit">
                Exercise Database
                </Typography>
            </Toolbar>
          </AppBar>
        )
    }
}

export default Header;