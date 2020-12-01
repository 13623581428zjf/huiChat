<template>
	<div>
		<div></div>
		<div>
			<button @click="ckme">登录</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			ckme:function(vsl){
				 this.$router.push({
				 	name:'lecati',
				 	query:{
				 		content:'哈哈我来了',
				 		count:'2'
				 	}
				 })
			}
		}

	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
	html {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	div:first-child {
		height: 100%;
		width: 100%;
		background: url(../assets/pjid.png) no-repeat;
		background-size: 100% 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-position: center 0;
	}
	 button{
	 	width: 80%;
	 	height: 45px;
	 	background: none;
	 	position: absolute;
	 	left: 10%;
	 	bottom: 3%;
	 	border:1px solid gainsboro;
	 	border-radius: 30px;
	 	color: white;
	 	font-size: 19px;
	 }
</style>