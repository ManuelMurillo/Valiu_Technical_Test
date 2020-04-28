<template>
  <div id="app" class="page-container">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"
    />
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/">
              <md-button class="md-icon-button">
                <md-icon>apps</md-icon>
              </md-button>
            </router-link>
            <span class="md-title">Valiu Technical Test 2020</span>
          </div>

          <div class="md-toolbar-section-end">
            <!-- <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button> -->
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <router-view></router-view>
        <!-- <md-app-toolbar class="md-accent"> </md-app-toolbar> -->
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
