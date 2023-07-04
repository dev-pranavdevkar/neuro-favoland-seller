import PrimaryButton from "../PrimaryButton"

const Banner = () => {
  return (
    <div style={{
        backgroundImage: `url('/images/banner.png')`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',

    }} className='min-h-[815px] w-full flex items-center justify-center flex-col space-y-5'>
      <div className="flex sm:flex-row flex-col justify-center space-x-5">
      <p className="xl:text-2xl text-xl font-bold text-white">Easy to use platform</p>
      <p className="xl:text-2xl text-xl font-bold text-white">Easy Promotions</p>
      <p className="xl:text-2xl text-xl font-bold text-white">Get more sales</p>
      <p className="xl:text-2xl text-xl font-bold text-white">Affordable fees</p>
      </div>
        <h1 className="font-bold xl:text-6xl sm:text-5xl text-4xl text-center text-white">
        Welcome to Favoland Marketplace
        </h1>
     
      <PrimaryButton bgColor={"#53B9A8"} width={"338px"} height={"80px"} link={"/login"} text={"Sign Up"} fontSize={"34px"}/>
    </div>
  )
}

export default Banner
