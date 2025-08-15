import Header from "../components/Header";
import NavDropdown from "../components/NavDropdown";
import Footer from "../components/Footer";
import { useState } from "react";


const Contact = () => {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })

    const [errors, setErros] = useState()

   const handleOnChange = (e) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm, [name]: value
        }))
   }

   const validationCheck = () => {
        const newErros = {};

        if (!form.firstname.trim()) newErros.firstname = "Firstname is required";
        if (!form.lastname.trim()) newErros.lastname = "Lastname is required";
        if (!form.email.trim()) newErros.email = "Email is required"
        if (!form.phone.trim()) newErros.phone = "Phone number is required"
        if (!form.message.trim()) newErros.message = "Message is required"

        return newErros;
   }

    const handleSubmit = (e) => {
        e.preventDefault();

       

        const validate = validationCheck();
        setErros(validate);

        if (Object.keys(validate).length === 0) {
            console.log("Form Submitted", form)

            setForm({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: ""
            })
        } else {
            console.log("Error Submitting form", form)
        }  
    }
    

    return (
        <main className='relative z-20 overflow-x-hidden'>
            <section>
                <Header />
                <NavDropdown />
            </section>

            <section className="px-5 mt-6 sm:px-20 md:px-10 lg:px-46 sm:mt-15">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[900px]">
                    <div className="">
                        <p className="text-[30px] font-[600]">Get in touch</p>
                        <p >We're here to help. Chat to our friendly team 24/7 and get set up and ready to join in just 5 minutes</p>
                        
                        <div className="mt-4">
                            <p className="text-[15px]"><span className="font-bold">Email:</span> christianiheacho1@outlook.com</p>
                            <p className="text-[15px] pt-3"><span className="font-bold">Phone:</span> +353899765434</p>
                            <p className="text-[15px] pt-3"><span className="font-bold">Address:</span> 123 Mega st, Best City</p>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center gap-3 mt-2">
                            <p className="font-[700] text-[18px]">Send a Message</p>
                        </div>

                       <form className="w-full mt-3" >
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-7">
                                    <div className="flex flex-col w-full">
                                        <label>First name</label>
                                        <input 
                                            type="text"
                                            className="outline-none border border-gray-300 rounded-md p-3" 
                                            placeholder="Firstname"
                                            name="firstname"
                                            value={form.firstname}
                                            onChange={handleOnChange}
                                        />
                                        {errors && <span className="text-red-400 text-[13px]">{errors.firstname}</span>}
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label>Last name</label>
                                        <input 
                                            type="text"
                                            className="outline-none border border-gray-300 rounded-md p-3" 
                                            placeholder="Lastname"
                                            name="lastname"
                                            value={form.lastname}
                                            onChange={handleOnChange}
                                        />
                                         {errors && <span className="text-red-400 text-[13px]">{errors.lastname}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col w-full mt-6">
                                    <label>Email</label>
                                    <input 
                                        type="email"
                                        className="outline-none border border-gray-300 rounded-md p-3" 
                                        placeholder="Email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleOnChange}
                                    />
                                     {errors && <span className="text-red-400 text-[13px]">{errors.email}</span>}
                                </div>
                                <div className="flex flex-col w-full mt-6">
                                    <label>Phone number</label>
                                    <input 
                                        type="text"
                                        className="outline-none border border-gray-300 rounded-md p-3" 
                                        placeholder="Phone"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleOnChange}
                                    />
                                     {errors && <span className="text-red-400 text-[13px]">{errors.phone}</span>}
                                </div>
                                
                                <div className="flex flex-col w-full mt-6">
                                    <label>Message</label>
                                    <textarea 
                                        type="text"
                                        className="outline-none border border-gray-300 rounded-md p-3" 
                                        placeholder="Message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleOnChange}
                                    ></textarea>
                                     {errors && <span className="text-red-400 text-[13px]">{errors.message}</span>}
                                </div>

                                <div onClick={handleSubmit} className="cursor-pointer w-full text-center mt-3 text-[#fff] py-2 mb-20 rounded-md bg-[#06c168]">Send Message</div>
                            </div>
                       </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Contact;

		
			
