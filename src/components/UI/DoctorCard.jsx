import React from "react";

const DoctorProfile = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-8 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-12">
      <div className="w-full lg:w-1/3 ">
        <img
          src="/images/Doctor.svg "
          alt="Доктор"
          className="w-full h-auto rounded-lg shadow-lg lg:max-w-sm"
        />
      </div>

      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl lg:text-4xl font-serif leading-tight mb-4 text-center lg:text-left">
          Дьяконова Вилена Викторовна
        </h1>
        <div className="mb-4">
          <h2 className="text-lg lg:text-xl font-semibold mb-2">Education</h2>
          <ul className="list-disc ml-5 text-sm lg:text-base">
            <li>BS in Physiology and Chemistry, University of Arizona</li>
            <li>DDS, University of Colorado School of Dental Medicine</li>
            <li>Fellow Academy of General Dentistry</li>
            <li>
              Residency in Advanced Education in General Dentistry, USAF Scott
              AFB, IL
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-lg lg:text-xl font-semibold mb-2">
            Why dentistry?
          </h2>
          <p className="text-sm lg:text-base mb-3">
            I’m a dentist because it has always been my desire to help people in
            a healthcare environment. Growing up in my dad’s and uncle’s dental
            office, I learned early on that dentistry was going to be my path. I
            love the relationships we build with our patients and our ability to
            help them live healthier, better lives.
          </p>
          <blockquote className="pl-4 border-l-4 border-teal-500 italic text-gray-700 text-sm lg:text-base">
            “Dr Brendan was very nice and thorough for my check up. I definitely
            will be recommending Dr Brendan to all of my families & friends.”
          </blockquote>
        </div>
        <div>
          <h2 className="text-lg lg:text-xl font-semibold mb-2">
            Another friendly Information
          </h2>
          <p className="text-sm lg:text-base">
            As a quadrilingual, Brendan speaks four languages: English,
            Mandarin, Cantonese & Teochew, which enables him to fluently
            interact with patients in their preferred mother tongue if
            necessary. When Brendan is not working hard at the clinic, he loves
            to keep active by playing sports, travelling the world and spending
            time with friends & family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
