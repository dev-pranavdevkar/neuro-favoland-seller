import { Button, Modal } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const RecentProductCard = ({product,SetProductData,productData}) => {
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
  };  return (
    <div>
      <div className="bg-white shadow-lg border rounded-2xl my-2 px-8 py-3 flex h-32 xl:w-[80%]">
        <div className="flex space-x-6 items-center w-[80%]">
          <Image
            src={product?.images[0]}
            alt="product image"
            width={100}
            height={100}
            className="rounded-2xl shadow-sm"
          />
          <div className="flex flex-col items-start justify-start space-y-1">
            <p className="text-[#212121] underline text-lg font-medium">
              {product?.name}
            </p>
            <p className="text-sm font-semibold text-slate-600">
              {product?.type}
            </p>
            <span className="flex space-x-2">
            {
              product.category.map((item,index) => {
                return             <p className="font-semibold text-slate-500 underline" key={index}>{item},</p>
              })
            } 
            </span>

          </div>
          <div className="flex  justify-center items-center ">
            <p className="text-black font-semibold text-base">$39.99</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-[20%] flex flex-col justify-center items-center">
        <Link href={`/dashboard/editproduct?id=${product._id}`}>

          <div className="h-10 w-20 bg-primary text-white flex justify-center items-center cursor-pointer font-semibold mb-2 border-2 border-primary">
            <p className="">Edit</p>
          </div>
          </Link>
          <Button
              onClick={() =>{
                setSelectedProduct(product._id)
                showModal()
              }} className="h-10 w-20 bg-white text-black flex justify-center items-center cursor-pointer font-semibold border-2 border-gray-400 shadow-lg rounded-sm">
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

export default RecentProductCard;
