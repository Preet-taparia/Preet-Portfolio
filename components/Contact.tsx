import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import EarthCanvas from "./EarthCanvas";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form Data:", form);

    setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000); 
  };

  return (
    <div className={`flex xl:flex-row flex-col-reverse gap-10`}>
      <div
        className='bg-black-100 p-8 rounded-2xl'
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Your Message</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      <div
        className= 'w-[350px] h-[350px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] mx-auto  '
      >
        <EarthCanvas />
      </div>
    </div>
  );
};

export default Contact;
