'use client'

import { TabNavRoot, TabNavLink, Heading } from '@radix-ui/themes'
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
        <TabNavLink asChild active={segment === null}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}`}
          >
            Settings
          </NextLink>
        </TabNavLink>

        <TabNavLink asChild active={segment === 'events'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/events`}
          >
            Events
          </NextLink>
        </TabNavLink>

        <TabNavLink asChild active={segment === 'users'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/users`}
          >
            Users
          </NextLink>
        </TabNavLink>

        <TabNavLink asChild active={segment === 'groups'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.directoryId}/groups`}
          >
            Groups
          </NextLink>
        </TabNavLink>
      </TabNavRoot>
    </>
  )
}
