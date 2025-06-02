import { Send } from "lucide-react";

import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    // const SERVICE_ID = "your_service_id";
    // const TEMPLATE_ID = "your_template_id";
    // const PUBLIC_KEY = "your_public_key";

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            // .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .sendForm(
                import.meta.env.VITE_SERVICE_ID, 
                import.meta.env.VITE_TEMPLATE_ID, 
                e.target, 
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then((result) => {
                alert("Message Sent!");
                //reset
                setFormData({ name:"", email:"", message:""});
            })
            .catch(() => alert("Oops! Please try again."))
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
            </h2>
 
            {/* <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3> */}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Name..."
                  onChange={(e) => 
                    setFormData({ ...formData, name:e.target.value})
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  onChange={(e) => 
                    setFormData({ ...formData, email:e.target.value})
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                  onChange={(e) => 
                    setFormData({ ...formData, message:e.target.value})
                  }
                />
              </div>

              <button type="submit" className="cosmic-button w-full flex items-center justify-center gap-2">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
    );
};