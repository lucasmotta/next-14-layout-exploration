'use client'

import { Heading, TabNavLink, TabNavRoot } from '@radix-ui/themes'
import NextLink from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'

export function Header() {
  const params = useParams<{
    envId: string
    orgId: string
    directoryId: string
  }>()
  const segment = useSelectedLayoutSegment()

  return (
    <>
      <Heading size="6" mb="4">
        Directory {params.directoryId}
      </Heading>

      <TabNavRoot>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}`}
        >
          <TabNavLink active={segment === null}>Settings</TabNavLink>
        </NextLink>

        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/events`}
        >
          <TabNavLink active={segment === 'events'}>Events</TabNavLink>
        </NextLink>

        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/users`}
        >
          <TabNavLink active={segment === 'users'}>Users</TabNavLink>
        </NextLink>

        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/groups`}
        >
          <TabNavLink active={segment === 'groups'}>Groups</TabNavLink>
        </NextLink>
      </TabNavRoot>
    </>
  )
}
