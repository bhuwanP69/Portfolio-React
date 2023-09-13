

export  function Grid() {
  return (
    <div className="grid grid-cols-3 gap-10">
    <div className="grid-1 flex flex-col  justify-center  items-start  bg-grid-color w-64 h-80">
        <div className="wrap pl-10 grid gap-5 ">
        <div className="icon text-text-color text-4xl">
        <iconify-icon icon="uil:web-grid"></iconify-icon>
        </div>
        <h4 className="text-xl w-10 font-semibold ">Website Development</h4>
        <div className="view flex gap-2 item-center text-text-color">
            <p>View More</p>
            <i class="fa-solid fa-arrow-right pt-1"></i>
        </div>
        </div>
        
    </div>
   
</div>
  )
}


export default function Services() {
  return (
    <div className="services h-screen pt-32" id="services">
        <div className="services text-center justify-center">
            <h2 className="text-4xl font-semibold">Services </h2>
            <p className="text-text-color text-sm pt-2">The value I offer You</p>
        </div>
       <Grid/>
    </div>
  )
}
