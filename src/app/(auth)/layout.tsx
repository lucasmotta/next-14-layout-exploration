import { Box, Heading } from '@radix-ui/themes'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box p="4">
      <Heading size="6" mb="4">
        Auth layout
      </Heading>

      {children}
    </Box>
  )
}
