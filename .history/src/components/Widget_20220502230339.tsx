import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
  return (
    <div className="absolute bottom-5 right-5">
      <button className="bg-brand-500 text-white rounded-full px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs">
          <span className="pl-2"></span>
          Feedback
        </span>
      </button>
    </div>
  )
}