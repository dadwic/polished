// @flow
import logicalProperty from '../logicalProperty'

describe('logicalProperty', () => {
  it('returns logical properties for caption-side', () => {
    expect(logicalProperty('captionSide', 'inlineStart')).toMatchSnapshot()
    expect(logicalProperty('captionSide', 'inlineEnd')).toMatchSnapshot()
    expect(logicalProperty('caption-side', 'inlineEnd')).toMatchSnapshot()
    expect(logicalProperty('caption-side', 'inline-end')).toMatchSnapshot()
  })

  it('returns logical properties for float', () => {
    expect(logicalProperty('float', 'inlineStart')).toMatchSnapshot()
    expect(logicalProperty('float', 'inlineEnd')).toMatchSnapshot()
  })

  it('returns logical properties for clear', () => {
    expect(logicalProperty('clear', 'inlineStart')).toMatchSnapshot()
    expect(logicalProperty('clear', 'inlineEnd')).toMatchSnapshot()
    expect(logicalProperty('clear', 'inline-end')).toMatchSnapshot()
  })

  it('returns logical properties for resize', () => {
    expect(logicalProperty('resize', 'inline')).toMatchSnapshot()
    expect(logicalProperty('resize', 'block')).toMatchSnapshot()
  })

  it('returns logical properties for text-align', () => {
    expect(logicalProperty('textAlign', 'start')).toMatchSnapshot()
    expect(logicalProperty('textAlign', 'end')).toMatchSnapshot()
    expect(logicalProperty('text-align', 'end')).toMatchSnapshot()
  })

  it('returns logical properties for height & width', () => {
    expect(logicalProperty('blockSize', '200px')).toMatchSnapshot()
    expect(logicalProperty('inlineSize', '300px')).toMatchSnapshot()
    expect(logicalProperty('block-size', '200px')).toMatchSnapshot()
    expect(logicalProperty('inline-size', '300px')).toMatchSnapshot()
  })

  it('returns logical properties for min/max-height & min/max-width', () => {
    expect(logicalProperty('minBlockSize', '200px')).toMatchSnapshot()
    expect(logicalProperty('minInlineSize', '300px')).toMatchSnapshot()
    expect(logicalProperty('maxBlockSize', '200px')).toMatchSnapshot()
    expect(logicalProperty('maxInlineSize', '300px')).toMatchSnapshot()
    expect(logicalProperty('min-block-size', '200px')).toMatchSnapshot()
    expect(logicalProperty('min-inline-size', '300px')).toMatchSnapshot()
    expect(logicalProperty('max-block-size', '200px')).toMatchSnapshot()
    expect(logicalProperty('max-inline-size', '300px')).toMatchSnapshot()
  })

  it('returns logical properties for margin longhand', () => {
    expect(logicalProperty('marginBlockStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('marginBlockEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('marginInlineStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('marginInlineEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('margin-block-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('margin-block-end', '20px')).toMatchSnapshot()
    expect(logicalProperty('margin-inline-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('margin-inline-end', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for margin shorthand', () => {
    expect(logicalProperty('marginBlock', '20px')).toMatchSnapshot()
    expect(logicalProperty('marginInline', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for padding longhand', () => {
    expect(logicalProperty('paddingBlockStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('paddingBlockEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('paddingInlineStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('paddingInlineEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('padding-block-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('padding-block-end', '20px')).toMatchSnapshot()
    expect(logicalProperty('padding-inline-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('padding-inline-end', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for padding shorthand', () => {
    expect(logicalProperty('paddingBlock', '20px')).toMatchSnapshot()
    expect(logicalProperty('paddingInline', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for border-width longhand', () => {
    expect(logicalProperty('borderBlockStartWidth', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderBlockEndWidth', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderInlineStartWidth', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderInlineEndWidth', '20px')).toMatchSnapshot()
    expect(
      logicalProperty('border-block-start-width', '20px'),
    ).toMatchSnapshot()
    expect(logicalProperty('border-block-end-width', '20px')).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-start-width', '20px'),
    ).toMatchSnapshot()
    expect(logicalProperty('border-inline-end-width', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for border-width shorthand', () => {
    expect(logicalProperty('borderBlockWidth', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderInlineWidth', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for border-style longhand', () => {
    expect(logicalProperty('borderBlockStartStyle', 'dashed')).toMatchSnapshot()
    expect(logicalProperty('borderBlockEndStyle', 'dashed')).toMatchSnapshot()
    expect(
      logicalProperty('borderInlineStartStyle', 'dashed'),
    ).toMatchSnapshot()
    expect(logicalProperty('borderInlineEndStyle', 'dashed')).toMatchSnapshot()
    expect(
      logicalProperty('border-block-start-style', 'dashed'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-block-end-style', 'dashed'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-start-style', 'dashed'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-end-style', 'dashed'),
    ).toMatchSnapshot()
  })

  it('returns logical properties for border-style shorthand', () => {
    expect(logicalProperty('borderBlockStyle', 'dashed')).toMatchSnapshot()
    expect(logicalProperty('borderInlineStyle', 'dashed')).toMatchSnapshot()
  })

  it('returns logical properties for border-color longhand', () => {
    expect(logicalProperty('borderBlockStartColor', 'green')).toMatchSnapshot()
    expect(logicalProperty('borderBlockEndColor', 'green')).toMatchSnapshot()
    expect(logicalProperty('borderInlineStartColor', 'green')).toMatchSnapshot()
    expect(logicalProperty('borderInlineEndColor', 'green')).toMatchSnapshot()
    expect(
      logicalProperty('border-block-start-color', 'green'),
    ).toMatchSnapshot()
    expect(logicalProperty('border-block-end-color', 'green')).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-start-color', 'green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-end-color', 'green'),
    ).toMatchSnapshot()
  })

  it('returns logical properties for border-color shorthand', () => {
    expect(logicalProperty('borderBlockColor', 'green')).toMatchSnapshot()
    expect(logicalProperty('borderInlineColor', 'green')).toMatchSnapshot()
  })

  it('returns logical properties for border longhand', () => {
    expect(
      logicalProperty('borderBlockStart', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderBlockEnd', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderInlineStart', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderInlineEnd', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-block-start', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-block-end', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-start', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-inline-end', '20px dashed green'),
    ).toMatchSnapshot()
  })

  it('returns logical properties for border shorthand', () => {
    expect(
      logicalProperty('borderBlock', '20px dashed green'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderInline', '20px dashed green'),
    ).toMatchSnapshot()
  })

  it('returns logical properties for border-radius', () => {
    expect(logicalProperty('borderStartStartRadius', '5px')).toMatchSnapshot()
    expect(logicalProperty('borderStartEndRadius', '5px')).toMatchSnapshot()
    expect(logicalProperty('borderEndStartRadius', '5px')).toMatchSnapshot()
    expect(logicalProperty('borderEndEndRadius', '5px')).toMatchSnapshot()
    expect(
      logicalProperty('border-start-start-radius', '5px'),
    ).toMatchSnapshot()
    expect(logicalProperty('border-start-end-radius', '5px')).toMatchSnapshot()
    expect(logicalProperty('border-end-start-radius', '5px')).toMatchSnapshot()
    expect(logicalProperty('border-end-end-Radius', '5px')).toMatchSnapshot()
  })

  it('returns logical properties for inset longhand', () => {
    expect(logicalProperty('insetBlockStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('insetBlockEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('insetInlineStart', '20px')).toMatchSnapshot()
    expect(logicalProperty('insetInlineEnd', '20px')).toMatchSnapshot()
    expect(logicalProperty('inset-block-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('inset-block-end', '20px')).toMatchSnapshot()
    expect(logicalProperty('inset-inline-start', '20px')).toMatchSnapshot()
    expect(logicalProperty('inset-inline-end', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for inset shorthand', () => {
    expect(logicalProperty('insetBlock', '20px')).toMatchSnapshot()
    expect(logicalProperty('insetInline', '20px')).toMatchSnapshot()
    expect(logicalProperty('insetBlock', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('insetInline', '20px 10px')).toMatchSnapshot()
  })

  it('returns logical properties for complete shorthands with a single value', () => {
    expect(logicalProperty('inset', '20px')).toMatchSnapshot()
    expect(logicalProperty('margin', '20px')).toMatchSnapshot()
    expect(logicalProperty('padding', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderWidth', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderStyle', '20px')).toMatchSnapshot()
    expect(logicalProperty('borderColor', '20px')).toMatchSnapshot()
    expect(logicalProperty('border-color', '20px')).toMatchSnapshot()
  })

  it('returns logical properties for complete shorthands with two values', () => {
    expect(logicalProperty('inset', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('margin', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('padding', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('borderWidth', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('borderStyle', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('borderColor', '20px 10px')).toMatchSnapshot()
    expect(logicalProperty('border-color', '20px 10px')).toMatchSnapshot()
  })

  it('returns logical properties for complete shorthands with three values', () => {
    expect(logicalProperty('inset', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('margin', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('padding', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('borderWidth', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('borderStyle', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('borderColor', '20px 10px 15px')).toMatchSnapshot()
    expect(logicalProperty('border-color', '20px 10px 15px')).toMatchSnapshot()
  })

  it('returns logical properties for complete shorthands with four values', () => {
    expect(logicalProperty('inset', '20px 10px 15px 5px')).toMatchSnapshot()
    expect(logicalProperty('margin', '20px 10px 15px 5px')).toMatchSnapshot()
    expect(logicalProperty('padding', '20px 10px 15px 5px')).toMatchSnapshot()
    expect(
      logicalProperty('borderWidth', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-width', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderStyle', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-style', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('borderColor', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
    expect(
      logicalProperty('border-color', '20px 10px 15px 5px'),
    ).toMatchSnapshot()
  })
})
