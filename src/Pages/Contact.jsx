import React from "react";
import Container from "../Components/Container";
import Breadcums from "../Components/Breadcums";

const Contact = ({title}) => {
  return (
    <section className="mt-[124px]">
      <Container>
       <Breadcums title={title}/>

        <form action="" className="mt-[125px]">
          <h1 className="font-dm font-bold text-[40px] text-primary   ">
            Fill up a Form
          </h1>
          <div className="w-full lg:w-[780px] mt-[42px] mb-6 ">
            <label
              className="font-dm font-bold text-[16px] text-primary   "
              htmlFor=""
            >
              Name
            </label>
            <input
              className="pt-[10px] pb-4 block w-full border-b-[1px] border-[#F0F0F0] font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary "
              type="text"
              placeholder="Your Name Here"
            />
          </div>

          <div className="w-full lg:w-[780px] mt-[42px] mb-6 ">
            <label
              className="font-dm font-bold text-[16px] text-primary   "
              htmlFor=""
            >
              Email
            </label>
            <input
              className="pt-[10px] pb-4 block w-full border-b-[1px] border-[#F0F0F0] font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary "
              type="text"
              placeholder="Your Name Here"
            />
          </div>

          <div className="w-full lg:w-[780px] mt-[42px] mb-6 ">
            <label
              className="font-dm font-bold text-[16px] text-primary   "
              htmlFor=""
            >
              Message
            </label>
            <input
              className="pt-[10px] pb-[87px] block w-full border-b-[1px] border-[#F0F0F0] font-dm placeholder:font-normal placeholder:text-[14px] placeholder:text-secondary "
              type="text"
              placeholder="Your Message Here"
            />
          </div>

          <button
            className="font-dm font-bold text-[14px] text-white bg-primary py-4 px-[85px] mt-[30px] "
            type="submit"
          >
            Post
          </button>
        </form>

        <iframe className="w-full h-[572px] my-[140px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.01947884385!2d90.41585505008696!3d23.800639663441167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f83f511d3d%3A0xe2192389e17049f0!2sNotun%20Bazar!5e0!3m2!1sen!2sbd!4v1708096374206!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container> 
    </section>
  );
};

export default Contact;
