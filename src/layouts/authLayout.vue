<template>
  <main class="auth-card">
		<div class="form-area">
			<slot />
		</div>
  </main>
</template>

<style lang="scss">
.auth-card {
	position: absolute;
	top: 0; left: 0; right: 0; bottom: 10%;
	margin: auto;
	max-width: 650px;
	max-height: 450px;
}

.form-area {
	max-width: 400px;
	padding: 20px 50px;
	margin: auto;

	border-radius: 0.3rem;
	box-shadow: 0px 4px 5px #e6e6fad4;
	background-color: white;

	input {
		padding: 0.5rem 0.75rem;
	}
	label {
		margin-top: 1em;
	}
	.to-end {
		align-self: flex-end;
		button {
			margin-left: 1em;
		}
	}
	button {
		margin-top: 2em;
		background: var(--bkrg-gradient-vue);
		padding: 10px 20px;
		border: none;
		border-radius: 0.3rem;
		box-shadow: 2px 2px 4px rgba(230, 230, 250, 0.831372549);
		color: whitesmoke;
		font-weight: bold;
		text-transform: uppercase;
	}
}
</style>
