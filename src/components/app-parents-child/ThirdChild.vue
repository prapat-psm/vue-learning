<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-sm-12">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="{width: (nameCount / maximumName ) * 100 + '%'}"
          >
            {{ nameCount }} / {{ maximumName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['nameCount', 'maximumName']
}
</script>