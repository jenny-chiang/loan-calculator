import React, { createContext, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import CalculatorTable from './calculatorTable'
import RequireTable from './require'

const useStyles = makeStyles(() => ({
  container: {
    height: 'auto',
    maxHeight: 800,
    width: 'auto',
    maxWidth: 800,
    padding: 10,
    borderStyle: 'solid',
    margin: 'auto',
    backgroundColor: '#FCFCFC',
  },
}))

export const RequireContext = createContext({})

const LoanCalculator = () => {
  const classes = useStyles()

  const [select, setSelect] = useState(0)
  const [money, setMoney] = useState(0)
  const [cul, setCul] = useState(0.9)

  const [firstYear, setFirstYear] = useState(0)
  const [returnMoney, setReturnMoney] = useState(0)

  const calcLoan = ({
    moneyTotal,
    semesters,
    rate,
    returnedMoney,
    monthlyReturn,
  }) => {
    const result = []
    const monthTotal = semesters * 12
    let money = moneyTotal - returnedMoney
    for (let month = 0; month <= monthTotal; ++month) {
      const monthRemaining = monthTotal - month
      const loanRate = Math.pow(1 + rate, monthRemaining)
      const loanMoney =
        money > 0 ? Math.ceil(money * ((rate * loanRate) / (loanRate - 1))) : 0
      const moneyMonthly = Math.ceil(money / monthRemaining)
      const loanRequired = Math.max(loanMoney - moneyMonthly, 0)
      result.push({
        year: Math.ceil(month / 12),
        month,
        money,
        moneyMonthly,
        loanRequired,
        monthRemaining,
        loanMoney,
      })
      money -= monthlyReturn ? Math.min(moneyMonthly, monthlyReturn) : loanMoney
    }
    return result
  }

  const table = calcLoan({
    moneyTotal: money,
    semesters: select,
    rate: cul / 100 / 12,
    returnedMoney: firstYear,
    monthlyReturn: returnMoney,
  })

  const value = {
    money,
    setMoney,
    select,
    setSelect,
    cul,
    setCul,
  }

  return (
    <div className={classes.container}>
      <RequireContext.Provider value={value}>
        <RequireTable />
      </RequireContext.Provider>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>選填欄位</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  label="第一年償還本金"
                  value={firstYear}
                  onChange={(event) =>
                    setFirstYear(parseInt(event.target.value, 10) || 0)
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="每次償還本金"
                  value={returnMoney}
                  onChange={(event) =>
                    setReturnMoney(parseInt(event.target.value, 10) || 0)
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CalculatorTable table={table} />
    </div>
  )
}

export default LoanCalculator
