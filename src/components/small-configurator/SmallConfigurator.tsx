import React, { useState } from 'react'
import {
  Selection,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { smallConfiguratorConfig } from './config'
import { TopComponent } from './TopComponent'
import { formatPrice } from './formatPrice'
import { BottomComponent } from './BottomComponent'

type Totals = {
  totalExternalCosts: number
  totalInstallationCosts: number
}

const SmallConfigurator = () => {
  const [totals, setTotals] = useState<Totals>({
    totalExternalCosts: 0,
    totalInstallationCosts: 0
  })
  const onSelectionChange = (keys: Selection) => {
    if (keys === 'all') {
      return
    }

    const selection = Array.from(keys)
    const totals = selection.reduce(
      (acc, current) => {
        const configItem = smallConfiguratorConfig.find((e) => e.id === current)
        if (configItem) {
          const { externalCosts, installationCosts } = configItem
          acc.totalExternalCosts += externalCosts
          acc.totalInstallationCosts += installationCosts
        }
        return acc
      },
      { totalExternalCosts: 0, totalInstallationCosts: 0 }
    )
    setTotals(totals)
  }
  return (
    <div className='flex w-full flex-col'>
      <Table
        color='warning'
        classNames={{
          td: 'max-w-[130px] text-wrap @3xl:max-w-min',
          th: 'max-w-[120px] text-wrap @3xl:max-w-max @3xl:text-nowrap',
          base: 'max-h-[520px] gap-2',
          table: 'min-h-[420px] min-w-[300px]'
        }}
        onSelectionChange={onSelectionChange}
        selectionMode='multiple'
        defaultSelectedKeys={[]}
        showSelectionCheckboxes={false}
        isHeaderSticky
        disabledBehavior='selection'
        disabledKeys={['10']}
        aria-label='Example static collection table'
        bottomContentPlacement='outside'
        topContent={<TopComponent />}
        topContentPlacement='outside'
        bottomContent={
          <BottomComponent
            totalExternalCosts={totals.totalExternalCosts}
            totalInstallationCosts={totals.totalInstallationCosts}
          />
        }
      >
        <TableHeader>
          <TableColumn>Dienst</TableColumn>
          <TableColumn>Externe prijs indicatie</TableColumn>
          <TableColumn>Installatiekosten laadpaal.tech</TableColumn>
        </TableHeader>
        <TableBody>
          {smallConfiguratorConfig.map(
            ({ id, label, externalCosts, installationCosts }) => (
              <TableRow key={id}>
                <TableCell>{label}</TableCell>
                <TableCell className='text-center'>
                  {formatPrice(externalCosts)}
                </TableCell>
                <TableCell className='text-center'>
                  {formatPrice(installationCosts)}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export { SmallConfigurator }
