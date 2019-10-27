<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Vue Animation</h2>
        <hr>
        <div class="form-group">
          <select v-model="animationArr" class="form-control">
            <option value="fade">Fade Animation</option>
            <option value="slide-down">Slide Down Animation</option>
          </select>
        </div>

        <div class="form-group">
          <h3> Trigger Switch Animation from select option </h3>
          <button type="button" class="btn btn-primary btn-lg" @click="selectedAnimation = !selectedAnimation">Click to Switch Selected Animate.</button>
          <transition :name="animationArr">
            <div
              class="alert alert-danger mb-0"
              role="alert"
              v-if="selectedAnimation"
            >
              <strong>Selected Animated</strong>
            </div>
          </transition>
        </div>

        <div class="form-group">
          <h3>Fade Animation</h3>
          <button type="button" class="btn btn-primary btn-lg" @click="triggerFadeAnimation">Click to Fade Animate.</button>

          <transition name="fade">
            <div
              class="alert alert-primary"
              role="alert"
              v-if="show"
            >
              <strong>Fade Animated</strong>
            </div>
          </transition>
        </div>

        <div class="form-group">
          <h3>Slide Animation</h3>
          <button type="button" class="btn btn-primary btn-lg" @click="triggerSlideDownAnimation">Click to Slide Animate.</button>

          <!--
            type คือตัวกำหนดรูปแบบ อนิเมท ว่าจะให้โฟกัสไปที่อนิเมทตัวไหน ระหว่าง transition กับ animation
            ยกตัวอย่างจาก css ด้านล่างที่กำหนด transition opacity 3s แต่เมื่อ set type="animation" เข้าไปก็จะแสดงผลของ animate keyframe เป็นหลัก
          -->
          <transition name="slide-down" type="animation">
            <div
              class="alert alert-danger mb-0"
              role="alert"
              v-if="slideDown"
            >
              <strong>Slide Animated</strong>
            </div>
          </transition>
        </div>

        <!--
          appear คือตัวกำหนดว่าให้แสดงผลเมื่อโหลดหน้าจอขึ้นมา และ appear จะใช้ไม่ได้ผลกับการกำหนดค่า enter class และ leave class
        -->
        <div class="form-group">
          <h2>Animate When Load</h2>
          <transition name="slide-down" type="animation" appear>
            <div
              class="alert alert-danger mb-0"
              role="alert"
              v-if="slideAppear"
            >
              <strong>Slide Animated</strong>
            </div>
          </transition>
        </div>
        
        <div class="form-group">
          <h3>Use Animation CSS</h3>
          <button type="button" class="btn btn-primary btn-lg" @click="animatedCss = !animatedCss">Click to Animate the Animation CSS.</button>

          <transition
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
          >
            <div
              class="alert alert-danger mb-0"
              role="alert"
              v-if="animatedCss"
            >
              <strong>Animated CSS</strong>
            </div>
          </transition>
        </div>
        
        <!--
          mode คือตัวกำหนดว่าให้แสดงผลแบบไหนก่อน คือการสลับระหว่าง v-if กับ v-else ซึ่งกำหนดค่า mode ได้ 2 ค่าคือ out-in หรือ in-out
          และการกำหนดค่า key คือการกำหนดค่า key ของแต่ละ div ที่ต้องการอนิเมท ให้มีชื่อ key ที่ต่างกัน เพื่อความ unique
        -->
        <div class="form-group" style="overflow: hidden">
          <button type="button" class="btn btn-primary btn-lg" @click="switchAnimate = !switchAnimate">Click to Switch Out and In Animate.</button>
          <transition
            enter-active-class="animated lightSpeedIn"
            leave-active-class="animated lightSpeedOut"
            mode="out-in"
          >
            <div class="alert alert-info mb-0" role="alert" v-if="switchAnimate" key="info">
              <strong>Switching Out</strong>
            </div>
            <div class="alert alert-warning mb-0" role="alert" v-else key="warning">
              <strong>Switching In</strong>
            </div>
          </transition>
        </div>
        <div class="form-group">
          <!-- How vue javascript animation work -->
          <!-- ใน enter และ leave ต้องมี argument done อยู่ด้วยเสมอ และใส่ done(); ไว้ข้างท้ายของ Methods เสมอ เพื่อส่งค่าว่าการทำงาน enter หรือ leave นั้นทำงานเสร็จแล้ว -->
          <!-- :css="false" มีเพื่อการทำให้ transition ไม่มองไปที่ค่า css -->
          <button type="button" class="btn btn-primary btn-lg" @click="load = !load">Click to Load Animate With JS.</button>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"

            :css="false"
          >
            <div v-if="load" style="width: 100px; height: 100px; backgroundColor: lightGreen; margin: 30px;"></div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      show: false,
      load: false,
      selectedAnimation: false,
      animationArr: 'fade',
      slideDown: false,
      slideAppear: true,
      animatedCss: false,
      switchAnimate: true,

      elWidth: 100
    }
  },
  methods: {
    triggerFadeAnimation: function() {
      this.show = !this.show;
    },
    triggerSlideDownAnimation: function () {
      this.slideDown = !this.slideDown;
    },

    beforeEnter(el) {
      console.log('before-enter');
      // make sure to reset Element width
      this.elWidth   = 100;
      el.style.width = this.elWidth + 'px';
    },
    enter(el, done) {
      let round = 1;

      const interval = setInterval(() => {
        el.style.width = (this.elWidth + round * 10) + 'px';
        round++;

        console.log(round);

        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('after-enter');
    },
    enterCancelled(el) {
      console.log('enter-cancelled');
    },
    beforeLeave(el) {
      console.log('before-leave');
      this.elWidth   = 300;
      el.style.width = this.elWidth + 'px';
    },
    leave(el, done) {
      let round = 1;

      const interval = setInterval(() => {
        el.style.width = (this.elWidth - round * 10) + 'px';
        round++;

        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('after-leave');
    },
    leaveCancelled(el) {
      console.log('leave-cancelled');
    },
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

  .slide-down-enter {
  }
  .slide-down-enter-active {
    transition: opacity 0.5s ease-in-out;
    animation: slideIn 1s ease-in-out forwards;
  }
  .slide-down-leave {
  }
  .slide-down-leave-active {
    transition: opacity 0.5s ease-in-out;
    animation: slideOut 1s ease-in-out forwards;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
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
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(20px);
    }
  }
</style>