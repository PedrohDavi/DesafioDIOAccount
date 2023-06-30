// Classe 'mãe' para os tipos de contas

export abstract class DIOAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number
    private status: boolean = true
    private value: number = 0
  
  
    constructor(name: string, accountNumber: number, balance:number) {
      this.name = name
      this.accountNumber = accountNumber
      this.balance = balance
    }
    
    // Getters and Setters 
    
    getName = ():string => {
      return this.name
    }
    
    getAccountNumber = (): number => {
      return this.accountNumber
    }
  
    getBalance = (): number => {
      return this.balance
    }
    setBalance = (balance: number) => {
      this.balance = balance
    }
  
    getStatus = (): boolean =>{
      return this.status
    }
    setStatus = (status:boolean) => {
      this.status = status
    }
  
    // Métodos da classe
    deposit = (value: number): void => {
      this.balance += value
      console.log('Você depositou R$' + value)
    }
  
    withdraw = (value: number): void => {
      if ((this.balance >= value) && this.validateStatus()) {
        this.balance -= value
        console.log('Você sacou R$' + value)
      }
      else
      console.log('Saldo insuficiente')
    }
  
    validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
      throw new Error('Conta está inativa')
    }
  }