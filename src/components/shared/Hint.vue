<template>
  <div class="hint-card">
    <Component :is="icon" class="hint-icon" />
    <p class="hint-title" v-text="title" />
    <p class="hint-description" v-text="description" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Hint extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) description!: string
  @Prop() icon!: Vue.Component
}
</script>
