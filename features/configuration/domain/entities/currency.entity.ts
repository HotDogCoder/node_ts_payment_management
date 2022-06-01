export class Currency {
    readonly id: string
    readonly name: string
    readonly short_name: string

    constructor(
        {id,name,short_name}:
        {id:string,name:string,short_name:string}
    ) {
        this.id = id
        this.name = name
        this.short_name = short_name
    }
}