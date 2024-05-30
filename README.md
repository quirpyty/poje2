# MyToken Contract

This Solidity contract implements a basic ERC20 token called MyToken.

## Description

The MyToken contract is a simple implementation of an ERC20 token on the Ethereum blockchain. It allows for the creation of tokens with a specified name, symbol, and initial total supply. The contract supports minting new tokens and burning existing tokens.

## Usage

1. **Constructor**: Upon deployment, the contract constructor initializes the token's name, symbol, and total supply.

2. **Minting Tokens**: The `mint` function allows the contract owner to mint new tokens and assign them to a specified address. This function increases the total token supply and updates the balance of the recipient address.

3. **Burning Tokens**: The `burn` function allows token holders to burn a specified amount of tokens, reducing the total token supply. This function also updates the balance of the address from which the tokens are burned.

## Executing the Program

- To run this program, you can use Remix, as online Solidity IDE. To get started, go to Remix website at https:/remix.ethereum.org/.

## SPDX-License-Identifier

This contract's SPDX-License-Identifier is MIT.

## Solidity Version

This contract is compatible with Solidity version ^0.8.0.

## Events

The contract emits two events:

- `Mint`: Triggered when new tokens are minted and assigned to an address.
- `Burn`: Triggered when tokens are burned by an address.

## Disclaimer

This project is licensed under the MIT License.

Author
- Michael S. Quinones

