<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ExoVueJS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/" exact>Plans</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/article">Articles</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/signup">Formulaire</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/testimonial"
              >Testimonial</router-link
            >
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/rps"
              >Pierre Papier Ciseaux</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
@import "~bootstrap/dist/css/bootstrap.css";

nav {
  position: fixed;
  top: 0;
  z-index: 15;
}
</style>