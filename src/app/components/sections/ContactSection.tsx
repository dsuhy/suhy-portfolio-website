// src/components/sections/ContactSection.tsx
import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const ContactSection = () => (
  <section className="relative z-10 bg-black/50 backdrop-blur-lg py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8">
            Have a project in mind? Let's create something amazing together.
            Reach out and let's start a conversation.
          </p>
          <div className="flex flex-col space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center text-white hover:text-red-400 transition-colors duration-200">
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
              {/* <a href="#" className="text-white hover:text-red-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a> */}
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button className="w-full px-8 py-4 text-white hover:text-red-400 transition-colors duration-200 border border-white/20 rounded-full flex items-center justify-center">
            Send Message
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;