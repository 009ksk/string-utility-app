import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { generateSHA256, generateSHA512 } from "../modules/HashModule";
import { CountString } from "../modules/CountModule";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            textAlign: 'left',
            fontSize: '30px',
            fontWeight: 'bold',
            marginTop: '10px',
            marginBottom: '30px',
        },
        alertText:{
            color: theme.palette.error.main,
            textAlign:'left',
            marginTop: '50px',
            marginBottom: '10px',
        },
        textField:{
            width: '100%',
            marginTop:'50px',
        },
        button:{
            marginTop: '50px',
            width: '100%',
            height: '40px',
            fontSize: '16px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '&:hover':{
                backgroundColor: theme.palette.primary.light,
            }
        },
        clearButton: {
            marginTop: '50px',
            width: '100%',
            height: '40px',
            fontSize: '16px',
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.common.white,
            '&:hover':{
                backgroundColor: theme.palette.grey[500],
            }
        }
    })
)

const Count: React.FC = () => {
    const classes = useStyles();
    const [ originValue, setOriginValue ] = useState<string>('');
    const [ countValue, setCountValue ] = useState<string>('');
    const [ alertValue, setAlertValue ] = useState<string>('');
    
    // handler
    const handleOriginTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOriginValue(event.target.value)
    }

    const handleExecButtonClick = () => {
        if (originValue === ''){
            setAlertValue('入力してください。');
            return;
        }
        let tempStr: string = CountString(originValue).toString();
        if (tempStr === '' ){
            setAlertValue('変換に失敗しました。');
            return;
        }

        setAlertValue('');
        setCountValue(tempStr);
    }

    const handleClearButtonClick = () => {
        setCountValue('');
        setOriginValue('');
        setAlertValue('');
    }

    return (
        <div>
            <Typography className={classes.title}>文字数カウント</Typography>        
            <Divider />
            <TextField 
                id='outlined-multiline-static'
                label='入力'
                multiline
                minRows={5}
                defaultValue=''
                value={originValue}
                className={classes.textField}
                variant='outlined'
                onChange={handleOriginTextFieldChange}
            />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        className={classes.button}
                        onClick={handleExecButtonClick}
                    >
                        カウント
                    </Button>
                </Grid>
            </Grid>
            <TextField 
                id='outlined-multiline-static'
                label='文字数'
                inputProps={{
                    readOnly: true,
                }}
                multiline
                minRows={5}
                defaultValue=''
                value={countValue}
                className={classes.textField}
                variant='filled'
            />
            <Button
                variant="contained"
                className={classes.clearButton}
                onClick={handleClearButtonClick}
            >
                クリア
            </Button>
            <Typography className={classes.alertText}>
                {alertValue}
            </Typography>
        </div>
    );
}

export default Count;