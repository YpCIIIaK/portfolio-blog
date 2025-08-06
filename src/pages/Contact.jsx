import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSfwO38neDmzzLvmiI-lMajbBDecQXDqbNmoPVbFd6zYQYqKHw/formResponse";

    const form = new FormData();
    form.append("entry.2078135664", formData.name);
    form.append("entry.903158094", formData.email);
    form.append("entry.2083802", formData.message);

    fetch(googleFormURL, {
      method: 'POST',
      body: form,
      mode: 'no-cors'
    })
        .then(() => {
          setShowNotification(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setShowNotification(false), 3000);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Failed to send the message.');
        });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
      <div className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-textSecondary mb-8">
              I'm currently open for freelance opportunities and interesting projects.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you! (Just fill the form and press the button below)
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textSecondary mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-textSecondary/20 rounded px-4 py-2 focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textSecondary mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-textSecondary/20 rounded px-4 py-2 focus:border-secondary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-transparent border border-textSecondary/20 rounded px-4 py-2 focus:border-secondary focus:outline-none"
                ></textarea>
              </div>
              <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <AnimatePresence>
          {showNotification && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="fixed bottom-4 right-4 bg-secondary text-primary px-6 py-3 rounded shadow-lg"
              >
                Message sent successfully!
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export default Contact;
