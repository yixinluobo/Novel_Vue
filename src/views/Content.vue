<template>
	<div class="content">
		<div class="top">
			<van-nav-bar fixed>
				<template #title>
				  <span class="title">{{title}}</span>
				</template>
			</van-nav-bar>
		</div>
		<div class="context" v-swipeleft="(e)=>vueTouch('左滑',e)" v-swiperight="(e)=>vueTouch('右滑',e)">
			<p v-for="(item, index) in contents" :key="index">
				{{item}}
			</p>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default{
		data(){
			return {
				data:'',
				title:'',
				novel_id: null,
				page_id: null,
				contents: [],
			}
		},
		created() {
			// 获取vuex参数——小说id
			this.novel_id = this.$store.getters.getNovel_id;
			this.page_id = this.$route.params.id;
			this.$http({
				url: `http://127.0.0.1:8000/api/chapter/${this.$store.getters.getNovel_id}?page=${this.$route.params.id}`,
				method: 'get',
			}).then(res=>{
				console.log(res);
				this.data = res.data;
				this.title = res.data.results[0].title;
				// 处理内容
				let contents = res.data.results[0].contents.split('l');
				let temp = '';
				for(let i=0;i<contents.length;i++){
					temp = temp+String.fromCharCode(parseInt(contents[i]));
					if(i%20 == 0){
						this.contents.push(temp.replace('/\n','').replace(' ',''));
						temp = '';
					}
				}
			})
			console.log(this.contents)
		},
		methods:{
			// 左划事件
			vueTouch:function(txt,e){
				let flag = false;  // 判断是否有上一章，下一章
				let url = '';
				let toast_text = '';
				if(txt=='左滑'){
					url = this.data.next;
					if(url!=null){
						flag = true;
					}
					toast_text = '已经是最后一章了';
				}else if(txt=='右滑'){
					url = this.data.previous;
					if(url!=null){
						flag = true;
					}
					toast_text = '已经是第一章了';
				}
				if(flag){
					this.$http({
						url: url,
						method: 'get',
					}).then(res=>{
						console.log(res);
						this.data = res.data;
						this.title = res.data.results[0].title;
						// 处理内容
						let contents = res.data.results[0].contents.split('l');
						let temp = '';
						for(let i=0;i<contents.length;i++){
							temp = temp+String.fromCharCode(parseInt(contents[i]));
							if(i%20 == 0){
								this.contents.push(temp.replace('/\n','').replace(' ',''));
								temp = '';
							}
						}
					})
				}else{
					Toast(toast_text);
				}
			},
			// 右划事件
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
	.context{
		margin-top: 2.875rem;
		padding: 0.625rem;
		background-color: aliceblue;
	}
</style>
