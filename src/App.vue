<template>
  <Component :is="currentLayout" v-if="$route">
    <RouterView :key="$route.fullPath" />
  </Component>
</template>

<script setup>
import { useRoute, RouterView } from 'vue-router'
import { computed } from 'vue'

import DefaultLayout from '@/layouts/defaultLayout.vue'
import AuthLayout from '@/layouts/authLayout.vue'
const layouts = new Map([
	[ 'defaultLayout', DefaultLayout ],
	[ 'authLayout', AuthLayout ]
])

const route = useRoute()
let currentLayout = computed(() => 
	layouts.get(`${route.meta.layout || 'default'}Layout`) 
)
</script>

<style>
@import '@/assets/base.css';
</style>
