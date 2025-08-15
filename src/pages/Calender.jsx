import React, { useState } from 'react'
import Header from '../components/Header'
import NavDropdown from '../components/NavDropdown'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enIE from "date-fns/locale/en-IE";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Footer from '../components/Footer';
import { cardMenuItems, subMenuicons, events } from '../util/data'
import { useEvent } from '../context/EventContext'
import { Link } from 'react-router-dom';
import EventsInfoModal from '../components/EventsInfoModal';







const locales = { "en-IE": enIE };

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: (date) => startOfWeek(date, { weekStartsOn: 1 }), // Monday
    getDay,
    locales,
});

const events_ = [
    { title: "Board Session", start: new Date(2025, 7, 20, 13, 0), end: new Date(2025, 7, 20, 14, 0) },
];

const Calender = () => {
    const [activeIndex_, setActiveIndex_] = useState(0)
    const [modalActiveIndex, setModalActiveIndex] = useState(0);
    const [modal, setModal] = useState(false)


    const { activeIndex, handleCategory } = useEvent()


    const handleModal = (index) => {
        setModalActiveIndex(index)
        setModal((prev) => !prev)
    }


    return (
        <>
            <main className='relative z-20 overflow-x-hidden'>
                <section>
                    <Header />
                    <NavDropdown />

                    <main className='px-5 sm:flex-grow container mx-auto'>
                        <section>
                            <h1 className='text-[#06c168] text-[23px] font-bold text-center pt-10  sm:text-[38px]'>Creative Events & Workshops</h1>
                            <div className='grid sm:flex justify-between items-center mt-10 sm:mt-5'>
                                <div className=''>
                                    <ul className='flex gap-3 sm:gap-6'>
                                        {cardMenuItems.map((item) => {
                                            return (
                                                <li key={item.id}
                                                    onClick={() => handleCategory(item.id, item.value)}
                                                    className={`cursor-pointer ${activeIndex === item.id ?
                                                        "flex items-center bg-[#06c168] text-[#fff] pt-2 pb-2 px-1 rounded-[100px] sm:bg-[#06c168] text-[#fff] px-3 rounded-[100px]" :
                                                        "bg-gray-100 text-[#000] pt-2 pb-2 px-3 rounded-[100px] hover:bg-gray-200"}`}
                                                >
                                                    {item.value}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className='flex mt-3 gap-4 sm:flex sm:gap-6'>
                                    {subMenuicons.map((icon, index) => {
                                        const Iconcomponent = icon.icon;
                                        return (
                                            <Link to={icon.link}>
                                                <div
                                                    className={`flex items-center gap-1 cursor-pointer ${activeIndex_ === index ? "bg-[#06c168] text-[#fff] pt-2 pb-2 px-5 rounded-[10px]" : "bg-gray-100 text-[#000] pt-2 pb-2 px-5 rounded-[10px] hover:bg-gray-200"}`}
                                                    key={index}
                                                    onClick={() => setActiveIndex_(index)}
                                                >
                                                    <Iconcomponent size={23} />
                                                    <p>{icon.label}</p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>

                        <section className='w-full'>
                            <h1 className='text-[#000] text-[23px] font-bold pt-5 sm:text-[28px]'>Featured Events</h1>
                            <div className='overflow-x-auto scrollbar-thin mt-3 whitespace-nowrap'>
                                {events.map((item, index) => {
                                    const isLast = index === events.length - 1;


                                    return (
                                        <div key={index}
                                            className={`cursor-pointer inline-block transition-[background-size] duration-500 relative w-full max-w-[330px] h-55 px-4 bg-[#888] rounded-[16px] bg-cover bg-center ${!isLast ? 'mr-4' : ''
                                                }`}
                                            style={{
                                                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.12)), url(${item.image})`,
                                            }}
                                            onClick={() => handleModal(index)}
                                        >
                                            <div className='absolute bottom-10'>
                                                <h1 className='text-white text-[19px] font-bold'>{item.sub_title}</h1>
                                                <span className='text-white text-[15px] font-medium'>{item.time}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        <div className='my-10' style={{ height: 600 }}>
                            <Calendar
                                localizer={localizer}
                                events={events_}
                                startAccessor="start"
                                endAccessor="end"
                                culture="en-IE"
                            />
                        </div>

                    </main>

                </section>

                {modal && modalActiveIndex !== null && (
                    <EventsInfoModal modal={modal} setModal={setModal} items={events[modalActiveIndex]}  />
                )}
                <Footer />
            </main>
        </>
    )
}

export default Calender




