import React, { FunctionComponent, ReactElement } from "react";

import { useAuthContext } from "@asgardeo/auth-react";

import {
    AppBar,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Theme,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const themedStyles = (theme: Theme) => {
    return {
        appBar: {
            background: "#ffffff",
            zIndex: theme.zIndex.drawer + 1
        }
    }
}

/**
 * Component to display for header section.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Header: FunctionComponent = (): ReactElement => {
    const { signOut, state } = useAuthContext();

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        signOut();
    }
    // sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#ffffff" }}
    return (
        <AppBar sx={{ ...themedStyles(theme).appBar }} elevation={0} position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ color: "black", flexGrow: 1 }}>
                    Logo
                </Typography>
                {true && (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle sx={{ color: "black" }} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
            <Divider />
        </AppBar>
    );
};