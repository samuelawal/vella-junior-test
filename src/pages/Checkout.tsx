import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your order has been placed");
  };

  return (
    <div className='container mx-auto p-4 '>
      <h2 className='text-2xl font-bold mb-4 text-center'>Checkout</h2>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto shadow-md p-3'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block mb-1 font-semibold'>First Name</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div>
            <label className='block mb-1 font-semibold'>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
        </div>
        <div className='mt-4'>
          <label className='block mb-1 font-semibold'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mt-4'>
          <label className='block mb-1 font-semibold'>Address</label>
          <input
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600'
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
