<template>
  <div class="container">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
.light-mode {
  --brand: #0bc55aff;
  --background: #ffffff;
  --text: #111111;
  --navText: #111111;
}

.dark-mode {
  --background: #111111;
  --text: white;
  --navText: white;
  --link-color: #3b7ee8;
  --brand: #368256;
}

.jeffalo-mode {
  --brand: #0FBD8C;
  --text: #BDA3B3;
  --navText: #BDA3B3;
  --link-color: #FFFFFF;
  --background: #FFFFFF;
}

.catsunited-mode {
  --brand: #4e1117;
  --background: #131313;
  --text: white;
  --navText: white;
}

.potatophant-mode {
  --brand: #323232;
  --background: #ffffff;
  --text: #323232;
  --navText: #ffffff;
}

html {
  --font: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  transition: all linear 1s;
  color: var(--text);
  font-family: var(--font);
}

.margined {
  margin: 88.5px; /* exact */
}

body {
  background-color: var(--background);
}

NuxtLink,
a {
  color: #456789;
  font-weight: bold;
  text-decoration: none;
}
</style>
