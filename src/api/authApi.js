import BASE_URL from './baseApi'
import mockUsers from './mockUsers'

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      throw new Error('Server error')
    }

    const data = await response.json()

    if (!data) {
      throw new Error('Empty response')
    }

    return data
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 10))

    const user = mockUsers.find(
      (u) => (u.email === email || u.name === email) && u.password === password,
    )

    if (!user) {
      throw new Error('Невірний логін або пароль')
    }

    return user
  }
}
