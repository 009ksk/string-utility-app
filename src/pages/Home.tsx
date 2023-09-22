import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            textAlign: 'left',
            fontSize: '30px',
            fontWeight: 'bold',
            marginTop: '10px',
            marginBottom: '30px',
        },
    }));

const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography className={classes.title}>Home</Typography>
            <Divider />
        </div>
    );
}

export default Home;