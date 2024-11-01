'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [statusMessage, setStatusMessage] = useState('');

  async function sendEmail(data: FormData) {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setStatusMessage(result.message);

    if (response.ok) reset();
  }

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className='flex flex-col items-center w-full max-w-md space-y-4 p-6 bg-white shadow-md rounded-md'
    >
      {/* Form fields for name, email, and message */}
      <input
        type='text'
        {...register('name', { required: true })}
        placeholder='Your Name'
        className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
      />
      {errors.name && <p className='text-red-600 text-sm'>Name is required</p>}

      <input
        type='email'
        {...register('email', { required: true })}
        placeholder='Your Email'
        className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
      />
      {errors.email && (
        <p className='text-red-600 text-sm'>Email is required</p>
      )}

      <textarea
        {...register('message', { required: true })}
        placeholder='Your Message'
        rows={5}
        className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
      ></textarea>
      {errors.message && (
        <p className='text-red-600 text-sm'>Message is required</p>
      )}

      <button
        type='submit'
        className='px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none'
      >
        Send
      </button>
      {statusMessage && <p className='mt-4 text-green-600'>{statusMessage}</p>}
    </form>
  );
};

export default ContactForm;
