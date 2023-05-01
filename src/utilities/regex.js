let email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
let password = new RegExp(/^.{5,}$/)

export {
  email,
  password
}