// Sources flattened with hardhat v2.17.0 https://hardhat.org

// File contracts/Counter.sol

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract Counter {
    uint256 public count;

    function increment() public {
        count += 1;
    }

    function decrement() public {
        count -= 1;
    }
}


// File contracts/Retrieve.sol

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract Retrieve {
    string message;

    function setmessage(string memory _message) external {
        message = _message;
    }

    function getmessage() public view returns (string memory) {
        return message;
    }
}
