export const tokenConfig = {
  name: "FEETPIX",
  ticker: "$FEETPIX",
  chain: "Robinhood Chain",
  totalSupply: "1,000,000,000",
  // Leave empty until the real contract is deployed — the UI treats an
  // empty string as "not launched yet" and disables buy/copy/explorer actions.
  contractAddress: "",
  buyUrl: "",
  explorerUrl: "",
  chartUrl: "",
  openseaUrl: "https://opensea.io/collection/feetpixwtf",
  openseaCollectionSlug: "feetpixwtf",
  // Get a free key at https://docs.opensea.io/reference/api-keys — required
  // for ANY client (this site or anyone else's) to read live collection data,
  // this isn't a limitation specific to this codebase. Until set, the
  // Origins section shows placeholder trait tiles instead of real NFTs.
  openseaApiKey: "",
  twitterUrl: "https://x.com/FeetLabsHQ",
  telegramUrl: "",
};
