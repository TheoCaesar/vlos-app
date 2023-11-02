export interface User {
  id?:number,
  firstname?:string,
  lastname?:string,
  phoneNumber?: string,
  email?:string,
  role:string,
  createdBy?: string,
  createdDate?:string,
  password?:string,
  remember?:boolean,
  status?:string
}
