import { Button, Modal } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ data,SetProductData,productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const deleteProduct = async () => {
      await axios.get(
        `https://api.favoland.com/products/delete/${selectedProduct}`
      );
    };
    deleteProduct();
    SetProductData(productData.filter((item) => item._id !== selectedProduct));
    setIsModalOpen(false);
    toast.success("Product Deleted Successfully");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="xl:w-80 w-72 min-h-96  xl:mx-10 lg:mx-8 mx-6 mb-10">
      <Link href={`/product/${data?._id}`}>
        <div>
          <Image
            src={data?.images[0]}
            width={300}
            height={300}
            alt="product"
            className="w-full h-72 object-cover"
          />
        </div>
        <div className="flex flex-col  text-sm mt-3">
          <h2 className=" mb-3">{data?.name}</h2>
          <span className="flex">
            <p className="font-bold ">Brand:</p>
            <p className="text-gray-700 pl-1 capitalize">{data?.brand}</p>
          </span>
          <span className="flex">
            <p className="font-bold ">Category:</p>
            {data?.category.map((item, index) => {
              return (
                <p className="text-gray-700 pl-1" key={index}>
                  {item},
                </p>
              );
            })}
            <p className="text-gray-700 pl-1">Skin</p>
          </span>
          <p className="font-bold mt-3">$ {data?.price}</p>
        </div>
      </Link>
        <div>
          <div className=" flex justify-center items-center space-x-4 mt-4">
          <Link href={`/dashboard/editproduct?id=${data._id}`}>
            <div className="h-9 px-4 bg-primary text-white flex justify-center items-center cursor-pointer font-semibold  border-2 border-primary">
              <p className="">Edit this product</p>
            </div>
          </Link>
            <Button
              onClick={() =>{
                setSelectedProduct(data._id)
                showModal()
              }}
              className="h-9 w-20 bg-white text-black flex justify-center items-center cursor-pointer font-semibold border-2 border-gray-400 shadow-lg rounded-sm"
            >
              <p className="">Delete</p>
            </Button>
          </div>
        </div>
      <Modal
        title="Delete Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="border-red-500 text-red-500" onClick={handleOk}>
            Confirm
          </Button>
        ]}
      >
        <p>Do You Really Want to delete this product?</p>
      </Modal>
    </div>
  );
};

export default ProductCard;
