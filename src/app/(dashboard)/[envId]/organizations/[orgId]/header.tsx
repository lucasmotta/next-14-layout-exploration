'use client'

import { TabNavRoot, TabNavLink, Heading } from '@radix-ui/themes'
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
      <Heading size="6" mb="4">
        Foo corp
      </Heading>

      <TabNavRoot>
        <TabNavLink asChild active={segment === 'features'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/features`}
          >
            Features
          </NextLink>
        </TabNavLink>
        <TabNavLink asChild active={segment === 'users'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/users`}
          >
            Users
          </NextLink>
        </TabNavLink>
        <TabNavLink asChild active={segment === 'invitations'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/invitations`}
          >
            Invitations
          </NextLink>
        </TabNavLink>
        <TabNavLink asChild active={segment === 'audit-logs'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/audit-logs`}
          >
            Audit logs
          </NextLink>
        </TabNavLink>
        <TabNavLink asChild active={segment === 'settings'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/settings`}
          >
            Settings
          </NextLink>
        </TabNavLink>
      </TabNavRoot>
    </>
  )
}
