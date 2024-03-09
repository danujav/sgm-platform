import { Component } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class BasicPostTable extends Component {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Post Id</TableCell>
                            <TableCell align="center">User Id</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/*
                         map() is JS Loop function. it can be used alternatives to the for-each loop 
                        reffer this: 'https://ordinarycoders.com/blog/article/javascript-react-map-method' 
                        */}
                        {this.props.data.map((row) => (
                            <TableRow
                                key={row.id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.userId}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.body}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default BasicPostTable;