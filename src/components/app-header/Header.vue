<template>
  <div class="header">
    <div class="header-row">
      <app-header-logo></app-header-logo>
      <app-header-list></app-header-list>
    </div>
  </div>
</template>

<script>
import HeaderLogo from './HeaderLogo.vue'
import HeaderList from './HeaderList.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    'app-header-logo': HeaderLogo,
    'app-header-list': HeaderList,
  }
}
</script>