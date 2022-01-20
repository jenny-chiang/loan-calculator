import React, { useContext } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TextField from '@material-ui/core/TextField'
import { RequireContext } from '../loanCalculator'
import { numberToString, floatNumberToString } from '../../../covert'

const RequireInput = () => {
  const { money, setMoney, select, setSelect, cul, setCul } =
    useContext(RequireContext)

  console.log(cul)

  return (
    <TableRow>
      <TableCell>
        <TextField
          label="總貸款金額"
          value={numberToString(money)}
          onChange={(event) => setMoney(parseInt(event.target.value, 10) || 0)}
        />
      </TableCell>
      <TableCell>
        <TextField
          style={{ width: 130 }}
          label="貸款學期總數"
          value={numberToString(select)}
          type="number"
          inputProps={{ min: 0, max: 16 }}
          onChange={(event) => setSelect(parseInt(event.target.value, 10) || 0)}
        />
      </TableCell>
      <TableCell>
        <TextField
          label="年利率"
          type="number"
          value={floatNumberToString(cul)}
          onChange={(event) => setCul(parseFloat(event.target.value))}
        />
      </TableCell>
    </TableRow>
  )
}

export default RequireInput
