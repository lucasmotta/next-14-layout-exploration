import { Box, Flex, Heading, Link } from '@radix-ui/themes'
import NextLink from 'next/link'

export default function SettingsBillingPage() {
  return (
    <Box>
      <Heading size="4" mb="4">
        Billing page
      </Heading>

      <Flex gap="4">
        <Link asChild>
          <NextLink href="/settings/billing/history">
            View billing history
          </NextLink>
        </Link>
        <Link asChild>
          <NextLink href="/settings/billing/edit-payment-method">
            Edit payment method
          </NextLink>
        </Link>
      </Flex>
    </Box>
  )
}
