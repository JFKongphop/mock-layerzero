import hre from 'hardhat';

const contract = 'MyOApp';

const deploy = async () => {
  try {
    await hre.run('verify:verify', {
      address: '0x578d758BccE273E4f350801745D26742C48EBf7A',
      contract: `contracts/${contract}.sol:${contract}`,
      constructorArguments: [
        '0x6EDCE65403992e310A62460808c4b910D972f10f',
        '0xd73F821fcA522Cbb672F8354d25470DBf4948c9C',
      ],
    });
  }
  catch (e) {
    console.log("ERROR", e);
  }
}

deploy().catch((err) => {
  console.log(err);
  process.exitCode = 1;
})