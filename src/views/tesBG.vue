<template>
	<div class="background-div pa-6" style="display: flex; align-items: center; align-content: center; height: 100%">
		<v-card class="pa-8 mx-auto my-auto" elevation="0" max-width="350px">
			<div fluid class="mb-4">
				<v-img class="" src="@/assets/tatalogam.png" cover height="95px" max-width="70px" width="fill" @click="navigateToNewPage"></v-img>
			</div>
			<div class="mb-6">
				<h3 style="font-size: 24px; font-weight: 900;">Sales Point</h3>
				<h3 style="font-size: 12px; font-weight: 400; color: #4f4f4f;">Elevate Sales, Enhance Experience, and Excel in Point-of-Sale Excellence</h3>
			</div>

			<div>
				<input single-line outlined id="name" name="name" v-model="email" placeholder="Email" required dense color="#394867" class="custom-input" />
			</div>
			<div class="mt-2">
				<div style="display: flex;">
					<input single-line outlined id="password" name="password" v-model="password" placeholder="Password" required dense color="#394867" :type="showPassword ? 'text' : 'password'" class="custom-input" autocomplete="current-password" />

					<font-awesome-icon
					size="sm"
					style="right: 40; position: absolute; color: #696969; width: 20px; min-height: 12px; margin: 4px 0px; padding: 6px; height: 12px; display: flex; align-items: center;"
					:icon="showPassword ? ['fas', 'eye-slash'] : ['fas', 'eye']"
					@click="toggleShow"
					/>
				</div>
			</div>

			<button class="button-text-bold mt-6 custom-button" @click="goHome" style="height: 40px; border-radius: 6px; width: 100%; padding: 4px 6px; background-color: #006bb8;">LOGIN</button>

			<v-spacer></v-spacer>
		</v-card>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {};
		},

		methods: {
			goHome() {
				window.location.href = "/";
			},
		},
	};
</script>

<style type="text/css" scoped>
	.custom-input {
		background-color: #fafafa;
		width: 100%;
		height: 40px;
		font-size: 12px !important;
		padding: 5px 8px;
		border: 1px solid #ddd;
		border-radius: 6px;
		outline: none;
		transition: outline 0.1s ease-in-out;
	}
	.custom-input:focus {
		background-color: #fafafa;

		height: 40px;
		border-radius: 6px;
		outline: solid #4682a9;
		font-size: 12px !important;
	}
	.custom-input::placeholder {
		color: #999;
		font-size: 12px;
	}

	.custom-button {
		font-size: 10px;
		transition: opacity 0.3s linear;
	}

	.custom-button:hover {
		opacity: 0.7;
		box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
	}


	.background-div{
		background-color: #006BB8;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23006BB8' stroke-width='0.8' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cuse fill='%232470ba' href='%23s' y='2'/%3E%3Cuse fill='%232470ba' href='%23s' x='1' y='2'/%3E%3Cuse fill='%233375bb' href='%23s' x='2' y='2'/%3E%3Cuse fill='%233375bb' href='%23s'/%3E%3Cuse fill='%233e79bd' href='%23s' x='2'/%3E%3Cuse fill='%233e79bd' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23487dbf'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23487dbf'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%235182c0'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23006BB8'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%235886c2'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23F5FC0F'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23F5FC0F'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(18.1) translate(-944.75 -708.56)'%3E%3Cg fill='%23F5FC0F'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}




</style>
