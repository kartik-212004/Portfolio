import React from "react"
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaGamepad,
  FaYoutube,
  FaTrash,
} from "react-icons/fa"

const ContactForm: React.FC = () => {
  return (
    <div className="bg-[#09090b] my-10 text-white ">
      <div className=" mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-gray-400">
            If you have any inquiries, please feel free to reach out. You can
            contact us via email at
            <a
              href="mailto:kartik200421@gmail.com"
              className="text-cyan-400 underline ml-1"
            >
              kartik200421@gmail.com
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="bg-[#09090b] grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="col-span-2 h-12 bg-[#09090b] md:col-span-1 p-3 rounded  text-gray-300 border-[#27272a] border focus:ring-1"
          />
          <input
            type="text"
            placeholder="Phone No"
            className="col-span-2 h-12  bg-[#09090b] md:col-span-1 p-3 rounded  text-gray-300 border-[#27272a] border focus:ring-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-2 h-12 bg-[#09090b] p-3 rounded  text-gray-300 border-[#27272a] border focus:ring-1"
          />
          <textarea
            placeholder="Message"
            className="col-span-2 h-20 bg-[#09090b] p-3 rounded  text-gray-300 border-[#27272a] border focus:ring-1"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="col-span-2 bg-[#27272a] h-12 py-3 rounded-lg text-white font-semibold hover:bg-cyan-500"
          >
            Submit
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaGamepad />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaYoutube />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl">
            <FaTrash />
          </a>
        </div>

        {/* Footer */}
      </div>
    </div>
  )
}

export default ContactForm
