import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelo/Cliente';
import { ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
[x: string]: any;



  //objeto do tipo cliente
  cliente = new Cliente();

  //varialvel para visibilidade dos botoes
  bntCadastro:boolean = true;

  tabelaCadastro:boolean = true;

  //variavel de visibilidade da tabela
  tabela:boolean = true;

  //JSON de clientes
  clientes:Cliente[] = [];

  //construtor kkk
  constructor(private servico:ClienteService){}

  //metodo de selecao
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //metodo de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => { 
      
    //cadastrar o cliente no vetor  
    this.clientes.push(retorno); 
  
    //limpar formulario
    this.cliente = new Cliente();

    //mensagem
    alert('cliente cadastrado com sucesso!');
    });
  }

  //metodo para selecionar um cliente especifico
  selecionarCliente(posicao:number):void{

    //selecionar cliente  no vetor
    this.cliente = this.clientes[posicao];

    //visibilidade dos botoes
    this.bntCadastro = false;

    this.tabelaCadastro = false;

    //visibilidade da tabela
    this.tabela = false;
  }

  //metodo para editar cliente
  editar(): void {
    
    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      //obter posicao do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == retorno.id;
      
      });
      
      //alterar os dados do cliente no vetor
      this.clientes[posicao] = retorno;

      //limpar formulario
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.bntCadastro = true;

      //visibilidade da tabela
      this.tabela = true; 

      alert('cliente alterado com sucesso!');

    },
    );
  }

  
  //metodo para remover cliente
  remover(): void {
    
    this.servico.remover(this.cliente.id)
    .subscribe(retorno => {

      //obter posicao do vetor onde esta o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.id == this.cliente.id;
      
      });
      
      //remover cliente do vetor
      this.clientes.splice(posicao, 1)

      //limpar formulario
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.bntCadastro = true;

      //visibilidade da tabela
      this.tabela = true; 

      alert('cliente removido com sucesso!');

    },
    );
  }

  //metodo para cancelar
  cancelar():void{

    //limpar formulario
    this.cliente = new Cliente();

    //visibilidade dos botoes
    this.bntCadastro = true;

    //visibilidade da tabela
    this.tabela = true;

  }


  //metodo de inicializacao
  ngOnInit(){
    this.selecionar();
  }
}
