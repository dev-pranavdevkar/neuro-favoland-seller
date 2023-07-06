import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

const HeroSection = () => {
  return (
    <div>
      {/* Hero 1 */}
      <div className="flex sm:flex-row flex-col  sm:max-h-[550px] ">
        <div className="sm:w-1/2  xl:p-16 p-10 flex justify-center items-start flex-col bg-primary space-y-6">
          <h2 className="xl:text-4xl text-4xl font-bold text-white">
            Join in 3 easy steps
          </h2>
          <div>
            <p className="xl:text-2xl font-bold text-2xl text-white mb-1">
              1. Apply to become a Favoland seller.
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">2. Upload your products </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              3. List your authorized retailers or stores
            </p>
          </div>
          <PrimaryButton
            text="Join Now"
            link={"/login"}
            width={"136px"}
            height={"50px"}
            fontSize={"22px"}
          // fontWeight={"normal"}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <Image
            src="/images/steps2.jpg"
            alt="favoland hero"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Hero 2 */}

      <div className="flex sm:flex-row-reverse flex-col w-full sm:max-h-[550px]">
        <div className="sm:w-1/2 w-full xl:p-16 p-10 flex justify-center items-start flex-col bg-primary space-y-6">
          <h2 className="xl:text-4xl text-4xl font-bold text-white">
            Product Ingredients       </h2>
          <div>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              1.	Cosmetics are a part of everyday life
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              2.	List all the ingredients in your products
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              3.	You are responsible for regulation and transparency
            </p>
          </div>
          <PrimaryButton
            text="Start Promoting Now"
            link={"/login"}
            width={"260px"}
            height={"50px"}
            fontSize={"22px"}
          // fontWeight={"normal"}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <Image
            src="/images/ingredient.png"
            alt="favoland hero"
            width={1100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
      {/* Hero 3 */}

      <div className="flex sm:flex-row-reverse flex-col w-full sm:max-h-[550px]">
      <div className="sm:w-1/2 w-full">
          <Image
            src="/images/modal2.jpg"
            alt="favoland hero"
            width={1100}
            height={100}
            className="w-full h-full"
          />
        </div>
        <div className="sm:w-1/2 w-full xl:p-16 p-10 flex justify-center items-start flex-col bg-primary space-y-6">
          <h2 className="xl:text-4xl text-4xl font-bold text-white">
            Sustainability
          </h2>
          <div>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              1.	Report on your sustainability actions
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              2.	List your certifications/associations
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              3.	Share your story
            </p>
          </div>
          <PrimaryButton
            text="Start Promoting Now"
            link={"/login"}
            width={"260px"}
            height={"50px"}
            fontSize={"22px"}
          // fontWeight={"normal"}
          />
        </div>
        
      </div>
      {/* Hero 4 */}
      <div className="flex sm:flex-row flex-col w-full sm:max-h-[550px]">
      <div className="sm:w-1/2 w-full">
          <Image
            src="/images/traciability.png"
            alt="favoland hero"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
        <div className="sm:w-1/2 w-full xl:p-16 p-10 flex justify-center items-start flex-col bg-primary space-y-6">
          <h2 className="xl:text-4xl text-4xl font-bold text-white">
            Traceability
          </h2>
          <div>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              1.	Where all the ingredients come from
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              2.	How are they extracted
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              3.	How are they processed and transported
            </p>
          </div>
          <PrimaryButton
            text="Start Promoting Now"
            link={"/login"}
            width={"260px"}
            height={"50px"}
            fontSize={"22px"}
          // fontWeight={"normal"}
          />
        </div>
       
      </div>
      {/* Hero 5 */}
      <div className="flex sm:flex-row flex-col w-full sm:max-h-[550px]">
        <div className="sm:w-1/2 w-full xl:p-16 p-10 flex justify-center items-start flex-col bg-primary space-y-6">
          <h2 className="xl:text-4xl text-4xl font-bold text-white">
            Ethics
          </h2>
          <div>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              1.	Business ethics and social responsibility
            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              2.	Be clear about product claims            </p>
            <p className="xl:text-2xl text-2xl font-bold text-white mb-1">
              3.	One-to-one relationship        </p>
          </div>
          <PrimaryButton
            text="Start Promoting Now"
            link={"/login"}
            width={"260px"}
            height={"50px"}
            fontSize={"22px"}
          // fontWeight={"normal"}
          />
        </div>
        <div className="sm:w-1/2 w-full">
          <Image
            src="/images/ethicsbanner.jpg"
            alt="favoland hero"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
