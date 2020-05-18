<template>
	<div class="search">
		<van-search
		  v-model="value"
		  show-action
		  placeholder="请输入搜索关键词"
		  background="lightslategrey"
		  @search="onSearch"
		>
		  <template #action>
		    <div @click="onSearch" style="color: white;">搜索</div>
		  </template>
		</van-search>
		
		<!-- 提示 -->
		<div class="tishi">
			<span style="opacity: 0.1;">支持小说名、作者搜索</span>
		</div>
		<!-- 内容 -->
		<div class="content">
			<van-grid :border="false" :column-num="2" :gutter="5">
			  <van-grid-item v-for="(item, index) in data.results" :key="index">
			    <van-image :src="item.icon" />
				<div class="desc">
					<span class="title">{{item.name}}</span>
				</div>
			  </van-grid-item>
			</van-grid>
		</div>
		<!-- 热门推荐 -->
		<div class="tui">
			<span>热门推荐预留位置</span>
		</div>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
		  data: '',
	      value: '',
	    };
	  },
	  methods: {
	    onSearch(val) {
			if(this.value!=''){
				this.$http({
				  url: `http://127.0.0.1:8000/api/novels/?search=${this.value}`,
				  methods: 'GET',
				}).then(res=>{
				  console.log(res);
				  this.data = res.data;
				})
			}
	    },
	  },
	};
</script>

<style>
</style>
