<template>
  <div class="nav">
    <div class="nav-item left">
      <NuxtLink to="/">
        <div class="brand">
          Scratory
          <span class="beta"> BETA </span>
        </div>
      </NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink to="/user/9gr">
        Signature History
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
  height: 32px;
  color: white;
  display: block;
  text-align: center;
  text-decoration: none;
  text-size: 55px;
  float: right;
  padding: 10px 2.5px 2.5px 5px;
}

.left {float: left;}

.nav {
  background-color: var(--brand);
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  height: 32px;
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
