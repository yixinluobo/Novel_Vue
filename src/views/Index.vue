<template>
  <div class="index">
	  <!-- 头部 -->
    <div class="top">
		<van-nav-bar fixed>
			<template #left>
			  <van-icon name="arrow-left" color="white" size="24" />
			</template>
			<template #title>
			  <span class="title">松鼠文学</span>
			</template>
		  <template #right>
		    <van-icon color="white" name="search" size="24" />
		  </template>
		</van-nav-bar>
	</div>
	<!-- 内容 -->
	<div class="content">
		<van-nav-bar @click-left="Search">
			<template #left>
			  <van-cell-group>
			    <van-field v-model="value" placeholder="搜索" readonly  />
			  </van-cell-group>
			</template>
		  <template #right>
		    <van-icon name="wap-nav" size="24" @click="showPopup" />
		  </template>
		</van-nav-bar>
		<!-- 弹出层 -->
		<div class="popup">
			<van-popup @open="getCategory" v-model="show" position="right" :style="{ height: '30%'}" style="margin-top: -8rem; width: 30%;" round>
				<span style="color: lightslategray;font-size: 1.125rem;">小说类别</span>
				<div class="category" v-for="(item, index) in categorys" :key="index">
					<span style="display: block; line-height: 1.875rem;" @click="getCategoryNovels(item.name)">{{item.name}}</span>
				</div>
			</van-popup>
		</div>
		
		<!-- 小说列表 -->
		<van-grid :border="false" :column-num="2" :gutter="5">
		  <van-grid-item v-for="(item, index) in data" :key="index">
		    <van-image :src="item.icon" @click="goDetail(item.id)" />
			<div class="desc">
				<span class="title">{{item.name}}</span>
			</div>
		  </van-grid-item>
		  
		</van-grid>
	</div>
  </div>
</template>
<script>
	export default {
	  data() {
	    return {
		  data: '',
	      value: '',
		  show: false,
		  categorys: [],
	    };
	  },
	  created() {
	  	this.$http({
			url: 'http://127.0.0.1:8000/api/novels/',
			method: 'get',
		}).then(res=>{
			console.log(res);
			this.data = res.data.results;
		})
	  },
	  methods:{
		  Search(){
			  this.$router.push('search');
		  },
		  showPopup() {
			this.show = true;
		  },
		  getCategory(){
			  this.$http({
				  url: 'http://127.0.0.1:8000/api/brand/novels/',
				  method: 'get',
			  }).then(res=>{
				  console.log(res);
				  this.categorys = res.data.results;
			  })
		  },
		  getCategoryNovels(name){
			  this.$http({
				  url: `http://127.0.0.1:8000/api/brand/novels/?search=${name}`,
				  method: 'get',
			  }).then(res=>{
				  console.log(res);
				  this.data = res.data.results[0].novels;
			  });
			  this.show = false;
		  },
		  // 详情
		  goDetail(id){
			  this.$router.push('/noveldetail/'+id)
		  },
	  }
	};
</script>
<style scoped="scoped" lang="less">
	.top{
		.van-nav-bar{
			background-color: lightslategrey;
			.title{
				color: white;
				font-size: 1.5rem;
				font-family: "楷体";
			}
		}
		
	}
	.content{
		margin-top: 2.875rem;
		width: 100%;
		background-color: aliceblue;
		.popup{
			.category{
				div{
					line-height: 2.5rem;
				}
			}
		}
	}
</style>
