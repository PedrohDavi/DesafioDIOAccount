import { UserAccount } from "./UserAccount";
import { CompanyAccount } from "./CompanyAccount";
import { PremiumAccount } from "./PremiumAccount"


// Instancia UserAccount
const userAccount1:UserAccount  = new UserAccount('Laisa', 1447849, 57845896523, 0)
console.log(userAccount1)
userAccount1.deposit(1000)
userAccount1.withdraw(30)
console.log(userAccount1.getBalance())



// Instancia CompanyAccount
const companyAccount1:CompanyAccount  = new CompanyAccount('João', 1452449, 0)
console.log(companyAccount1)
companyAccount1.deposit(1000)
companyAccount1.withdraw(300)
companyAccount1.getLoan(5000)
console.log(companyAccount1.getBalance())


// Instancia PremiumAccount
const premiumAccount1:PremiumAccount  = new PremiumAccount('Yuri', 1226449, 0)
console.log(premiumAccount1)
premiumAccount1.deposit(1000)
premiumAccount1.withdraw(800)
console.log(premiumAccount1.getBalance())