import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

// Use the RPC endpoint of your choice.
export const umi = createUmi("http://127.0.0.1:8899").use(mplTokenMetadata());
