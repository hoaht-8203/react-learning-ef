import styled from '@emotion/styled';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
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

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                    <Button onClick={handleClickOpen} color="inherit">
                        Register
                    </Button>
                </Toolbar>
            </Heading>

            <Dialog open={open} disableEscapeKeyDown>
                <CloseButton onClick={handleClose}>
                    <DoDisturbOnOutlinedIcon />
                </CloseButton>
                <DialogContent>
                    <Register closeDialog={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
}
