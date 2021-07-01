<template>
  <div class="background">
    <van-form class="form">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
       />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="onubmit">提交</van-button>
      </div>
</van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'wjc',
        password: '123456'
      }
    }
  },
  methods: {
    onubmit () {
      this.axios.get('/admin/logon', {
        // JSESSIONID: '7FF9409728288D6F49FACE485CE85F8D',
        params: {
          username: this.form.username,
          password: this.form.password
        }
      }).then((res) => {
        console.log(res)
        this.$router.push('/home')
      })
    }
  }
}

</script>

<style>
.form {
width: 80%;
margin:20% auto;
}
body {
  width: 100%;
  background: url('../assets/img/gaitubao_cool-background_90.png') no-repeat;
  background-size: 100% auto;
  background-size:100% 100%;
background-attachment:fixed;
}
</style>
