module.exports = {
  "solidity": {
    "version": "0.8.17",
    "settings": {
      "optimizer": {
        "enabled": true,
        "runs": 200
      }
    }
  },
  "paths": {
    "sources": "./contracts",
    "tests": "./test",
    "cache": "./cache",
    "artifacts": "./artifacts"
  },
  "mocha": {
    "timeout": 40000
  }
}