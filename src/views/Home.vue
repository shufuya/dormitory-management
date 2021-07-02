<template>
  <div>
    <van-nav-bar title='学生管理系统' />
    <van-row>
      <van-col span="5">
        <van-sidebar v-model="activeKey" @change="onChange" class="left">
        <van-sidebar-item title="主页" />
        <van-sidebar-item title="学生管理" />
        <van-sidebar-item title="宿舍管理" />
        <van-sidebar-item title="宿舍维修" />
        <van-sidebar-item title="班级管理" />
        <van-sidebar-item title="退出" class="exit" />
      </van-sidebar>
    </van-col>
      <van-col span="19"><router-view></router-view></van-col>
    </van-row>

  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  name: 'Home',
  data () {
    return {
      activeKey: 0
    }
  },
  methods: {
    onChange (index) {
      switch (index) {
        case 0:
          Notify({ type: 'primary', message: '已回主页' })
          this.$router.push({ path: '/home/index' }).catch(err => err)
          break
        case 1:
          Notify({ type: 'primary', message: '学生管理' })
          this.$router.push({ path: '/home/student' }).catch(err => err)
          break
        case 2:
          Notify({ type: 'primary', message: '宿舍管理' })
          this.$router.push({ path: '/home/dorm' }).catch(err => err)
          break
        case 3:
          Notify({ type: 'primary', message: '宿舍维修' })
          this.$router.push({ path: '/home/maintain' }).catch(err => err)
          break
        case 4:
          Notify({ type: 'primary', message: '班级管理' })
          this.$router.push({ path: '/home/class' }).catch(err => err)
          break
        case 5:
          Notify({ type: 'primary', message: '退出' })
          this.axios.get('/admin/dropout').then(res => {
            if (res) {
              this.$router.push('/login')
              Notify({ type: 'primary', message: '退出成功' })
            } else {
              Notify({ type: 'primary', message: '退出失败' })
            }
          })
          break
      }
    }
  }
}
</script>

<style>
body {
  width:100%;
  background: url('../assets/img/trianglify-lowres.png') no-repeat;
  background-size: 100% auto;
  background-size:100% 100%;
  background-attachment:fixed;
}
.van-nav-bar {
  height:60px
}
.van-nav-bar__title {
  font-size:21px;
}
.van-nav-bar__content {
  height:60px;
}
.left {
  height:100vh;
}
.exit {
  bottom: 0;
}
</style>
