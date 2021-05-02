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
  table: {
    width: '300px',
    padding:'0'
  },
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData('8:00', 159),
  createData('9:00', 237),
  createData('10:00', 262),
  createData('10:00', 305),
  createData('11:00', 356),
  createData('12:00', 356),
  createData('13:00', 356),
  createData('14:00', 356),
  createData('15:00', 356),
  createData('16:00', 356),
  createData('17:00', 356),
  createData('18:00', 356),
  createData('19:00', 356),
  createData('20:00', 356),
  createData('21:00', 356),
  createData('22:00', 356),
  createData('23:00', 356),
];

export const DayHistory = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Время)</TableCell>
            <TableCell align="right">Что сделал</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}