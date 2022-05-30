<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('teamcards')"
    />
    <Transition v-if="show" name="fade">
      <div class="components-area-wrapper">
        <TeamCard
          image="https://media.istockphoto.com/photos/passport-picture-of-a-woman-with-dark-hair-and-blouse-picture-id477815446?k=20&m=477815446&s=612x612&w=0&h=phiQ0HhhxnLdXlIXJ0xU5sd9IQ5lXERa84BmSCERpZQ="
          title="Leslie Alexander"
          position="Co-Founder / CEO"
          email="jus@1234.com"
        />
        <TeamCard
          image="https://fotofigaredo.files.wordpress.com/2015/01/foto-carnet.jpg"
          title="Jonathan Sheil"
          position="Marketing Officer"
          email="ksi@1234.com"
        />
        <TeamCard
          image="https://media.istockphoto.com/photos/official-portrait-of-a-blonde-woman-picture-id484023190?k=20&m=484023190&s=612x612&w=0&h=jdrzClLw1OV4rLvu8PeOKtvK_Vm-BbMd8M9DyckqE64="
          title="Amber Scott"
          position="Digital Officer"
          :isRow="false"
          email="lse@1234.com"
        />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TeamCard from '../shared/TeamCard.vue'

@Component({
  components: { TeamCard }
})
export default class Teamcards extends Vue {
  private show = false
}
</script>
