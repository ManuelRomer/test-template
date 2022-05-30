<template>
  <div class="card-container">
    <div :style="`background-image: url('${image}')`" class="card-image" />
    <div class="card-title-row">
      <p class="card-title" v-text="title" />
      <p class="card-price" v-text="currency + price" />
    </div>
    <p v-text="description" class="card-description" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
  @Prop() image!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) description!: string
  @Prop({ default: '€' }) currency!: '€' | '$'
  @Prop({ default: '' }) price!: number
}
</script>
