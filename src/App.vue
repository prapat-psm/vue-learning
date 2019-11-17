<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>

  <!-- Router Tutorial -->
  <!-- <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Router</h1>
        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div> -->
</template>

<script>
/* eslint-disable */ 

// import HelloWorld from './components/HelloWorld.vue'
// import vueResource from "./components/app-resource-db/appResource";
// import appVuex from './components/app-vuex/AppVuex'
// import appTrader from './components/app-trader/Home'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // 'appResource': vueResource
    // 'app-vuex' : appVuex
    // 'app-trader' : appTrader
  },
}

// arrFreq();

// function arrFreq() {

//   let inputArr = [4,4,4,7,2,2,2,5,3,3];
//   let prevArr;
//   let keepper;

//   for (let i = 0; i < inputArr.length; i++) {
//     keepper = inputArr[i];
//     console.log(keepper);

//     if( prevArr !== inputArr[i] ) {
//       // console.log(prevArr)
//     }

//     prevArr = inputArr[i];
//   }
// }

/**
 *  Sorting an array order by frequency of occurence in javascript
 *  @param {array} array An array to sort
 *  @returns {array} array of item order by frequency
 **/

// console.log(sortByFrequency([4,4,4,7,2,2,2,5,3,3]))

// function sortByFrequency(array) {
//     var frequency = {};
//     var sortAble = [];
//     var newArr = [];

//     array.forEach(function(value) { 
//         if ( value in frequency )
//             frequency[value] = frequency[value] + 1;
//         else
//             frequency[value] = 1;
//     });
    

//     for(var key in frequency){
//         sortAble.push([key, frequency[key]])
//     }

//     sortAble.sort(function(a, b){
//         return b[1] - a[1]
//     })

    
//     sortAble.forEach(function(obj){
//         for(var i=0; i < obj[1]; i++){
//             newArr.push(obj[0]);
//         }
//     })
//     return newArr;
    
// }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
