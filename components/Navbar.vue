<template>
  <div class="nav">
    <div class="nav-item left">
      <NuxtLink to="/">
        <div class="brand">
          <span>Scratory</span>
          <span class="beta">BETA</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.left {
  float: left;
}

.nav {
  height: auto;
}
.nav .nav-item:not(.left) {
  float: right;
}
.nav .nav-item {
  background-color: inherit;
  list-style-type: none;
  height: auto;
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  padding: 10px 2.5px 2.5px 5px;
}

.nav-item >>> span {
  padding: 10px 2.5px 2.5px 5px;
}

.nav {
  background-color: var(--brand);
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  height: auto;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}
.nav-item NuxtLink,
.nav-item a {
  color: var(--text);
  text-decoration: none;
  font-weight: bold;
}
.beta {
  font-size: 5px;
}

.brand {
  font-size: 20px;
}
</style>
