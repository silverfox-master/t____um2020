import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  container:{
    display:'flex',
    flexDirection :'column',
    align:'center',
    width: 300,
  },
  header: {
    align: 'right',
    padding: '20px 20px'

  }
});



export default function DenseTable(props) {
  const classes = useStyles();
  
  function createData(name, price) {
    return { name, price};
  }
  
  const rows = props.dataObj.rates.map((item)=>(
    createData(Object.keys(item)[0],Object.values(item)[0])))
  
  const time =  new Date(props.dataObj.timestamp)
  console.log(time.toDateString())
  
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>base {props.dataObj.base}</h3>
        <hr></hr>
        <h4 align='right'>valid :{props.dataObj.valid.toString()}</h4>
        <h4 align='right'>timestamp :{time.toDateString()}</h4>
      </div>

      <TableContainer  component={Paper}>
        <Table  size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell><h2>Tool</h2></TableCell>
              <TableCell align="right"><h2>Price</h2></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}