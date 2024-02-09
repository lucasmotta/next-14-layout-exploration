import { Box, Grid, Heading, Text } from '@radix-ui/themes'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Grid columns="240px 1fr">
      <Box
        p="4"
        style={{ minHeight: '100dvh', backgroundColor: 'var(--gray-a2)' }}
      >
        <Text>Sidebar nav</Text>
      </Box>

      <Box p="4">{children}</Box>
    </Grid>
  )
}
