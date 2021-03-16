import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Url from '../Url/Url';
import { Badge } from 'reactstrap';
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ffd51e',
    color: 'black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
});

export default function CustomizedTables({data,selectedRow,setSelectedRow}) {
    console.log(data,'data')
  const classes = useStyles();
  const history= useHistory()

  return (
    <TableContainer component={Paper}>
    <Badge style={{margin:'20px'}} color="success"> {`Found ${data.length} records`}</Badge>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="right">Select</StyledTableCell> */}
            <StyledTableCell>Company name</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <StyledTableRow key={row._id}
            onClick={() => setSelectedRow(row._id)}
            >
                                   

                {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={row._id === selectedRow}
                          // inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell> */}
              <StyledTableCell component="th" scope="row">
                {row.companyName}
              </StyledTableCell>
              <StyledTableCell align="right" onClick={()=>history.push(`/editcompany/${row._id}`)} >
                 <Url>Edit</Url>
                  </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Badge color="success"> {`Found ${data.length} records`}</Badge>

    </TableContainer>
  );
}