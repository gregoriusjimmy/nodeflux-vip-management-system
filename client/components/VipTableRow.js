import { TableCell, TableRow, Button } from '@material-ui/core'
import Link from 'next/link'
import moment from 'moment-timezone'

const VipTableRow = ({ vip }) => {
  return (
    <TableRow key={vip.id}>
      <TableCell component='th' scope='row'>
        {vip.id}
      </TableCell>
      <TableCell>{vip.name}</TableCell>
      <TableCell>{vip.country_of_origin}</TableCell>
      <TableCell>
        {moment(vip.eta).tz('Japan').format('DD-MM-YYYY h:mm:ss')}
      </TableCell>
      <TableCell>{vip.arrived ? '✅' : '❌'}</TableCell>
      <TableCell>
        <img src={vip.photo} alt='Profile picture' width='100' height='100' />
      </TableCell>
      <TableCell>
        {vip.attributes.map((attribute) => (
          <li key={attribute}>{attribute}</li>
        ))}
      </TableCell>
      <TableCell>
        <Link href='/vips/[id]' as={`/vips/${vip.id}`}>
          <Button variant='contained' color='secondary' disableElevation>
            Detail
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  )
}

export default VipTableRow
