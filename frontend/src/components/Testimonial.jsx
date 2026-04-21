import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="bg-[#E4EEF84F] flex flex-col items-center justify-center px-6 md:px-16 lg:px-18 pb-15 pt-20">
      <Title
        title="What Our Guests Say"
        subtitle={
            <>
              Discover why discerning travelers choose QuickStay for their luxury 
              <br />
              accommodations around the world.
            </>
          }
        align="center"
        font="playfair"
      />
    {/* testimonials cards */}
    <div className="flex flex-wrap justify-center items-center gap-5 my-15">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
  );
};

export default Testimonial;
