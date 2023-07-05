import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/DashBoard/ProductCard";

const MyProducts = () => {
  const { data: session } = useSession()
  const [productData,SetProductData] = useState([])
  const items = [
    {
      label: "1st menu item",
      key: "0",
    },
    {
      label: "2nd menu item",
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

const products = async () => {
  const res = await axios.get(`https://api.favoland.com/products/seller/${session?.user?.uid}`);
  const data = await res.data;
  SetProductData(data)
}

useEffect(() => {
  products()
}, [session])




  return (
    <div className="w-full h-full bg-white p-10">
      <div className="flex justify-between border-b-2 border-black pb-5">
        <div>
          <h1 className="font-medium xl:text-4xl text-3xl">My Products</h1>
          <p className="xl:text-xl text-lg font-light">{productData?.length} Products Found</p>
        </div>
        <Link href="/dashboard/addproduct">

        <button className="bg-primary px-4 flex items-center space-x-2 h-12">
          <svg
            width={25}
            height={25}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 14.5H10.75V11.25H14V9.75H10.75V6.5H9.25V9.75H6V11.25H9.25V14.5ZM10 18.5C8.90267 18.5 7.868 18.2917 6.896 17.875C5.924 17.4583 5.07333 16.8853 4.344 16.156C3.61467 15.4267 3.04167 14.576 2.625 13.604C2.20833 12.632 2 11.5973 2 10.5C2 9.38867 2.20833 8.35033 2.625 7.385C3.04167 6.42033 3.61467 5.57333 4.344 4.844C5.07333 4.11467 5.924 3.54167 6.896 3.125C7.868 2.70833 8.90267 2.5 10 2.5C11.1113 2.5 12.1497 2.70833 13.115 3.125C14.0797 3.54167 14.9267 4.11467 15.656 4.844C16.3853 5.57333 16.9583 6.42033 17.375 7.385C17.7917 8.35033 18 9.38867 18 10.5C18 11.5973 17.7917 12.632 17.375 13.604C16.9583 14.576 16.3853 15.4267 15.656 16.156C14.9267 16.8853 14.0797 17.4583 13.115 17.875C12.1497 18.2917 11.1113 18.5 10 18.5Z"
              fill="white"
            />
          </svg>

          <p className="text-white text-xl font-bold">Add Product</p>
        </button>
        </Link>
      </div>

      <div className=" justify-center xl:py-6 py-4 space-x-6 border-b-2 border-black hidden">
        <div className="flex font-medium text-base items-center">
          <p className="pr-2 font-semibold">FILTER BY</p>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className=" p-2 shadow-lg border border-gray-100"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                All Products
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="flex font-medium text-base items-center">
          <p className="pr-2 font-semibold">SORT BY</p>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className=" p-2 shadow-lg border border-gray-100"
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Name
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>

      <div className="py-6 flex flex-wrap w-full overflow-y-scroll h-[55vh] overflow-hidden">


      {
        productData?.map((item) => {
          return <ProductCard key={item._id} data={item} SetProductData={SetProductData} productData={productData} />
        })
      }
      </div>
    </div>
  );
};

export default MyProducts;
