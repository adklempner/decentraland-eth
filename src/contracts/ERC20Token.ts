import { Contract } from '../ethereum'
import { fulfillContractMethods } from './verification'

const { abi } = require('./artifacts/ERC20Token.json')

/** ERC20Token contract class */
export class ERC20Token extends Contract {
  constructor(address: string) {
    super(address, abi)
    fulfillContractMethods(this, abi)
  }

  getContractName() {
    return 'ERC20Token'
  }
}
