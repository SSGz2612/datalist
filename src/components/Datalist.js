import * as React from 'react';
import { useEffect, useState } from 'react';
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
import { updateTxt } from '../redux';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function Datalist(props){
    const [ year, setYear ] = useState([]);
    const [ titleCell, setTitleCell ] = useState([]);
    const [ arrCell, setArrCell ] = useState({
        city: "",
        year: "",
        title: ""
    });

    useEffect(() => {
        localStorage.setItem("cityName", JSON.stringify(arrCell));
        localStorage.setItem("dataTxt", JSON.stringify(props.txtData));
        localStorage.setItem("dataJsn", JSON.stringify(props.dataJsn));
    }, [props.txtData, props.dataJsn, arrCell]);

    const handleDataCell = (city, year, title) => {
        const newValue = { ...arrCell };
        newValue['city'] = city;
        newValue['year'] = year;
        newValue['title'] = title;

        setArrCell(newValue);
        
        let windowBehavior = window.open("/popup",
            "rating",
            "status=no,location=no,left=200,top=100,width=900,height=700,scrollbars=yes"
        );
        windowBehavior.focus();
    }

    // table - get the year from object data
    useEffect(() => {
        let arr = [];
        let gyear = Object.keys(props.txtData).map((k) =>
            Object.keys(props.txtData[k].G) // get arrays of cities from object data
        )
        
        for(let i = 0; i < gyear.length; i++){
            arr = arr.concat(gyear[i]);
        }
        
        let i = arr.filter((i, index) => {
            return arr.indexOf(i) === index;
        })
        
        setYear(i);
    }, [props.txtData]);

    // table - get the titles for each year from object data
    useEffect(() => {
        let arr = [];
        const x = Object.keys(props.txtData).map((k) =>
            props.txtData[k].G
        );

        for(let j = 0; j < year.length; j++){
            for(let i = 0; i < x.length; i++){
                if(Object.keys(x[i]).includes(year[j]) === false){
                    continue;
                } else {
                    arr = arr.concat(Object.keys(x[i][year[j]]));
                }
            }
        }

        let i = arr.filter((i, index) => {
            return arr.indexOf(i) === index;
        })

        setTitleCell(i);        
    }, [props.txtData, year]);

    return (
        <div className='principal'>
            <TableContainer sx={{ margin: "auto", width: "80%", height: 1 }} component={ Paper }>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            { year.map((x, index) =>
                                <TableCell key={index} align="center" colSpan={3}><b>{x}</b></TableCell>
                            )}
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row"><b>Regions</b></TableCell>
                            { year.map(() =>
                                titleCell.map((x, index) =>
                                    <TableCell align="center" key={index}>{x}</TableCell>
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(props.txtData).map((key) => (
                            <StyledTableRow key={ key }>
                                <TableCell component="th" scope="row"><b>{ key }</b></TableCell>
                                { year.map((y) =>
                                    titleCell.map((x, index) =>
                                        <TableCell
                                            align="left"
                                            key={index}
                                            sx={{ fontSize: 11 }}
                                            className='cursor'
                                            onClick={() => handleDataCell(key, y, x)}
                                        >
                                            <span><b>Value:</b> {props.txtData[key].G[y] === undefined ? "-" : props.txtData[key].G[y][x].value}</span>
                                            <span><b>Date:</b></span>
                                            <span>{props.txtData[key].G[y] === undefined ? "-" : props.txtData[key].G[y][x].dateRelease}</span>

                                            <span>{props.txtData[key].G[y] === undefined ? "-" : props.txtData[key].G[y][x].id}</span>
                                            {  }
                                            {/* {JSON.parse(localStorage.getItem("dataTxt"))[key].G[y] === undefined ?
                                            <span className='idColor'><b>Id:</b></span> : undefined} */}
                                        </TableCell>
                                    )
                                )}
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        dataTxt: (data) => dispatch(updateTxt(data))
    }
}

const mapStateToProps = state => {
    return {
        txtData: state.dataTxt,
        dataJsn: state.dataJsn
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Datalist);