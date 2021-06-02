<template>
  <div class="nav">
    <div class="nav-item">
      <NuxtLink to="/">
        <div class="brand">
          Scratory
          <span class="beta"> BETA </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.nav .nav-item {
  background-color: var(--brand);
  list-style-type: none;
  height: 64px;
  color: white;
  display: block;
  text-align: center;
  text-decoration: none;
  text-size: 55px;
  float: right;
  padding: 20px 5px 5px 10px;
}

.nav {
  background-color: var(--brand);
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  height: 64px;
  width: 100%;
}
.nav-item NuxtLink,
.nav-item a {
  color: white;
  text-decoration: none;
  text-weight: bold;
}
.beta {
  font-size: 5px;
}
</style>
