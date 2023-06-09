import { React } from 'react';
import { IoMdPaperPlane } from 'react-icons/all';

const ContactBox = () => {
  return (
    <div className="flex flex-col items-center justify-center text-slate-700">
      <form
        method="post"
        className="relative flex w-full flex-col items-center justify-center"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name" className="sr-only">
          enter your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="mb-0 w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 md:text-lg smallTab:py-4 smallTab:text-xl lg:portrait:text-2xl xl:landscape:py-2 xl:landscape:text-sm ipad:landscape:text-xl 2xl:landscape:py-3 2xl:landscape:text-base 3xl:landscape:text-xl"
        />

        <label htmlFor="email" className="sr-only">
          enter your email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          className="mt-2 mb-0 w-full rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm invalid:border-2 invalid:border-red-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 md:mt-4 md:text-lg smallTab:py-4 smallTab:text-xl lg:portrait:mt-6 lg:portrait:text-2xl xl:landscape:mt-1.5 xl:landscape:py-2 xl:landscape:text-sm ipad:landscape:mt-4 ipad:landscape:text-xl 2xl:landscape:mt-1.5 2xl:landscape:py-3 2xl:landscape:text-base 3xl:landscape:mt-4 3xl:landscape:text-xl"
        />

        <label htmlFor="message" className="sr-only">
          enter your message
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          placeholder="message"
          cols="30"
          rows="8"
          className="3x:landscape:text-xl mt-2 w-full resize-none rounded-md border border-slate-500 bg-slate-100 px-3 py-2 text-base placeholder-slate-400 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 md:mt-4 md:text-lg smallTab:py-4 smallTab:text-xl lg:portrait:mt-6 lg:portrait:text-2xl xl:landscape:mt-1.5 xl:landscape:py-2 xl:landscape:text-sm ipad:landscape:mt-4 ipad:landscape:text-xl 2xl:landscape:mt-1.5 2xl:landscape:py-3 2xl:landscape:text-base 3xl:landscape:mt-4"
        />

        <button
          className="mt-4 flex items-center justify-center rounded-md bg-yellow-500 px-5 py-1 text-base font-bold uppercase tracking-widest md:mt-6 md:py-2 md:px-7 md:text-lg smallTab:py-3 smallTab:px-8 smallTab:text-xl lg:portrait:mt-8 lg:portrait:text-2xl lg:landscape:mt-4 xl:landscape:mt-3 xl:landscape:py-1 xl:landscape:text-base ipad:landscape:mt-5 ipad:landscape:py-3 ipad:landscape:text-xl 2xl:landscape:mt-3 2xl:landscape:py-2 2xl:landscape:text-lg 3xl:landscape:mt-[1.75rem] 3xl:landscape:py-4 3xl:landscape:px-10 3xl:landscape:text-xl"
          type="submit"
        >
          Send
          <IoMdPaperPlane className="ml-1 text-base md:text-2xl smallTab:text-3xl lg:portrait:text-4xl xl:landscape:text-2xl" />{' '}
        </button>
      </form>
    </div>
  );
};

export default ContactBox;
