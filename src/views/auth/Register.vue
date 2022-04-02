<template>
	<form @submit.prevent="registerFn" class="wrapped-form">
		<label for="name">Name</label>
		<input id="name" v-model="credentials.name" type="text" required />

		<label for="email">Email</label>
		<input id="email" v-model="credentials.email" type="text" required />

		<label for="password">Password</label>
		<input id="password" v-model="credentials.password" type="password" required placeholder="more than eight characters"/>
		<label for="confirmation">Confirm Password</label>
		<input
			id="confirmation"
			v-model="credentials.password_confirmation"
			type="password"
			required />

		<div class="to-end">
			<RouterLink to="/login">Already registered?</RouterLink>
			<button type="submit">Register</button>
		</div>
	</form>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const credentials = reactive({
	name: '',
	email: '',
	password: '',
	password_confirmation: '',
})

const auth = useAuthStore()
const router = useRouter()

const registerFn = async () => {
	await auth.register(credentials)
	await router.push('/')
}
</script>

<style lang="scss" scoped>
.wrapped-form {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}
</style>
