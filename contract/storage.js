(async () => {
  const value = 69420
  const address = '0x497eDDeC909b6Cf6a1436D53bDbd180F0BCEf9F6' // Ropsten; or deploy Remix's default 1_Storage.sol
  const { contract } = Kernel.modules
 
  const options = {
    address,
    method: 'store',
    args: [value],
    abiUrl: 'https://raw.githubusercontent.com/web3os-org/sample-scripts/master/contract/storage.abi'
  }

  await contract.send(options) // send = write; alias contract.write()

  options.method = 'retrieve'
  options.args = []
  const result = await contract.call(options) // call = read; alias contract.read()

  console.log(result) // browser console
  Terminal.log(result) // web3os terminal
})()
