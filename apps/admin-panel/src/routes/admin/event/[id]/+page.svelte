<script lang="ts">
	import { defaultCurrencyFormatter } from '$lib/formatter/currency.formatter'
	import {
		dateTimeFormatterWithoutSeconds,
		defaultDateTimeFormatter
	} from '$lib/formatter/date-time.formatter'
	import {
		Avatar,
		Badge,
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Card,
		Carousel,
		Heading,
		Modal,
		P,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Thumbnails
	} from 'flowbite-svelte'
	import { CalendarMonthSolid, ExclamationCircleOutline, ImageSolid } from 'flowbite-svelte-icons'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const { event, images, tickets, userImage } = data

	let index = 0
	let forward = true
	let selectedImage: any

	let actionModal = false
	let actionCtx: 'approve' | 'reject'
</script>

<div class="p-4">
	<Breadcrumb aria-label="breadcrumb" navClass="mb-5">
		<BreadcrumbItem href="/admin/event?status={event.status}" home>
			<svelte:fragment slot="icon">
				<CalendarMonthSolid class="me-2 h-4 w-4" />
			</svelte:fragment>
			Événement
		</BreadcrumbItem>
		<BreadcrumbItem>Détail de l'événement</BreadcrumbItem>
	</Breadcrumb>

	<div class="flex items-center justify-between">
		<div>
			<Heading tag="h2" class="mb-3">{event?.name}</Heading>
		</div>
		{#if event.status === 'DRAFT'}
			<div class="flex gap-4">
				<Button
					on:click={() => {
						actionModal = true
						actionCtx = 'approve'
					}}
					pill
					color="green"
					href=""
				>
					<span class="mx-4">Approuver</span>
				</Button>
				<Button
					on:click={() => {
						actionModal = true
						actionCtx = 'reject'
					}}
					pill
					outline
					color="red"
					href=""
				>
					<span class="mx-4">Rejeter</span>
				</Button>
			</div>
		{:else if event.status === 'PUBLISHED'}
			<Badge rounded border color="green" large class="mr-4">{event.status}</Badge>
		{:else if event.status === 'REJECTED'}
			<Badge rounded border color="red" large class="mr-4">{event.status}</Badge>
		{:else}
			<Badge rounded border color="primary" large class="mr-4">{event.status}</Badge>
		{/if}
	</div>

	<Modal title="Confirmation" size="xs" bind:open={actionModal} outsideclose>
		<div class="text-center">
			<ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
			<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Êtes-vous sûr ?</h3>
			<div class="flex justify-center gap-2">
				<form action="?/{actionCtx}" method="post" class="inline">
					<input type="hidden" name="id" value={event.id} />
					<Button type="submit" color="red">Confirmer</Button>
				</form>
				<Button on:click={() => (actionModal = false)} color="alternative">Annuler</Button>
			</div>
		</div>
	</Modal>
</div>

<div class="mb-3 flex w-full flex-col gap-4 px-4 pb-4 md:flex-row">
	<div class="w-full md:w-2/3">
		<Carousel
			{images}
			{forward}
			let:Indicators
			transition={null}
			let:Controls
			bind:index
			on:change={({ detail }) => (selectedImage = detail)}
		>
			<Controls />
			<Indicators />
		</Carousel>
		<div class="my-2 h-10 rounded bg-gray-300 p-2 dark:bg-gray-700 dark:text-white">
			{selectedImage?.alt}
		</div>
		<Thumbnails {images} {forward} bind:index imgClass="h-16" />
	</div>
	<div class="w-full md:w-1/3">
		<div class="mb-4 flex items-center gap-4">
			{#if userImage}
				<Avatar src={userImage} alt={event.user.username} />
			{:else}
				<Avatar>{event?.user.fullname[0]}</Avatar>
			{/if}
			<div class="flex flex-col">
				<Heading tag="h6">{event.user.fullname}</Heading>
				<span class="text-gray-700 dark:text-gray-400">{event.user.username}</span>
			</div>
		</div>
		<ul class="text-gray-700 dark:text-gray-400">
			<li>Créé à: {dateTimeFormatterWithoutSeconds.format(event.createdAt)}</li>
			<li>Date de début: {dateTimeFormatterWithoutSeconds.format(event.date)}</li>
			<li>
				Date de fin: {dateTimeFormatterWithoutSeconds.format(event.endDate ?? event.date)}
			</li>
			<li>
				Total du stock initial de tickets: {event.tickets.map((e) => e.stock).reduce((p, c) => p + c)}
			</li>
			<li>
				Total des tickets vendus: {event.tickets.map((e) => e._count.purchases).reduce((p, c) => p + c)}
			</li>
			<li>
				Total du stock actuel de tickets: {event.tickets
					.map((e) => e.currentStock)
					.reduce((p, c) => p + c)}
			</li>
		</ul>

		<Heading tag="h4" class="my-2">Catégories</Heading>
		<div class="mb-4 mt-2 flex gap-2">
			{#if event.categories.length}
				{#each event.categories as c}
					<Badge border rounded color="primary">{c}</Badge>
				{/each}
			{:else}
				<Badge border rounded color="primary">Pas de catégories</Badge>
			{/if}
		</div>

		<Heading tag="h4" class="my-2">Déscription</Heading>
		<P>{event.description}</P>
	</div>
</div>

<Heading tag="h3" class="mb-4 px-4">Tickets</Heading>
<div class="flex flex-wrap gap-4 px-4">
	{#each tickets as ticket}
		<Card horizontal class="mb-4" padding="none">
			<div>
				{#if ticket.image}
					<img
						class="h-full w-full rounded-lg object-cover md:min-w-44 md:max-w-48"
						src={ticket.src}
						alt={ticket.name}
					/>
				{:else}
					<div
						class="flex h-full w-full items-center rounded-lg bg-primary-300 md:w-48 dark:bg-primary-700"
					>
						<span class="m-auto text-primary-400 dark:text-primary-600">
							<ImageSolid size="lg" />
						</span>
					</div>
				{/if}
			</div>
			<div class="min-w-72 p-4">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{ticket.name}
				</h5>
				<p class="mb-3 text-xl font-bold leading-tight text-primary-700 dark:text-primary-100">
					{defaultCurrencyFormatter.format(ticket.price)}
				</p>
				<ul class="text-sm text-gray-700 dark:text-gray-400">
					<li>Date d'ouverture des ventes: {defaultDateTimeFormatter.format(ticket.salesOpenDate)}</li>
					<li>
						Date limite des ventes: {defaultDateTimeFormatter.format(ticket.purchaseDeadline)}
					</li>
					<li>
						Stock initial: {ticket.stock}
					</li>
					<li>
						Stock actuel: {ticket.currentStock}
					</li>
					<li>
						Vendu: {ticket._count.purchases}
					</li>
				</ul>
			</div>
		</Card>
	{/each}
</div>

<Heading tag="h3" class="my-4 px-4">Achats de tickets</Heading>
<div class="px-4">
	<Table striped>
		<TableHead>
			<TableHeadCell>Utilisateur</TableHeadCell>
			<TableHeadCell>Ticket</TableHeadCell>
			<TableHeadCell>Prix</TableHeadCell>
			<TableHeadCell>Date</TableHeadCell>
			<TableHeadCell>Statut</TableHeadCell>
		</TableHead>
		<TableBody>
			{#if data.ticketPurchases.length}
				{#each data.ticketPurchases as purchase}
					<TableBodyRow
						color={purchase.status === 'CANCELLED' || purchase.refundStatus === 'REFUNDED'
							? 'custom'
							: 'default'}
						class="bg-red-200 dark:bg-rose-800"
					>
						<TableBodyCell>{purchase.user.username}</TableBodyCell>
						<TableBodyCell>{purchase.ticket.name}</TableBodyCell>
						<TableBodyCell>{defaultCurrencyFormatter.format(purchase.price)}</TableBodyCell>
						<TableBodyCell>
							{dateTimeFormatterWithoutSeconds.format(purchase.createdAt)}
						</TableBodyCell>
						<TableBodyCell>
							<div class="flex gap-1">
								{#if purchase.status === 'COMPLETED'}
									<Badge rounded border color="green">{purchase.status}</Badge>
								{:else if purchase.status === 'PENDING'}
									<Badge rounded border color="yellow">{purchase.status}</Badge>
								{:else if purchase.status === 'CANCELLED'}
									<Badge rounded border color="red">{purchase.status}</Badge>
								{:else}
									<Badge rounded border color="none">{purchase.status}</Badge>
								{/if}
								{#if purchase.refundStatus === 'REFUNDED'}
									<Badge rounded border color="blue">{purchase.refundStatus}</Badge>
								{:else if purchase.refundStatus === 'REFUNDING'}
									<Badge rounded border color="yellow">{purchase.refundStatus}</Badge>
								{:else if purchase.refundStatus === 'DENIED'}
									<Badge rounded border color="purple">{purchase.refundStatus}</Badge>
								{/if}
							</div>
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			{:else}
				<TableBodyRow>
					<td colspan="7">
						<div class="flex h-64">
							<span class="m-auto text-center text-xl font-bold">Non disponible</span>
						</div>
					</td>
				</TableBodyRow>
			{/if}
		</TableBody>
	</Table>
</div>
