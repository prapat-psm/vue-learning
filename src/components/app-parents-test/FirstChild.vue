<template>
  <div class="col-sm-6 col-xs-12 col-md-4">
    <div class="card">
      <div class="card-body">
        <blockquote class="blockquote">
          <slot name="quote-title"></slot>
          <slot name="quote-footer"></slot>
        </blockquote>
      </div>
    </div>
  </div>
</template>