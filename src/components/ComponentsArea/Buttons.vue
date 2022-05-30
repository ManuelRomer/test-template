<template>
  <div class="components-area-section">
    <h1
      @click="show = !show"
      class="cursor-pointer hover:bg-gray-50"
      v-text="$t('buttons')"
    />
    <Transition v-if="show" name="fade">
      <div>
        <div class="components-area-wrapper">
          <Button ref="01" @click.native="copy('01')" :is-primary="true" />
          <Button
            ref="02"
            @click.native="copy('02')"
            :is-primary="true"
            size-sufix="sm"
          />
          <Button
            ref="03"
            @click.native="copy('03')"
            :is-primary="true"
            size-sufix="xs"
          />
        </div>
        <div class="components-area-wrapper">
          <Button ref="04" @click.native="copy('04')" :is-secondary="true" />
          <Button
            ref="05"
            @click.native="copy('05')"
            :is-secondary="true"
            size-sufix="sm"
          />
          <Button
            ref="06"
            @click.native="copy('06')"
            :is-secondary="true"
            size-sufix="xs"
          />
        </div>
        <div class="components-area-wrapper">
          <Button ref="07" @click.native="copy('07')" :is-basic="true" />
          <Button
            ref="08"
            @click.native="copy('08')"
            :is-basic="true"
            size-sufix="sm"
          />
          <Button
            ref="09"
            @click.native="copy('09')"
            :is-basic="true"
            size-sufix="xs"
          />
        </div>
        <div class="components-area-wrapper">
          <Button
            ref="10"
            @click.native="copy('10')"
            :is-basic="true"
            custom-bg-color="#1a5f1a"
          />
          <Button
            ref="11"
            @click.native="copy('11')"
            :is-basic="true"
            size-sufix="sm"
            custom-bg-color="#888"
          />
          <Button
            ref="12"
            @click.native="copy('12')"
            :is-basic="true"
            size-sufix="xs"
            custom-bg-color="gold"
          />
        </div>
        <div class="components-area-wrapper">
          <Button
            ref="13"
            @click.native="copy('13')"
            :is-basic="true"
            :icon="iconMail"
            icon-position="left"
          />
          <Button
            ref="14"
            @click.native="copy('14')"
            :is-basic="true"
            :icon="iconMail"
            size-sufix="sm"
            icon-position="left"
          />
          <Button
            ref="15"
            @click.native="copy('15')"
            :is-basic="true"
            :icon="iconMail"
            size-sufix="xs"
            icon-position="left"
            custom-text-color="red"
          />
        </div>
        <div class="components-area-wrapper">
          <Button
            ref="16"
            @click.native="copy('16')"
            :is-basic="true"
            :icon="iconMail"
            icon-position="right"
          />
          <Button
            :is-basic="true"
            :icon="iconMail"
            size-sufix="sm"
            icon-position="right"
          />
          <Button
            ref="17"
            @click.native="copy('17')"
            :is-basic="true"
            :icon="iconMail"
            size-sufix="xs"
            custom-bg-color="gold"
            custom-text-color="green"
            icon-position="right"
          />
        </div>
        <div class="components-area-wrapper">
          <Button
            ref="18"
            @click.native="copy('18')"
            :is-fully-rounded="true"
            custom-bg-color="#f54321"
            custom-text-color="white"
            :icon="iconMail"
            text=""
          />
          <Button
            ref="19"
            @click.native="copy('19')"
            :is-fully-rounded="true"
            :icon="iconMail"
            text=""
          />
          <Button
            ref="20"
            @click.native="copy('20')"
            :is-fully-rounded="true"
            :icon="iconMail"
            text=""
          />
        </div>
      </div>
    </Transition>
    <p id="toCopy" class="hidden" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Button from '../shared/Button.vue'
import IconArmchair from '../../assets/icons/icon-mail.svg'

@Component({
  components: { Button }
})
export default class Buttons extends Vue {
  private show = false

  private iconMail: Vue.Component = IconArmchair

  private async copy(ref: string) {
    // @ts-ignore
    const { outerHTML } = this.$refs[ref].$el
    await navigator.clipboard.writeText(outerHTML.replace('<!---->', ''))
    this.$toasted.success(this.$i18n.t('copied') as string)
  }

  mounted() {
    console.log('Buttons', Buttons)
  }
}
</script>
