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
        <NextLink passHref legacyBehavior href="/settings">
          <TabNavLink active={segment === null}>Team</TabNavLink>
        </NextLink>

        <NextLink passHref legacyBehavior href="/settings/authentication">
          <TabNavLink active={segment === 'authentication'}>
            Authentication
          </TabNavLink>
        </NextLink>

        <NextLink passHref legacyBehavior href="/settings/billing">
          <TabNavLink active={segment === 'billing'}>Billing</TabNavLink>
        </NextLink>

        <NextLink passHref legacyBehavior href="/settings/compliance-documents">
          <TabNavLink active={segment === 'compliance-documents'}>
            Compliance Documents
          </TabNavLink>
        </NextLink>
      </TabNavRoot>
    </>
  )
}
