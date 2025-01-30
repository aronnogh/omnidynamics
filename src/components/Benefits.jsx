import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Offered Services from Omnidynamics"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-[#1C1C1D] via-[#131313] to-[#0C0C0C] hover:bg-gradient-to-b hover:from-[#2C2C2D] hover:via-[#1C1C1D] hover:to-[#131313] transition-all duration-300 md:max-w-[24rem] group"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] rounded-[2.4rem] bg-n-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent pointer-events-none" />
                
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="absolute inset-0.5 bg-n-8 opacity-0 group-hover:opacity-10 transition-opacity">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;