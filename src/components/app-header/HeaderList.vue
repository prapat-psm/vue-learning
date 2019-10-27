<template>
  <div class="header-utilities">
    <div v-for="(headerlist, index) in headerlists" :key="index" class="item">
      <p class="text">
        <a class="link" :href="headerlist.headerLink">{{ headerlist.headerText }} {{ headerlist.index }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerlists: [
        {
          headerText: 'Home',
          headerLink: '/',
        },
        {
          headerText: 'About Me',
          headerLink: '/about',
        },
        {
          headerText: 'Portfolio',
          headerLink: '/portfolio',
        },
      ]
    }
  },
  props: {
    headerText: {
      type: String
    },
    headerLink: {
      type: String
    },
  },
}
</script>