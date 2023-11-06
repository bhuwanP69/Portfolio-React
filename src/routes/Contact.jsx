import { useForm } from "react-hook-form";
 export function LoginForm() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = (data) => {
    console.log("Data submitted:", data);
    fetch('https://backendportfolio-yt77.onrender.com/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
         
        } else {
          throw new Error('Failed to submit the form');
        }
      })
      .then((data) => {
        console.log('Server response:', data); 
        console.log('Before form reset');
        reset();
        console.log('reset done')
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className="right grid gap-5">
       <div className="first grid md:flex gap-5">
         <div className="name relative">
         <input type="text"  {...register("name", { required: true })}  className=" h-20 w-96 sm:w-[350px] md:w-48 pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
        
         <label className="absolute left-3 top-3 text-sm">Name</label>
         </div>
         <div className="email relative">
         <input type="email" required {...register("email", { required:true})} className=" h-20 w-96 sm:w-[350px] md:w-48 pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
         <label className="absolute left-3 top-3 text-sm">Email</label>
         </div>

       </div>
       <div className="type relative">
         <input type="text"  {...register("type", { required: true })} className=" h-20 w-96 sm:w-[350px] md:w-full pt-3 pl-5 bg-grid-color rounded-lg outline-none" />
         <label className="absolute left-3 top-3 text-sm">What type of website do you need?</label>
         </div>
         <div className="last grid md:flex gap-6 items-start">
       <div className="type relative">
         <textarea type="text"  {...register("additional", { required: false })} className=" h-56 w-96 sm:w-[350px] md:w-56   pt-10 pl-5 resize bg-grid-color rounded-lg outline-none" />
         <label className="absolute left-3 top-3 text-sm">Additional message</label>
         </div>
         <button className='flex items-center justify-between hover:bg-button-color bg-text-color w-36 h-14 px-3  py-4 rounded-lg   transition-all hover:text-black'>
           <button type="submit" className="-mt-1 text-sm"> Send Message </button>
       <div className="icon text-xl">
       <iconify-icon icon="uil:message"></iconify-icon>
       </div>
     </button>
     </div>
         </div>
     </form>

  );
}

export default function Contact() {
  return (
    
    <div className="contact  pb-20 pt-20" id='contact'>
        <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold text-black">Contact Me</h2>
            <p className="text-text-color text-sm pt-2">Get in touch</p>
        </div>
        <div className="bottom grid sm:flex justify-start sm:justify-center gap-10 px-10 sm:px-20  pt-20">
          {/* left  */}
          
        <div className="left font-sans">

          <div className="call flex items-center gap-3 pb-8">
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="mi:call"></iconify-icon>
            </div>
            <div className="">
              <h5 className="text-xl font-semibold text-black">Prefer Calling?</h5>
              <p className="">+9779861658435</p>
            </div>
          </div>
          <div className="email flex items-center gap-3 pb-8">
            
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="mi:email"></iconify-icon>
            </div>

            <div className="">
              <h5 className="text-xl font-semibold text-black">Email</h5>
              <p className="">bhubanpaudel79@gmail.com</p>
            </div>
          </div>
          <div className="call flex items-center gap-3">
            
            <div className="icon  text-3xl text-text-color">
            <iconify-icon icon="tdesign:location"></iconify-icon>
            </div>
            <div className="">
              <h5 className="text-xl font-semibold text-black">Location</h5>
              <p className="">Remote</p>
            </div>
          </div>
        </div>
        <LoginForm/>
       
        </div>
    </div>
  )
}
