import { signIn, useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

const Login = () => {
  const { data: session } = useSession();
	const router = useRouter();
  if (session) {
    router.push('/dashboard/recent');
  }
else {
  return (
    <div
      className="w-full h-full min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('/images/login.png')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[80%] xl:w-[40%] sm:w-[60%] mx-auto my-auto bg-white rounded-2xl p-10 py-20 shadow-md">
        <div className="flex justify-end mb-16">
          <Image
            src="/svg/logo.svg"
            alt="favoland logo"
            width={200}
            height={100}
          />
        </div>
        <h1 className="text-3xl mb-12">Log in</h1>
        <div className="space-y-5">
          <p className="font-bold text-3xl">Sign in using Google or Facebook</p>
          <p className="text-lg">List your beauty products on Favoland</p>
          <div>
              <button onClick={signIn} className="border border-black p-3 flex items-center space-x-2 w-56 cursor-pointer">
                <Image
                  src="/svg/google.svg"
                  alt="google logo"
                  width={20}
                  height={20}
                />

                <p className="font-semibold">Sign in with Google</p>
              </button>
          </div>
          <div>
            <Link href="/dashboard">
              <div className="border border-black p-3 flex items-center space-x-2 w-56 bg-[#3B5998] cursor-pointer">
                <Image
                  src="/svg/facebookbutton.svg"
                  alt="google logo"
                  width={20}
                  height={20}
                />

                <p className="font-semibold text-white">
                  Sign in with Facebook
                </p>
              </div>
            </Link>
          </div>
          <p className="text-lg text-[#464747]">
            By continuing, you agree to Favoland’s
            <a href="" className="underline text-blue-500 mx-1">
              terms and conditions <br />
            </a>
            and acknowledge that you’ve read our
            <a href="" className="underline text-blue-500 mx-1">
              Privacy Policy.
            </a>
          </p>
          <div>
            <Link href="/">
              <div className="border border-black  w-20 h-11 flex justify-center items-center cursor-pointer">
                Back
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
};

export default Login;
