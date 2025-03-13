import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log('Form data:', formData);
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p>maptuhul2011@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>+62 896 7317 3874</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p>Pemalang, Central Java, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="input input-bordered" 
                    required 
                  />
                </div>
                
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32" 
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                
                <div className="form-control">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;