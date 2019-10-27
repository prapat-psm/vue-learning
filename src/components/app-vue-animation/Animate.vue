<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <app-animation-02></app-animation-02>

        <div class="form-group">
          <label for="select-animation">Select Box For Animation</label>
          <select class="form-control mb-3" id="select-animation" v-model="selectAnimation">
            <option value="fade">Fade</option>
            <option value="slide-y">Slide-Y</option>
          </select>
          <button type="button" class="btn btn-primary mb-3" @click="showAnimation = !showAnimation">Action</button>

          <transition :name="selectAnimation">
            <div v-if="showAnimation" class="alert alert-success" role="alert">
              <h4 class="alert-heading mb-0">Animated</h4>
            </div>
          </transition>
        </div>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-primary mb-3"
            @click="selectedAlert == 'app-alert-succuess' ? selectedAlert = 'app-alert-danger' : selectedAlert = 'app-alert-succuess'"
          >Switch Dynamic Component Animation</button>
          <transition name="fade" mode="out-in">
            <component :is="selectedAlert"></component>
          </transition>
        </div>
        <hr>
        <div class="form-group">
          <button type="button" class="btn btn-outline-primary" @click="addItem">Add New Item</button>
          
          <!-- transition-group สามารถ กำหนด class และระบุ tag ให้ได้ เปรียบเสมือนเป็นตัว wrap โดยค่า default tag ของ transition-group คือ span -->
          <transition-group class="list-group" name="slide-y" tag="ul">
            <li
              href="#"
              class="list-group-item list-group-item-action list-group-item-primary"
              v-for="(number, index) in numbers" :key="number"
              @click.prevent="removeItem(index)"
            >{{ number }}</li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animate02 from "./Animate02";
import SuccessAlert from "./DynamicAnimateSuccess";
import DangerAlert from "./DynamicAnimateDanger";

export default {
  data() {
    return {
      showAnimation: false,
      selectAnimation: 'fade',
      selectedAlert: 'app-alert-succuess',
      numbers: [1,2,3,4,5]
    }
  },
  components: {
    'app-animation-02' : Animate02,
    'app-alert-succuess' : SuccessAlert,
    'app-alert-danger' : DangerAlert,
  },
  methods: {
    addItem: function () {
      const pos = Math.floor(Math.random() * this.numbers.length);
      return this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem: function (index) {
      return this.numbers.splice(index,1)
    }
  },
}
</script>

<style lang="css">
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-y-enter-active {
    animation: slideIn 0.5s ease-in-out forwards;
  }

  .slide-y-leave-active {
    animation: slideOut 0.5s ease-in-out forwards;
    position: absolute;
  }

  .slide-y-move {
    transition: transform 1s;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideOut {
    from {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
</style>