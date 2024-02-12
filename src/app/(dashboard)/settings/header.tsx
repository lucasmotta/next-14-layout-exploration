'use client'

import { Heading, TabNavLink, TabNavRoot } from '@radix-ui/themes'
import NextLink from 'next/link'
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'

export function Header() {
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
        <TabNavLink asChild active={segment === null}>
          <NextLink href="/settings">Team</NextLink>
        </TabNavLink>
        <TabNavLink asChild active={segment === 'authentication'}>
          <NextLink href="/settings/authentication">Authentication</NextLink>
        </TabNavLink>

        <NextLink passHref legacyBehavior href="/settings/billing">
          <TabNavLink active={segment === 'billing'}>Billing</TabNavLink>
        </NextLink>

        <TabNavLink asChild active={segment === 'compliance-documents'}>
          <NextLink href="/settings/compliance-documents">
            Compliance Documents
          </NextLink>
        </TabNavLink>
      </TabNavRoot>
    </>
  )
}
