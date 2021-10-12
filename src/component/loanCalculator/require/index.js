import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core'

import MobileRequireInput from './mobileRequireInput'
import RequireInput from './requireInput'

const RequireTable = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>必填欄位</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isMobile ? <MobileRequireInput /> : <RequireInput />}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default RequireTable
