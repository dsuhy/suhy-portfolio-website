// src/components/sections/ContactSection.tsx
import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "");

  if (state.succeeded) {
    return (
      <section className="relative z-10 bg-black/50 backdrop-blur-lg py-24 text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Thank You!</h2>
          <p className="text-gray-300">We will contact you shortly!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 bg-black/50 backdrop-blur-lg py-24" id='contact'>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-300 mb-8">
              Have a project in mind? Let's create something amazing together.
              Reach out and let's start a conversation.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="mailto:dylansuhy@gmail.com" className="flex items-center text-white hover:text-red-400 transition-colors duration-200">
                <Mail className="w-5 h-5 mr-3" />
                dylansuhy@gmail.com
              </a>
              <div className="flex space-x-4">
                <a href="https://github.com/dsuhy/" className="text-white hover:text-red-400 transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/dylansuhy" className="text-white hover:text-red-400 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full px-8 py-4 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;