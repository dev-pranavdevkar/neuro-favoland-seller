import React from 'react'

export default function WorkinTeam() {
  const TeamMembers = [
    {
      img: 'images/team/jeff.png',
      name: 'Jeff Clark ',
      role: 'CEO',
      linkedinLink: 'https://www.linkedin.com/in/jeffreyrclark/',
    },
    {
      img: 'images/team/teamMember2.png',
      name: 'Ioana ',
      role: 'Sales Lead',
      linkedinLink: 'https://www.linkedin.com/in/ioanabirleanu/ ',
    },
    {
      img: 'images/team/teamMember3.png',
      name: 'Grisilda Hoxha',
      role: 'Social Media Manager',
      linkedinLink: 'https://www.linkedin.com/in/grisildahoxha/',
    },
    {
      img: '../images/team/teamMember4.png',
      name: 'Ken',
      role: 'Sustainability Advisor',
      linkedinLink: 'https://www.linkedin.com/in/circulareconomy/',
    },
    {
      img: 'images/team/teamMember5.png',
      name: 'Tim Smith',
      role: 'Accountant Advisor',
      linkedinLink: 'https://www.linkedin.com/in/timsmith20/',
    },
    {
      img: '../images/team/teamMember6.png',
      name: 'Marius Adomnica',
      role: 'Legal Advisor',
      linkedinLink: 'https://www.linkedin.com/in/mariusadomnica/ ',
    },
    {
      img: '../images/team/teamMember7.png',
      name: 'Michael Silver',
      role: 'Business',
      linkedinLink: 'https://www.linkedin.com/in/michael-silver-b29b774/ ',
    },
    {
      img: 'images/team/teamMember8.png',
      name: 'Jeff Felten',
      role: 'Startup',
      linkedinLink: 'https://www.linkedin.com/in/jeff-felten/',
    },
    {
      img: '../images/team/teamMember9.png',
      name: 'Vic Devdas',
      role: 'Technology',
      linkedinLink: 'https://www.linkedin.com/in/vdevdas/',
    },
    {
      img: '../images/team/userProfile.png',
      name: 'Steven Schnittger',
      role: 'Science, Estee Lauder',
      linkedinLink: 'https://www.linkedin.com/in/steven-schnittger-042520/',
    },
    {
      img: 'images/team/teamMember11.png',
      name: 'Nicky Shapiro',
      role: 'Beauty Sales, L Oreal',
      linkedinLink: 'https://www.linkedin.com/in/nicky-shapiro/',
    },
    {
      img: 'images/team/rajat.jpg',
      name: 'Rajat',
      role: 'Developer',
      linkedinLink: 'https://www.linkedin.com/',
    },
    {
      img: 'images/team/Vedant.jpg',
      name: 'Vedant',
      role: 'Developer',
      linkedinLink: 'https://www.linkedin.com/',
    },
    {
      img: 'images/team/teamMember13.png',
      name: 'Vishal Konde ',
      role: 'UI/UX Designer',
      linkedinLink: 'https://www.linkedin.com/in/vishal-konde-a3b4b662/',
    },
    {
      img: 'images/team/teamMember14.png',
      name: 'Pranav Devkar ',
      role: 'Frontend Developer',
      linkedinLink: 'https://www.linkedin.com/in/pd1311/',
    },
  ];
  return (
    <div className='' style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className='text-center' >
        <div className='text-center flex flex-col' style={{ justifyContent: 'center' }} >

          <h1 className="text-center heading-line">Meet the people who are working hard to make it success.</h1>
          <hr className='hr' />
        </div>

      </div>
      <div className=' mb-10  ' style={{ minWidth: '978px' }}>
        <div className='grid grid-cols-4 gap-5 gap-x-20'>
          {TeamMembers?.map((item) => (

            <div key={item.name}>
              <div className='teamProfile'>
                <img src={item.img} alt="" />
              </div>
              <div className='box pl-16 pr-5'>
                <h1 className='teamName'>{item.name},
                  <hr />
                  <span className='teamProfesstion'>{item.role}</span> </h1>

                <div className='flex flex-row items-center mb-3'>
                  <a href={item.linkedinLink} target='blank'>

                    <img className='mr-2' src='/svg/linkedinColor.png' alt="" />
                  </a>
                </div>
              </div>

            </div>
          ))}
          
          {/* <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember2.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>
                Ioana,
                <hr />
                <span className='teamProfesstion'>Sales Lead</span> </h1>


              <div className='flex flex-row items-center mb-3 '>
                <a href="https://www.linkedin.com/in/ioanabirleanu/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember3.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Grisilda Hoxha,
                <hr />
                <span className='teamProfesstion'>Social Media Manager</span> </h1>

              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/grisildahoxha/" target='blank'>

                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                </a>

              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember4.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Ken,
                <hr />
                <span className='teamProfesstion'>Sustainability Advisor</span> </h1>


              <div className='flex flex-row items-center mb-3'>
                <a href="hhttps://www.linkedin.com/in/circulareconomy/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember5.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Tim Smith,
                <hr />
                <span className='teamProfesstion'>Accountant Advisor</span> </h1>

              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/timsmith20/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember6.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Marius Adomnica,
                <hr />
                <span className='teamProfesstion'>Legal Advisor</span> </h1>
              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/mariusadomnica/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/rajat.jpg" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Rajat,
                <hr />
                <span className='teamProfesstion'>Developer</span> </h1>

              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/jeffreyrclark/">
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div> */}

        </div>
      </div>


      {/* <div className=' mb-10  ' style={{ minWidth: '978px' }}>
        <div className=' grid grid-cols-2 gap-5 gap-x-20'>

          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember7.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Micheal Silver,
                <span className='teamProfesstion'>Business</span> </h1>
              <hr />

              <div className='flex flex-row items-center mb-3'>
                <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                <a href="https://www.linkedin.com/in/michael-silver-b29b774/" target='blank'>https://www.linkedin.com/in/michael-silver-b29b774/</a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember8.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Jeff Felten, <span className='teamProfesstion'>Startup</span> </h1>
              <hr />
              <div className='flex flex-row items-center mb-3'>
                <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                <a href="https://www.linkedin.com/in/jeff-felten/" target='blank'>https://www.linkedin.com/in/jeff-felten/</a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember9.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Vic Devdas, <span className='teamProfesstion'>Social Media Manager</span> </h1>
              <hr />

              <div className='flex flex-row items-center mb-3'>
                <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                <a href="https://www.linkedin.com/in/vdevdas/ " target='blank'>https://www.linkedin.com/in/vdevdas/</a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/UserProfile.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Steven Schnittger, <span className='teamProfesstion'>Science, Estee Lauder</span> </h1>
              <hr />
              <div className='flex flex-row items-center mb-3'>
                <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                <a href="https://www.linkedin.com/in/steven-schnittger-042520/" target='blank'>https://www.linkedin.com/in/steven-schnittger-042520/</a>
              </div>
            </div>

          </div>
          <div style={{ marginLeft: '50%' }}>
            <div className='teamProfile'>
              <img src="/images/team/teamMember11.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Nicky Shapiro, <span className='teamProfesstion'>Beauty Sales, L Oreal</span> </h1>
              <hr />
              <div className='flex flex-row items-center mb-3'>
                <img className='mr-2' src="/svg/linkedinColor.png" alt="" />
                <a href="https://www.linkedin.com/in/nicky-shapiro/" target='blank'>https://www.linkedin.com/in/nicky-shapiro/</a>
              </div>
            </div>

          </div>


        </div>
      </div>


      <div className=' mb-5  ' style={{ minWidth: '978px' }}>
        <div className='grid grid-cols-4 gap-5 gap-x-20'>


        

          <div >
            <div className='teamProfile'>
              <img src="/images/team/Vedant.jpg" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Vedant,
                <hr />
                <span className='teamProfesstion'>Developer</span> </h1>

              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/jeffreyrclark/">
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember13.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Vishal Konde,
                <hr />
                <span className='teamProfesstion'>UI/Ux</span> </h1>

              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/vishal-konde-a3b4b662/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>
          <div >
            <div className='teamProfile'>
              <img src="/images/team/teamMember14.png" alt="" />
            </div>
            <div className='box pl-16 pr-5'>
              <h1 className='teamName'>Pranav Devkar,
                <hr />
                <span className='teamProfesstion'>Frontend Developer</span> </h1>
              <div className='flex flex-row items-center mb-3'>
                <a href="https://www.linkedin.com/in/pd1311/" target='blank'>
                  <img className='mr-2' src="/svg/linkedinColor.png" alt="" />

                </a>
              </div>
            </div>

          </div>


        </div>
      </div> */}
    </div>
  )
}
