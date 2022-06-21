import { Controller } from "@nestjs/common";
import { get } from "http";
@Controller('produtos')
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

}