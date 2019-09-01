import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreIcon from '@material-ui/icons/MoreVert';

import NavLinkItem from '../NavLinkItem/NavLinkItem';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));

const Navbar = (props) => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    function handleMobileMenuClose() {
        setMobileMoreAnchorEl(null);
    }

    function handleMobileMenuOpen(event) {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <NavLinkItem link="/" exact>
                    <IconButton>
                        <LocationOnIcon />
                    </IconButton>
                </NavLinkItem>
                <p>Nearby</p>
            </MenuItem>
            <MenuItem>
                <NavLinkItem link="/favorite">
                    <IconButton>
                        <FavoriteIcon />
                    </IconButton>
                </NavLinkItem>
                <p>Favorite</p>
            </MenuItem>
            <MenuItem>
                <NavLinkItem link="/history">
                    <IconButton>
                        <BookmarkIcon />
                    </IconButton>
                </NavLinkItem>
                <p>History</p>
            </MenuItem>
            <MenuItem>
                <NavLinkItem link="/recommend">
                    <IconButton>
                        <ThumbUpIcon />
                    </IconButton>
                </NavLinkItem>
                <p>Recommendation</p>
            </MenuItem>
            <MenuItem>
                <NavLinkItem link="/logout">
                    <IconButton>
                        <AccountCircle />
                    </IconButton>
                </NavLinkItem>
                <p>Logout</p>
            </MenuItem>
        </Menu>
    );

    let toolBar = (
        <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                Linkedin
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <NavLinkItem link="/" exact>
                    <IconButton color="inherit">
                        <LocationOnIcon />
                    </IconButton>
                </NavLinkItem>
                <NavLinkItem link="/favorite">
                    <IconButton color="inherit">
                        <FavoriteIcon />
                    </IconButton>
                </NavLinkItem>
                <NavLinkItem link="/history">
                    <IconButton color="inherit">
                        <BookmarkIcon />
                    </IconButton>
                </NavLinkItem>
                <NavLinkItem link="/recommend">
                    <IconButton color="inherit">
                        <ThumbUpIcon />
                    </IconButton>
                </NavLinkItem>
                <NavLinkItem link="/logout">
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </NavLinkItem>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                >
                    <MoreIcon />
                </IconButton>
            </div>
        </Toolbar>
    );

    if (!props.isAuth) {
        toolBar = (
            <Toolbar>
                <Typography className={classes.title} variant="h6" noWrap>
                    Linkedin
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={classes.grow} />
                <NavLinkItem link="/auth">
                    <PersonAddIcon color="inherit"/>
                </NavLinkItem> 
            </Toolbar>
        );
    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                {toolBar}
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}

export default Navbar;