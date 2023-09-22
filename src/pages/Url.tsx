import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { KeyboardArrowUpOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";
import { decodeUrl, encodeUrl } from "../modules/UrlModule";

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

const Url: React.FC = () => {
    const classes = useStyles();
    const [ originValue, setOriginValue ] = useState<string>('');
    const [ urlEncodeValue, setUrlEncodeValue ] = useState<string>('');
    const [ alertValue, setAlertValue ] = useState<string>('');
    
    // handler
    const handleOriginTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOriginValue(event.target.value)
    }

    const handleHexTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrlEncodeValue(event.target.value)
    }

    const handleUpButtonClick = () => {
        if (urlEncodeValue === ''){
            setAlertValue('URLエンコード文字列を正しく入力してください。');
            return;
        }
        let tempStr: string = decodeUrl(urlEncodeValue);

        if (tempStr === ''){
            setAlertValue('変換に失敗しました。');
            return;
        }

        setAlertValue('');
        setOriginValue(tempStr);
    }

    const handleDownButtonClick = () => {
        if (originValue === ''){
            setAlertValue('平文を入力してください。');
            return;
        }
        let tempStr: string = encodeUrl(originValue);

        if (tempStr === ''){
            setAlertValue('変換に失敗しました。');
            return;
        }

        setAlertValue('');
        setUrlEncodeValue(tempStr);
    }

    const handleClearButtonClick = () => {
        setUrlEncodeValue('');
        setOriginValue('');
        setAlertValue('');
    }

    return (
        <div>
            <Typography className={classes.title}>URLエンコード</Typography>        
            <Divider />
            <TextField 
                id='outlined-multiline-static'
                label='平文'
                multiline
                minRows={5}
                defaultValue=''
                value={originValue}
                className={classes.textField}
                variant='outlined'
                onChange={handleOriginTextFieldChange}
            />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button
                        variant='contained'
                        className={classes.button}
                        onClick={handleDownButtonClick}
                    >
                        <KeyboardArrowDownOutlined />
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant='contained'
                        className={classes.button}
                        onClick={handleUpButtonClick}
                    >
                        <KeyboardArrowUpOutlined />
                    </Button>
                </Grid>
            </Grid>
            <TextField 
                id='outlined-multiline-static'
                label='URLエンコード'
                multiline
                minRows={5}
                defaultValue=''
                value={urlEncodeValue}
                className={classes.textField}
                variant='outlined'
                onChange={handleHexTextFieldChange}
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

export default Url;