<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>The Super Quiz</h1>
      </div>
      <div class="col-sm-8 offset-sm-2">
        <component :is="componentId"></component>
      </div>
    </div>
  </div>
</template>

<script>
import appQuestion from "./Question";
import appAnswer from "./Answer";
export default {
  data() {
    return {
      mode: 'app-question'
    }
  },
  component: {
    'appQuestion' : appQuestion
    'appAnswer' : appAnswer
  }
}
</script>