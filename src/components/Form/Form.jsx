import { useForm } from "react-hook-form"
import { BsSend, BsExclamationCircleFill } from "react-icons/bs"
import { nameFieldError, emailFieldError } from "@/configs/form.errors.config"
import { onClickUp } from "@/utils/scroll.utils";

export const Form = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(async (data) => {

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      reset()
      onClickUp()

    } catch (error) {
      console.log('__ERROR__:', error);
    }

  })

  return (
    <div className='flex flex-col bg-slate-900 dark:text-white p-6'>
      <h2 className='text-center text-2xl md:text-3xl'>Contact</h2>

      <form action="/api/send" method="POST"
        onSubmit={onSubmit}
        className='text-current flex flex-col p-7 lg:w-1/2 w-full mx-auto' id="contact">

        <label htmlFor="name" className='italic mb-3'>Your Name</label>
        <input name="name" id="name" type="text"
          {...register('name', nameFieldError)}
          placeholder="Name..."
          className="mb-3
          text-black
          placeholder:italic
          placeholder:text-slate-500
          block
          bg-white
          w-full
          border
          border-slate-300
          rounded-md
          py-2
          pl-9
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm"
        />
        {
          errors.name && <span className="field-error text-[#BB2525] block font-bold">
            <BsExclamationCircleFill className="inline me-2" />{errors.name.message}</span>
        }

        <label htmlFor="email" className='italic mb-3'>Your Email</label>
        <input name="Email" id="email" type="email"
          {...register('email', emailFieldError)}
          placeholder="email@example.com..."
          className="mb-3
          text-black
          placeholder:italic
          placeholder:text-slate-500
          block
          bg-white
          w-full
          border
          border-slate-300
          rounded-md
          py-2
          pl-9
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm"
        />
        {
          errors.email && <span className="field-error text-[#BB2525] block font-bold">
            <BsExclamationCircleFill className="inline me-2" />{errors.email.message}</span>
        }

        <label htmlFor="comment" className='italic mb-3'>Your comment</label>
        <textarea
          type="textarea"
          name="comment"
          id="comment"
          placeholder="leave a comment..."
          className="mb-3
          text-black
          placeholder:italic
          placeholder:text-slate-500
          block
          bg-white
          w-full
          border
          border-slate-300
          rounded-md
          py-2
          pl-9
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm"
          {...register("comment")}
        ></textarea>

        <button
          type="submit"
          className='
          bg-slate-400
          rounded-md
          flex
          flex-row
          justify-center
          items-center
          h-10
          p-4
          mt-4
          hover:bg-slate-500'>
          Submit
          <BsSend className='ms-2' />
        </button>
      </form>
    </div>
  )
}
