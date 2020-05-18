<template>
	<div class="novel-detail">
		<div class="top">
			<van-nav-bar fixed>
				<template #title>
				  <span class="title">{{data.name}}</span>
				</template>
			</van-nav-bar>
		</div>
		<!-- 小说简介 -->
		<div class="msg">
			<img :src="data.icon" alt="">
			<div class="info">
				<label for="">小说：</label><span>{{data.name}}</span><br>
				<label for="">作者：</label><span>{{data.author}}</span><br>
				<label for="">点击：</label><span>{{data.views}}</span><br>
				<label for="">类别：</label><span>{{data.brand}}</span><br>
				<label for="">状态：</label><span>{{data.status}}</span>
			</div>
		</div>
		<!-- 章节列表 -->
		<div class="chapter-list">
			<div class="chapter-item" v-for="(item, index) in data.chapters" :key='index'>
				<van-button plain type="info" block @click="go_Content(index)">{{item.title}}</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				data:'',
			}
		},
		created() {
			this.$http({
				url: `http://127.0.0.1:8000/api/novel/${this.$route.params.id}`,
				method: 'get',
			}).then(res=>{
				console.log(res);
				this.data=res.data;
			})
		},
		methods:{
			go_Content(index=0){
				// 非父子组件传参
				this.$store.commit("go_Content",this.$route.params.id);
				this.$router.push('/content/'+(index+1));
			},
		}
	}
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
	.msg{
		border-bottom: 0.0625rem solid lavender;
		padding-bottom: 0.125rem;
		margin: 3.125rem 0.625rem 0.625rem 0.625rem;
		display: flex;
		img{
			width: 8.25rem;
		}
		.info{
			padding: 0.625rem;
			label{
				display: inline-block;
				width: 5rem;
				font-size: 1.5rem;
				font-family: "楷体";
				line-height: 1.875rem;
				text-align: justify;
			}
			span{
				display: inline-block;
				width: 4rem;
			}
		}
	}
	.chapter-list{
		padding: 0.625rem;
	}
</style>
