export interface NotifierInterfaceRepository {
  notify(data: any): Promise<void>
}