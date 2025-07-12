import React from 'react'
import Header from '../components/Header'
import NavDropdown from '../components/NavDropdown'

const Home = () => {
  return (
    <main>
        <section>
            <Header />
            <NavDropdown />

            <main className='px-5 sm:px-15'>
                <section>
                    <h1 className='text-[#7B61FF] text-[23px] sm:text-[28px] font-bold text-center pt-10'>Creative Events & Workshops</h1>
                    <div className='flex justify-between mt-10'>
                        <div className=''>LeftSide</div>
                        <div className=''>RightSide</div>
                    </div>
                </section>
            </main>
        </section>
    </main>
  )
}

export default Home