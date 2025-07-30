import Header from "../components/Header";
import NavDropdown from "../components/NavDropdown";
import techy from "../assets/images/techy.jpg"
import { BsLightningCharge, GoLock } from "../assets/icons/icons"


const About = () => {
    return (
        <main className='relative z-20 overflow-x-hidden'>
            <section>
                <Header />
                <NavDropdown />
            </section>

            <section className="flex justify-center mt-20">
                <div className="w-9/12 bg-[#06c168] py-10 rounded-[20px]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[60px] text-[#fff] font-[500]">Our Creative Journey</h2>
                        <p className="text-[22px] text-[#fff]">Empowering creatives through immersive experiences since 2018</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-3 justify-center items-center gap-10 mt-10">
                            <div className="flex flex-col rounded-md justify-center items-center w-full h-10 bg-[#fff] px-10 py-12">
                                <p className="font-[700] text-[#06c168] text-[30px]">200+</p>
                                <p className="text-[#06c168]">Events Hosted</p>

                            </div>
                            <div className="flex flex-col rounded-md justify-center items-center w-full h-10 bg-[#fff] px-10 py-12">
                                <p className="font-[700] text-[#06c168] text-[30px]">15+</p>
                                <p className="text-[#06c168]">Participants</p>
                            </div>
                            <div className="flex flex-col rounded-md justify-center items-center w-full h-10 bg-[#fff] px-10 py-12">
                                <p className="font-[700] text-[#06c168] text-[30px]">80+</p>
                                <p className="text-[#06c168]">Industry Partners</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-between gap-10 mx-auto w-9/12 mt-20">
                <div className="w-full">
                    <img src={techy} alt="img" className="rounded-[20px]" />
                </div>
                <div className="w-full">
                    <p className="text-3xl font-bold mb-6">From Passion to Platform</p>
                    <p className="text-lg">What began as a small meetup of local designers in a coffee shop has blossomed into the premier creative network connecting artists, designers, and innovators across the globe.</p>
                    <div className="flex justify-between mt-8 gap-4 w-full">
                        <div className="flex justify-center  bg-[#EBFFF6] w-18 h-30 rounded-[40px]">
                            <BsLightningCharge size={28} color="#06c168" className="mt-3" />
                        </div>
                        <div className="w-full">
                            <p className="text-2xl font-bold mb-6">Innovation Through Collaboration</p>
                            <p className="text-lg">What began as a small meetup of local designers in a coffee shop has blossomed into the premier creative network connecting artists, designers, and innovators across the globe.</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8 gap-4 w-full">
                        <div className="flex justify-center  bg-[#FAFAFA] w-18 h-30 rounded-[40px]">
                            <GoLock size={28} color="#06c168" className="mt-3" />
                        </div>
                        <div className="w-full">
                            <p className="text-2xl font-bold mb-6">Safe Creative Spaces</p>
                            <p className="text-lg">We're committed to fostering inclusive environments where all creatives feel welcome to express themselves.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-14 mx-auto w-9/12">
                <p className="text-3xl font-bold mb-6 text-center">Our Milestones</p>
                <div className="flex justify-center items-center gap-6">
                    <div className="w-full">
                        <div className="shadow-md rounded-[14px] px-6 py-8 mb-70">
                            <p className="text-2xl font-bold mb-6">Our Milestones</p>
                            <p>Launched with our first typography workshop series</p>
                        </div>

                        <div className="shadow-md rounded-[14px] px-6 py-8 mb-70">
                            <p className="text-2xl font-bold mb-6">Virtual Shift</p>
                            <p>Pivoted to online events during the pandemic</p>
                        </div>

                        <div className="shadow-md rounded-[14px] px-6 py-8">
                            <p className="text-2xl font-bold mb-6">Award Winning</p>
                            <p>Recognized as Top Creative Platform by Design Weekly</p>
                        </div>
                    </div>

                    <div className="h-250 w-px bg-[#B5B5B5] rounded-md"></div>

                    <div className="w-full h-250">
                        <div className="shadow-md rounded-[14px] px-6 py-8 mt-55">
                            <p className="text-2xl font-bold mb-6">Our Milestones</p>
                            <p>Launched with our first typography workshop series</p>
                        </div>

                        <div className="shadow-md rounded-[14px] px-6 py-8 mt-69">
                            <p className="text-2xl font-bold mb-6">Our Milestones</p>
                            <p>Launched with our first typography workshop series</p>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 top-25 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2020
                </div>
                <div className="absolute inset-0 top-80 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2021
                </div>
                <div className="absolute inset-0 top-80 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2022
                </div>
                <div className="absolute inset-0 top-132 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2023
                </div>
                <div className="absolute inset-0 top-185 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2024
                </div>
                <div className="absolute inset-0 top-239 mx-auto flex justify-center items-center w-18 h-18 rounded-[100px] bg-purple-600 text-[18px] text-[#fff] font-bold">
                    2025
                </div>
            </section>
        </main>
    )
}

export default About;
			
