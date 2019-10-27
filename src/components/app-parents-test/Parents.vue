<template>
  <div class="container">
    <parents-child-grid :childItems="justText"></parents-child-grid>
    <parents-second-child @titleAdded="newTitleQuote"></parents-second-child>

    <p v-for="(txt, index) in justText" :key="index">
      {{ txt.title }} : {{ txt.footer }}
    </p>
  </div>
</template>

<script>
import FirstChildGrid from "../parents-test/FirstChildGrid";
import SecondChild    from "../parents-test/SecondChild";
export default {
  data: function() {
    return {
      justText: [
        {
          title: 'This Child',
          footer: 'This is footer 01'
        },
        {
          title: 'This Child Second item',
          footer: 'This is footer 02'
        },
      ],
    }
  },
  methods: {
    newTitleQuote: function(quoteFooter, quoteTitle) {
      this.justText.push({
        title: quoteTitle,
        footer: quoteFooter
      });
    },
    // newTitleQuote: function(quoteTitle) {
    //   console.log(quoteTitle);
    //   this.justText.push({
    //   });
    // },
  },
  components: {
    'parents-child-grid'  : FirstChildGrid,
    'parents-second-child' : SecondChild,
  }
}
</script>