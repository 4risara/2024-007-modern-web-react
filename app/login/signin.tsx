'use client'

import { useFormState } from 'react-dom'
import { login } from '@/app/login/actions'
import { useFormStatus } from 'react-dom'

const initialState = {
  message: '',
}

export default function SignIn() {
  const [state, formAction] = useFormState(login, initialState)
  const { pending } = useFormStatus()

  console.log(state);
  
  return (
    <form action={formAction} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {state.message && (
        <div
          className={`mb-4 text-center px-4 py-2 rounded ${state.code === 'LOGIN_SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
        >
          {state.message}
          { state.code === 'LOGIN_SUCCESS' 
            ? 
              <div>
                Welcome {state.user?.firstname} {state.user?.lastname}
              </div> 
            : ""
          }
          
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
      </div>
      <button type="submit" disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  )
}