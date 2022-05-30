<template>
  <div
    class="tab-container"
    :class="{
      'text-indigo-500': isPrimary,
      'bg-gray-50 shadow rounded-md': !isPrimary && active,
      'border-b-4 border-indigo-500 rounded-none': isPrimary && active
    }"
  >
    <Component :is="icon" class="tab-icon" />
    <p
      class="tab-title"
      :class="{ 'pb-2': isPrimary && active }"
      v-text="title"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Tab extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop() icon!: Vue.Component
  @Prop({ default: false }) isPrimary!: boolean
  @Prop({ default: false }) active!: boolean
}
</script>
