import styled from '@emotion/styled';
import { AccountCircle } from '@mui/icons-material';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'features/Auth/components/Login';
import Register from 'features/Auth/components/Register';
import { logout } from 'features/Auth/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const CloseButton = styled(IconButton)({
    position: 'absolute',
    right: '0',
    margin: '0.3rem',
    color: '#03396c',
});

const Heading = styled(AppBar)({
    '&.MuiAppBar-root': {
        backgroundColor: '#03396c',
        boxShadow: 'none',
    },
});

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

export default function Header() {
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = loggedInUser.id ? true : false;
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAccountMenu = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenMenuAccount = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenuAccount = (event) => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        setAnchorEl(null);
    };

    return (
        <>
            <Heading className="header" position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" className="header__link">
                            React App
                        </Link>
                    </Typography>
                    <NavLink className={(nav) => (nav.isActive ? 'header__link--active' : 'header__link')} to="/todos">
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink className={(nav) => (nav.isActive ? 'header__link--active' : 'header__link')} to="/albums">
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    {isLoggedIn && (
                        <>
                            <NavLink
                                className={(nav) => (nav.isActive ? 'header__link--active' : 'header__link')}
                                to="/products">
                                <Button color="inherit">Product</Button>
                            </NavLink>
                            <IconButton
                                id="account-button"
                                color="inherit"
                                onClick={handleOpenMenuAccount}
                                aria-controls={openAccountMenu ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={openAccountMenu ? 'true' : undefined}>
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="account-menu"
                                anchorEl={anchorEl}
                                open={openAccountMenu}
                                onClose={handleCloseMenuAccount}
                                MenuListProps={{
                                    'aria-labelledby': 'account-button',
                                }}>
                                <MenuItem onClick={handleCloseMenuAccount}>Profile</MenuItem>
                                <MenuItem onClick={handleCloseMenuAccount}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </>
                    )}
                    {!isLoggedIn && (
                        <Button onClick={handleClickOpen} color="inherit">
                            Login
                        </Button>
                    )}
                </Toolbar>
            </Heading>

            <Dialog open={open} disableEscapeKeyDown>
                <CloseButton onClick={handleClose}>
                    <DoDisturbOnOutlinedIcon />
                </CloseButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box sx={{ textAlign: 'center', mt: '1rem' }}>
                                <Button onClick={() => setMode(MODE.LOGIN)}>Already have an account. Login here</Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box sx={{ textAlign: 'center', mt: '1rem' }}>
                                <Button onClick={() => setMode(MODE.REGISTER)}>
                                    Dont have an account. Register here
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
