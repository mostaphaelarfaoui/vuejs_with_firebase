<template>
<div >
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <button class="btn btn-outline-primary"><router-link to="/home">Home</router-link></button>    
        </li>
        <li class="nav-item">
         <button class="btn btn-outline-primary"><router-link to="/login">Login</router-link></button>
        </li>
        <li class="nav-item">
         <button class="btn btn-outline-primary"><router-link to="/">Signup</router-link></button> 
        </li>
      </ul> -->
         <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/">Sign up</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Login</router-link> 
          </li>
        </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</div>

</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
