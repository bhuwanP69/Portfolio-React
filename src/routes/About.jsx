export default function About() {
  const imgMy =
    "https://live.staticflickr.com/65535/53420033456_e406327dc5_c.jpg";
  return (
    <div className="about grid justify-center pt-16 " id="about">
      <div className="a-top flex flex-col items-center justify-center text-center ">
        <h2 className="text-4xl font-bold text-black">About Me</h2>
        <p className="text-text-color">Get to know me</p>
      </div>
      <div className="a-bottom mt-10 grid sm:flex justify-between pr-5 pl-20 md:pl-0">
        <div className="a-left mr-[15%] pb-10 pl-10 md:pl-0">
          <img src={imgMy} alt="img" className="w-52 md:w-96 rounded-full " />
        </div>
        <div className="a-right  w-[360px]">
          <p className="mb-5 text-[16px] ">
            Hi! I'm Bhuwan Paudel, a software developer with a passion for
            creating beautiful and functional websites. I have a strong
            foundation in JavaScript, and am currently learning NextJS.
          </p>
          <p className="text-[16px] ">
            Feel free to Contact me if you have any questions or just want to
            chat!
          </p>

          <div className="numbers my-8  flex gap-10 text-sm text-center">
            <p className="w-24 ">
              {" "}
              <span className="block text-2xl font-semibold text-black">
                01+
              </span>{" "}
              Years experience
            </p>
            <p className="w-24">
              {" "}
              <span className="block text-2xl font-semibold text-black">
                5+
              </span>
              Completed Project
            </p>
          </div>
          <a href="https://drive.google.com/file/d/1jpqlsi1fgmByeWj4YBdIlX8em4VXvwr3/view?usp=drive_link">
            <button className="hover:bg-button-color bg-text-color font-sans font-semibold text-lg flex px-4 py-4 rounded-md transition-all ml-10 md:ml-0">
              <p className="mr-2 text-black">Download CV</p>
              <div className="icon font-bold text-xl text-black">
                <iconify-icon icon="ion:download-outline"></iconify-icon>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
