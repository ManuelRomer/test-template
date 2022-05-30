<template>
  <button :class="getStyles()" :style="getCustomColors()">
    <Component
      :is="icon"
      class="transform"
      :class="{
        'scale-90': sizeSufix === 'sm',
        'scale-75': sizeSufix === 'xs',
        'mr-2': iconPosition === 'left',
        'ml-2 order-last': iconPosition === 'right'
      }"
    />
    <span v-if="text" v-text="text" />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({ default: 'Button' }) text!: string

  @Prop({ default: false }) isPrimary!: string
  @Prop({ default: false }) isBasic!: string
  @Prop({ default: false }) isSecondary!: string
  @Prop({ default: false }) isRounded!: string
  @Prop({ default: false }) isFullyRounded!: string

  @Prop({ default: 'md' }) sizeSufix!: 'md' | 'sm' | 'xs'
  @Prop({ default: '' }) customBgColor!: string
  @Prop({ default: '' }) customTextColor!: string

  @Prop() icon!: Vue.Component
  @Prop({ default: '' }) iconPosition!: 'left' | 'right'

  private getStyles(): string {
    let buttonCssType = ''

    if (this.isPrimary) buttonCssType = 'button-primary'
    else if (this.isSecondary) buttonCssType = 'button-secondary'
    else if (this.isBasic) buttonCssType = 'button-basic'

    if (this.isRounded || this.isFullyRounded) {
      buttonCssType += this.isFullyRounded
        ? 'button-rounded-full'
        : 'rounded-lg'
    } else {
      buttonCssType += ' rounded'
    }

    return `${buttonCssType} button-${this.sizeSufix}`
  }

  private getCustomColors(): string {
    let customColors =
      this.customBgColor && `background-color: ${this.customBgColor}; `

    customColors += this.customTextColor && `color: ${this.customTextColor};`

    return customColors
  }
}
</script>
