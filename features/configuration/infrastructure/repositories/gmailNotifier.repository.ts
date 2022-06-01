import nodemailer from 'nodemailer';
import { NotifierInterfaceRepository } from "../../../../core/domain/repositories/notifier.interface.repository";

export abstract class GmailNotifierRepository implements NotifierInterfaceRepository {
  protected _transporter: nodemailer.Transporter
  private _credentials: { email: string, pass: string } = {
    email: process.env.GMAIL_EMAIL ? process.env.GMAIL_EMAIL : '',
    pass: process.env.GMAIL_PASS ? process.env.GMAIL_PASS : '',
  }
  protected _from: string = process.env.GMAIL_EMAIL ? process.env.GMAIL_EMAIL : ''
  protected _to: string = ''

  constructor(to: string) {
    this._to = to
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this._credentials.email,
        pass: this._credentials.pass
      }
    })
  }

  async notify(data: any): Promise<void> {
    this._transporter.sendMail({
      from: this._from,
      to: this._to,
      subject: 'Notification from Clean App'
    })
  }

}