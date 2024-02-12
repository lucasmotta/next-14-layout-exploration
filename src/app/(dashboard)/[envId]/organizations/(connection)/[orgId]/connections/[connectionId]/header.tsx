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
        <TabNavLink asChild active={segment === null}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.connectionId}`}
          >
            Connection
          </NextLink>
        </TabNavLink>

        <TabNavLink asChild active={segment === 'sessions'}>
          <NextLink
            href={`/${params.envId}/organizations/${params.orgId}/${params.connectionId}/sessions`}
          >
            Sessions
          </NextLink>
        </TabNavLink>
      </TabNavRoot>
    </>
  )
}
