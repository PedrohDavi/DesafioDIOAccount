// Conta com benefícios premium (R$10,00 a mais por depósito)
import { DIOAccount } from "./DIOAccount"

export class PremiumAccount extends DIOAccount{

  constructor(name: string, accountNumber: number, balance:number){
    super(name, accountNumber, balance)
  }

   deposit = (value:number) =>{
     this.setBalance(value += 10)
     console.log('Você depositou R$' + value)
   }
}