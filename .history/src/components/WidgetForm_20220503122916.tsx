import { CloseButton } from './CloseButton'

export function WidgetForm() {
  return (
    <div 
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      <header>
        <span className="text-xl leading-6">Send us your feedback</span>
        <CloseButton />
      </header>
      <footer className="text-xs text-neutral-400">
        developed with ♥ by <a className="underline underline-offset-2" href="https://github.com/andynadvorny">Andy</a>
      </footer>
    </div>
  )
}