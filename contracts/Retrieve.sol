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
