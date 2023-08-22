/* eslint-disable @typescript-eslint/no-explicit-any */

class Message{
  private data:any
  private metadata:any

  constructor (data:any, metadata:any = {}){
    this.data = data
    this.metadata = metadata
  }

}

export default Message