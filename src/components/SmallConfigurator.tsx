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

type ConfigItem = {
  id: string
  label: string
  externalCosts: number
  installationCosts: number
}

const config: ConfigItem[] = [
  {
    id: 'upgrade-3phase',
    label:
      'Upgrade van 1-fase naar 3-fase aansluiting (kosten netwerkbeheerder)',
    externalCosts: 310,
    installationCosts: 0
  },
  {
    id: 'box-rcd',
    label:
      'Nieuwe groepenkast, 8 groepen, 1x inductie groep, 1x laadpaal groep, variant: aardlekschakelaars',
    externalCosts: 420,
    installationCosts: 200
  },
  {
    id: 'box-rcbo',
    label:
      'Nieuwe groepenkast, 8 groepen, 1x inductie groep, 1x laadpaal groep, variant: aardlekautomaten',
    externalCosts: 550,
    installationCosts: 200
  },
  {
    id: 'group-rcd-a',
    label: 'Een laadpaal groep: aardlekschakelaar 40A Type A + krachtgroep B16',
    externalCosts: 75,
    installationCosts: 100
  },
  {
    id: 'group-rcd-b',
    label: 'Een laadpaal groep: aardlekschakelaar 40A Type B + krachtgroep B16',
    externalCosts: 192,
    installationCosts: 100
  },
  {
    id: 'group-rcbo-a',
    label: 'Een laadpaal groep: aardlekautomaat 40A Type A B16 (merk: Chint)',
    externalCosts: 87,
    installationCosts: 100
  },
  {
    id: 'group-rcbo-b',
    label: 'Een laadpaal groep: aardlekautomaat 40A Type B B16 (merk: SEP)',
    externalCosts: 350,
    installationCosts: 100
  },
  {
    id: 'charge-point',
    label: 'Laadpaal (voorbeeldprijs met load-balancing)',
    externalCosts: 1100,
    installationCosts: 0
  },
  {
    id: 'connecting-charge-point',
    label:
      'Aansluiting laadpaal aan de groepenkast (prijs vanaf, na de locatiecheck)',
    externalCosts: 25,
    installationCosts: 100
  }
]

const formatPrice = (price: number): string => `€${price},-`

const TopComponent = () => (
  <p className='max-w-max self-end rounded-xl bg-white p-2 text-right text-sm italic'>
    Scroll door de onderstaande tabel naar beneden om alle beschikbare items te
    zien en selecteer de werkitems die je nodig heb.
  </p>
)

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
        const configItem = config.find((e) => e.id === current)
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
          {config.map(({ id, label, externalCosts, installationCosts }) => (
            <TableRow key={id}>
              <TableCell>{label}</TableCell>
              <TableCell className='text-center'>
                {formatPrice(externalCosts)}
              </TableCell>
              <TableCell className='text-center'>
                {formatPrice(installationCosts)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { SmallConfigurator }
