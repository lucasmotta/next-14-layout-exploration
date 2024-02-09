'use client'

import { Flex, Link, Text } from '@radix-ui/themes'
import NextLink from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import { ListFormat } from './list-format'
import { ComponentProps } from 'react'

const dictionary: Record<string, string> = {
  settings: 'Workspace settings',
  billing: 'Billing and plans',
  history: 'Payment history',
  'edit-payment-method': 'Edit payment method',
}

type AutoBreadcrumbsProps = {
  baseSegments?: string[]
} & ComponentProps<typeof Flex>

export function AutoBreadcrumbs({
  baseSegments = [],
  ...props
}: AutoBreadcrumbsProps) {
  const segments = [...baseSegments, ...useSelectedLayoutSegments()]

  let acc = ''

  return (
    <Flex gap="2" {...props}>
      <ListFormat
        type="unit"
        renderSeparator={() => (
          <Text size="2" style={{ color: 'var(--gray-a7)' }}>
            /
          </Text>
        )}
      >
        {segments.map((segment, index) => {
          acc += `/${segment}`

          if (index === segments.length - 1) {
            return (
              <Text key={segment} size="2" color="gray">
                {dictionary[segment] ?? segment}
              </Text>
            )
          }

          return (
            <Link asChild key={segment} size="2">
              <NextLink href={acc}>{dictionary[segment] ?? segment}</NextLink>
            </Link>
          )
        })}
      </ListFormat>
    </Flex>
  )
}
