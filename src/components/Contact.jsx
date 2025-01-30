import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";
import Button from "./Button";

// const Contact = () => {
//   return (
//     <Section id="contact-us">
//       <div className="container">
//         <Heading
//           title="Get in Touch"
//           text="Have questions or need assistance? Reach out to OmniDynamics, a leading technology firm based in Bhubaneswar, Odisha, India. We're here to collaborate and provide innovative solutions for exploration and mobility."
//         />

//         <div className="relative">
//           <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
//             <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none">
//               <img
//                 className="w-full h-full object-cover"
//                 width={800}
//                 alt="Smartest AI"
//                 height={730}
//                 src={'./p5.jpg'}
//               />
//             </div>

//             <div id="contact-form" className="relative z-1 w-2/3 ml-auto">
//               <form 
//                 action="https://formsubmit.co/koushik.647433@gmail.com" 
//                 method="POST"
//                 className="space-y-4 max-w-xl"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
//                     placeholder="Your phone number"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Subject</label>
//                   <input
//                     type="text"
//                     name="subject"
//                     required
//                     className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
//                     placeholder="How can we help?"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Message</label>
//                   <textarea
//                     name="message"
//                     required
//                     rows={4}
//                     className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
//                     placeholder="Your message..."
//                   ></textarea>
//                 </div>
                
//                 <Button
//                   type="submit"
//                   className="button px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg text-white font-medium transition-all duration-300"
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </div>

//             {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
//           </div>

//           <Gradient />
//         </div>
//       </div>
//     </Section>
//   );
// };


const Contact = () => {
    return (
      <Section crosses id="contact-us">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Heading
            title="Get in Touch"
            text="Have questions or need assistance? Reach out to OmniDynamics, a leading technology firm based in Bhubaneswar, Odisha, India. We're here to collaborate and provide innovative solutions for exploration and mobility."
          />
  
          <div className="relative">
            <div className="relative z-1 flex flex-col lg:flex-row justify-start !lg:justify-around items-center h-auto lg:h-[39rem] mb-5 p-4 sm:p-6 lg:p-8 xl:p-20 border border-n-1/10 rounded-3xl overflow-hidden xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full lg:w-1/3 h-48 lg:h-full pointer-events-none">
                <img className="w-full h-full object-cover" width={800} alt="Smartest AI" height={730} src={"./p5.jpg"} />
              </div>
  
              <div id="contact-form" className="relative z-1 w-full lg:w-2/3 mt-48 lg:mt-0 lg:ml-[40rem]">
                <form
                  action="https://formsubmit.co/koushik.647433@gmail.com"
                  method="POST"
                  className="space-y-4 max-w-xl mx-auto lg:mx-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
                      placeholder="Your phone number"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
                      placeholder="How can we help?"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 bg-n-6/40 border border-n-1/10 rounded-lg focus:outline-none focus:border-n-1/30"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
  
                  <Button
                    type="submit"
                    className="button w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg text-white font-medium transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
  
              {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" /> */}
            </div>
  
            <Gradient />
          </div>
        </div>
      </Section>
    )
  }
export default Contact;