<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('cards')"
    />
    <Transition v-if="show" name="fade">
      <div class="components-area-wrapper">
        <Card
          image="https://i.pinimg.com/736x/d5/e2/58/d5e258b658a0af27bd5483e90f81f9d0--facade-architecture-multifamily-architecture.jpg"
          title="Building Complex I"
          description="A building is a fixed construction"
          price="120.000"
        />
        <Card
          image="https://i.pinimg.com/736x/d5/e2/58/d5e258b658a0af27bd5483e90f81f9d0--facade-architecture-multifamily-architecture.jpg"
          title="Building Complex II"
          description="A building is a fixed construction"
          price="180.000"
        />
        <CardEditable
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY33dXmXPqmMBDPdfoh2RYsCu4vIeaNBbEg&usqp=CAU"
          title="Building complex III"
          description="A building is a fixed construction"
          subDescription="Big build"
          price="210.000"
          currency="$"
          :actions="['Edit', 'Delete', 'Activate']"
          @do-action="doAction"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '../shared/Card.vue'
import CardEditable from '../shared/CardEditable.vue'

@Component({
  components: { Card, CardEditable }
})
export default class Cards extends Vue {
  private show = false

  private doAction(action: string) {
    console.log('doAction', action)
  }
}
</script>
