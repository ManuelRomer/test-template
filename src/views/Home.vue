<template>
  <div class="p-2 m-4 border f-col">
    <p
      @click="$router.push({ name: 'ComponentsArea' })"
      class="home-link"
      v-text="'Components'"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StoreUser from '../store/modules/StoreUser'
import { User } from '../store/Models'

@Component
export default class Home extends Vue {
  private get user(): User {
    return StoreUser.user
  }
}
</script>
