<template>
	<form @submit.prevent="forgotFn" class="wrapped-form">
		<p>Forgot your password? 
			Let us know your email address and we will email you a
			password reset link that will allow you to choose a new one.
		</p>

		<label for="email">Email</label>
		<input id="email" v-model="email" type="text" required />

		<button type="submit">Email Password Reset Link</button>
	</form>
</template>

<script setup>
import { ref } from 'vue'

const email = ref(null)

const forgotFn = async () => console.log('Still work in progress') //	await auth.forgotPassword({email: email.value})
</script>

<style lang="scss" scoped>
.wrapped-form {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}
</style>
