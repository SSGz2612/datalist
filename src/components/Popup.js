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
// data
import popupData from '../data/popupData.json';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function Popup(props){
    const [ contacts, setContacts ] = useState(popupData);
    
    const [ userData, setUserData ] = useState({
        id: "",
        user: "",
        date: "",
        comment: ""
    });

    const addUserData = (e) => {
        e.preventDefault();

        const fName = e.target.getAttribute("name");
        const fValue = e.target.value;

        const newValue = { ...userData };
        newValue[fName] = fValue;

        setUserData(newValue);
    }

    const submitUser = (e) => {
        e.preventDefault();

        const newUser = {
            id: userData.id,
            user: userData.user,
            date: userData.date,
            comment: userData.comment
        }

        const newDUser = [ ...contacts, newUser ];
        setContacts(newDUser);
        console.log(contacts);
    }

    return(props.trigger) ? (
        <div className="containerPopup">
            <div className="popup">
                <div className='principal'>
                    <TableContainer sx={{ margin: 0, width: 1, height: 1 }} component={ Paper }>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        colSpan={4}
                                        align="center"
                                    >
                                        <b>Regions</b>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row"><b>Value</b></TableCell>
                                    
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">User</TableCell>
                                    <TableCell align="center">Comment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { contacts.map((key) => (
                                <StyledTableRow className='cursor' key={key.id}>
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
                                                <input type="text" name="id" onChange={ addUserData }></input>
                                                <input type="date" name="date" onChange={ addUserData }></input>
                                                <input type="text" name="user" onChange={ addUserData }></input>
                                                <input type="text" name="comment" onChange={ addUserData }></input>
                                            </div>

                                            <div className="setBtn">
                                                <Button variant="contained" size="small" type="submit">Add</Button>
                                                <Button variant="outlined" size="small" onClick={() => props.setTrigger(false)}>Close</Button>
                                            </div>
                                        </form>
                                    </TableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    ) : "";
}

export default Popup;