"use client";


export default function JoinUsSection() {
    return (
        <section className="w-full py-24 px-6 bg-white">
            <div className="
        max-w-6xl mx-auto 
        bg-[#e3ef78] 
        rounded-[40px] 
        py-20 
        px-6 
        text-center
      ">

                {/* TOP LABEL */}
                <div className="mx-auto w-fit px-8 py-2 border border-[#d0dd6d] rounded-full mb-8">
                    <p className="text-gray-700 text-sm font-medium tracking-wide">
                        #Let's build it together
                    </p>
                </div>

                {/* MAIN TITLE */}
                <h2 className="text-3xl md:text-5xl font-regular  text-left md:text-center tracking-tight text-gray-900 leading-tight mb-6">
                    Join with us to build this<br />project
                </h2>

                {/* DESCRIPTION */}
                <p className="max-w-2xl mx-auto text-gray-800 text-left md:text-center text-sm md:text-base font-light leading-relaxed mb-12">
                    Be a part of building this platform with us and gain the proper industry
                    experience that will be a milestone for you.
                </p>

                {/* BUTTON */}
                <a href="#curiosity" className="
          bg-[#162f16] 
          text-white 
          px-10 
          py-3 
         rounded-md
          text-sm 
          font-regular 
         
          gap-2 
          mx-auto
          hover:bg-[#0f2310]
          transition
          max-w-4xl
        ">
                    JOIN THE CURIOSITY

                </a>

            </div>
        </section>
    );
}
