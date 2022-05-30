<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('stats')"
    />
    <Transition v-if="show" name="fade">
      <div>
        <div class="components-area-wrapper">
          <Stat title="Avg Open Rate" :main-value="54" :is-main-rate="true" />
          <Stat
            title="Avg Open Rate"
            :main-value="61.54"
            :is-main-rate="true"
            :subValue="1.8"
            :is-sub-rate="true"
            :is-positive="true"
            action="click here for action"
            :icon="iconMail"
            @do-action="doAction()"
          />
          <Stat
            title="Avg Open Rate"
            :main-value="31.36"
            :is-main-rate="true"
            :subValue="0.8"
            :is-sub-rate="true"
            :is-positive="false"
            action="click here for reference"
            :icon="iconMail"
            @do-action="doAction()"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Stat from '../shared/Stat.vue'
import IconMail from '../../assets/icons/icon-mail.svg'

@Component({
  components: { Stat }
})
export default class Stats extends Vue {
  private show = false
  private iconMail: Vue.Component = IconMail

  private doAction() {
    console.log('doAction')
  }
}
</script>
