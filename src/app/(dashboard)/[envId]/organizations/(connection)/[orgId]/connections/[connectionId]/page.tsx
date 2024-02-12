import { Heading } from '@radix-ui/themes'

interface Props {
  params: { connectionId: string }
}

export default function ConnectionPage({ params }: Props) {
  return <Heading size="3">Connection page: {params.connectionId}</Heading>
}
