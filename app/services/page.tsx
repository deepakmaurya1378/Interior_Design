"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { services } from "../data/services";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <main className="bg-white text-black">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/service_bg.jpg"
          alt="Hero Background"
          fill
          className="z-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10" />

        <div className="z-20 px-6">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1
              className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-md"
              style={{ fontFamily: 'DM Serif Text' }}
            >
              OUR SERVICES
            </h1>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              style={{ fontFamily: "DM Serif Text" }}
            >
              We transform spaces into timeless expressions of purpose and
              beauty — merging architectural vision with refined interiors.
            </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 z-20 flex flex-col items-center text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
          <span className="mb-2 text-sm tracking-wide animate-pulse">
            Scroll down
          </span>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="pt-20 pb-32 px-6 bg-black md:px-10 lg:px-24 space-y-24"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p
            className="uppercase text-sm tracking-widest text-amber-300  mb-2"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Our Expertise
          </p>
          <h2
            className="text-5xl font-bold mb-6 text-white "
            style={{ fontFamily: "DM Serif Text" }}
          >
            What We Offer
          </h2>
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mb-10"></div>
          <p
            className="text-lg text-white leading-relaxed"
            style={{ fontFamily: "DM Serif Text" }}
          >
            At TAS Designs, we offer a comprehensive suite of
            architectural services thoughtfully tailored to meet the
            distinct vision of each project. From the earliest concepts to
            the final build, Teeksha and her team deliver innovative,
            elegant solutions with precision, creativity, and care.
          </p>
        </div>

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-16 lg:gap-28`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl relative aspect-[6/5]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2
                className="text-5xl font-medium mb-4 text-amber-300 leading-tight"
                style={{ fontFamily: "DM Serif Text" }}
              >
                {service.title}
              </h2>
              <div className="w-16 h-1 bg- mb-6 mx-auto lg:mx-0" />
              <p
                className="text-lg text-white mb-8 leading-relaxed"
                style={{ fontFamily: "DM Serif Text" }}
              >
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-300 text-black px-6 py-3 text-sm tracking-wider font-medium hover:bg-amber-500 transition"
              >
                Get In Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        className="relative w-full text-center py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-10"
          >
            Ready to Start Your Project?
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className="text-lg text-gray-200 mb-14"
          >
            Contact us today to schedule a consultation and discuss how we
            can bring your architectural vision to life.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
            <button className="group relative inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white hover:bg-gray-900 hover:text-black transition-all duration-[1000ms] ease-out overflow-hidden ">
              <span className="relative z-10 text-sm tracking-[0.3em] font-light uppercase">
                Contact Us
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-[1000ms] ease-out origin-left"></div>
            </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;
