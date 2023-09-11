import React from 'react'

export default function Skills() {
  return (
    <div className="skills" id='skills'>

        <div className="technologies">
            <div className="up">
              <div className="a-top flex flex-col items-center justify-center text-center ">
                <h2 className='text-5xl'>Technologies</h2>
                <p className='text-text-color'>Expert proficiency</p>
                 </div>
             </div>
             <div className="middle">
                <div className="front">
                    <button>
                        <div className="flex">
                            <div className="icon">
                            <iconify-icon icon="uil:brackets-curly"></iconify-icon>
                            </div>
                            <p>Frontend development</p>
                            <i className="fa-solid fa-chevron-down"></i>
                            {/* <i className="fa-solid fa-chevron-up"></i> */}

                        </div>
                        <p>With 4+ years of experience</p>
                    </button>

                </div>
                <div className="back">
                {/* <iconify-icon icon="uil:server-network"></iconify-icon> */}

                </div>

             </div>
        </div>
        {/* qualification */}
        <div className="qualification">
            <div className="up">
                <div className="a-top flex flex-col items-center justify-center text-center ">
                    <h2 className='text-5xl'>Qualification</h2>
                    <p className='text-text-color'>Why you should hire me</p>
                </div>
            </div>
            <div className="down">
                <div className="education">
                <iconify-icon icon="tdesign:education"></iconify-icon>
                <p>Education</p>

                </div>
                <div className="work">
                <iconify-icon icon="pajamas:work"></iconify-icon>
                <p>Work</p>
                </div>
            </div>
        </div>
    </div>
  )
}
