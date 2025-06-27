'use client'
import React, { useState } from 'react'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface ContactProps {
  marquee?: boolean
}

const ContactPage = ({ marquee = true }: ContactProps) => {
  const { revealRef } = useReveal()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    requirement: '',
    comment: '',
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.value : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.termsAccepted) {
      alert('Please accept the Terms and Conditions.')
      return
    }
    console.log('Submitted Data:', formData)
    alert(`Thank you, ${formData.firstName}. Your message has been submitted.`)
  }

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Let’s Get in Touch
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            We’re excited to hear from you. Let’s start something great together — contact us today!
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid max-w-2xl grid-cols-1 gap-6" ref={revealRef}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="rounded-md border p-4 text-black"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="rounded-md border p-4 text-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="rounded-md border p-4 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-md border p-4 text-black"
            />
            <input
              type="text"
              name="requirement"
              placeholder="Your Requirement *"
              value={formData.requirement}
              onChange={handleChange}
              required
              className="rounded-md border p-4 text-black"
            />
            <textarea
              name="comment"
              placeholder="Comment (optional)"
              rows={4}
              value={formData.comment}
              onChange={handleChange}
              className="rounded-md border p-4 text-black"></textarea>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <span>I accept the Terms and Conditions.</span>
            </label>
            <button type="submit" className="rounded-md bg-primary px-6 py-3 font-semibold text-white">
              Submit
            </button>
          </form>

          <h3 className="pb-4 pt-16 text-2xl font-semibold" ref={revealRef}>
            Book Your Appointment
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>
              <strong>Service:</strong> 1 on 1 Strategy Funding Call (20 mins)
            </li>
            <br />
            <li>
              <strong>Date:</strong> 11 Jun 2025
            </li>
            <br />
            <li>
              <strong>Time Zone:</strong> Asia/Dhaka (+06:00)
            </li>
            <br />
            <li>
              <strong>Time:</strong> 08:30 PM
            </li>
            <br />
          </ul>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactPage
