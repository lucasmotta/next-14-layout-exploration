import { Box, Button, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { GearIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Grid columns="240px 1fr">
      <Flex
        gap="2"
        direction="column"
        p="4"
        justify="start"
        style={{
          minHeight: '100dvh',
          backgroundColor: 'var(--gray-a2)',
          borderRight: '1px solid var(--gray-a4)',
        }}
      >
        <Heading size="1" mb="2">
          Top level
        </Heading>
        <NavLink href="/settings/team">
          <GearIcon /> Settings
        </NavLink>
        <NavLink href="/settings/user">
          <PersonIcon /> User Settings
        </NavLink>
      </Flex>

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
