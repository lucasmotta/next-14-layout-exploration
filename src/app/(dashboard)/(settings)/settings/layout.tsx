import { Box, Heading } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { SettingsNav } from './settings-nav'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Box p="4">
      <Heading size="6" mb="4">
        Workspace
      </Heading>

      <SettingsNav />

      {children}
    </Box>
  )
}
