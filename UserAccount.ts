// Conta comum para pessoas físicas

import { DIOAccount } from "./DIOAccount"

export class UserAccount extends DIOAccount {
  private doc_id: number

  constructor(name: string, accountNumber: number, doc_id: number, balance:number) {
    super(name, accountNumber, balance)
    this.doc_id = doc_id
  }

}