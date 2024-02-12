'use client'

import { Flex, Link, Text } from '@radix-ui/themes'
import NextLink from 'next/link'
import { useParams, useSelectedLayoutSegments } from 'next/navigation'
import { ListFormat } from './list-format'
import { ComponentProps } from 'react'

const dictionary: Record<string, string> = {
  settings: 'Workspace settings',
  billing: 'Billing and plans',
  history: 'Payment history',
  'edit-payment-method': 'Edit payment method',

  organizations: 'Organizations',
  'audit-logs': 'Audit logs',
}

type AutoBreadcrumbsProps = {
  customSegments?: string[]
  baseSegments?: string[]
  customDictionary?: Record<string, string>
} & ComponentProps<typeof Flex>

export function AutoBreadcrumbs({
  baseSegments = [],
  customSegments,
  customDictionary = {},
  ...props
}: AutoBreadcrumbsProps) {
  const params = useParams<{ envId?: string }>()
  const segments = customSegments || [
    ...baseSegments,
    ...useSelectedLayoutSegments(),
  ]

  let acc = params.envId ? `/${params.envId}` : ''

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

          const label =
            dictionary[segment] ?? customDictionary[segment] ?? segment

          if (index === segments.length - 1) {
            return (
              <Text key={segment} size="2" color="gray">
                {label}
              </Text>
            )
          }

          return (
            <Link asChild key={segment} size="2">
              <NextLink href={acc}>{label}</NextLink>
            </Link>
          )
        })}
      </ListFormat>
    </Flex>
  )
}
