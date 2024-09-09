<script lang="ts">
	import { Alert, Button, Input, Label } from 'flowbite-svelte'
	import type { ActionData } from './$types'

	export let form: ActionData

	let title = 'Se connecter au dahsboard'

	const emailLoginLink = '/auth/email'
</script>

<!-- Card -->
<h1 class="text-2xl font-bold text-gray-900 dark:text-white">
	{title}
</h1>
<form class="mt-8 space-y-6" method="post">
	{#if form?.message}
		<Alert color="red">{form?.message}</Alert>
	{/if}
	<div>
		<Label for="username" class="mb-2">Votre nom d'utilisateur</Label>
		<Input
			type="text"
			name="username"
			id="username"
			placeholder="username123"
			value={form?.username}
			required
		/>
	</div>
	<div>
		<Label for="password" class="mb-2">Votre mot de passe</Label>
		<Input type="password" name="password" id="password" placeholder="••••••••" required />
	</div>
	<div class="flex gap-4">
		<Button type="submit" color="primary" pill>Se connecter</Button>
		<Button href={emailLoginLink} color="alternative" pill>Se connecter par email</Button>
	</div>
</form>
