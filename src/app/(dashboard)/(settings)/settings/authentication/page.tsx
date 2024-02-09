import { Heading } from '@radix-ui/themes'

export default async function SettingsAuthenticationPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <Heading size="3">Authentication page</Heading>
}
