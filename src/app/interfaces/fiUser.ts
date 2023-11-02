export interface FIUser {
  id:number,
  fi_name:string,
  fi_shortName:string,
  fi_code:string,
  fi_type:string,
  role:string,
  createdBy:string,
  createdDate:string,
  modifiedDate?:string,
  password:string,
  status:string,
}