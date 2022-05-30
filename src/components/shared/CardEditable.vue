<template>
  <div class="card-container">
    <div class="flex">
      <div
        :style="`background-image: url('${image}')`"
        class="editable-image"
      />
      <div class="flex flex-col justify-between p-4">
        <div class="flex flex-col">
          <p class="card-title" v-text="title" />
          <p class="text-sm" v-text="currency + price" />
          <p class="editable-description" v-text="description" />
          <p class="editable-description" v-text="subDescription" />
        </div>
        <div v-if="actions" class="flex">
          <p
            v-for="(action, key) of actions"
            :key="key"
            @click="doAction(action)"
            class="editable-action"
            v-text="action"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class CardEditable extends Vue {
  @Prop() image!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) description!: string
  @Prop({ default: '' }) subDescription!: string
  @Prop({ default: '€' }) currency!: '€' | '$'
  @Prop({ default: '' }) price!: number
  @Prop({ default: [] }) actions!: string[]

  @Emit()
  doAction(action: string): string {
    return action
  }
}
</script>
