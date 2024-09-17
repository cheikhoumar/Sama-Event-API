import type { $Enums } from '@prisma/client'
import { defaultCurrencyFormatter } from '../formatter/currency.formatter'

export async function sendEventStatusNotification(params: {
	eventId: string
	eventName: string
	userId: string
	status: $Enums.EventStatus
}) {
	const { userId, eventId, status, eventName } = params

	let message: string

	switch (status) {
		case 'PUBLISHED':
			message = `Votre événement « ${eventName} » a été approuvé. Statut: ${status}`
			break
		case 'REJECTED':
			message = `Votre événement « ${eventName} » a été rejeté. Statut: ${status}`
			break
		case 'CANCELLED':
			message = `Votre événement « ${eventName} » a été annulé. Statut: ${status}`
			break
		case 'DRAFT':
		default:
			message = `Événement "${eventName}". Status: ${status}`
			break
	}

	return await prisma.notification.create({
		data: {
			userId,
			message,
			type: 'EVENT_STATUS',
			entityType: 'EVENT',
			entityId: eventId,
			reads: { create: { userId } }
		}
	})
}

export async function sendWithdrawRequestNotification(params: {
	userId: string
	amount: number
	id: string
	from: string
	method: string
	status: string
}) {
	const { userId, amount, id, method, from, status } = params

	return await prisma.notification.create({
		data: {
			userId,
			message: `Withdraw: ${method} ${defaultCurrencyFormatter.format(
				amount
			)} from ${from}. Status: ${status}`,
			type: 'WITHDRAW_STATUS',
			entityType: 'WITHDRAW_REQUEST',
			entityId: id,
			reads: { create: { userId } }
		}
	})
}
