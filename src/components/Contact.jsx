import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name : data.name,
      email : data.email,
      message : data.message
    }
    try {
      await axios.post('https://getform.io/f/bnlerlqb', userInfo);
      toast.success('Your Message has been Send...');
    } catch (error) {
      console.log(error);
      toast.error('Something is Wrong...');
    }
  }
  return (
    <>
      <div name='Contact' className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-10">
        <h2 className="text-3xl font-bold mb-5">Contact</h2>
        <span>Please fill out the form below to contact me</span>
        <div class=" flex flex-col items-center justify-center mt-5">
          <form class="bg-slate-200 w-96 px-8 py-6 rounded-xl" action="https://getform.io/f/bnlerlqb" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <h1 class="text-xl font-semibold mb-4">Send Your Message</h1>
            <div class="flex flex-col mb-4">
              <label class="block text-gray-700">FullName</label>
              <input {...register("name", { required: true })}
                id='name'
                name="name"
                class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Full Name"
              ></input>
              {errors.name && <span>This field is required</span>}
            </div>
            <div class="flex flex-col mb-4">
              <label class="block text-gray-700">Email Address</label>
              <input {...register("email", { required: true })}
                id="email"
                name="email"
                class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Email Address"
              ></input>
              {errors.email && <span>This field is required</span>}
            </div>
            <div class="flex flex-col mb-4">
              <label class="block text-gray-700">Message</label>
              <textarea {...register("message", { required: true })}
                id="message"
                name="message"
                class="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Query"
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              class="bg-black text-white rounded-xl px-5 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
