'use client'

import { TabNavRoot, TabNavLink } from '@radix-ui/themes'
import NextLink from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export function SettingsNav() {
  const segment = useSelectedLayoutSegment()

  return (
    <TabNavRoot mb="5">
      <TabNavLink asChild active={segment === 'team'}>
        <NextLink href="/settings/team">Team</NextLink>
      </TabNavLink>
      <TabNavLink asChild active={segment === 'authentication'}>
        <NextLink href="/settings/authentication">Authentication</NextLink>
      </TabNavLink>
      <TabNavLink asChild active={segment === 'billing'}>
        <NextLink href="/settings/billing">Billing</NextLink>
      </TabNavLink>
      <TabNavLink asChild active={segment === 'compliance-documents'}>
        <NextLink href="/settings/compliance-documents">
          Compliance Documents
        </NextLink>
      </TabNavLink>
    </TabNavRoot>
  )
}
