import { useState } from 'react'

import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import thoughtImageUrl from '../../assets/thought.png'

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

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div 
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      <header>
        <span className="text-xl leading-6">Send us your feedback</span>
        <CloseButton />
      </header>

      { !feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          { Object.entries(feedbackTypes).map(([key, feedback]) => {
            return(
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
                type="button"
              >
                <img src={feedback.image.source} alt={feedback.image.alt} />
                <span>{feedback.title}</span>
              </button>
            )
          }) }
        </div>
      ) : (
        <></>
      )}

      <footer className="text-xs text-neutral-400">
        developed with ♥ by <a className="underline underline-offset-2" href="https://github.com/andynadvorny">Andy</a>
      </footer>
    </div>
  )
}