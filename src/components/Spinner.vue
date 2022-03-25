<template>
  <div class="spin block h-20 w-20 my-5 mx-auto border-2 rounded-full border-transparent border-t-orange-400"></div>
</template>



<style>
.spin {
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to { transform: rotatez(360deg)}
}

</style>