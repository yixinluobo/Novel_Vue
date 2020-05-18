<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
	<van-tabbar v-model="active">
	  <van-tabbar-item name="index" icon="home-o" @click="toIndex">首页</van-tabbar-item>
	  <van-tabbar-item name="mine" icon="friends-o" @click="toMine">个人中心</van-tabbar-item>
	</van-tabbar>
    <router-view/>
  </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 'index',
	    };
	  },
	  methods:{
		  toIndex(){
			  this.$router.push('/');
		  },
		  toMine(){
			  this.$router.push('/mine');
		  }
	  }
	};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
