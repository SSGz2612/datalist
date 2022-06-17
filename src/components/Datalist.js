import * as React from 'react';
import { useState } from 'react';
// material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// data
import { data } from '../data/testData.js';
// popup
import Popup from './Popup.js';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function Datalist(){
    const [ butPop, setButPop ] = useState(false);
    return (
        <div className='principal'>
            <TableContainer sx={{ margin: "auto", width: "80%", height: 1 }} component={ Paper }>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center" colSpan={3}><b>2017</b></TableCell>
                            <TableCell align="center" colSpan={3}><b>2018</b></TableCell>
                            <TableCell align="center" colSpan={3}><b>2019</b></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row"><b>Regions</b></TableCell>
                            
                            <TableCell align="center">XX</TableCell>
                            <TableCell align="center">YY</TableCell>
                            <TableCell align="center">ZZ</TableCell>
                            
                            <TableCell align="center">XX</TableCell>
                            <TableCell align="center">YY</TableCell>
                            <TableCell align="center">ZZ</TableCell>
                            
                            <TableCell align="center">XX</TableCell>
                            <TableCell align="center">YY</TableCell>
                            <TableCell align="center">ZZ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { Object.keys(data).map((key) => (
                        <StyledTableRow className='cursor' onClick={() => setButPop(true)} key={key}>
                            <TableCell component="th" scope="row">{key}</TableCell>
                            <TableCell align="center">
                                { data[key].G[2017] === undefined ? "-" : (data[key].G[2017].XX.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2017] === undefined ? "-" : (data[key].G[2017].YY.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2017] === undefined ? "-" : (data[key].G[2017].ZZ.value)}
                            </TableCell>
                            
                            <TableCell align="center">
                                { data[key].G[2018] === undefined ? "-" : (data[key].G[2018].XX.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2018] === undefined ? "-" : (data[key].G[2018].YY.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2018] === undefined ? "-" : (data[key].G[2018].ZZ.value)}
                            </TableCell>
                            
                            <TableCell align="center">
                                { data[key].G[2019] === undefined ? "-" : (data[key].G[2019].XX.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2019] === undefined ? "-" : (data[key].G[2019].YY.value)}
                            </TableCell>
                            <TableCell align="center">
                                { data[key].G[2019] === undefined ? "-" : (data[key].G[2019].ZZ.value)}
                            </TableCell>
                        </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Popup trigger={butPop} setTrigger={setButPop}/>
        </div>
  );
}

export default Datalist;