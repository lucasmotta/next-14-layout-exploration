import { Flex, Heading, Link, Text } from '@radix-ui/themes'
import NextLink from 'next/link'

interface Props {
  params: { envId: string }
}

export default function OrganizationsPage({ params }: Props) {
  return (
    <Flex direction="column" gap="4" align="start">
      <Heading size="4">Organizations page</Heading>

      <Link asChild size="2">
        <NextLink href={`/${params.envId}/organizations/org_12345`}>
          Go to org_12345
        </NextLink>
      </Link>
    </Flex>
  )
}
