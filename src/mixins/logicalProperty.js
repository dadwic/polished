// @flow
import type { Style } from '../types/style'
import camelcase from '../internalHelpers/_camelcase'
import capitalizeString from '../internalHelpers/_capitalizeString'

const propertyMap = {
  blockStart: 'top',
  inlineStart: 'left',
  inlineEnd: 'right',
  blockEnd: 'bottom',
  blockSize: 'height',
  inlineSize: 'width',
  inline: 'horizontal',
  block: 'vertical',
  end: 'right',
  start: 'left',
  startStart: 'topLeft',
  startEnd: 'bottomLeft',
  endStart: 'topRight',
  endEnd: 'bottomRight',
}

const valueRegex = /^(?:inline(?:Start|End)?|block|end|start)$/i
const propertyRegex = /(?:block|inline)(?:Start|End|Size)|(?:start|end)(?:Start|End)/i

function generateProperty(property, direction) {
  const generatedProperty = property.replace(
    /(.+)(Color|Style|Width)|$/,
    `$1${direction}$2`,
  )
  return generatedProperty.match(/^(Top|Right|Bottom|Left)$/)
    ? generatedProperty.toLowerCase()
    : generatedProperty
}

function shorterhandGenerator(property, values) {
  const [
    firstValue,
    secondValue = firstValue,
    thirdValue = firstValue,
    fourthValue = secondValue,
  ] = values.split(' ')
  const propertyPrefix = property === 'inset' ? '' : property

  return [
    {
      [generateProperty(propertyPrefix, 'Top')]: firstValue,
      [generateProperty(propertyPrefix, 'Right')]: fourthValue,
      [generateProperty(propertyPrefix, 'Bottom')]: thirdValue,
      [generateProperty(propertyPrefix, 'Left')]: secondValue,
    },
    {
      [generateProperty(property, 'BlockStart')]: firstValue,
      [generateProperty(property, 'InlineStart')]: secondValue,
      [generateProperty(property, 'BlockEnd')]: thirdValue,
      [generateProperty(property, 'InlineEnd')]: fourthValue,
    },
  ]
}

function shortHandGenerator(property, values) {
  const [firstValue, secondValue = firstValue] = values.split(' ')
  const isInset = property.match(/inset/)
  const propertyPrefix = isInset ? '' : property.replace(/Block|Inline/, '')

  const finalFirstValue = isInset ? firstValue : values
  const finalSecondValue = isInset ? secondValue : values

  const fallback = property.match(/Block/)
    ? {
      [generateProperty(propertyPrefix, 'Top')]: finalFirstValue,
      [generateProperty(propertyPrefix, 'Bottom')]: finalSecondValue,
    }
    : {
      [generateProperty(propertyPrefix, 'Right')]: finalSecondValue,
      [generateProperty(propertyPrefix, 'Left')]: finalFirstValue,
    }

  return [
    {
      ...fallback,
    },
    {
      [property]: finalFirstValue,
    },
  ]
}

function replacer(match, offset) {
  const normalizedMatch = match[0].toLowerCase() + match.substr(1)
  const newReturnValue = propertyMap[normalizedMatch] || match
  return offset > 0 ? capitalizeString(newReturnValue) : newReturnValue
}

export default function logicalProperty(
  property: string,
  value: string | number,
): Array<Style> {
  const camelCasedProperty = camelcase(property)
  const camelCasedValue = camelcase(value)

  if (
    camelCasedProperty.match(
      /(?:border|margin|padding|inset)(?:Color|Style|Width)?$/i,
    )
  ) return shorterhandGenerator(camelCasedProperty, value)
  if (
    camelCasedProperty.match(
      /(?:border|margin|padding|inset)(?:Block|Inline)?(?:Color|Style|Width)?$/i,
    )
  ) return shortHandGenerator(camelCasedProperty, value)

  return [
    {
      [camelCasedProperty]: camelCasedValue,
    },
    {
      [camelCasedProperty.replace(
        propertyRegex,
        replacer,
      )]: camelCasedValue.replace(valueRegex, replacer),
    },
  ]
}
