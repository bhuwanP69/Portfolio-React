
export default function Contact() {
  return (
    <div className="contact h-screen pt-20" id='contact'>
        <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold">Contact Me</h2>
            <p className="text-text-color text-sm pt-2">Get in touch</p>
        </div>
        <div className="bottom flex justify-center gap-10  pt-20">
          {/* left  */}
          
        <div className="left font-sans">

          <div className="call flex items-center gap-3 pb-8">
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="mi:call"></iconify-icon>
            </div>
            <div className="">
              <h5 className="text-xl font-semibold">Prefer Calling?</h5>
              <p className="text-gray-400">+9779861658435</p>
            </div>
          </div>
          <div className="email flex items-center gap-3 pb-8">
            
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="mi:email"></iconify-icon>
            </div>

            <div className="">
              <h5 className="text-xl font-semibold">Email</h5>
              <p className="text-gray-400">bhubanpaudel79@gmail.com</p>
            </div>
          </div>
          <div className="call flex items-center gap-3">
            
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="tdesign:location"></iconify-icon>
            </div>
            <div className="">
              <h5 className="text-xl font-semibold">Location</h5>
              <p className="text-gray-400">Remote</p>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="right grid gap-5">
          <div className="first flex gap-5">
            <div className="name relative">
            <input type="text" required className=" h-20 w-full pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
            <label className="absolute left-3 top-3 text-sm">Name</label>
            </div>
            <div className="email relative">
            <input type="email" required className=" h-20 w-52 pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
            <label className="absolute left-3 top-3 text-sm">Email</label>
            </div>

          </div>
          <div className="type relative">
            <input type="text" required className=" h-20 w-full pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
            <label className="absolute left-3 top-3 text-sm">What type of website do you need?</label>
            </div>
            <div className="last flex gap-6 items-start">
          <div className="type relative">
            <textarea type="text"   required className=" h-52 pt-10 pl-5 resize bg-grid-color rounded-lg outline-none" />
            <label className="absolute left-3 top-3 text-sm">Additional message</label>
            </div>
            <button className='flex items-center justify-between hover:bg-button-color bg-text-color w-36 h-14 px-3  py-4 rounded-lg   transition-all'>
          <p className='-mt-1 text-sm'>Send Message </p>
          <div className="icon text-xl">
          <iconify-icon icon="uil:message"></iconify-icon>
          </div>
        </button>
        </div>
            </div>

        </div>
    </div>
  )
}
