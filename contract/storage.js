(async () => {
  const value = 128821
 
  const options = {
    address: '0x497eDDeC909b6Cf6a1436D53bDbd180F0BCEf9F6',
    method: 'store',
    args: [value],
    abiUrl: 'https://raw.githubusercontent.com/web3os-org/sample-scripts/master/contract/storage.abi'
  }

  await kernel.bin.contract.send(options)

  options.method = 'retrieve'
  options.args = []
  const result = await kernel.bin.contract.call(options)

  console.log(result) // browser console
  terminal.log(result) // web3os terminal
)()
