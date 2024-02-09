import { Box, Flex, Heading, Link } from '@radix-ui/themes'
import NextLink from 'next/link'

export default function SettingsBillingPage() {
  return (
    <Box>
      <Heading size="4" mb="4">
        Billing page
      </Heading>

      <Flex direction="column" gap="2">
        <Link asChild size="2">
          <NextLink href="/settings/billing/history">
            View billing history
          </NextLink>
        </Link>
        <Link asChild size="2">
          <NextLink href="/settings/billing/edit-payment-method">
            Edit payment method
          </NextLink>
        </Link>
      </Flex>
    </Box>
  )
}
