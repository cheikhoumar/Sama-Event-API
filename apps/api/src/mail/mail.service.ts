import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { UserEntity } from '../user/entities/user.entity'

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserActivation(user: UserEntity, otp: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Activation de l\'utilisateur par OTP',
      template: '/templates/activation.hbs',
      context: {
        name: user.fullname,
        email: user.email,
        otp,
      },
    })
  }

  async sendAdminSignInCode(user: UserEntity, otp: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'SignIn OTP Code',
      template: '/templates/admin-signin.hbs',
      context: {
        name: user.fullname,
        email: user.email,
        otp,
      },
    })
  }

  async sendPasswordResetCode(user: UserEntity, otp: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Reset Password',
      template: '/templates/reset-password.hbs',
      context: {
        name: user.fullname,
        username: user.username,
        email: user.email,
        otp,
      },
    })
  }
}
