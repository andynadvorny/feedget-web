import { CloseButton } from "../../CloseButton";

import successIcon from '../../../assets/success.png'

export function FeedbackSuccessStep() {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successIcon} alt="success icon" className="w-10 h-10" />
        <span className="text-xl mt-2">Thanks for the feedback!</span>
        <button
          type="button"
        >
          Send another
        </button>
      </div>
    </>
  )
}