import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftMarketplace } from "../target/types/nft_marketplace";

describe("nft-marketplace", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.NftMarketplace as Program<NftMarketplace>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
