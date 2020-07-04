// @flow
import capitalizeString from './_capitalizeString'

// @private
export default function camelcase(property: string) {
  const splitProperty = property.split('-')
  if (splitProperty.length > 1) {
    return splitProperty.reduce((acc, val) => `${acc}${capitalizeString(val)}`)
  }
  return property
}
