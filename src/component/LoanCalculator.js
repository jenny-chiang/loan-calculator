import React, {useState} from 'react'
import {
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@material-ui/core'

const study = [
    {
        value: 0,
        label: '請選擇學期數',
    },
    {
        value: 1,
        label: '1 學期',
    },
    {
        value: 2,
        label: '2 學期',
    },
    {
        value: 3,
        label: '3 學期',
    },
    {
        value: 4,
        label: '4 學期',
    },
    {
        value: 5,
        label: '5 學期',
    },
    {
        value: 6,
        label: '6 學期',
    },
    {
        value: 7,
        label: '7 學期',
    },
    {
        value: 8,
        label: '8 學期',
    },
    {
        value: 9,
        label: '9 學期',
    },
    {
        value: 10,
        label: '10 學期',
    },
    {
        value: 11,
        label: '11 學期',
    },
    {
        value: 12,
        label: '12 學期',
    },
    {
        value: 13,
        label: '13 學期',
    },
    {
        value: 14,
        label: '14 學期',
    },
    {
        value: 15,
        label: '15 學期',
    },
    {
        value: 16,
        label: '16 學期',
    },
]

const LoanCalculator = () => {

    const [select, setSelect] = useState(0)
    const [money, setMoney] = useState(0)
    const [cul, setCul] = useState(0.9)

    const [firstYear, setFirstYear] = useState(0)
    const [returnMoney, setReturnMoney] = useState(0)

    const calcLoan = ({moneyTotal, semesters, rate, returnedMoney, monthlyReturn}) => {
        const result = []
        const monthTotal = semesters * 12
        let money = moneyTotal - returnedMoney
        for (let month = 0; month <= monthTotal; ++month) {
            const monthRemaining = monthTotal - month
            const loanRate = Math.pow(1 + rate, monthRemaining)
            const loanMoney = money > 0 ? Math.ceil(money * ((rate * loanRate) / (loanRate - 1))) : 0
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
        monthlyReturn: returnMoney
    })

    return (
        <div style={{
            height: "auto",
            maxHeight: 600,
            width: "auto",
            maxWidth: 800,
            padding: 10,
            borderStyle: "solid",
            margin: "auto",
            backgroundColor: "#FCFCFC"
        }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell colSpan={3}>
                            必填欄位
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    label="總貸款金額"
                                    value={money}
                                    onChange={event => setMoney(parseInt(event.target.value, 10) || 0)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    style={{width: 130}}
                                    select
                                    label="貸款學期總數"
                                    value={select}
                                    onChange={event => setSelect(parseInt(event.target.value, 10) || 0)}
                                >
                                    {study.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    label="年利率"
                                    value={cul}
                                    onChange={event => setCul(parseFloat(event.target.value))}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableCell colSpan={2}>
                            選填欄位
                        </TableCell>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TextField
                                    label="第一年償還本金"
                                    value={firstYear}
                                    onChange={event => setFirstYear(parseInt(event.target.value, 10) || 0)}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    label="每次償還本金"
                                    value={returnMoney}
                                    onChange={event => setReturnMoney(parseInt(event.target.value, 10) || 0)}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer style={{maxHeight: 300}}>
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
                        {table.map(row => <TableRow key={row.month}>
                            <TableCell align="center">{row.year}</TableCell>
                            <TableCell align="center">{row.month}</TableCell>
                            <TableCell align="center">{row.money}</TableCell>
                            <TableCell align="center">{row.moneyMonthly || 0}</TableCell>
                            <TableCell align="center">{row.loanRequired || 0}</TableCell>
                            <TableCell align="center">{row.monthRemaining}</TableCell>
                            <TableCell align="center">{row.loanMoney}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default LoanCalculator
