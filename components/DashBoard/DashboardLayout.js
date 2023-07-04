import { Button, Layout, Modal, Popover } from "antd";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import SideBarButtons from "./SideBarButtons";

const DashboardLayout = ({ children }) => {
  const { Header, Content, Sider } = Layout;
  const { pathname } = useRouter();
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    signOut();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const content = (
    <div className="flex flex-col space-y-1 w-20">

      <button
        onClick={() => {
          showModal();
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
  // if pathname starts with /dashboard/ then return the dashboard layout
  if (pathname.startsWith("/dashboard/" || "/dashboard")) {
    return (
      <div>
        <Layout
          style={{
            maxHeight: "100vh",
          }}
        >
          <Header
            className="header shadow-lg"
            style={{
              height: "10vh",
              backgroundColor: "#fff",
              width: "100%",
            }}
          >
            <div className="drop-shadow-lg flex justify-between items-center w-full h-full">
              <div className="w-[30%]">
                <Link href="/">
                  <Image
                    src="/svg/logo.svg"
                    alt="favoland logo"
                    width={200}
                    height={100}
                  />
                </Link>
              </div>
              <div className="w-[70%] flex justify-end items-center">
                <div className="hidden">
                  <div className="bg-[#F3F3F3] rounded-md h-14  min-w-[600px] flex items-center px-4">
                    <BiSearch className="text-3xl" />
                    <input
                      type="text"
                      className="w-full h-full border-none text-black outline-none bg-[#F3F3F3] px-4 text-lg placeholder:text-base"
                      placeholder="Type for Search"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  {session ? (
                    <div className="flex">
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
                  ) : null}
                </div>
              </div>
            </div>
          </Header>
          <Layout>
            <Sider
              width={145}
              height="90vh"
              style={{
                maxHeight: "90vh",
                border: "1px solid #000",
                backgroundColor: "#000",
                height: "90vh",
              }}
            >
              <div className="flex flex-col justify-center h-full">
                <div className="bg-black text-white flex flex-col justify-center">
                  <SideBarButtons />
                </div>
                <div className="flex flex-col items-center justify-end h-full xl:mb-16 mb-6 text-white">
                  {/* <div className="flex flex-col items-center justify-center h-7 bg-white w-20 rounded-md">
                    <p className="text-black font-semibold">HELP</p>
                  </div> */}
                  <div className="cursor-pointer">
                    <button
                      onClick={() => showModal()}
                      className="flex flex-col items-center justify-center h-24 cursor-pointer"
                    >
                      <MdOutlineLogout className="text-3xl text-white" />
                      <p className="mt-3 font-semibold text-[15px]">Log Out</p>
                    </button>
                  </div>
                </div>
              </div>
            </Sider>
            <Layout
              style={{
                padding: "0",
              }}
            >
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: "#ECECEC",
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
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
  }
  // else return the children
  return children;
};

export default DashboardLayout;
