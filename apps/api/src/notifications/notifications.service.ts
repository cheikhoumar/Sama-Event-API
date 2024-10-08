import { Injectable } from '@nestjs/common'
import { config } from '../common/config'
import { EventEntity } from '../event/entities/event.entity'
import { PrismaService } from '../prisma/prisma.service'
import { UserEntity } from '../user/entities/user.entity'
import { CreateNotificationDto } from './dto/create-notification.dto'

@Injectable()
export class NotificationsService {
  constructor(private prismaService: PrismaService) {
    this.perPage = config.pagination.notificationPerPage
  }

  perPage: number

  async findAllImportant(
    user: UserEntity,
    page: number = 0,
    skip?: number,
    from?: string,
    to?: string,
  ) {
    return await this.prismaService.notification.findMany({
      where: {
        userId: user.id,
        updatedAt: from
          ? {
              gte: isNaN(Date.parse(from)) ? undefined : new Date(from),
              lte: isNaN(Date.parse(to)) ? undefined : new Date(to),
            }
          : undefined,
      },
      orderBy: { updatedAt: 'desc' },
      include: { reads: { where: { userId: user.id } } },
      skip: skip ? skip : isNaN(page) ? 0 : page * this.perPage,
      take: from ? undefined : this.perPage,
    })
  }

  async findAllInfo(
    user: UserEntity,
    page: number = 0,
    skip?: number,
    from?: string,
    to?: string,
  ) {
    return await this.prismaService.notification.findMany({
      where: {
        userId: null,
        updatedAt: from
          ? {
              gte: isNaN(Date.parse(from)) ? undefined : new Date(from),
              lte: isNaN(Date.parse(to)) ? undefined : new Date(to),
            }
          : undefined,
      },
      orderBy: { updatedAt: 'desc' },
      include: { reads: { where: { userId: user.id } } },
      skip: skip ? skip : isNaN(page) ? 0 : page * this.perPage,
      take: from ? undefined : this.perPage,
    })
  }

  async createNotification(dto: CreateNotificationDto) {
    if (dto.userId) {
      return await this.prismaService.notification.create({
        data: {
          ...dto,
          reads: { create: { userId: dto.userId } },
        },
      })
    }

    const notification = await this.prismaService.notification.create({
      data: dto,
    })

    const users = await this.prismaService.user.findMany({
      where: { activated: true, groups: { has: 'USER' } },
      select: { id: true },
    })

    await this.prismaService.notificationRead.createMany({
      data: users.map((e) => ({
        userId: e.id,
        notificationId: notification.id,
      })),
      skipDuplicates: true,
    })

    return notification
  }

  async updateNotification(dto: CreateNotificationDto) {
    return await this.prismaService.notification.update({
      where: { id: dto.id },
      data: dto,
    })
  }

  async sendTicketSalesNotification(
    eventOwnerId: string,
    event: Partial<EventEntity>,
  ) {
    const sold = await this.prismaService.purchase.count({
      where: {
        ticket: { eventId: event.id },
        status: 'COMPLETED',
      },
    })

    const dto = new CreateNotificationDto({
      userId: eventOwnerId,
      message: `${sold} "${event.name
        .substring(0, 32)
        .trim()}" ticket(s) ont été vendus`,
      type: 'TICKET_SALES',
      entityType: 'EVENT',
      entityId: event.id,
    })

    const notification = await this.prismaService.notification.findFirst({
      where: {
        AND: {
          userId: dto.userId,
          type: 'TICKET_SALES',
          entityType: 'EVENT',
          entityId: dto.entityId,
        },
      },
    })

    return await this.prismaService.notification.upsert({
      where: { id: notification?.id ?? -1 },
      create: { ...dto, reads: { create: { userId: dto.userId } } },
      update: {
        ...dto,
        reads: {
          upsert: {
            create: { userId: dto.userId },
            update: { userId: dto.userId, isRead: false },
            where: {
              userId_notificationId: {
                notificationId: notification?.id ?? -1,
                userId: dto.userId,
              },
            },
          },
        },
      },
    })
  }

  async readAllNotification(user: UserEntity, type?: 'IMPORTANT' | 'INFO') {
    await this.prismaService.notificationRead.updateMany({
      where: {
        userId: user.id,
        isRead: false,
        notification: type
          ? { userId: type === 'IMPORTANT' ? user.id : null }
          : undefined,
      },
      data: { isRead: true },
    })
    return { message: 'success' }
  }

  async readNotification(user: UserEntity, id: number) {
    return await this.prismaService.notificationRead.upsert({
      where: { userId_notificationId: { notificationId: id, userId: user.id } },
      create: { userId: user.id, notificationId: id, isRead: true },
      update: { isRead: true },
    })
  }

  async remove(id: number) {
    return await this.prismaService.notification.delete({ where: { id } })
  }
}
