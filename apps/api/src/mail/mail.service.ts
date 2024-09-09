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
      template: './activation',
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
      template: './admin-signin',
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
      template: './templareset-password',
      context: {
        name: user.fullname,
        username: user.username,
        email: user.email,
        otp,
      },
    })
  }
}
