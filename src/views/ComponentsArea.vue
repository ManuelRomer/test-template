<template>
  <div class="w-2/3 mx-auto mt-20">
    <Buttons />
    <Stats />
    <Hints />
    <Tabs />
    <Cards />
    <TeamCards />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Buttons from '../components/ComponentsArea/Buttons.vue'
import Stats from '../components/ComponentsArea/Stats.vue'
import Hints from '../components/ComponentsArea/Hints.vue'
import Tabs from '../components/ComponentsArea/Tabs.vue'
import Cards from '../components/ComponentsArea/Cards.vue'
import TeamCards from '../components/ComponentsArea/TeamCards.vue'

@Component({
  components: { Buttons, Stats, Hints, Tabs, Cards, TeamCards }
})
export default class Components extends Vue {}
</script>
