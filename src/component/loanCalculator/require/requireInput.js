import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'

const RequireInput = ({ money, setMoney, select, setSelect, cul, setCul }) => (
  <TableRow>
    <TableCell>
      <TextField
        label="總貸款金額"
        value={money}
        onChange={(event) => setMoney(parseInt(event.target.value, 10) || 0)}
      />
    </TableCell>
    <TableCell>
      <TextField
        style={{ width: 130 }}
        label="貸款學期總數"
        value={select}
        type="number"
        inputProps={{ min: 0, max: 16 }}
        onChange={(event) => setSelect(parseInt(event.target.value, 10) || 0)}
      />
    </TableCell>
    <TableCell>
      <TextField
        label="年利率"
        value={cul}
        onChange={(event) => setCul(parseFloat(event.target.value))}
      />
    </TableCell>
  </TableRow>
)

export default RequireInput
