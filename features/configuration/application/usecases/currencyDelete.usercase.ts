import { GmailNotifierRepository } from "../../infrastructure/repositories/gmailNotifier.repository";

export class UserDeleteUseCase extends GmailNotifierRepository {
  async notify(data: any): Promise<void> {
    this._transporter.sendMail({
      from: this._from,
      to: this._to,
      subject: `La moneda ${data.name} con ID ${data.id} fue eliminada correctamente`,
      html: `
        😔
        <h1>Lamentamos las molestias</h1>.
        <h6>Vuelve pronto 👏</h6>
      `
    })
  }
}