import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession()

  return (
    <div className="w-full h-full bg-white overflow-y-scroll">
      <div className="p-10 max-w-xl">
        <h1 className="font-medium text-4xl">My Profile</h1>
        <div className="flex items-center space-x-3 mt-10 mb-4">
          <div className="rounded-full h-28 w-28 border-4 border-primary flex items-center justify-center">
          <Image
            src={session?.user?.image}
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full"
          />
          
          </div>
          {/* <p className="text-lg underline">Change Profile Photo</p> */}
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-lg mb-3">Name</p>
            <input
              type="text"
              disabled
              className="bg-[#F0F0F0] px-4 py-2  w-full rounded-md placeholder:text-black font-semibold"
              defaultValue={session?.user?.name}
            />
          </div>
          <div>
            <p className="font-medium text-lg mb-3">Email</p>
            <input
              type="text"
              disabled
              className="bg-[#F0F0F0] py-2 px-4 w-full rounded-md placeholder:text-black font-semibold"
              defaultValue={session?.user?.email}
            />
          </div>
          {/* <div>
            <p className="font-medium text-lg mb-3">Subscription</p>
            <div className="border border-black w-56 h-11 flex justify-center items-center shadow-sm">
              <p className="font-semibold text-lg">Annual Plan</p>
            </div>
            <p className="text-lg underline mt-4">Change Plan</p>
          </div> */}
          <div>
            <p className="font-medium text-lg mb-3">Account</p>
            <div className="border border-black p-3 flex items-center justify-center space-x-2 w-56 h-11 cursor-pointer">
              <Image
                src="/svg/google.svg"
                alt="google logo"
                width={20}
                height={20}
              />

              <p className="font-semibold">Sign in with Google</p>
            </div>
            <p className="text-lg underline mt-4">Delete Account</p>
          </div>

          <div className="h-10 w-20 bg-black text-white flex justify-center items-center cursor-pointer">
            <p className="text-base">
                Save
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
