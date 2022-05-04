import { CloseButton } from './CloseButton'

import bugImageUrl from '../assets/bug.png'
import ideaImageUrl from '../assets/idea.png'
import thoughtImageUrl from '../assets/thought.png'

const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: bugImageUrl,
      alt: 'insect icon'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'lamp bulb icon'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'thought cloud icon'
    }
  },
}

export function WidgetForm() {
  return (
    <div 
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      <header>
        <span className="text-xl leading-6">Send us your feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, feedback]) => {
          return(
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col"
              type="button"
              //onClick={}
            >
              <img src={feedback.image.source} alt={feedback.image.alt} />
              <span>{feedback.title}</span>
            </button>
          )
        }) }
      </div>

      <footer className="text-xs text-neutral-400">
        developed with ♥ by <a className="underline underline-offset-2" href="https://github.com/andynadvorny">Andy</a>
      </footer>
    </div>
  )
}