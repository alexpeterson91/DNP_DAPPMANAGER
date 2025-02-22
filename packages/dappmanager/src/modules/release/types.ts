import {
  DistributedFile,
  Compose,
  Manifest,
  ReleaseSignature
} from "../../types";
import { FileFormat } from "../../types";
import { IPFSEntry } from "ipfs-core-types/src/root";

export interface FileConfig {
  regex: RegExp;
  format: FileFormat;
  maxSize: number;
  required: boolean;
  multiple: boolean;
}

export type ReleaseSignatureWithData = {
  signature: ReleaseSignature;
  signedData: string;
};

export interface ReleaseDownloadedContents {
  imageFile: DistributedFile;
  avatarFile?: DistributedFile;
  composeUnsafe: Compose;
  manifest: Manifest;
  signature?: ReleaseSignatureWithData;
}

export type IPFSEntryName = Pick<IPFSEntry, "name">;
