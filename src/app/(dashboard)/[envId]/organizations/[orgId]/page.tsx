import { Flex, Heading, Link } from '@radix-ui/themes'
import NextLink from 'next/link'

interface Props {
  params: { envId: string; orgId: string }
}

export default function OrgFeaturesPage({ params }: Props) {
  return (
    <Flex direction="column" gap="4" align="start">
      <Heading size="3">Features page</Heading>

      <Link asChild size="2">
        <NextLink
          href={`/${params.envId}/organizations/${params.orgId}/conn_12345`}
        >
          View connection
        </NextLink>
      </Link>

      <Link asChild size="2">
        <NextLink
          href={`/${params.envId}/organizations/${params.orgId}/directory_12345`}
        >
          View directory
        </NextLink>
      </Link>
    </Flex>
  )
}
