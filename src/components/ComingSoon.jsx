import { useState } from 'react'

export default function ComingSoon() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Coming Soon</h1>
        <p className="text-center text-gray-600 mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  )
}
