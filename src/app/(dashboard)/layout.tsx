import { Box, Button, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { ColorWheelIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons'
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
        <NavLink href="/settings">
          <GearIcon /> Settings
        </NavLink>
        <NavLink href="/user">
          <PersonIcon /> User Settings
        </NavLink>
        <NavLink href="/branding">
          <ColorWheelIcon /> Branding
        </NavLink>

        <Heading size="1" mb="2" mt="4">
          Env level
        </Heading>
        <NavLink href="/env_12345">
          <GearIcon /> Get started
        </NavLink>
        <NavLink href="/env_12345/organizations">
          <GearIcon /> Organizations
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
