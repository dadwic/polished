import transitions from '../transitions'

describe('transitions', () => {
  it('should generate a single transition from a parameter', () => {
    expect({
      ...transitions('opacity 1.0s ease-in 0s'),
    }).toMatchSnapshot()
  })

  it('should generate a multiple transitions from multiple parameters', () => {
    expect({
      ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
    }).toMatchSnapshot()
  })

  it('should apply the same transition to an array of properties', () => {
    expect({
      ...transitions(['color', 'background-color'], '2.0s ease-in 2s'),
    }).toMatchSnapshot()
  })

  it('should throw an error when passed a non-string value', () => {
    expect(() => ({
      // $FlowFixMe
      ...transitions(['color', 'background-color'], 1),
    })).toThrow('Property must be a string value.')
  })
})
