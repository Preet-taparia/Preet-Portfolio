import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import emailjs from '@emailjs/browser';
import clsx from 'clsx';
import Button from '@/common/components/elements/Button';

interface FormDataProps {
  name: string;
  email: string;
  message: string;
}

const formInitialState: FormDataProps = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataProps>(formInitialState);
  const [formErrors, setFormErrors] = useState<Partial<FormDataProps>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is required`,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const errors: Partial<FormDataProps> = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.message.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setModalMessage('⚠️ Please fill in all required fields.');
      setIsOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing');
      }

      // Template parameters matching EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setModalMessage('Message sent successfully!');
        setFormData(formInitialState);
        setFormErrors({});
      }
    } catch (error) {
      setModalMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
      setIsOpen(true);
    }
  };

  const isSubmitDisabled =
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim() ||
    isLoading;

  return (
    <>
      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className='flex flex-grow flex-col gap-5'>
          <div className='flex flex-col gap-5 md:flex-row'>
            <input
              className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
              type='text'
              placeholder='Name*'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
              type='email'
              placeholder='Email*'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className='w-full rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700'
            rows={5}
            placeholder='Message*'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            className={clsx(
              'flex justify-center bg-neutral-800 py-2.5 hover:scale-[101%] hover:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950 hover:dark:bg-neutral-50',
            )}
            type='submit'
            icon={<></>}
            data-umami-event='Send Contact Message'
            disabled={isSubmitDisabled}
          >
            {isLoading ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>

      {/* Dialog Modal */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClose={setIsOpen}
        >
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
          </Transition.Child>

          {/* Dialog Panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg dark:bg-neutral-800">
              <div className="mt-4 text-neutral-700 dark:text-neutral-300">
                {modalMessage}
              </div>
              <div className="mt-6">
                <Button
                  className="bg-neutral-800 px-6 py-2 text-white hover:bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-950"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default ContactForm;