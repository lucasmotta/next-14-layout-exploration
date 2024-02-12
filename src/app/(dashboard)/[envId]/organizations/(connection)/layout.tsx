import { Box, Heading } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'
import { Header } from './header'

export default function OrganizationLayout({
  children,
}: { children: ReactNode }) {
  return (
    <Box p="4">
      <Box mb="4">
        <Header />
      </Box>

      {children}
    </Box>
  )
}
