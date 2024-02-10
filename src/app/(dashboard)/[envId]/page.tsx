import { Flex, Heading, Text } from '@radix-ui/themes'

interface Props {
  params: { envId: string }
}

export default function GetStartedPage({ params }: Props) {
  return (
    <Flex direction="column" gap="4">
      <Heading size="4">Get started page</Heading>
      <Text>Env: {params.envId}</Text>
    </Flex>
  )
}
