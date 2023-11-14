import { useRef, useState } from "react";
import useAlert from "../hook/useAlert";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import { Loader } from "@react-three/drei";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Wilson",
          from_email: form.email,
          to_email: "quanganhha99@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);

        // TODO: Show success message
        showAlert({ text: "Message sent successfully", type: "success" });

        // TODO: Hide an alert
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          hideAlert();
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        // TODO: Show error message
        showAlert({ text: "I didn't receive your message" });
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex flex-col lg:flex-row max-container h-full">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 w-full max-w-sm mx-auto flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-8"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can I help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
