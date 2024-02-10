import { Box, Card, Flex, Heading } from '@radix-ui/themes'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Flex p="4" align="center" justify="center" style={{ minHeight: '100dvh' }}>
      <Card style={{ width: 420 }} variant="classic">
        {children}
      </Card>
    </Flex>
  )
}
