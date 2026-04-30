"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import sendEmailClient from "../utils/sendEmailClient";
import SiteHeader from "../components/SiteHeader";

const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isValidPhoneNumber = (phoneNumber) =>
  /^\(?([0-9]{3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/.test(phoneNumber);

const SiteFooter = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div>
          <h5>Centonis</h5>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted-ink)",
              maxWidth: "40ch",
              lineHeight: 1.5,
            }}
          >
            A studio designing and building websites, chatbots, and custom
            software.
          </p>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ventures">Ventures</Link></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:centonisai@gmail.com">centonisai@gmail.com</a></li>
            <li><a href="#">Vancouver, BC</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2024–2026 Centonis</div>
        <div>Vancouver · 49.2827° N / 123.1207° W</div>
      </div>
    </div>
  </footer>
);

const ContactClient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isValidInformation, setValidInformation] = useState(true);
  const [isSent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !(
        firstName.trim() &&
        lastName.trim() &&
        company.trim() &&
        message.trim() &&
        isValidEmail(email) &&
        isValidPhoneNumber(phoneNumber)
      )
    ) {
      setValidInformation(false);
      return;
    }
    try {
      setSubmitting(true);
      await sendEmailClient(
        email,
        "New Website Contact Submission",
        "Email",
        `<h1>New Website Contact Submission</h1><br><p><b>${email}</b></p><br><p><b>${phoneNumber}</b></p><br><p>${firstName}</p><br><p>${lastName}</p><br><p>${company}</p><br><p>${message}</p>`
      );
      await addDoc(collection(db, "inquirys/"), {
        firstName,
        lastName,
        email,
        phoneNumber,
        company,
        message,
      });
      setValidInformation(true);
      setSent(true);
    } catch (error) {
      console.error(error);
      alert("There was an error sending the message");
    } finally {
      setSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <>
        <SiteHeader contactHref="/contact" />
        <section className="contact-success">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              [ Message received ]
            </div>
            <h1>Thanks. We&apos;ll be in touch.</h1>
            <p>
              Your note landed in our inbox. We typically reply within one
              business day — often sooner.
            </p>
            <Link href="/" className="cta-pill">
              Back to home <span className="arrow">↗</span>
            </Link>
          </div>
        </section>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader contactHref="/contact" />

      <section className="contact-page-hero">
        <div className="container">
          <div className="contact-page-hero__meta">
            <span>[ Contact / 2026 ]</span>
            <span>Vancouver, BC</span>
          </div>
          <h1 className="reveal">Have something worth building?</h1>
        </div>
      </section>

      <section className="contact-page-body">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-intro reveal">
              <p>
                Tell us a little about what you&apos;re working on — a product,
                a problem, a half-formed idea. We&apos;ll read every word and
                reply personally.
              </p>
              <dl className="contact-meta-list">
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:centonisai@gmail.com">
                      centonisai@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Studio</dt>
                  <dd>Vancouver, BC · Worldwide remote</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>Currently taking on select projects</dd>
                </div>
              </dl>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contact-form reveal reveal-delay-1"
              noValidate
            >
              {!isValidInformation && (
                <div className="error" role="alert" aria-live="polite">
                  Please fill in all required fields with valid values.
                </div>
              )}

              <div className="row-2">
                <div className="field">
                  <label htmlFor="firstName">
                    First name<span className="req">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="lastName">
                    Last name<span className="req">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="email">
                  Email<span className="req">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="phone">
                    Phone<span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="company">
                    Company<span className="req">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">
                  What are you building?<span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="A few sentences is plenty."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="actions">
                <button
                  type="submit"
                  className="cta-pill"
                  disabled={submitting}
                  style={{ opacity: submitting ? 0.55 : 1 }}
                >
                  {submitting ? "Sending…" : "Send message"}{" "}
                  <span className="arrow">↗</span>
                </button>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted-ink)",
                  }}
                >
                  Replies within 1 business day
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
};

export default ContactClient;
