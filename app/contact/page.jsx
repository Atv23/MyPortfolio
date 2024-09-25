"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9199269893",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "atharva.1si20is007@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lucknow, Uttar Pradesh",
  },
];

const Contact = () => {
  const form = useRef(); // Form reference

  // EmailJS function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3glglbh", // Replace with your service ID
        "template_litnutr", // Replace with your template ID
        form.current,
        "LMGAU76c4JB-eKSXQ" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Add this line in the `sendEmail` function after success
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
        <div className="xl:w-[60%] order-2 xl:order-none">
          <form
            ref={form} // Added form reference
            onSubmit={sendEmail} // Added onSubmit handler 
            className="flex flex-col gap-4 p-8 bg-[#27272c] rounded-xl"
          >
            <h3 className="text-4xl text-accent">Connect with me</h3>
            <p className="text-white/60">
              Feel free to reach out for opportunities, feedback, or any inquiries—I’d love to connect!
            </p>

            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" name="firstname" required placeholder="Name" />
              <Input type="text" name="orgname" placeholder="Organization Name" />
              <Input type="email" name="email" required placeholder="Email address" />
              <Input type="tel" name="phone" placeholder="Phone number" />
            </div>
            {/* select */}
            <Select className="w-full" name="reason">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Reason for contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose your reason</SelectLabel>
                  <SelectItem value="business">Business/FreeLance work</SelectItem>
                  <SelectItem value="job">Job Opportunity</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              name="message"
              className="h-[100px]"
              placeholder="Type your message here."
            />
            {/* button */}
            <Button size="md" type="submit" className="max-w-40">
              Send message
            </Button>
          </form>
        </div>

        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
};

export default Contact;