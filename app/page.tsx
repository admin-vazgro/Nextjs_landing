"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'
import Proboy from '../public/proboy.webp'
import Navbar from "./Navbar";
import Hero from "./Hero";
import School from "./School";
import Tabs from "./Tabs";
import CommunitySection from "./Features"
import Growwithus from "./Growwithus";
import TestimonialSection from "./Testimonial";
import FAQSection from "./Faq";
import JoinUsSection from "./Joinwithus";
import Footer from "./Footer";


const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Page() {
  // single email state reused for forms (simple UX: same field reused)
  const [email, setEmail] = useState("");
  const [collected, setCollected] = useState<string[]>([]);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const features = [
    { title: "AI-Optimised CVs", note: "Beat ATS filters with AI + expert review." },
    { title: "Build a Standout Profile", note: "Showcase skills, projects & achievements." },
    { title: "Mentorship", note: "Learn from industry mentors." },
    { title: "Communities", note: "Connect, share and grow together." },
    { title: "Job Referrals", note: "Get referred to top companies." },
    { title: "Job Tracking", note: "Smart application tracking." },
  ];

  const testimonials = [
    { name: "Sarah Khan", title: "@ GRE student", text: "These platforms will be a real helping hand for tailoring CVs and job preparation. Really looking forward to it." },
    { name: "John Stene", title: "@ GRE student", text: "The projects directly matched job tasks. Great hands-on learning." },
    { name: "Asha", title: "@ Student", text: "Landed an interview in 3 months thanks to the structured curriculum." },
    { name: "Mentorship", title: "@ Mentee", text: "Mentors helped me prepare for interviews and feedback was actionable." },
  ];

  const faqs = [
    { q: "What is Progrize?", a: "An all-in-one career platform for professionals and organisations." },
    { q: "How do job seekers use it?", a: "Build a profile, apply for jobs, get mentorship and referrals." },
    { q: "How do organisations use it?", a: "Create a company profile, post jobs and access hiring insights." },
    { q: "Is there a free plan?", a: "Yes. Premium tools are coming soon. First 2 months are free for all." },
  ];

  function handleSubmit(e: React.FormEvent, source = "unknown") {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log(`[Progrize] Collected from ${source}:`, email);
    setCollected((s) => [...s, email]);
    setEmail("");
  }

  function toggleFaq(i: number) {
    setFaqOpen((prev) => ({ ...prev, [i]: !prev[i] }));
  }

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <Navbar/>
     
      <main className="container py-12">
        {/* HERO */}
       <Hero/>

     {/* School */}
     <School/>
        {/* School */}
        <Tabs/>
        <CommunitySection/>

        <Growwithus/>
        <TestimonialSection/>
        <FAQSection/>
        <JoinUsSection/>




        {/* JOIN THE BETA */}
     

        
      </main>
      {/* Footer */}
       <Footer/>
    </div>
  );
}
