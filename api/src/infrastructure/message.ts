import { Request } from "express";

class Message{
  private data:any
  private metadata:any

  public static dataFrom(request:Request):any{   
    return request.body.data
  }
  public static metaFrom(request:Request):any{   
    return request.body.metadata
  }

  constructor (data:any, metadata:any = {}){
    this.data = data
    this.metadata = metadata
  }

}

export default Message