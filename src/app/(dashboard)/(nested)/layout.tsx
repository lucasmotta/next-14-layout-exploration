import { Box } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'

export default function NestedLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <AutoBreadcrumbs mb="6" />

      {children}
    </Box>
  )
}
