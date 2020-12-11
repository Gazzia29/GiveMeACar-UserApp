<template>
<div class="inputWrapper">
	<div class="imgWrapper">
		<img v-if="icone" :src="getImgUrl(icone)" alt="">
	</div>
	<input type="text" :placeholder="texte" :class="icone?'hasIcon': ''"/></div>
</template>

<script>
	export default {
		name: "ChampPlaceHolder",
		props: ["texte", "icone"],
		methods:{
			getImgUrl(icone) {
			const images = require.context('../assets/icons/', false, /\.svg$/)
			return images('./' + icone + ".svg")
  }
		}
	};
</script>

<style scoped>
	.inputWrapper{
		position: relative;
	}
	.imgWrapper{
		position: absolute;
		z-index:2;
		left:10px;
		height:100%;
		display: flex;
		justify-content:center;
		align-items: center;
		width:20px;
	}
	img {
		
		height:20px;
		width:20px;
	}
	input{
		width:100%;
		padding: 10px 15px;
		border:none;
		border-radius:10px;
		z-index:1;
	}
	input.hasIcon{
		padding-left: 37px;
	}

</style>
