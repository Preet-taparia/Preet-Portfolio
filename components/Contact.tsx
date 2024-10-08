import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import EarthCanvas from "./EarthCanvas";
import Header from "./Header";

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
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
  
    setLoading(true);
    setError(null);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        const result = await response.json();
        setError(null);
        alert(result.message);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="pt-10" id="contact">
      <Header startLine="Let's get in" endLine="Touch" />
      <div className="flex flex-col lg:flex-row gap-0 sm:gap-4 pt-10">
        {/* Form Section */}
        <div className="bg-[#090909] p-6 sm:p-4 rounded-xl w-full max-w-md mx-auto lg:max-w-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <label className="flex flex-col">
              <span className="text-white font-medium">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-[#313031] py-3 px-4 placeholder:text-[#555567] text-purple rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            {/* Email Input */}
            <label className="flex flex-col">
              <span className="text-white font-medium">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-[#313031] py-3 px-4 placeholder:text-[#555567] text-purple rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            {/* Message Input */}
            <label className="flex flex-col">
              <span className="text-white font-medium">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-[#313031] py-3 px-4 placeholder:text-[#555567] text-purple rounded-lg outline-none border-none font-medium w-full"
              />
            </label>

            {/* Submit Button */}
            <button
              className={`relative inline-flex h-12 w-full md:w-60 overflow-hidden mx-auto rounded-lg p-[1px] focus:outline-none ${error ? "bg-red-500" : "bg-slate-950"
                }`}
              type="submit"
            >
              <span
                className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${error
                    ? "bg-[conic-gradient(from_90deg_at_50%_50%,#FFB3B3_0%,#B23939_50%,#FFB3B3_100%)]"
                    : "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                  }`}
              />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                {loading ? "Sending..." : error ? error : "Send"}
              </span>
            </button>

          </form>
        </div>

        {/* Earth Canvas Section */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full h-auto sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px]">
            <EarthCanvas />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
