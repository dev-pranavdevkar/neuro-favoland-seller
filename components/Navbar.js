import { Button, Modal, Popover } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    signOut();  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const content = (
    <div className="flex flex-col space-y-1 w-20">

      <button
        onClick={() => {
          router.push("/dashboard/profile");
        }}
        className="border-b-2 pb-1 border-black"

      >
        <p className=" font-semibold cursor-pointer">Profile</p>
      </button>
      <button
        onClick={() => {
          showModal();
        }}
      >
        <p className=" font-semibold cursor-pointer text-red-500">Logout</p>
      </button>
    </div>
  );
  return (
    <div>
      <div className='topbar'>
				<h2>
					<a
						href="https://share.hsforms.com/1a5k6i_zETqeyWx1eAVv_8Ad82qy"
						target="_blank"
						rel="noreferrer"
					>
						We are in Beta. We are launching this summer. Please register to be
						notified when we launch
					</a>
				</h2>
			</div>
      <header className="text-gray-600 body-font min-h-[120px]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src="/images/favolandLogo.png"
                alt="favoland logo"
                width={200}
                height={100}
              />
            </div>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="https://favoland.com/"
              target="_blank"
              className="mr-5 text-black underline text-xl font-medium cursor-pointer"
            >
              Go to favoland.com
            </a>
          </nav>
          <div className="space-x-3 flex">
            {session ? (
              <>
              <div className="flex items-center">
                      <p className="font-semibold mx-3">{session.user.name}</p>
                      <div className="w-14 h-14 flex items-center border-2 border-primary rounded-full justify-center">
                        <Popover content={content} title="" trigger="click">
                          <Image
                            src={session?.user?.image}
                            alt="profile image"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </Popover>
                      </div>
                    </div>
              </>
            ) : (
              <>
                <PrimaryButton
                  bgColor={"#212121"}
                  width={"67px"}
                  height={"32px"}
                  link={"/login"}
                  text={"Login"}
                />
                <PrimaryButton
                  bgColor={"#212121"}
                  width={"125px"}
                  height={"32px"}
                  link={"/login"}
                  text={"Sign Up"}
                />
              </>
            )}
          </div>
        </div>
      </header>
      <Modal
        title="Delete Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            className="border-red-500 text-red-500"
            onClick={handleOk}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>Do You Really Want Logout</p>
      </Modal>
    </div>
  );
};

export default Navbar;
