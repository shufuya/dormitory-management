<template>
  <div>
    <h1>class</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.axios.get('/classmanagement/getglassmanagement').then(res => console.log(res))
  }
}
</script>

<style>

</style>
