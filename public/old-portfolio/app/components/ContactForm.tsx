"use client";

import { useState } from "react";

const formAction = "https://formspree.io/f/xwpkqajr";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form className="art-contact-form" onSubmit={handleSubmit}>
      <div className="art-form-field">
        <input
          id="name"
          name="name"
          className="art-input"
          type="text"
          placeholder="Name"
          required
        />
        <label htmlFor="name">
          <i className="fas fa-user"></i>
        </label>
      </div>
      <div className="art-form-field">
        <input
          id="email"
          name="email"
          className="art-input"
          type="email"
          placeholder="Email"
          required
        />
        <label htmlFor="email">
          <i className="fas fa-at"></i>
        </label>
      </div>
      <div className="art-form-field">
        <textarea
          id="message"
          name="message"
          className="art-input"
          placeholder="Message"
          required
        ></textarea>
        <label htmlFor="message">
          <i className="far fa-envelope"></i>
        </label>
      </div>

      <div className="art-submit-frame">
        <button className="art-btn art-btn-md art-submit" type="submit">
          <span>{status === "sending" ? "Sending..." : "Send message"}</span>
        </button>
        {status === "success" && (
          <div className="art-success">
            Success <i className="fas fa-check"></i>
          </div>
        )}
        {status === "error" && (
          <div className="art-success">
            Failed, try again.
          </div>
        )}
      </div>
    </form>
  );
}
