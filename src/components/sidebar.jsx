import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  mailOutline,
  phonePortraitOutline,
  locationOutline,
  chevronDown,
  chevronUp,
} from "ionicons/icons";

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const contactItems = [
    {
      icon: mailOutline,
      label: "EMAIL",
      value: "aayushjain1290@gmail.com",
      link: "mailto:aayushjain1290@gmail.com",
    },
    {
      icon: phonePortraitOutline,
      label: "PHONE",
      value: "+91 8696213068",
      link: "tel:+918696213068",
    },
    {
      icon: locationOutline,
      label: "LOCATION",
      value: "Delhi, India",
    },
  ];

  return (
    <div className="w-full md:w-1/4 md:px-6 my-auto py-6 text-white/90">
      
      <div className="flex flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-800/50 px-4">

        {/* Avatar + Name */}
        <div className="flex flex-col md:flex-row  items-center justify-center w-full pt-6 gap-4 md:gap-2">

          {/* Avatar */}
          <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <img src="/me.webp" alt="Aayush Jain" className="w-full h-full object-cover rounded-3xl" />
              </div>

              <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <img src="/my-avatar.webp" alt="Avatar" className="w-full h-full object-cover rounded-3xl" />
              </div>

            </div>
          </div>

          {/* Name */}
          <div className="text-center md:text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              Aayush Jain
            </h2>
            <p className="text-xs mt-2 px-3 py-1 border border-neutral-600 rounded-lg inline-block">
              Web Developer
            </p>
          </div>

        </div>

        {/* Contact Info */}
        <div className={`w-full max-w-md mx-auto px-2 sm:px-4 transition-all duration-300 
          ${active ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 md:max-h-full md:opacity-100 overflow-hidden"}`}>

          <div className="my-4 h-px bg-yellow-400" />

          {contactItems.map((item, index) => (
            <div key={index} className="flex items-center mb-4 group">
              
              <div className="flex items-center justify-center w-8 h-8 bg-neutral-700 rounded-lg 
              transition-all duration-300 group-hover:shadow-[0_0_12px_#facc15] group-hover:scale-110">
                <IonIcon icon={item.icon} className="text-yellow-400 text-xl" />
              </div>

              <div className="ml-4 text-sm">
                <p className="text-neutral-400 text-xs">{item.label}</p>
                {item.link ? (
                  <a href={item.link} className="hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>

            </div>
          ))}

          <div className="my-4 h-px bg-yellow-400" />
        </div>

        {/* Toggle (only mobile) */}
        <div className="md:hidden w-full flex justify-center my-4">
          <button onClick={() => setActive(!active)}>
            <IonIcon
              icon={active ? chevronUp : chevronDown}
              className="text-yellow-400 text-xl"
            />
          </button>
        </div>

      </div>
    </div>
  );
}