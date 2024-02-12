'use client'

import { useParams } from 'next/navigation'
import { AutoBreadcrumbs } from '~/components/auto-breadcrumbs'

export function Header() {
  const params = useParams<{
    envId: string
    orgId: string
    connectionId: string
    directoryId: string
  }>()

  return (
    <AutoBreadcrumbs
      customSegments={[
        'organizations',
        params.orgId,
        params.connectionId || params.directoryId,
      ]}
      customDictionary={{
        [params.orgId]: 'Foo corp',
      }}
    />
  )
}
