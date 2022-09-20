(async () => {
  // Deploy Remix's default 2_Owner.sol
  const address = '' // the contract address
  const newOwner = ''
 
  const options = {
    address,
    method: 'changeOwner',
    args: [newOwner],
    abiUrl: 'https://raw.githubusercontent.com/web3os-org/sample-scripts/master/contract/owner.abi'
  }

  Terminal.log(`\n\nContract: ${address}`)
  Terminal.log(`Setting Owner: ${newOwner}`)
  await Kernel.modules.contract.write(options)

  options.method = 'getOwner'
  options.args = []
  const result = await Kernel.modules.contract.read(options)

  Terminal.log(`New Owner: ${result}\n`)
  Terminal.prompt()
  
  Kernel.dialog({ title: 'Owner Updated', text: result })
})()
