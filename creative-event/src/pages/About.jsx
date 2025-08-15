import Header from "../components/Header";
import NavDropdown from "../components/NavDropdown";
import techy from "../assets/images/techy.jpg"
import { BsLightningCharge, GoLock } from "../assets/icons/icons"
import { MilestoneCard, MilestoneDateCard} from "../components/AboutMilestoneCard";
import { teams } from "../util/data";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const About = () => {
    return (
        <main className='relative z-20 overflow-x-hidden'>
            <section>
                <Header />
                <NavDropdown />
            </section>

            <section className="flex justify-center mt-20">
                <div className="w-full max-w-[320px] sm:w-full sm:max-w-[1075px] md:max-w-[750px] lg:max-w-[1075px] bg-[#06c168] pt-5 pb-12 rounded-[20px]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[30px] text-[#fff] font-[500] sm:text-[60px]">Our Creative Journey</h2>
                        <p className="text-[17px] text-center text-[#fff] sm:text-[22px]">Empowering creatives through immersive experiences since 2018</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="grid sm:grid-cols-3 justify-center items-center gap-3 mt-5 sm:gap-10 sm:mt-8">
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

            <section className="flex flex-wrap max-w-[320px] gap-10 mx-auto w-full mt-20 sm:flex sm:flex-nowrap sm:justify-between sm:max-w-[1075px] md:max-w-[750px] lg:max-w-[1075px] md:flex-wrap lg:flex-nowrap ">
                <div className="w-full">
                    <img src={techy} alt="img" className=" h-auto sm:h-auto md:h-100 lg:h-auto rounded-[20px] w-full" />
                </div>
                <div className="w-full">
                    <p className="text-3xl font-bold mb-6">From Passion to Platform</p>
                    <p className="text-lg">What began as a small meetup of local designers in a coffee shop has blossomed into the premier creative network connecting artists, designers, and innovators across the globe.</p>
                    <div className="flex justify-between mt-8 gap-4 w-full">
                        <div className="flex justify-center  bg-[#EBFFF6] w-14 h-20 rounded-[40px]">
                            <BsLightningCharge size={28} color="#06c168" className="mt-3" />
                        </div>
                        <div className="w-full">
                            <p className="text-2xl font-bold mb-6">Innovation Through Collaboration</p>
                            <p className="text-lg">What began as a small meetup of local designers in a coffee shop has blossomed into the premier creative network connecting artists, designers, and innovators across the globe.</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8 gap-4 w-full">
                        <div className="flex justify-center  bg-[#eeeee4] w-14 h-20 rounded-[40px]">
                            <GoLock size={28} color="#06c168" className="mt-3" />
                        </div>
                        <div className="w-full">
                            <p className="text-2xl font-bold mb-6">Safe Creative Spaces</p>
                            <p className="text-lg">We're committed to fostering inclusive environments where all creatives feel welcome to express themselves.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mt-14 mx-auto max-w-[320px] sm:w-full sm:max-w-[1075px] md:max-w-[750px] lg:max-w-[1075px] h-[1100px]">
                <p className="text-3xl font-bold mb-6 text-center">Our Milestones</p>
                <div className=" flex-nowrap sm:flex justify-center items-center gap-6">
                    <div className="w-full ">
                        <MilestoneCard title="Founded" description="Launched with our first typography workshop series" className="mb-5 sm:mb-70" />
                        <MilestoneCard title="Virtual Shift" description="Pivoted to online events during the pandemic" className="mb-5 sm:mb-73" />
                        <MilestoneCard title="Award Winning" description="Recognized as Top Creative Platform by Design Weekly" className="mb-70" />
                    </div>

                    <div className="hidden sm:block sm:h-250 md:h-270 lg:h-250 sm:mt-[-280px] w-px bg-[#B5B5B5] rounded-md"></div>

                    <div className="mt-[-260px] sm:mt-[20px] w-full h-auto">
                        <MilestoneCard title="First Exhibition" description="Curated 'Digital Frontiers' featuring 30 artists" className="mb-5 sm:mb-70" />
                        <MilestoneCard title="Global Reach" description="Expanded to 5 countries with hybrid events" className="sm:mb-79" />
                    </div>
                </div>

                <MilestoneDateCard date="2021" className="top-15 sm:top-25 md:top-34 lg:top-25" />
                <MilestoneDateCard date="2022" className="top-63 sm:top-80 md:top-88 lg:top-80" />
                <MilestoneDateCard date="2023" className="top-110 sm:top-132 md:top-144 lg:top-132" />
                <MilestoneDateCard date="2024" className="top-156 sm:top-185 md:top-200 lg:top-185" />
                <MilestoneDateCard date="2025" className="top-203 sm:top-239 md:top-260 lg:top-239" />
            </section>

            <section className="w-full mt-[-50px] sm:mt-10 md:mt-25 lg:mt-10 mb-20">
                <p className="text-3xl font-bold  text-center">Meet The Team</p>
                <div className="w-full max-w-[320px] sm:max-w-[1075px] md:max-w-[750px] lg:max-w-[1075px] grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-10">
                    {teams.map((item) => {
                        return (
                            <div className="w-full h-auto pb-6 hover:scale-105 transition-transform duration-200  shadow-md rounded-bl-[15px] rounded-br-[15px]">
                                <div className="relative w-full">
                                    <img src={item.image} alt="image" className="w-full rounded-tl-[15px] rounded-tr-[15px] brightness-70" />
                                    <div className="absolute bottom-0 pb-4 px-3">
                                        <p className="text-[#fff] text-[22px] font-bold">{item.name}</p>
                                        <p className="text-[#fff] text-[17px]">{item.title}</p>
                                    </div>
                                </div>
                                <p className="px-3 py-5">
                                    {item.description}
                                </p>
                                
                                <div className="flex gap-5 px-4">
                                    {item.socials.map((social) => {
                                        const Icon = social.icon;
                                        const link = social.link;

                                        return (
                                           <Link to={link} target="_blank">
                                                 <Icon size={22} color="#06c168" />
                                           </Link>
                                        )
                                    })}
                                </div>
                            </div>  
                        )
                    })}
                    
                   
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default About;

		
			
