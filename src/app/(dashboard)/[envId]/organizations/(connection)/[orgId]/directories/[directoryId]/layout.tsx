import { Box } from '@radix-ui/themes'
import { ReactNode } from 'react'
import { Header } from './header'

export default function DirectoryLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Box mb="4">
        <Header />
      </Box>

      {children}
    </Box>
  )
}
