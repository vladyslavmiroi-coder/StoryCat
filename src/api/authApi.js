import BASE_URL from './baseApi'

export const loginUser = async (login, password) => {
  let response = await fetch(`${BASE_URL}/users?email=${login}`)
  let users = await response.json()

  if (!users.length) {
    response = await fetch(`${BASE_URL}/users?username=${login}`)
    users = await response.json()
  }

  if (!users.length) {
    throw new Error('Користувача не знайдено')
  }

  const user = users[0]

  if (user.password !== password) {
    throw new Error('Невірний пароль')
  }

  return user
}
