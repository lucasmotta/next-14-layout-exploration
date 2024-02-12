'use client'

import { Heading, TabNavLink, TabNavRoot } from '@radix-ui/themes'
import NextLink from 'next/link'
import {
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'

export function Header() {
  const params = useParams<{ envId: string; orgId: string }>()
  const segment = useSelectedLayoutSegment()
  const segments = useSelectedLayoutSegments()

  if (segments.length > 1) {
    return (
      <AutoBreadcrumbs
        baseSegments={['organizations', params.orgId]}
        customDictionary={{
          [params.orgId]: 'Foo corp',
        }}
      />
    )
  }

  return (
    <>
      <AutoBreadcrumbs
        mb="4"
        customSegments={['organizations', params.orgId]}
        customDictionary={{
          [params.orgId]: 'Foo corp',
        }}
      />

      <Heading size="6" mb="4">
        Foo corp
      </Heading>

      <TabNavRoot>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}`}
        >
          <TabNavLink active={segment === null}>Features</TabNavLink>
        </NextLink>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/users`}
        >
          <TabNavLink active={segment === 'users'}>Users</TabNavLink>
        </NextLink>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/invitations`}
        >
          <TabNavLink active={segment === 'invitations'}>
            Invitations
          </TabNavLink>
        </NextLink>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/audit-logs`}
        >
          <TabNavLink active={segment === 'audit-logs'}>Audit logs</TabNavLink>
        </NextLink>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/settings`}
        >
          <TabNavLink active={segment === 'settings'}>Settings</TabNavLink>
        </NextLink>
      </TabNavRoot>
    </>
  )
}
