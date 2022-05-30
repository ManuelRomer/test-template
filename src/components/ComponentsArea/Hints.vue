<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('hints')"
    />
    <Transition v-if="show" name="fade">
      <div class="components-area-wrapper">
        <Hint
          title="Fast-Delivery-Truck"
          :icon="iconHint"
          :description="'This is detail, this text is part of the description'"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Hint from '../shared/Hint.vue'
import IconHint from '../../assets/icons/icon-hint.svg'

@Component({
  components: { Hint }
})
export default class Hints extends Vue {
  private show = false
  private iconHint: Vue.Component = IconHint
}
</script>
