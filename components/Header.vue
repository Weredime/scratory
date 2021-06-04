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
    <div class="nav-item">
      <NuxtLink to="/user/9gr"><span>Signature History</span></NuxtLink>
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
.nav .nav-item:not(.left) {
  float: right;
}
.nav .nav-item {
  background-color: var(--brand);
  list-style-type: none;
  height: 40px;
  color: white;
  display: block;
  text-align: center;
  text-decoration: none;
  text-size: 55px;
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
  font-size: 10px;
}

.brand {
  font-size: 17px;
}
</style>
