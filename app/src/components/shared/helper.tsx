class Helper{
  public static showError(toast:any,message:string) {
    toast({
      title: message,
      status: 'error',
      isClosable: true,
    })
  }
}

export default Helper
