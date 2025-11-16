'use client';

export function AuthPage({ isSignIn }: { isSignIn: boolean }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-2 m-2 bg-white rounded">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button onClick={() => {

        }}>{isSignIn ? 'sign in' : 'sign up'}</button>
      </div>
    </div>
  )
}