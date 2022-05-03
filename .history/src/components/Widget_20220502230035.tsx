import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
  return (
    <div className="absolute bottom-5 right-5">
      <button className="bg-brand-500 text-white rounded-full px-3 h-12 flex items-center">
        <ChatTeardropDots className="w-6 h-6" />

        <span>Feedback</span>
      </button>
    </div>
  )
}