<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('tabs')"
    />
    <Transition v-if="show" name="fade">
      <div class="components-area-wrapper">
        <Tab title="My Account" :active="true" />
        <Tab title="Company" :icon="iconTab" />
        <Tab title="Team Members" :isPrimary="true" :active="true" />
        <Tab title="Building" :isPrimary="true" :icon="iconMail" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Tab from '../shared/Tab.vue'
import IconTab from '../../assets/icons/icon-tab-company.svg'
import IconMail from '../../assets/icons/icon-mail.svg'

@Component({
  components: { Tab }
})
export default class Tabs extends Vue {
  private show = false
  private iconTab: Vue.Component = IconTab
  private iconMail: Vue.Component = IconMail
}
</script>
