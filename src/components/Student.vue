<template>
  <div>
    <table class="table table-hover">
      <th>学号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>电话</th>
      <tbody>
        <th>{{this.a.id}}</th>
        <th>{{this.a.name}}</th>
        <th>{{this.a.age}}</th>
        <th>{{this.a.sex}}</th>
        <th>{{this.a.phone}}</th>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data () {
    return {
      a: {
        id: '2019110302134',
        name: 'wjc',
        age: '20',
        sex: 'nan',
        phone: '13724774941'
      }
    }
  },
  created () {
    this.axios.get('/student/getstudent').then(res => console.log(res))
  }
}
</script>

<style>

</style>
