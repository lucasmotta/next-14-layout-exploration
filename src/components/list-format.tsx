'use client'

import { Children, Fragment, isValidElement } from 'react'

type Type = 'conjunction' | 'disjunction' | 'unit'

type Style = 'long' | 'short' | 'narrow'

type TypeStyle = `${Type}-${Style}`

interface ListFormatProps {
  type?: Type
  style?: Style
  children?: React.ReactNode
  renderSeparator?: (separator: string) => React.ReactElement
}

const TYPE_STYLE_SEPARATOR: Record<TypeStyle, string> = {
  'conjunction-long': ', and ',
  'conjunction-short': ', & ',
  'conjunction-narrow': ', ',
  'disjunction-long': ', or ',
  'disjunction-short': ', or ',
  'disjunction-narrow': ', or ',
  'unit-long': ', ',
  'unit-short': ', ',
  'unit-narrow': ' ',
}

export const ListFormat: React.FC<ListFormatProps> = ({
  type = 'conjunction',
  style = 'long',
  children,
  renderSeparator = defaultRenderSeparator,
}) => {
  const resolvedChildren = resolveFragmentChildren(children)
  const count = Children.count(resolvedChildren)
  const defaultSeparator = style === 'narrow' && type === 'unit' ? ' ' : ', '
  const typeStyle: TypeStyle = `${type}-${style}`
  let typeStyleSeparator = TYPE_STYLE_SEPARATOR[typeStyle]

  if (count === 2) {
    // remove leading comma when followed by a word character or ampersand
    typeStyleSeparator = typeStyleSeparator.replace(/^,(?=\s?[\w+|&])/g, '')
  }

  return Children.map(resolvedChildren, (child, index) => {
    const separator =
      index === count - 2 ? typeStyleSeparator : defaultSeparator
    return (
      <>
        {child}
        {index < count - 1 ? renderSeparator(separator) : null}
      </>
    )
  })
}

const defaultRenderSeparator = (separator: string) => <>{separator}</>

const resolveFragmentChildren = (children: React.ReactNode) => {
  if (isValidElement(children) && children.type === Fragment) {
    return children.props.children
  }

  return children
}
