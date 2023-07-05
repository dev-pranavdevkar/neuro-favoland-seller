import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdProductionQuantityLimits } from "react-icons/md";
const SideBarButtons = () => {
  const { pathname } = useRouter();

  const active = {
    borderLeft: "5px solid yellow",
    borderRight: "5px solid yellow",
    borderRadius: "10px",
  };

  return (
    <div>
      {/* <Link href="/dashboard/recent">
        <div className="flex flex-col items-center justify-center h-20">
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </Link> */}
      {/* <Link href="/dashboard/recent">
        <div className="flex flex-col items-center justify-center h-20 sidebar-button mt-6">
          <AiOutlineAppstore className="text-2xl" />
          <p className="mt-3 font-semibold text-[15px]">Dashboard</p>
        </div>
      </Link> */}
      <Link href="/dashboard/myproducts">
        <div className="flex flex-col items-center justify-center h-20 mt-8"
         style={pathname === "/dashboard/myproducts" ? active : null}
        >
          <HiOutlineShoppingBag className="text-2xl" />
          <p className="mt-3 font-semibold text-[15px]">My Products</p>
        </div>
      </Link>
      <Link href="/dashboard/profile">
        <div className="flex flex-col items-center justify-center h-20"
        style={pathname === "/dashboard/profile" ? active : null}
        >
          <FaRegUser className="text-2xl" />
          <p className="mt-3 font-semibold text-[15px]">My Profile</p>
        </div>
      </Link>
      <Link href="/dashboard/recent">
        <div
          className="flex flex-col items-center justify-center h-20"
          style={pathname === "/dashboard/recent" ? active : null}
        >
          <MdProductionQuantityLimits className="text-2xl" />
          <p className="mt-3 font-semibold text-[15px]">Recent Products</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBarButtons;
