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

  return (
    <div className="w-full my-auto md:px-6 md:w-1/4 shadow-lg py-6 pb-0 md:pb-[10vh] text-white/90">
      <div className="flex flex-col items-center rounded-2xl border border-neutral-700 mb-2 mt-8 bg-neutral-800/50">
        {/* Avatar & Name */}
        <div className="flex w-full flex-row md:flex-col items-center ml-[20%] md:ml-0 pt-6 mx-auto gap-6 md:gap-0">
          <div className="w-[120px] h-[120px] [perspective:1000px]">
  <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
    
    {/* Front Image */}
    <div className="absolute w-full h-full [backface-visibility:hidden]">
      <img
        src="me.jpg"
        alt="Front"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>

    {/* Back Image */}
    <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <img
        src="my-avatar.png"
        alt="Back"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>

  </div>
</div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mt-2">Aayush Jain</h2>
            <p className="text-xs mt-3 px-3 py-1 border rounded-lg inline-block">
             Web Developer
            </p>
          </div>
        </div>

        {/* Contact Info - Always visible on md and above */}
        {(active || window.innerWidth >= 768) && (
          <div className="w-full px-[10%] max-w-md mx-auto">
            <div className="my-4 h-px bg-yellow-400" />

            {[
              {
                icon: mailOutline,
                label: "EMAIL",
                value: "aayushjain@gmail.com",
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
                value: "Delhi,India",
              },
            ].map((item, index) => (
              <div key={index} className="flex group items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-neutral-700 rounded-lg 
                transition-all duration-300 group-hover:shadow-[0_0_12px_#facc15] group-hover:scale-110 cursor-pointer">
  <IonIcon 
    icon={item.icon} 
    className="text-yellow-400 text-xl transition-all duration-300" 
  />
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
            <div className="my-6 h-[2px] bg-yellow-400" />
          </div>
        )}

       

        {/* Toggle only on small screens */}
        <div className="md:hidden w-full px-[7%]">
          {active ? (
            <div
              className="flex items-center  justify-center w-full my-6 h-px bg-yellow-400 cursor-pointer"
              onClick={() => setActive(false)}
            >
              <IonIcon icon={chevronUp} className="text-yellow-400 text-xl" />
            </div>
          ) : (
            <div
              className="flex items-center justify-center w-full my-6 h-px bg-yellow-400 cursor-pointer"
              onClick={() => setActive(true)}
            >
              <IonIcon icon={chevronDown} className="text-yellow-400 text-xl" />
            </div>
          )}
        </div>
         <div className="my-4 h-2 z-50 bg-yellow-400" />
      </div>
    </div>
  );
}
