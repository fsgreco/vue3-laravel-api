<template>
	<header>
		<RouterLink to="/">
			<img
				alt="Vue logo"
				class="logo"
				src="@/assets/logo.svg"
				width="35"
				height="35" />
		</RouterLink>
		<div class="wrapper">
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<button class="logout-btn" @click="logoutFn">Logout</button>
			</nav>
		</div>
	</header>
	<main class="temporal-centering">
		<slot />
	</main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const auth = useAuthStore()
const logoutFn = async () => {
	await auth.logout()
}
</script>

<style>
header {
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	gap: 1em;
	background: var(--bkrg-gradient-vue);
	box-shadow: 0px 4px 4px lavender;
}
.wrapper {
	align-self: center;
	margin-right: 2em;
}
.wrapper nav {
	display: flex;
	align-items: center;
	gap: 2em;
}
.wrapper nav a {
	color: black;
	text-shadow: none;

	font-weight: bold;
	font-size: 1rem;
	text-transform: uppercase;

	text-decoration: unset;
}
.wrapper nav a.router-link-active.router-link-exact-active {
	color: whitesmoke;
	text-shadow: 2px 2px 6px #33333370;
}
header .logo {
	vertical-align: middle;
}

.logout-btn {
	cursor: pointer;
	padding: 10px 20px;
	color: whitesmoke;
	background: var(--color-heading);
	border: none;
	border-radius: 0.3rem;
	text-transform: uppercase;
	font-weight: bold;
}
.logout-btn:hover {
	background: var(--color-border-hover);
}

.temporal-centering {
	margin-top: 3em;
	display: flex;
	justify-content: center;
}
.temporal-centering p {
	max-width: 45rem;
}
</style>
