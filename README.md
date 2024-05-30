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
- Once you are on the remix website, create a new file by clicking the "+" icon on the left-hand sidebar, save the file with a .sol extension (e.g., myToken.sol). Then copy and paste the following code into the file:
  

## SPDX-License-Identifier

 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken{
    string public name;
    string public symbol;
    uint256 public totalSupply;
    
    mapping(address=> uint256)public balances;

    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;

    }

    function mint(address _to, uint256 _value) public{
        totalSupply += _value;
        balances[_to] += _value;
        emit Mint(_to, _value);

    }

    function burn(address _from, uint256 _value)public {
        require(balances[_from] >= _value, "insufficient balance");
        totalSupply -= _value;
        balances[_from] -= _value;
        emit Burn(_from, _value);
    }
}

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

