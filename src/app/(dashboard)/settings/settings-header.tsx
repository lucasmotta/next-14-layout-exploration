'use client'

import { TabNavRoot, TabNavLink, Heading } from '@radix-ui/themes'
import NextLink from 'next/link'
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'

export function SettingsHeader() {
  const segment = useSelectedLayoutSegment()
  const segments = useSelectedLayoutSegments()

  if (segments.length > 1) {
    return <AutoBreadcrumbs baseSegments={['settings']} />
  }

  return (
    <>
      <Heading size="6" mb="4">
        Workspace
      </Heading>

      <TabNavRoot>
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
    </>
  )
}
