const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "api key here",
    // ...and any other configuration
  });
  
  const address = "0xa10568356163a704e65b6f2b7d37775024b1dba6";

    const chain = EvmChain.ETHEREUM;
  
  const tokenId = 5555;

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
      address,
      chain,
      tokenId,
  });
  
  console.log(response);
}

runApp();