import { Document, Page } from 'react-pdf';

export default function About() {
    
    const imageMyself = 'https://live.staticflickr.com/65535/53160700296_297807ed3d_n.jpg'
  return (
  <div className="about grid justify-center pt-16 " id='about'>
    <div className="a-top flex flex-col items-center justify-center text-center ">
    <h2 className='text-4xl font-bold'>About Me</h2>
    <p className='text-text-color'>Get to know me</p>
    </div>
    <div className="a-bottom mt-10 grid sm:flex justify-between pr-5 pl-20 md:pl-0">
        <div className="a-left mr-[15%] pb-10 pl-10 md:pl-0">
            <img src={imageMyself} alt="img" className='w-52 md:w-full ' />
        </div>
        <div className="a-right  w-[360px]">
            <p className='mb-5 text-[16px] text-gray-400'>With over 4+ years experience in building professional websites for businesses, brands and individuals, I bring you closer to your customers with my developer + SEO skills.</p>
            <p className='text-[16px] text-gray-400'>Got a project? Hire me and enjoy quality & excellence in delivery.</p>

            <div className="numbers my-8 -ml-4 flex text-sm text-center">
                <p className='w-24 text-gray-400'> <span className='block text-2xl font-semibold text-white'>04+</span> Years experience</p>
                <p className='w-24 text-gray-400'> <span className='block text-2xl font-semibold text-white'>27+</span> 
                Completed Project</p>
                <p className='w-24 text-gray-400'> <span className='block text-2xl font-semibold text-white'>04+</span>Helped Companies</p>
               
            </div>
            <a href="https://drive.google.com/file/d/1JV39rF3VF5r-J7T_CErzr_y1yk1iF7o6/view?usp=drive_link">
            <button className='hover:bg-button-color bg-text-color font-sans font-semibold text-lg flex px-4 py-4 rounded-md transition-all ml-10 md:ml-0'>
                <p className='mr-2'>Download CV</p>
                <div className="icon font-bold text-xl">
                <iconify-icon icon="ion:download-outline"></iconify-icon>
                </div>
            </button>
            </a>
        </div>

    </div>
  </div>
  )
}
