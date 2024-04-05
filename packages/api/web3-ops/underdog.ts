import axios from "axios";
import {
  NftBodyParams,
  NftCreationResponse,
  ProjectCreationResponse,
} from "./types";

interface CreateUnderdogProject {
  underdogApiEndpoint: string;
  underdogApiKey: string;
  inventoryName: string;
  inventoryImageUri: string;
}
export async function createUnderdogProject({
  inventoryImageUri,
  inventoryName,
  underdogApiEndpoint,
  underdogApiKey,
}: CreateUnderdogProject) {
  const createProjectResponse = await axios.post(
    `${underdogApiEndpoint}/v2/projects`,
    {
      name: inventoryName,
      image: inventoryImageUri,
    },
    {
      headers: { Authorization: `Bearer ${underdogApiKey}` },
    }
  );
  return createProjectResponse.data as ProjectCreationResponse;
}

interface CreateUnderdogNFT {
  underdogApiEndpoint: string;
  projectId: number;
  underdogApiKey: string;
  nftBody: NftBodyParams;
}

export async function createUnderdogNFT({
  projectId,
  underdogApiEndpoint,
  underdogApiKey,
  nftBody,
}: CreateUnderdogNFT) {
  const createNftResponse = await axios.post(
    `${underdogApiEndpoint}/v2/projects/${projectId}/nfts`,
    nftBody,
    {
      headers: { Authorization: `Bearer ${underdogApiKey}` },
    }
  );
  return createNftResponse.data as NftCreationResponse;
}