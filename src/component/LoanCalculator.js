import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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

const LoanCalculator = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

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

  return (
    <div className={classes.container}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell colSpan={3}>必填欄位</TableCell>
          </TableHead>
          <TableBody>
            {isMobile ? (
              <>
                <TableRow>
                  <TableCell colSpan={2}>
                    <TextField
                      label="總貸款金額"
                      value={money}
                      fullWidth
                      onChange={(event) =>
                        setMoney(parseInt(event.target.value, 10) || 0)
                      }
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
                      onChange={(event) =>
                        setSelect(parseInt(event.target.value, 10) || 0)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      label="年利率"
                      value={cul}
                      fullWidth
                      onChange={(event) =>
                        setCul(parseFloat(event.target.value))
                      }
                    />
                  </TableCell>
                </TableRow>
              </>
            ) : (
              <TableRow>
                <TableCell>
                  <TextField
                    label="總貸款金額"
                    value={money}
                    onChange={(event) =>
                      setMoney(parseInt(event.target.value, 10) || 0)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    style={{ width: 130 }}
                    label="貸款學期總數"
                    value={select}
                    type="number"
                    inputProps={{ min: 0, max: 16 }}
                    onChange={(event) =>
                      setSelect(parseInt(event.target.value, 10) || 0)
                    }
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
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell colSpan={2}>選填欄位</TableCell>
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
    </div>
  )
}

export default LoanCalculator
