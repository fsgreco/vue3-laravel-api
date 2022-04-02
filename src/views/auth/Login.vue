<template>
	<form @submit.prevent="loginFn" class="wrapped-form">
		<label for="email">Email</label>
		<input
			id="email"
			name="address"
			v-model.trim="credentials.email"
			type="text"
			required />

		<label for="password">Password</label>
		<input
			id="password"
			name="passwd"
			v-model.trim="credentials.password"
			type="password"
			required />

		<div class="to-end">
			<!-- <RouterLink to="/forgot-password">Forgot your password?</RouterLink> -->
			<RouterLink to="/register">You don't have an account?</RouterLink>
			<button type="submit">Login</button>
		</div>
	</form>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = useRouter()
const auth = useAuthStore()

const credentials = reactive({
	email: null,
	password: null,
})

const loginFn = async () => {
	await auth.login(credentials)
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
