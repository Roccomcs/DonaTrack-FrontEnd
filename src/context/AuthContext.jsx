import { useState } from 'react'
import { AuthContext } from './auth-context'

function getInitialUser() {
  const savedUser = localStorage.getItem('donatrack_user')
  if (!savedUser) {
    return null
  }

  try {
    return JSON.parse(savedUser)
  } catch (error) {
    console.error('Error loading user:', error)
    localStorage.removeItem('donatrack_user')
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser)
  const loading = false

  const login = (userData) => {
    const userWithTimestamp = {
      ...userData,
      loginAt: new Date().toISOString()
    }
    setUser(userWithTimestamp)
    localStorage.setItem('donatrack_user', JSON.stringify(userWithTimestamp))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('donatrack_user')
  }

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('donatrack_user', JSON.stringify(updatedUser))
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
