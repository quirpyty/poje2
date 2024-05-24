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
