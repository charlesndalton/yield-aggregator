import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { YieldAggregator } from "../target/types/yield_aggregator";

describe("vault", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const vault = anchor.workspace.YieldAggregator as Program<YieldAggregator>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
