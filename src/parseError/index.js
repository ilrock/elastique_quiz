export default (errorCode) => {
  console.log(errorCode)
  switch (errorCode) {
    case 'auth/user-not-found':
      return 'The password is incorrect'
    default:
      break
  }
}
