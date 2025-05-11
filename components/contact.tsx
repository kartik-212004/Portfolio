"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";

interface FormData {
  name: string;
  phoneNo: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return false;
    }
    if (!message.trim()) {
      toast.error("Message is required");
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const { data } = await axios.post("/api/nodemailer", { formData });

      if (data.response) {
        toast.success("Message Sent Successfully");
        setFormData({ name: "", phoneNo: "", email: "", message: "" });
      } else {
        toast.error(data.errorMessage || "Error Encountered");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#09090b] my-10 text-white container mx-auto px-4">
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="mt-5">
            <h2 className="font-sans text-base sm:text-xl font-medium mb-2">
              Get in Touch
            </h2>
            <p className="font-sans text-gray-400 text-sm sm:text-lg">
              I look forward to hearing from you. Please contact me via email
              <a
                href="mailto:kartik200421@gmail.com"
                className="font-sans text-cyan-400 underline ml-1"
              >
                kartik200421@gmail.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              {
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/kartik212004/",
              },
              {
                Icon: FaInstagram,
                url: "https://www.instagram.com/karrtikbhatt",
              },
              { Icon: FaGithub, url: "https://www.github.com/kartik-212004" },
              {
                Icon: FaYoutube,
                url: "https://www.youtube.com/@kartikbhatt9892",
              },
            ].map(({ Icon, url }) => (
              <a
                key={url}
                href={url}
                aria-label={`Visit my ${Icon.name} profile`}
                className="text-gray-400 hover:text-white text-xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="md:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-2 sm:gap-4"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              required
              className="font-sans col-span-2 md:col-span-1 h-12 bg-[#09090b] px-3 py-2 rounded text-gray-300 border-[#27272a] border focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              type="tel"
              placeholder="Phone No"
              className="font-sans col-span-2 md:col-span-1 h-12 bg-[#09090b] px-3 py-2 rounded text-gray-300 border-[#27272a] border focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="font-sans col-span-2 h-12 bg-[#09090b] px-3 py-2 rounded text-gray-300 border-[#27272a] border focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="font-sans col-span-2 h-20 bg-[#09090b] p-3 rounded text-gray-300 border-[#27272a] border focus:outline-none focus:ring-2 focus:ring-cyan-500"
              rows={4}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-sans col-span-2 bg-[#27272a] h-8 sm:h-12 sm:py-3 rounded-lg text-white font-semibold hover:bg-[#161616] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
