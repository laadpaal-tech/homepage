import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'

import { formatPrice } from './formatPrice'

type BottomComponentProps = {
  totalExternalCosts: number
  totalInstallationCosts: number
}

const BottomComponent = ({
  totalExternalCosts,
  totalInstallationCosts
}: BottomComponentProps) => {
  return (
    <Table
      hideHeader
      aria-label='Tables showing total costs'
      classNames={{
        base: 'max-h-[520px] max-w-[300px]',
        table: 'max-w-[300px]'
      }}
    >
      <TableHeader>
        <TableColumn>A</TableColumn>
        <TableColumn>B</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key='1'>
          <TableCell>Totale externe kosten:</TableCell>
          <TableCell>
            <strong>{formatPrice(totalExternalCosts)}</strong>
          </TableCell>
        </TableRow>
        <TableRow key='2'>
          <TableCell>Totale installatiekosten:</TableCell>
          <TableCell>
            <strong>{formatPrice(totalInstallationCosts)}</strong>
          </TableCell>
        </TableRow>
        <TableRow key='3'>
          <TableCell>Totale kosten:</TableCell>
          <TableCell>
            <strong>
              {formatPrice(totalInstallationCosts + totalExternalCosts)}
            </strong>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export { BottomComponent }
