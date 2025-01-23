"use client"
import React, { useState } from "react"
import axios from "axios"
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaGamepad,
  FaYoutube,
  FaTrash,
} from "react-icons/fa"

interface FormData {
  name: string
  phoneNo: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  // Use useState with proper typing
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
  })

  // Handler to update form data
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // Submit handler (placeholder)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    const send = await axios.post("api/nodemailer", { formData })
    const data = await send.data
    console.log(data)
  }

  return (
    <div className="bg-[#09090b] my-10 text-white">
      <div className="mx-auto  flex flex-row">
        {/* Header */}
        <div className="flex flex-col gap-10 ">
          <div>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-400 w-[90%]">
              We look forward to hearing from you. Please contact us via email
              at
              <a
                href="mailto:kartik200421@gmail.com"
                className="text-cyan-400 underline ml-1"
              >
                kartik200421@gmail.com
              </a>
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 ">
            <a
              href="https://www.linkedin.com/in/kartik212004/"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/karrtikbhatt"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.github.com/kartik-212004"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.youtube.com/@kartikbhatt9892"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Form */}
        <div className="w-[60vw]">
          <form
            onSubmit={handleSubmit}
            className="bg-[#09090b] grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="col-span-2 h-12 bg-[#09090b] md:col-span-1 px-3 py-2 rounded text-gray-300 border-[#27272a] border focus:ring-1"
            />
            <input
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              type="text"
              placeholder="Phone No"
              className="col-span-2 h-12 bg-[#09090b] md:col-span-1 px-3 py-2  rounded text-gray-300 border-[#27272a] border focus:ring-[0.5]"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="col-span-2 h- bg-[#09090b] px-3 py-2 rounded text-gray-300 border-[#27272a] border focus:ring-1"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="col-span-2 h-20 bg-[#09090b] p-3 rounded text-gray-300 border-[#27272a] border focus:ring-1"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="col-span-2 bg-[#27272a] h-12 py-3 rounded-lg text-white font-semibold hover:bg-[#161616]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
