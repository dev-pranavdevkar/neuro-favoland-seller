import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import RecentProductCard from "./RecentProductCard";

const RecentProducts = () => {
  const [productData,SetProductData] = useState([])
  const { data: session } = useSession()


  
  useEffect(() => {
    const products = async () => {
    
      const res = await axios.get(`https://api.favoland.com/products/recent/${session?.user?.uid}`);
      const data = await res.data;
      SetProductData(data)
    }
    products()
  }, [])
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-medium text-4xl">Dashboard</h1>
        <Link href="/dashboard/addproduct">
        <button className="bg-primary p-2 flex items-center space-x-2">
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
      <div className="mt-10">
        <div className="bg-white p-8 shadow-md rounded-md">
          <span className="flex justify-between">
            <p className="text-xl font-semibold">Recently Added</p>
            <p className="text-[15px] font-normal text-blue-600 cursor-pointer hover:underline">
              See all
            </p>
          </span>

          <div className="flex flex-col my-4 overflow-y-scroll h-[65vh]">
          {
            productData?.map((product,index) => (
              <RecentProductCard key={index} product={product} productData={productData} SetProductData={SetProductData} />
            ))
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
