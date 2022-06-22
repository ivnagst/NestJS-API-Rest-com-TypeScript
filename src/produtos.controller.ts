import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
@Controller('produtos')
export class ProdutosController{
    produtos: Produto [] = [
        new Produto ("LIV01", "Livro TDD e BDD", 43.65),
        new Produto ("LIV02", "Mitologia", 93.34),
        new Produto ("LIV03", "I.A como serviço", 63.65),
    ];
    
    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }
    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0]; 
    }
    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 89
        this.produtos.push(produto)
    }
    @Put()
    alterar(@Body() produto): string {
        console.log(produto)
        return 'Produto alterado'
    }    
    @Delete(':id')
    apagar(@Param() params) {
       this.produtos.pop()
    }
}