import React, { useState } from "react";
import '../App.css';
// material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
// redux
import { connect } from "react-redux/es/exports.js";
import { updateData } from "../redux/reducer.js";
// browser-router
import { Link } from "react-router-dom";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function Popup(props){
    // date
    let valDate = new Date();
    let today = `${valDate.getFullYear()}-${valDate.getMonth() === 0 ?
        valDate.getMonth() : 
        '0'+valDate.getMonth()}-${valDate.getDate()
    }`;
    // id number
    const [ num, setNum ] = useState(Number);

    const [ userData, setUserData ] = useState({
        id: 0,
        date: today,
        user: "",
        comment: ""
    });

    const addUserData = (e) => {
        e.preventDefault();
        const fName = e.target.getAttribute("name");
        let fValue = e.target.value;
        
        // generate the ID unique
        setUserData({id: 1});
        console.log(userData);
        if( fName === "id" ){
            setNum(e.target.value.replace(/\D/g, ''));
            if(isNaN(fValue)){
                fValue = 1;
            }
            let numInArray = props.dataJsn.map((x) => x.id);
            console.log(numInArray);
            while(numInArray.includes(parseInt(fValue))){
                fValue++;
            }

            const newValue = { ...userData };
            newValue[fName] = parseInt(fValue);
            setUserData(newValue);
        } else {
            // generate a json
            const newValue = { ...userData };
            newValue[fName] = fValue;
            setUserData(newValue);
        }
    }

    const submitUser = (e) => {
        e.preventDefault();

        setUserData({id: 1});
        console.log(userData);

        if(isNaN(userData.id)){
            setUserData({id: 1});
        }
        let numInArray = props.dataJsn.map((x) => x.id);
        console.log(numInArray);
        
        while(numInArray.includes(parseInt(userData.id))){
            setUserData(userData.id++);
        }

        const newValue = { ...userData };
        setUserData(newValue);

        const newUser = {
            id: userData.id,
            user: userData.user,
            date: userData.date,
            comment: userData.comment
        }

        props.userData({
            fromCity: props.cityName,
            newUser: newUser
        });
    }

    const toClose = () => {
        window.close();
    }

    return(
        <div className="popup">
            <TableContainer sx={{ margin: 0, width: 1, height: 1 }} component={ Paper }>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row"><b>Value</b></TableCell>
                            
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Comment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { props.dataJsn.map((key) => (
                        <StyledTableRow key={key.id}>
                            <TableCell component="th" scope="row">{key.id}</TableCell>

                            <TableCell align="center">{ key.date }</TableCell>
                            <TableCell align="center">{ key.user }</TableCell>
                            <TableCell align="center">{ key.comment }</TableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell component="th" scope="row" colSpan={4}>
                                <form onSubmit={ submitUser }>
                                    <div className="setIpt">
                                        <input type="text" name="id" onChange={ addUserData } value={num}></input>
                                        <input type="date" name="date" onChange={ addUserData } value={today}></input>
                                        <input placeholder="Name" type="text" name="user" onChange={ addUserData }></input>
                                        <input placeholder="Comments..." type="text" name="comment" onChange={ addUserData }></input>
                                    </div>

                                    <div className="setBtn">
                                        <Button variant="contained" size="small" type="submit">Add</Button>
                                        <Link className="btn" to="/" onClick={ toClose }>
                                            <Button variant="outlined" size="small">Close</Button>
                                        </Link>
                                    </div>
                                </form>
                            </TableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        dataJsn: state.dataJsn,
        cityName: state.cityName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userData: (data) => dispatch(updateData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);