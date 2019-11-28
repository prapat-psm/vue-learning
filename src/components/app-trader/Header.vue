<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link class="navbar-brand" to="/">App Trader</router-link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <router-link to="/portfolio" tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Portfolio</a></router-link>
              <router-link to="/stocks" tag="li" class="nav-item" active-class="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav navbar-right">
              <li class="nav-item"><a class="nav-link" href="#dummy" @click.prevent="endDay">End day</a></li>
              <li 
                class="nav-item dropdown"
                :class="{ open : activeAccd }"
                @click.prevent="activeAccd = !activeAccd"
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Save &amp; Load</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId" v-if="activeAccd">
                  <a class="dropdown-item" href="#" @click="saveData">Save</a>
                  <a class="dropdown-item" href="#" @click="loadData">Load</a>
                </div>
              </li>
              <li class="nav-item">
              </li>
            </ul>
            <strong class="navbar-text navbar-right" style="color: white">Funds: {{ funds | currency }}</strong>
            <!-- <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.dropdown.open .dropdown-menu {
  display: block;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeAccd: false,
    }
  },
  computed: {
    ...mapGetters({
      funds : 'fundsGetters',
    }),
  },
  methods: {
    ...mapActions({
      randomStocks : 'randomizeStocks',
      fetchData    : 'loadData'
    }),
    endDay() {
      this.randomStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.fundsGetters,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocksGetters
      };
      this.$http.put('trade_data.json', data);
    },
    loadData() {
      this.fetchData();
    }
  }
}
</script>