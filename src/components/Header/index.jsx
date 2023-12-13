import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/components/Register';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

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
                <DialogContent>
                    <Register />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
