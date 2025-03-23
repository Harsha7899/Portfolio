"use client";

import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email",
      });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="lg:py-20 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-default-500 text-center mb-8">
            Feel free to reach out for opportunities or just to say hi!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <Card className="bg-background/40 backdrop-blur-md border hover:scale-[1.02] border-white/10">
                <CardBody className="flex flex-row items-center gap-4 py-3 overflow-hidden">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-default-500 text-sm">Phone</p>
                    <a
                      href="tel:+18574247317"
                      className="text-foreground hover:text-primary transition-colors break-words"
                    >
                      +1 (857)-424-7317
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* Email */}
              <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]">
                <CardBody className="flex flex-row items-center gap-4 py-3 overflow-hidden">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-default-500 text-sm">Email</p>
                    <a
                      href="mailto:harshamattaparthy9@gmail.com"
                      className="text-foreground hover:text-primary transition-colors break-words"
                    >
                      harshamattaparthy9@gmail.com
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* LinkedIn */}
              <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]">
                <CardBody className="flex flex-row items-center gap-4 py-3 overflow-hidden">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM7.5 8.5h3.8v2.1h.1c.5-.9 1.6-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.8c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-4V8.5z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-default-500 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/harshamattaparthy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-words"
                    >
                      linkedin.com/in/harshamattaparthy
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* GitHub */}
              <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]">
                <CardBody className="flex flex-row items-center gap-4 py-3 overflow-hidden">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.78.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.47-2.36 1.24-3.2-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.9 1.24 3.2 0 4.59-2.81 5.6-5.49 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0012 0z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-default-500 text-sm">GitHub</p>
                    <a
                      href="https://github.com/harsha7899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-words"
                    >
                      github.com/harsha7899
                    </a>
                  </div>
                </CardBody>
              </Card>

              {/* LeetCode */}
              <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:scale-[1.02]">
                <CardBody className="flex flex-row items-center gap-4 py-3 overflow-hidden">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M550.4 896c-21.12 0-41.6-8.32-56.96-24.64L241.28 618.88a80 80 0 010-113.6l252.16-252.8a80.96 80.96 0 01113.6 0c31.36 31.36 31.36 82.24 0 113.6L426.56 512l180.48 180.48c31.36 31.36 31.36 82.24 0 113.6a79.36 79.36 0 01-56.64 23.84z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-default-500 text-sm">LeetCode</p>
                    <a
                      href="https://leetcode.com/Harsha369/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-words"
                    >
                      leetcode.com/Harsha369
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-background/40 backdrop-blur-md border border-white/10 h-fit">
              <CardBody className="gap-6">
                {status.message && (
                  <div
                    className={`p-3 rounded-lg ${
                      status.type === "success"
                        ? "bg-success/10 text-success"
                        : "bg-danger/10 text-danger"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    label="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    variant="bordered"
                    radius="sm"
                    isRequired
                    classNames={{
                      input: "text-white",
                      label: "text-white/80",
                    }}
                  />
                  <Input
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    variant="bordered"
                    radius="sm"
                    isRequired
                    classNames={{
                      input: "text-white",
                      label: "text-white/80",
                    }}
                  />
                  <Textarea
                    label="Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    variant="bordered"
                    radius="sm"
                    minRows={4}
                    isRequired
                    classNames={{
                      input: "text-white",
                      label: "text-white/80",
                    }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    radius="full"
                    className="w-full font-medium"
                    startContent={<Send className="w-4 h-4" />}
                    isLoading={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
