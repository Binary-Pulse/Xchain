import { PageHeader } from "@/components/page-header";
import React from "react";
import laptop from "@/public/images/laptop.png"
import Image from "next/image";

export function About() {
  return (
    <div className=" w-full flex justify-center items-center text-center mt-10">
      <svg
        width="23"
        height="298"
        viewBox="0 0 23 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* @ts-ignore */}
        <g>
          <path
            d="M21.1496 286.405V11.6055C21.1496 6.20872 16.7738 1.8694 11.4134 1.8694C6.05311 1.8694 1.67734 6.24516 1.67734 11.6055V286.405C1.67734 291.801 6.05311 296.141 11.4134 296.141C16.7738 296.141 21.1496 291.765 21.1496 286.405Z"
            fill="#1F041A"
          />
          <path
            d="M20.6027 286.405V11.6054C20.6027 6.53681 16.4822 2.45274 11.45 2.45274C6.41785 2.45274 2.29732 6.57328 2.29732 11.6054V286.405C2.29732 291.473 6.41785 295.557 11.45 295.557C16.4822 295.557 20.6027 291.437 20.6027 286.405Z"
            fill="#2A0523"
          />
          <path
            d="M20.0191 286.404V11.6053C20.0191 6.86484 16.1539 2.99957 11.4134 2.99957C6.673 2.99957 2.80774 6.86484 2.80774 11.6053V286.404C2.80774 291.145 6.673 295.01 11.4134 295.01C16.1539 295.01 20.0191 291.181 20.0191 286.404Z"
            fill="#34062C"
          />
          <path
            d="M19.4357 286.405V11.6057C19.4357 7.19341 15.8622 3.58339 11.4135 3.58339C6.96475 3.58339 3.3912 7.15694 3.3912 11.6057V286.405C3.3912 290.817 6.96475 294.427 11.4135 294.427C15.8622 294.427 19.4357 290.853 19.4357 286.405Z"
            fill="#3F0734"
          />
          <path
            d="M18.8889 286.405V11.6055C18.8889 7.485 15.5705 4.1667 11.45 4.1667C7.32949 4.1667 4.01118 7.485 4.01118 11.6055V286.405C4.01118 290.525 7.32949 293.844 11.45 293.844C15.5705 293.844 18.8889 290.525 18.8889 286.405Z"
            fill="#49083D"
          />
          <path
            d="M18.3053 286.405V11.6054C18.3053 7.81309 15.2423 4.71357 11.4134 4.71357C7.58464 4.71357 4.52159 7.77662 4.52159 11.6054V286.405C4.52159 290.197 7.58464 293.296 11.4134 293.296C15.2423 293.296 18.3053 290.233 18.3053 286.405Z"
            fill="#540946"
          />
          <path
            d="M17.7219 286.404V11.6053C17.7219 8.14116 14.9141 5.29689 11.4135 5.29689C7.91285 5.29689 5.10506 8.10469 5.10506 11.6053V286.404C5.10506 289.869 7.91285 292.713 11.4135 292.713C14.9141 292.713 17.7219 289.905 17.7219 286.404Z"
            fill="#5E0B4F"
          />
          <path
            d="M17.1385 286.405V11.6056C17.1385 8.4332 14.5859 5.88065 11.4135 5.88065C8.24105 5.88065 5.68851 8.4332 5.68851 11.6056V286.405C5.68851 289.577 8.24105 292.13 11.4135 292.13C14.5859 292.13 17.1385 289.577 17.1385 286.405Z"
            fill="#690C57"
          />
          <path
            d="M16.5915 286.405V11.6055C16.5915 8.76123 14.2943 6.46393 11.45 6.46393C8.60574 6.46393 6.30846 8.76123 6.30846 11.6055V286.405C6.30846 289.249 8.60574 291.546 11.45 291.546C14.2943 291.546 16.5915 289.249 16.5915 286.405Z"
            fill="#730D60"
          />
          <path
            d="M16.4093 286.405V11.6054C16.4093 8.83407 14.1849 6.6097 11.4136 6.6097C8.64223 6.6097 6.41788 8.83407 6.41788 11.6054V286.405C6.41788 289.176 8.64223 291.4 11.4136 291.4C14.1849 291.4 16.4093 289.176 16.4093 286.405Z"
            fill="#7D0E69"
          />
          <path
            d="M16.2633 286.404V11.6052C16.2633 8.94328 14.1118 6.75538 11.4134 6.75538C8.71503 6.75538 6.56361 8.90681 6.56361 11.6052V286.404C6.56361 289.066 8.71503 291.254 11.4134 291.254C14.1118 291.254 16.2633 289.103 16.2633 286.404Z"
            fill="#880F71"
          />
          <path
            d="M16.1174 286.405V11.6055C16.1174 9.0165 14.0025 6.90154 11.4135 6.90154C8.82447 6.90154 6.70952 9.0165 6.70952 11.6055V286.405C6.70952 288.994 8.82447 291.109 11.4135 291.109C14.0025 291.109 16.1174 288.994 16.1174 286.405Z"
            fill="#92117A"
          />
          <path
            d="M15.9716 286.404V11.6054C15.9716 9.08929 13.9296 7.08373 11.45 7.08373C8.97035 7.08373 6.92831 9.12576 6.92831 11.6054V286.404C6.92831 288.921 8.97035 290.926 11.45 290.926C13.9296 290.926 15.9716 288.884 15.9716 286.404Z"
            fill="#9D1283"
          />
          <path
            d="M15.7892 286.405V11.6057C15.7892 9.19897 13.8201 7.22989 11.4135 7.22989C9.00678 7.22989 7.03769 9.19897 7.03769 11.6057V286.405C7.03769 288.811 9.00678 290.781 11.4135 290.781C13.8201 290.781 15.7892 288.811 15.7892 286.405Z"
            fill="#A7138C"
          />
          <path
            d="M15.6435 286.405V11.6055C15.6435 9.27176 13.7473 7.37558 11.4135 7.37558C9.07977 7.37558 7.18359 9.27176 7.18359 11.6055V286.405C7.18359 288.738 9.07977 290.635 11.4135 290.635C13.7473 290.635 15.6435 288.738 15.6435 286.405Z"
            fill="#B21494"
          />
          <path
            d="M15.4976 286.404V11.6053C15.4976 9.34449 13.6743 7.55772 11.45 7.55772C9.22562 7.55772 7.40237 9.38096 7.40237 11.6053V286.404C7.40237 288.665 9.22562 290.452 11.45 290.452C13.6743 290.452 15.4976 288.629 15.4976 286.404Z"
            fill="#BC159D"
          />
          <path
            d="M15.3152 286.405V11.6056C15.3152 9.4542 13.5649 7.7039 11.4135 7.7039C9.26206 7.7039 7.51175 9.4542 7.51175 11.6056V286.405C7.51175 288.556 9.26206 290.307 11.4135 290.307C13.5649 290.307 15.3152 288.556 15.3152 286.405Z"
            fill="#C716A6"
          />
          <path
            d="M13.2003 286.404V11.6054C13.2003 10.6208 12.3981 9.81858 11.4135 9.81858C10.429 9.81858 9.62677 10.6208 9.62677 11.6054V286.404C9.62677 287.389 10.429 288.191 11.4135 288.191C12.3981 288.191 13.2003 287.389 13.2003 286.404Z"
            fill="#EF6FD8"
          />
          <path
            d="M12.9815 286.405V11.6056C12.9815 10.7304 12.2887 10.0376 11.4135 10.0376C10.5384 10.0376 9.84554 10.7304 9.84554 11.6056V286.405C9.84554 287.28 10.5384 287.973 11.4135 287.973C12.2887 287.973 12.9815 287.28 12.9815 286.405Z"
            fill="#F17ADB"
          />
          <path
            d="M12.7627 286.404V11.6053C12.7627 10.8396 12.1428 10.2561 11.4135 10.2561C10.6842 10.2561 10.0643 10.876 10.0643 11.6053V286.404C10.0643 287.17 10.6842 287.754 11.4135 287.754C12.1428 287.754 12.7627 287.134 12.7627 286.404Z"
            fill="#F284DE"
          />
          <path
            d="M12.5803 286.405V11.6056C12.5803 10.9857 12.0698 10.4752 11.4499 10.4752C10.83 10.4752 10.3195 10.9857 10.3195 11.6056V286.405C10.3195 287.025 10.83 287.535 11.4499 287.535C12.0698 287.535 12.5803 287.025 12.5803 286.405Z"
            fill="#F38FE1"
          />
        </g>
      </svg>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h2 className="md:pt-2 lg:leading-[48px] mt-4 xs:max-w-xs sm:max-w-[740px] tracking-wide md:tracking-normal text-center animate-fade-up text-3xl font-bold  text-black dark:text-white sm:text-[37px]">
          Say Goodbye to Fraud, Hello to Transparency with adXchain
        </h2>
        <p className="animate-fade-up lg:leading-[30px] max-w-[898px] tracking-wide md:tracking-normal  mt-2  text-center text-lg   text-muted-foreground md:text-xl lg:text-[24px]">
          At adXchain, we're revolutionizing the advertising industry with
          decentralized ad spaces and blockchain technology. Say goodbye to
          fraud and malicious activities, and hello to transparent, efficient
          advertising.
        </p>
        <div className="mt-5 relative hidden md:block">
          <div className="relative">
           <Image src={laptop} alt="laptop" height={700} width={700}/>
           <div className="absolute top-9 left-28 ">
           <iframe width="480" height="300" src="https://www.youtube.com/embed/AuU-tUqZuC8?si=DccR2mUlabDgjTFj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           </div>
           </div>
        </div>
      </div>
      <svg
        width="23"
        height="298"
        viewBox="0 0 23 298"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* @ts-ignore */}
        <g>
          <path
            d="M21.1861 11.4499L21.1861 286.25C21.1861 291.647 16.8104 295.986 11.45 295.986C6.08966 295.986 1.71387 291.61 1.71387 286.25L1.71387 11.4499C1.71387 6.05311 6.08966 1.71378 11.45 1.71378C16.8104 1.71378 21.1861 6.08957 21.1861 11.4499Z"
            fill="#140823"
          />
          <path
            d="M20.6028 11.45L20.6028 286.25C20.6028 291.319 16.4822 295.403 11.4501 295.403C6.41791 295.403 2.29736 291.282 2.29736 286.25L2.29736 11.45C2.29736 6.38135 6.41791 2.29727 11.4501 2.29727C16.4822 2.29727 20.6028 6.41781 20.6028 11.45Z"
            fill="#1A0B2E"
          />
          <path
            d="M20.0558 11.4502L20.0558 286.25C20.0558 290.991 16.1905 294.856 11.4501 294.856C6.70965 294.856 2.84436 290.991 2.84436 286.25L2.84436 11.4502C2.84436 6.70977 6.70965 2.84448 11.4501 2.84448C16.1905 2.84448 20.0558 6.70977 20.0558 11.4502Z"
            fill="#210E3A"
          />
          <path
            d="M19.4723 11.4498L19.4723 286.25C19.4723 290.662 15.8988 294.272 11.45 294.272C7.00132 294.272 3.42773 290.699 3.42773 286.25L3.42773 11.4498C3.42773 7.03758 7.00132 3.42755 11.45 3.42755C15.8988 3.42755 19.4723 7.00112 19.4723 11.4498Z"
            fill="#271145"
          />
          <path
            d="M18.8889 11.4499L18.8889 286.25C18.8889 290.37 15.5706 293.689 11.4501 293.689C7.32955 293.689 4.01123 290.37 4.01123 286.25L4.01123 11.4499C4.01123 7.32939 7.32955 4.01108 11.4501 4.01108C15.5706 4.01108 18.8889 7.32939 18.8889 11.4499Z"
            fill="#2E1451"
          />
          <path
            d="M18.3055 11.4501L18.3055 286.25C18.3055 290.042 15.2424 293.142 11.4136 293.142C7.58478 293.142 4.52173 290.079 4.52173 286.25L4.52173 11.4501C4.52173 7.65772 7.58478 4.5582 11.4136 4.5582C15.2424 4.5582 18.3055 7.62125 18.3055 11.4501Z"
            fill="#34175C"
          />
          <path
            d="M17.7585 11.4502L17.7585 286.25C17.7585 289.714 14.9507 292.559 11.4501 292.559C7.94942 292.559 5.1416 289.751 5.1416 286.25L5.1416 11.4502C5.1416 7.98599 7.94942 5.14172 11.4501 5.14172C14.9507 5.14172 17.7585 7.94953 17.7585 11.4502Z"
            fill="#3B1968"
          />
          <path
            d="M17.1751 11.4498L17.1751 286.25C17.1751 289.422 14.6226 291.975 11.4501 291.975C8.27764 291.975 5.7251 289.422 5.7251 286.25L5.7251 11.4498C5.7251 8.27737 8.27764 5.72482 11.4501 5.72482C14.6226 5.72482 17.1751 8.27737 17.1751 11.4498Z"
            fill="#411C73"
          />
          <path
            d="M16.5915 11.4499L16.5915 286.25C16.5915 289.094 14.2942 291.392 11.4499 291.392C8.60566 291.392 6.30835 289.094 6.30835 286.25L6.30835 11.4499C6.30835 8.60567 8.60566 6.30838 11.4499 6.30838C14.2942 6.30838 16.5915 8.60567 16.5915 11.4499Z"
            fill="#481F7F"
          />
          <path
            d="M16.4457 11.4501L16.4457 286.25C16.4457 289.022 14.2214 291.246 11.4501 291.246C8.67872 291.246 6.45435 289.022 6.45435 286.25L6.45435 11.4501C6.45435 8.6788 8.67872 6.45444 11.4501 6.45444C14.2214 6.45444 16.4457 8.6788 16.4457 11.4501Z"
            fill="#4E228A"
          />
          <path
            d="M16.2998 11.4502L16.2998 286.25C16.2998 288.912 14.1484 291.1 11.4499 291.1C8.75154 291.1 6.6001 288.949 6.6001 286.25L6.6001 11.4502C6.6001 8.78827 8.75154 6.60037 11.4499 6.60037C14.1484 6.60037 16.2998 8.75181 16.2998 11.4502Z"
            fill="#552496"
          />
          <path
            d="M16.1541 11.45L16.1541 286.25C16.1541 288.839 14.0391 290.954 11.4501 290.954C8.86107 290.954 6.74609 288.839 6.74609 286.25L6.74609 11.45C6.74609 8.86097 8.86107 6.746 11.4501 6.746C14.0391 6.746 16.1541 8.86097 16.1541 11.45Z"
            fill="#5B27A1"
          />
          <path
            d="M15.9717 11.4501L15.9717 286.25C15.9717 288.766 13.9296 290.772 11.45 290.772C8.9704 290.772 6.92834 288.73 6.92834 286.25L6.92834 11.4501C6.92834 8.93404 8.9704 6.92847 11.45 6.92847C13.9296 6.92847 15.9717 8.97051 15.9717 11.4501Z"
            fill="#622AAD"
          />
          <path
            d="M15.8258 11.4498L15.8258 286.25C15.8258 288.657 13.8567 290.626 11.45 290.626C9.04334 290.626 7.07422 288.657 7.07422 286.25L7.07422 11.4498C7.07422 9.04311 9.04334 7.07401 11.45 7.07401C13.8567 7.07401 15.8258 9.04311 15.8258 11.4498Z"
            fill="#682DB8"
          />
          <path
            d="M15.6798 11.4499L15.6798 286.25C15.6798 288.584 13.7837 290.48 11.4499 290.48C9.11616 290.48 7.21997 288.584 7.21997 286.25L7.21997 11.4499C7.21997 9.11615 9.11616 7.21997 11.4499 7.21997C13.7837 7.21997 15.6798 9.11615 15.6798 11.4499Z"
            fill="#6F2FC4"
          />
          <path
            d="M15.4976 11.4501L15.4976 286.25C15.4976 288.511 13.6743 290.298 11.45 290.298C9.22559 290.298 7.40234 288.475 7.40234 286.25L7.40234 11.4501C7.40234 9.18931 9.22559 7.40253 11.45 7.40253C13.6743 7.40253 15.4976 9.22578 15.4976 11.4501Z"
            fill="#7532CF"
          />
          <path
            d="M15.3517 11.4498L15.3517 286.25C15.3517 288.401 13.6014 290.151 11.45 290.151C9.29854 290.151 7.54822 288.401 7.54822 286.25L7.54822 11.4498C7.54822 9.29835 9.29854 7.54803 11.45 7.54803C13.6014 7.54803 15.3517 9.29835 15.3517 11.4498Z"
            fill="#7C35DB"
          />
          <path
            d="M13.2368 11.4501L13.2368 286.25C13.2368 287.235 12.4346 288.037 11.45 288.037C10.4655 288.037 9.66321 287.235 9.66321 286.25L9.66321 11.4501C9.66321 10.4655 10.4655 9.6633 11.45 9.6633C12.4346 9.6633 13.2368 10.4655 13.2368 11.4501Z"
            fill="#B989FD"
          />
          <path
            d="M13.0181 11.45L13.0181 286.25C13.0181 287.125 12.3252 287.818 11.4501 287.818C10.5749 287.818 9.88208 287.125 9.88208 286.25L9.88208 11.45C9.88208 10.5748 10.5749 9.88196 11.4501 9.88196C12.3252 9.88196 13.0181 10.5748 13.0181 11.45Z"
            fill="#BE93FD"
          />
          <path
            d="M12.7992 11.4501L12.7992 286.25C12.7992 287.016 12.1793 287.599 11.45 287.599C10.7207 287.599 10.1008 286.979 10.1008 286.25L10.1008 11.4501C10.1008 10.6843 10.7207 10.1009 11.45 10.1009C12.1793 10.1009 12.7992 10.7208 12.7992 11.4501Z"
            fill="#C49CFD"
          />
          <path
            d="M12.5803 11.4498L12.5803 286.25C12.5803 286.87 12.0698 287.38 11.4499 287.38C10.83 287.38 10.3195 286.87 10.3195 286.25L10.3195 11.4498C10.3195 10.8299 10.83 10.3194 11.4499 10.3194C12.0698 10.3194 12.5803 10.8299 12.5803 11.4498Z"
            fill="#C9A6FD"
          />
        </g>
      </svg>
    </div>
  );
}
