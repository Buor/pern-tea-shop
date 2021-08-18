import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { TypeService } from '../Services/type.service'
import { CreateTypeDTO } from '../DTO/createTypeDTO'

@Controller('/type')
export class TypeController {

    constructor(private readonly typeService: TypeService) {}

    @Get('/all')
    async getTypes() {
        return await this.typeService.getTypes()
    }

    @Delete('/all')
    async deleteTypes() {
        return await this.typeService.deleteTypes()
    }

    @Get(':idOrName')
    async getType(@Param('idOrName') idOrName: string) {
        return await this.typeService.getType(idOrName)
    }

    @Post()
    async createType(@Body() createTypeDTO: CreateTypeDTO) {
        return await this.typeService.createType(createTypeDTO)
    }
}