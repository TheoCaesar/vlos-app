// import { MasterAnchor } from "./master-anchor";

export interface Program {
  id?: number,
  programName: string,
  programID: number,
  masterAnchorName: string,
  // masterAnchor: MasterAnchor,
  programSize: number,
  FIs: string[],
  createdBy: string,
  createdDate: string,
  status:string,
}
