<template>
	 <div>
	    <div style="width: 300px;">{{cont}}</div>
	    <div style="width: 300px;">{{cou}}</div>
	 </div>
</template>

<script>
	export default {
		data() {
			return {
				cont: '',
				cou: ''
			}
		},
		created: function() {
			this.cont = this.$route.query.content;
			this.cou = this.$route.query.count;
		},
		methods: {

		}

	}
</script>

<style scoped="scoped">

</style>