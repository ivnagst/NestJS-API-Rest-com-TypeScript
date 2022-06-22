import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { get } from "http";
import { Produto } from "./produto.model";
@Controller('produtos')
export class ProdutosController{
    produtos: Produto [] = [
        new Produto ("LIV01", "Livro TDD e BDD", 43.65),
        new Produto ("LIV02", "Mitologia", 93.34),
        new Produto ("LIV03", "I.A como serviço", 63.65),
    ];
    }
    @Get()
    obterTodos():string {  // MÉTODO
        return 'Lista todos os produtos';
    }
    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`
    }
    @Post()
    criar(@Body() produto): string {
        console.log(produto)
        return 'Produto Criado'
    }
    @Put()
    alterar(@Body() produto): string {
        console.log(produto)
        return 'Produto alterado'
    }    
    @Delete(':id')
    apagar(@Param() params): string {
        return `Apaga o produto ${params.id}`
    }
}