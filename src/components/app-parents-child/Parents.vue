<template>
  <div class="parents">
    <h1>Parents Application</h1>

    <app-third-child :nameCount="nameArr.length" :maximumName="maximum"></app-third-child>

    <app-first-child :names="nameArr" @nameDeleted="deleteName"></app-first-child>

    <app-second-child @nameAdded="submittedName"></app-second-child>

    <div class="container mb-5">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading mb-0">This names is maximum to {{ maximum }} names.</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="switch-tabs mb-5">
      <h2>Switch Tabs Components</h2>

      <div class="btn-group" role="group" aria-label="Button group tabs">
        <button type="button" class="btn btn-secondary" @click="selectComponents = 'app-tab-01'">Tabs 01</button>
        <button type="button" class="btn btn-secondary" @click="selectComponents = 'app-tab-02'">Tabs 02</button>
        <button type="button" class="btn btn-secondary" @click="selectComponents = 'app-tab-03'">Tabs 03</button>
      </div>

      <component :is="selectComponents"></component>
    </div>

    <div class="eventBus">
      <div class="outer">
        <h2>{{ pplAge }}</h2>
      </div>
      <app-forth-child @addInputAge="pplAge = $event" :inputAge="pplAge"></app-forth-child>
    </div>
  </div>
</template>

<script>
import FirstChild from "./FirstChildGrid";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";
import ForthChild from "./ForthChild";

import SwitchTab01 from "./SwitchTab01";
import SwitchTab02 from "./SwitchTab02";
import SwitchTab03 from "./SwitchTab03";

export default {
  data() {
    return {
      nameArr: ['Tun', 'Mint'],
      pplAge: 20,
      maximum: 10,
      selectComponents: 'app-tab-01'
    }
  },
  components: {
    'app-first-child' : FirstChild,
    'app-second-child' : SecondChild,
    'app-third-child' : ThirdChild,
    'app-forth-child' : ForthChild,
    'app-tab-01' : SwitchTab01,
    'app-tab-02' : SwitchTab02,
    'app-tab-03' : SwitchTab03
  },
  methods: {
    submittedName: function(value) {
      if(this.nameArr.length < 10) {
        this.nameArr.push(value);
      } else {
        alert('This name arrays are maximum now.');
      }
    },
    deleteName: function(index) {
      this.nameArr.splice(index, 1);
    },
  },
}
</script>