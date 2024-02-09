import { Heading, Skeleton } from '@radix-ui/themes'

export default async function SettingsAuthenticationLoading() {
  return (
    <Heading size="3">
      <Skeleton loading>Authentication page</Skeleton>
    </Heading>
  )
}
