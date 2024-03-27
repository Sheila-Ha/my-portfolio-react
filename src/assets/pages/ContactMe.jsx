import { useState } from 'react';
import Button from '../utils/Button';


function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    alert(
      'Message not sent, see my links in footer to contact me.'
    );
  };

  return (
    <>
      <h2 className="px-8 pb-4 font-bold text-center text-3x1 pt-14">
        Contact Me
        </h2>
    
    <div className="flex flex-col items-center text-white bg-blue-600">
      <form
      id="contact"
      className="flex flex-col items-center p-4 rounded-md"
      onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center mb-4 ">
            <label htmlFor="name" className="flex flex-col mr-2 font-bold">
              Name
            </label>
            <input
              className="px-2 text-black rounded-md"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="email" className="flex flex-col mr-2 font-bold">
              Email
            </label>
            <input
              className="px-2 text-black rounded-md"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="message" className="flex font-bold">
              Message
            </label>
            <textarea
              className="p-2 text-black rounded-md"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="32"
              rows="4"
              required
            ></textarea>
          </div>
          <Button>Submit</Button>
      </form>
    </div>
    </>
  );
}
export default ContactMe;