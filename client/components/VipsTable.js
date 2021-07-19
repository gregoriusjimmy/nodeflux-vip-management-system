import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import VipTableRow from './VipTableRow'

const VipsTable = ({ vips }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='right'>id</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Country of Origin</TableCell>
            <TableCell align='center'>ETA</TableCell>
            <TableCell align='center'>Arrived</TableCell>
            <TableCell align='center'>Photo</TableCell>
            <TableCell align='center'>Attributes</TableCell>
            <TableCell align='center'>Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vips.map((vip) => (
            <VipTableRow key={vip.id} vip={vip} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default VipsTable
