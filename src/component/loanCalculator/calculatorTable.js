import React from 'react'
import PropTypes from 'prop-types'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const CalculatorTable = ({ table }) => (
  <TableContainer style={{ maxHeight: 300 }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell align="center">年</TableCell>
          <TableCell align="center">期數</TableCell>
          <TableCell align="center">本金</TableCell>
          <TableCell align="center">應還本金</TableCell>
          <TableCell align="center">應還利息</TableCell>
          <TableCell align="center">剩餘期數</TableCell>
          <TableCell align="center">應還本息</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {table.map((row) => (
          <TableRow key={row.month}>
            <TableCell align="center">{row.year}</TableCell>
            <TableCell align="center">{row.month}</TableCell>
            <TableCell align="center">{row.money}</TableCell>
            <TableCell align="center">{row.moneyMonthly || 0}</TableCell>
            <TableCell align="center">{row.loanRequired || 0}</TableCell>
            <TableCell align="center">{row.monthRemaining}</TableCell>
            <TableCell align="center">{row.loanMoney}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

CalculatorTable.propTypes = {
  table: PropTypes.array,
}

export default CalculatorTable
