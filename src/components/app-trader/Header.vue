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
              <router-link to="/" tag="li" class="nav-item"><a class="nav-link">End day</a></router-link>
              <router-link to="/" tag="li" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Save &amp; Load</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                  <a class="dropdown-item" href="#">Save</a>
                  <a class="dropdown-item" href="#">Load</a>
                </div>
              </router-link>
              <li class="nav-item">
              </li>
            </ul>
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