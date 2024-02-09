import { Box, Heading } from '@radix-ui/themes'
import Link from 'next/link'

export default function SettingsBillingPage() {
  return (
    <Box>
      <Heading size="3">Billing page</Heading>
      <Link href="/settings/billing/history">History</Link>
    </Box>
  )
}
