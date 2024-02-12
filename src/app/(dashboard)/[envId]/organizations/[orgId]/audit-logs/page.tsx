import { Flex, Heading, Link } from '@radix-ui/themes'
import NextLink from 'next/link'

interface Props {
  params: { envId: string; orgId: string }
}

export default function OrgAuditLogsPage({ params }: Props) {
  return (
    <Flex direction="column" gap="4" align="start">
      <Heading size="3">Audit logs page</Heading>

      <Link asChild size="2">
        <NextLink
          href={`/${params.envId}/organizations/${params.orgId}/audit-logs/audit_log_event_12345`}
        >
          Go to audit log event 12345
        </NextLink>
      </Link>
    </Flex>
  )
}
