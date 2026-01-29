import { Badge } from '@/components/catalyst/badge'
import { Button } from '@/components/catalyst/button'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/catalyst/dropdown'
import { Heading } from '@/components/catalyst/heading'
import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/catalyst/pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/catalyst/table'

export const metadata = {
  title: 'Dashboard - Catalyst Showcase',
  description: 'An advanced data dashboard example using Catalyst components.',
}

const orders = [
  { id: '#ORD-001', customer: 'Leslie Alexander', date: 'Oct 10, 2023', total: '$120.00', status: 'Paid', statusColor: 'green' },
  { id: '#ORD-002', customer: 'Michael Foster', date: 'Oct 11, 2023', total: '$85.00', status: 'Pending', statusColor: 'amber' },
  { id: '#ORD-003', customer: 'Dries Vincent', date: 'Oct 12, 2023', total: '$230.50', status: 'Paid', statusColor: 'green' },
  { id: '#ORD-004', customer: 'Lindsay Walton', date: 'Oct 12, 2023', total: '$45.00', status: 'Cancelled', statusColor: 'red' },
  { id: '#ORD-005', customer: 'Courtney Henry', date: 'Oct 13, 2023', total: '$199.99', status: 'Shipped', statusColor: 'blue' },
  { id: '#ORD-006', customer: 'Tom Cook', date: 'Oct 14, 2023', total: '$600.00', status: 'Paid', statusColor: 'green' },
  { id: '#ORD-007', customer: 'Whitney Francis', date: 'Oct 14, 2023', total: '$90.00', status: 'Refunded', statusColor: 'zinc' },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-end justify-between gap-4">
        <Heading>Dashboard</Heading>
        <Button>Create Order</Button>
      </div>

      <div className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Customer</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader className="text-right">Total</TableHeader>
              <TableHeader></TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="text-zinc-500">{order.date}</TableCell>
                <TableCell>
                  <Badge color={order.statusColor}>{order.status}</Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell>
                  <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                    <Dropdown>
                      <DropdownButton plain aria-label="More options">
                        <svg className="size-5 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                        </svg>
                      </DropdownButton>
                      <DropdownMenu anchor="bottom end">
                        <DropdownItem href={`#`}>View</DropdownItem>
                        <DropdownItem href={`#`}>Edit</DropdownItem>
                        <DropdownItem href={`#`}>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <Pagination>
          <PaginationPrevious href="#" />
          <PaginationList>
            <PaginationPage href="#" current>1</PaginationPage>
            <PaginationPage href="#">2</PaginationPage>
            <PaginationPage href="#">3</PaginationPage>
          </PaginationList>
          <PaginationNext href="#" />
        </Pagination>
      </div>
    </div>
  )
}
