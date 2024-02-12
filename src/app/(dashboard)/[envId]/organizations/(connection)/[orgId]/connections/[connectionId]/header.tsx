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
  const params = useParams<{
    envId: string
    orgId: string
    connectionId: string
  }>()
  const segment = useSelectedLayoutSegment()

  return (
    <>
      <Heading size="6" mb="4">
        Connection {params.connectionId}
      </Heading>

      <TabNavRoot>
        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.connectionId}`}
        >
          <TabNavLink active={segment === null}>Connection</TabNavLink>
        </NextLink>

        <NextLink
          passHref
          legacyBehavior
          href={`/${params.envId}/organizations/${params.orgId}/${params.connectionId}/sessions`}
        >
          <TabNavLink active={segment === 'sessions'}>Sessions</TabNavLink>
        </NextLink>
      </TabNavRoot>
    </>
  )
}
