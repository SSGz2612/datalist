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
// redux
import { connect } from 'react-redux/es/exports.js';
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

function Datalist(props){
    const [ butPop, setButPop ] = useState(false);

    const handleCityData = (e) => {
        console.log(e);
    }

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
                        { Object.keys(props.dataUser).map((key) => (
                        <StyledTableRow className='cursor' onClick={() => setButPop(true)} key={key}>
                            <TableCell component="th" scope="row">{key}</TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2017] === undefined ? "-" : props.dataUser[key].G[2017].XX.value + '/\n' + props.dataUser[key].G[2017].XX.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2017] === undefined ? "-" : props.dataUser[key].G[2017].YY.value + '/\n' + props.dataUser[key].G[2017].YY.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2017] === undefined ? "-" : props.dataUser[key].G[2017].ZZ.value + '/\n' + props.dataUser[key].G[2017].ZZ.dateRelease }
                            </TableCell>
                            
                            <TableCell align="center">
                                { props.dataUser[key].G[2018] === undefined ? "-" : props.dataUser[key].G[2018].XX.value + '/\n' + props.dataUser[key].G[2018].XX.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2018] === undefined ? "-" : props.dataUser[key].G[2018].YY.value + '/\n' + props.dataUser[key].G[2018].YY.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2018] === undefined ? "-" : props.dataUser[key].G[2018].ZZ.value + '/\n' + props.dataUser[key].G[2018].ZZ.dateRelease }
                            </TableCell>
                            
                            <TableCell align="center">
                                { props.dataUser[key].G[2019] === undefined ? "-" : props.dataUser[key].G[2019].XX.value + '/\n' + props.dataUser[key].G[2019].XX.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2019] === undefined ? "-" : props.dataUser[key].G[2019].YY.value + '/\n' + props.dataUser[key].G[2019].YY.dateRelease }
                            </TableCell>
                            <TableCell align="center">
                                { props.dataUser[key].G[2019] === undefined ? "-" : props.dataUser[key].G[2019].ZZ.value + '/\n' + props.dataUser[key].G[2019].ZZ.dateRelease }
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

const mapStateToProps = state => {
    return {
        dataUser: state.dataTxt
    }
}

export default connect(mapStateToProps, null)(Datalist);