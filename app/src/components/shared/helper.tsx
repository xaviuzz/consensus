class Helper{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static showError(toast:any,message:string) {
    toast({
      title: message,
      status: 'error',
      isClosable: true,
    })
  }
}

export default Helper
