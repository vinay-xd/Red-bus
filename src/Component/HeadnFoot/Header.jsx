import React from 'react'
import * as Images from '../../assets/Images/Image'

function Header() {
  return (
    <>
    <header className='w-[100%]'>
        <div className='Navbar w-[1280px]'>
            <div className='logoCon'>
                <div>
                        <img className='fil' src={Images.redbusLogo} alt="" />
                </div>
                <div>

                </div>
            </div>
            <div></div>
        </div>
    </header>
    </>
  )
}

export default Header