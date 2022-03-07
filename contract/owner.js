(async () => {
  // Deploy Remix's default 2_Owner.sol
  const newOwner = ''
  const address = ''
 
  const options = {
    address,
    method: 'changeOwner',
    args: [newOwner],
    abiFile: '/scripts/owner.abi'
  }

  terminal.log(`\n\nContract: ${address}`)
  terminal.log(`Setting Owner: ${newOwner}`)
  await kernel.bin.contract.write(options)

  options.method = 'getOwner'
  options.args = []
  const result = await kernel.bin.contract.read(options)

  terminal.log(`New Owner: ${result}\n`)
  terminal.prompt()
  
  kernel.dialog({ title: 'Owner Updated', text: result })
})()
