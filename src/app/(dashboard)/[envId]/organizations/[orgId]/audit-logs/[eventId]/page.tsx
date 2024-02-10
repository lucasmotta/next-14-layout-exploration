import { Heading } from '@radix-ui/themes'

interface Props {
  params: { eventId: string }
}

export default function AuditLogEventPage({ params }: Props) {
  return <Heading size="3">AuditLogEvent page: {params.eventId}</Heading>
}
