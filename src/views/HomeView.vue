<template>
	<article>
		<h1>Dashboard: Welcome</h1>
		<h3>This is the user state:</h3>
		<pre>{{ JSON.stringify(user.$state, null, 2) }} </pre>
	</article>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
const user = useUserStore()
</script>
