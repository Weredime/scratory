<template>
  <div class="loader"></div>
</template>
<script>
export default {};
</script>
<style>
.loader {
  border: 16px solid rgba(139, 122, 122, 0.397); /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
  float: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  100% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
}
</style>
