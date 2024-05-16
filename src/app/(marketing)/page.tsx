import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import Tutors from "../_components/tutors";
import Hero from "../_components/hero";
import SocialProof from "../_components/social-proof";
import FeatureSection from "../_components/feature-section";
import FAQSection from "../_components/faq-section";
import CTASection from "../_components/cta-section";
import QuoteSection from "../_components/quote-section";
import BecomeTutor from "../_components/become-tutor";

export default async function Home() {
  return (
    <div className=" ">
      <Hero />
      <SocialProof />

      {/* <CTASection /> */}
      {/* <BecomeTutor /> */}
      {/* <FeatureSection /> */}
      {/* <QuoteSection /> */}
      {/* <Tutors /> */}
      {/* <FAQSection /> */}
      {/* <div className="container grid lg:grid-cols-5 gap-10 ">
        <div className="lg:col-span-2">
          <Image
            alt=""
            src="assets/lesson.svg"
            width={200}
            className="w-full"
            height={200}
          />
        </div>
        <div className="flex flex-col items-start gap-2 max-w-[800px] lg:col-span-3 justify-center">
          <h2 className="text-3xl font-semibold">
            ისწავლე ექსპერტებთან ნებისმიერი ადგილიდან
          </h2>
          <p className="text-[#2e2e2e]">
            ჩვენი მისიაა დავეხმაროთ მოსწავლეებს იპოვონ სასურველი კურსებო და
            ისწავლონ წარმატებით.
          </p>
          <Button size="lg" asChild className="font-semibold">
            <RegisterLink>შექმენი აქაუნთი</RegisterLink>
          </Button>
        </div>
      </div> */}
      {/* <Tutors /> */}
      {/* <div className="h-[1000px]"></div> */}
    </div>
  );
}

// <div className="bg-[#F5F7FA] py-16 mt-20">
//         <div className="container grid grid-cols-2 gap-6">
//           <div className="bg-primary text-[white] p-10 flex flex-col items-start gap-3 rounded-lg">
//             {/* img as background */}
//             <h2 className="text-xl font-semibold">გახდი ინსტრუქტორი</h2>
//             <p>
//               ინსტრუქტორები მთელი საქართველოდან ასწავლიან უამრავ სტუდენტს. ჩვენ
//               გთავაზობთ თულებს იმისათვის რომ ასწავლოთ რაც გიყვართ.
//             </p>
//             <RegisterLink className="bg-[white] mt-5 py-3 px-5 text-primary hover:bg-[white]/85 font-semibold rounded-lg">
//               დაიწყე ტუტორობა
//             </RegisterLink>
//           </div>
//           <div className="bg-[white] p-10 flex flex-col items-start gap-3 rounded-lg">
//             {/* img as background */}
//             <h2 className="text-xl font-semibold">სტეპები რაც უნდა გაიარო</h2>
//             <div className="grid grid-cols-2 w-full gap-5 mt-5">
//               <div className="flex items-center gap-3">
//                 <div className=" bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
//                   1
//                 </div>
//                 შეავსე პროფილი
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className=" bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
//                   2
//                 </div>
//                 გამოგზავნე ფორმა
//               </div>
//             </div>
//             <div className="grid grid-cols-2 w-full gap-5 mt-5">
//               <div className="flex items-center gap-3">
//                 <div className=" bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
//                   3
//                 </div>
//                 დაგიკავშირდებით
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className=" bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
//                   4
//                 </div>
//                 შეგიძლია დაიწყო სწავლება
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
