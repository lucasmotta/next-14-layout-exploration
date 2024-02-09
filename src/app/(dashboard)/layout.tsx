import { Box, Button, Grid, Heading, Text } from '@radix-ui/themes'
import { GearIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Grid columns="240px 1fr">
      <Grid
        p="4"
        justify="start"
        rows="fit-content(100%)"
        style={{ minHeight: '100dvh', backgroundColor: 'var(--gray-a2)' }}
      >
        <Heading size="1" mb="2">
          Top level
        </Heading>
        <NavLink href="/settings/team">
          <GearIcon /> Settings
        </NavLink>
      </Grid>

      <Box p="4">{children}</Box>
    </Grid>
  )
}

const NavLink = (props: { href: string; children: ReactNode }) => (
  <Button
    variant="ghost"
    color="gray"
    highContrast
    {...props}
    asChild
    style={{ justifyContent: 'flex-start', gap: 'var(--space-2)' }}
  >
    <Link href={props.href}>{props.children}</Link>
  </Button>
)
