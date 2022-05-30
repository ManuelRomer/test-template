<template>
  <div class="team-container" :class="{ 'flex items-center': isRow }">
    <div :style="`background-image: url('${image}')`" class="team-image" />
    <div class="team-data" :class="{ 'mt-2': !isRow }">
      <p class="team-title" v-text="title" />
      <p class="team-position" v-text="position" />
      <p class="team-email" v-text="email" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TeamCard extends Vue {
  @Prop() image!: string
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) position!: string
  @Prop({ default: true }) isRow!: boolean
  @Prop({ default: '' }) email!: string
}
</script>
