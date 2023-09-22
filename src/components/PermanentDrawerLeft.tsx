import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@mui/icons-material/Home'
import TagIcon from '@mui/icons-material/Tag';
import LinkIcon from '@mui/icons-material/Link';
import TimerOutlined from '@mui/icons-material/TimerOutlined';
import CachedOutlined from '@mui/icons-material/CachedOutlined';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Card } from '@material-ui/core';


export interface IPermanentDrawerLeft {
    children: React.ReactNode;
}
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display:'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display:'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        link:{
            textDecoration: 'none',
            color: theme.palette.text.secondary,
        },
        title: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: theme.palette.common.white,
        },
        childrenCard: {
            maxWidth: '1000px',
            minWidth: '350px',
            margin: '0 auto',
            backgroundColor: theme.palette.common.white,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: theme.spacing(4),
        },
    }),
);

const menuList = [
    {
        path:'/home',
        name:'ホーム',
        icon:<HomeIcon /> 
    },
    {
        path:'/hash',
        name:'ハッシュ値',
        icon:<TagIcon /> 
    },
    {
        path:'/url',
        name:'URLエンコード',
        icon:<LinkIcon /> 
    },

    {
        path:'/hex',
        name:'16進数変換',
        icon:<CachedOutlined /> 
    },
    {
        path:'/base64',
        name:'Base64',
        icon:<LinkIcon /> 
    },
    {
        path:'/count',
        name:'文字数カウント',
        icon:<TimerOutlined /> 
    },
]

const PermanentDrawerLeft: React.FC<IPermanentDrawerLeft> = ({children}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = React.useState<boolean>(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]:open,
                })}    
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/home' className={classes.title}>
                        <Typography variant='h6' noWrap>
                            String Utility App
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuList.map((item) => {
                        return (
                            <>
                            <Link to={item.path} className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                            </>
                        )
                    })}
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Card className={classes.childrenCard}>
                    {children}
                </Card>

            </main>
        </div>
    )
}

export default PermanentDrawerLeft;