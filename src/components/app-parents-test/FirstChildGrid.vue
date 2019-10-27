<template>
  <div class="row my-3">
    <first-child v-for="(childItem, index) in childItems" :key="index">
      <p slot="quote-title">{{ childItem.title }}</p>
      <footer class="card-blockquote" slot="quote-footer">{{ childItem.footer }}</footer>
    </first-child>
  </div>
</template>

<script>
import FirstChild from "../parents-test/FirstChild";

export default {
  props: ['childItems'],
  components: {
    'first-child' : FirstChild,
  }
}
</script>