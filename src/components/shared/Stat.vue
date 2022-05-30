<template>
  <div class="stat-wrapper">
    <div class="flex items-center mb-8">
      <div v-if="icon" class="stat-icon-wrapper">
        <Component :is="icon" />
      </div>
      <div class="flex flex-col">
        <p class="stat-title" v-text="title" />
        <div class="flex items-end">
          <p class="stat-main-value" v-text="getMainValue()" />
          <p v-if="subValue" class="inline-flex" :class="getPositiveStyles()">
            <IconArrow :class="getArrowRotation()" />
            {{ getSubValue() }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="action">
      <p @click="doAction()" class="stat-action" v-text="action" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import IconArrow from '../../assets/icons/icon-arrow.svg'

@Component({
  components: { IconArrow }
})
export default class Stat extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: 0 }) mainValue!: number
  @Prop({ default: false }) isMainRate!: boolean
  @Prop() subValue!: number
  @Prop({ default: false }) isSubRate!: boolean
  @Prop({ default: true }) isPositive!: boolean
  @Prop({ default: '' }) action!: string
  @Prop() icon!: Vue.Component

  private getMainValue(): string {
    return `${this.mainValue}${this.isMainRate ? '%' : ''}`
  }

  private getPositiveStyles(): string {
    return this.isPositive ? 'text-green-500' : 'text-red-500'
  }

  private getArrowRotation(): string {
    return this.isPositive ? 'pb-2' : 'transform rotate-180 pb-2'
  }

  private getSubValue(): string {
    return `${this.subValue}${this.isSubRate ? '%' : ''}`
  }

  @Emit() doAction() {}
}
</script>
