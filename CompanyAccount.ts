import { DIOAccount } from "./DIOAccount"


export class CompanyAccount extends DIOAccount{

  constructor(name: string, accountNumber: number, balance:number){
    super(name, accountNumber,balance)
  }

  getLoan = (value:number):void => {
    if(this.validateStatus()){
      this.setBalance(value)
      console.log('Você pegou R$' + value + ' de empréstimo')
    }
    else
      console.log('Conta inativa!')
  } 
}