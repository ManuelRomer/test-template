module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'max-nesting-depth': 3,
    'string-quotes': 'single',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen']
      }
    ],
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'declaration-property-unit-whitelist': {
      bottom: ['%', 'rem'],
      height: ['%', 'rem', 'vh', 'vw', 'px'],
      'font-size': ['rem'],
      left: ['%', 'rem'],
      margin: ['rem', '%'],
      padding: ['rem'],
      right: ['%', 'rem'],
      top: ['%', 'rem'],
      transform: ['deg', '%', 'rem'],
      transition: ['s'],
      width: ['%', 'rem', 'vh', 'vw']
    }
  }
}
