import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'

const MobileRequireInput = ({
  money,
  setMoney,
  select,
  setSelect,
  cul,
  setCul,
}) => (
  <>
    <TableRow>
      <TableCell colSpan={2}>
        <TextField
          label="總貸款金額"
          value={money}
          fullWidth
          onChange={(event) => setMoney(parseInt(event.target.value, 10) || 0)}
        />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <TextField
          style={{ width: 130 }}
          label="貸款學期總數"
          value={select}
          type="number"
          inputProps={{ min: 0, max: 16 }}
          fullWidth
          onChange={(event) => setSelect(parseInt(event.target.value, 10) || 0)}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="年利率"
          value={cul}
          fullWidth
          onChange={(event) => setCul(parseFloat(event.target.value))}
        />
      </TableCell>
    </TableRow>
  </>
)

export default MobileRequireInput
