import { Countries } from "@/constant";
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Upload,
} from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useS3Upload } from "next-s3-upload";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { query } = useRouter();
  const productId = query.id;
  const { data: session } = useSession();
  let [imageUrl, setImageUrl] = useState([]);
  const CategoryOption = ["Hair", "Face", "Nails", "Skin", "Body", "Oral"];
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [showUploadList, setShowUploadList] = useState(true);
  const inputRef = useRef(null);

  const [antPics, setAntPics] = useState([]);
  let { uploadToS3 } = useS3Upload();
  useEffect(() => {
    if (productId) {
      const getProduct = async () => {
        await axios
          .get(`https://api.favoland.com/products/${productId}`)
          .then((res) => {
            console.log(res.data)

            form.setFieldsValue({
              productname: res.data.name,
              description: res.data.description,
              price: res.data.price,
              brand: res.data.type,
              category: res.data.category,
              ingredients: res.data.ingredients,
              country: res.data.country,
              credentials: res.data.credentials,
            });
            setImageUrl(res.data.images);
          });
      };
      getProduct();
    }
  }, [productId]);

  let handleFileChange = async (e) => {
    e.file.status === "done" &&
      setAntPics((prevState) => [...prevState, e.file.originFileObj]);
  };

  const handleRemove = (index) => {
    setImageUrl((prevState) => prevState.filter((_, i) => i !== index));
  };
  
  console.log(imageUrl)

  let handleUpload = async () => {
    setLoading(true);

    for (let i = 0; i < antPics.length; i++) {
      const file = antPics[i];

      let { url } = await uploadToS3(file);
      setImageUrl((current) => [...current, url]);
    }

    setLoading(false);
  };
  const [selectItems, setSelectItems] = useState([]);
  const [name, setName] = useState("");
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setSelectItems([...selectItems, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const Finish = async (values) => {
    if (imageUrl.length === 0) {
      return toast.error("Please Upload Images");
    }
    await axios
      .post(
        `https://api.favoland.com/products/update/${productId}`,
        {
          seller_id: session.user.uid,
          name: values.productname,
          description: values.description,
          price: values.price,
          type: values.type,
          brand: values.brand,
          category: values.category,
          ingredients: values.ingredients,
          credentials: values.credentials,
          country: values.country,
          images: imageUrl,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        form.resetFields();
        setAntPics([]);
        setShowUploadList(false);
        setImageUrl([]);
        toast.success("Product Added Successfully");
      });
  };

  const CertificateOptions = [
    "Reduced CO2 emission",
    "Reduced water Usage",
    "Recyclable material packging",
    "100% Organic",
    "Vegan Product",
  ];

  const { TextArea } = Input;
  const items = [
    {
      label: <p>1st menu item</p>,
      value: "0",
    },
    {
      label: <p>2nd menu item</p>,
      value: "1",
    },
    {
      label: "3rd menu item",
      value: "3",
    },
  ];
  const uploadButton = (
    <div className="w-full">
      {loading ? <LoadingOutlined /> : <UploadOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
          

  return (
    <div className="bg-white h-full w-full py-5 px-2 overflow-y-scroll">
      <Form
        name="Add Product"
        onFinish={(values) => {
          Finish(values);
        }}
        form={form}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-4 p-5">
            <div className="flex flex-col  shadow-lg p-5 w-1/2 border">
              <h2 className="text-xl font-bold text-center pb-4">
                Product Details
              </h2>
              <h3 className="text-lg font-semibold pb-1 ">Product Name</h3>
              <Form.Item className="" name="productname">
                <Input
                  placeholder="Product Name"
                  className="shadow-md rounded-md py-1.5 px-4"
                />
              </Form.Item>
              <h3 className="text-lg font-semibold pb-2">Category</h3>
              <Form.Item
                name="category"
                className="flex items-center space-x-4 "
              >
                <Checkbox.Group
                  options={CategoryOption}
                  className="flex flex-wrap"
                />
              </Form.Item>
              <h3 className="text-lg font-semibold pb-1 ">Brand</h3>
              <Form.Item name="brand" className="">
                <Input
                  placeholder="Brand Name"
                  className="shadow-md rounded-md py-1.5 px-4"
                />
              </Form.Item>
              <h3 className="text-lg font-semibold pb-1 ">Price</h3>
              <Form.Item name="price" className="">
                <Input
                  prefix={<p className="font-bold">$</p>}
                  placeholder="Price"
                  className="shadow-md rounded-md py-1.5 px-4"
                  type="number"
                />
              </Form.Item>
              <h3 className="text-lg font-semibold pb-1 ">Description</h3>
              <Form.Item className="" name="description">
                <TextArea rows={4} />
              </Form.Item>
            </div>
            <div className="flex flex-col space-y-4 shadow-lg p-5 w-1/2 border">
              <div className="">
                <h2 className="text-xl font-bold text-center pb-4">
                  Sustainability
                </h2>
                <div className="pb-3">
                  <h3 className="text-lg font-semibold pb-2">Ingrediants</h3>
                  <Form.Item name="ingredients" className="">
                    {/* <Input
                      placeholder="Ingrediants"
                      className="shadow-md rounded-md py-1.5 px-4"
                    /> */}
                    <Select
                      mode="multiple"
                      showArrow
                      style={{
                        width: "100%",
                      }}
                      placeholder="Select ingrediants"
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <Divider
                            style={{
                              margin: "8px 0",
                            }}
                          />
                          <Space
                            style={{
                              padding: "0 8px 4px",
                            }}
                          >
                            <Input
                              placeholder="Please enter Ingrediants name"
                              ref={inputRef}
                              value={name}
                              onChange={onNameChange}
                              className="max-w-96 w-full"
                            />
                            <Button
                              type="text"
                              icon={<PlusOutlined />}
                              onClick={addItem}
                            >
                              Add item
                            </Button>
                          </Space>
                        </>
                      )}
                      options={selectItems.map((item) => ({
                        label: item,
                        value: item,
                      }))}
                    />
                  </Form.Item>
                </div>
                <div className="pb-3">
                <h3 className="text-lg font-semibold pb-1 ">Brand</h3>
                <Form.Item name="type" className="">
                    <Select
                      className="shadow-md rounded-md py-1.5 px-4 "
                      bordered={false}
                      placeholder="Select Type"
                      defaultValue={"halal"}
                    >
                      <Select.Option value="halal">Halal</Select.Option>
                      <Select.Option value="vegan">Vegan</Select.Option>
                      <Select.Option value="organic">Organic</Select.Option>
                    </Select>
                  </Form.Item>
              </div>
                <div className="flex flex-col  space-x-4 ">
                  <h3 className="text-lg font-semibold pb-4">Certifications</h3>
                  <div className="space-y-2 flex flex-col">
                    <Form.Item
                      name="credentials"
                      className="flex items-center space-x-4 "
                      direction="vertical"
                    >
                      <Checkbox.Group
                        // options={CertificateOptions}
                        // className="flex flex-wrap "
                        className="flex flex-col space-y-2"
                      >
                        {CertificateOptions.map((item, index) => {
                          return (
                            <Checkbox
                              style={{
                                marginInlineStart: "0",
                                marginBottom: "12px",
                              }}
                              key={index}
                              value={item}
                            >
                              <p className="text-sm font-semibold">{item}</p>
                            </Checkbox>
                          );
                        })}
                      </Checkbox.Group>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 p-5">
            <div className="flex flex-col space-y-4 shadow-lg p-5 w-1/2 border">
              <div className="w-full">
                <h2 className="text-xl font-bold text-center pb-4">
                  Traceability
                </h2>
                <h3 className="text-lg font-semibold pb-1 ">
                  Country of Origin
                </h3>
                <Form.Item name="country" className="">
                <Select
                    showSearch
                    style={{
                      width: "100%",
                    }}
                    placeholder="Select a country"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").toLowerCase().includes((input).toLowerCase())
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={
                      Countries?.map((country) => ({
                        label: country.value,
                        value: country.value,
                      })) ?? []

                    }
                  />
                </Form.Item>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold pb-1 ">
                  Date of Production
                </h3>
                <Form.Item name="dateofproduction" className="">
                  <DatePicker className="shadow-md rounded-md py-1.5 px-4 flex" />
                </Form.Item>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold pb-1 ">Supplier Name</h3>
                <Form.Item name="suppliername" className="">
                  <Input
                    placeholder="Supplier Name"
                    className="shadow-md rounded-md py-1.5 px-4"
                  />
                </Form.Item>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold pb-1 ">
                  Barcode ID
                </h3>
                <Form.Item name="productionfacility" className="">
                  <Input
                  type="number"
                    placeholder="Production facility"
                    className="shadow-md rounded-md py-1.5 px-4"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col space-y-4 shadow-lg p-5 w-1/2 border">
              <div className="">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold  pb-4">Listing</h2>
                  {/* <h2 className="text-lg font-medium underline text-[#3F0FF3] cursor-pointer pb-4">
                    URL Upload
                  </h2> */}
                </div>
                <div className="pb-3 shadow-lg px-5 border py-3 rounded-md mb-4">
                  <h3 className="text-lg font-semibold pb-2">Pictures <span className="text-sm font-normal">
                    (Max 7 pictures)
                  </span></h3>
                  <div className="flex overflow-x-scroll space-x-4 py-4">
                    {
                      imageUrl ? (
                        imageUrl.map((url, index) => {
                          return (
                            <div className="flex flex-col space-y-2 items-center" key={index}>
                              <img
                                src={url}
                                alt="avatar"
                                style={{ width: "100px", height: "100px" }}
                              />
                              <div
                                className="bg-white text-black py-1.5 px-3 shadow-lg border font-semibold cursor-pointer"
                                onClick={() => handleRemove(index)}
                              >
                                Remove
                              </div>
                            </div>
                          );
                        }
                        )
                      ) : null
                    }
                    </div>
                    


                  <Upload
                    onChange={handleFileChange}
                    customRequest={dummyRequest}
                    className="avatar-uploader "
                    listType="picture-card"
                    showUploadList={showUploadList}
                  >
                    {uploadButton}
                  </Upload>

                  <div className="flex space-x-4 justify-center py-4">
                    <div
                      onClick={handleUpload}
                      className="bg-black text-white py-1.5 px-3 cursor-pointer shadow-lg border border-black  font-semibold "
                    >
                      Upload
                    </div>

                    {!imageUrl ? (
                      <div className="bg-white text-black py-1.5 px-3 shadow-lg border font-semibold">
                        Cancel
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col  space-x-4 pt-4">
                  {/* <h3 className="text-lg font-semibold pb-4">Product Status</h3> */}
                  <div className="">
                    {/* <div className="border-b-2 border-black pb-4 w-[60%] mx-auto">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={["click"]}
                        className="shadow-md rounded-sm py-1.5 px-4 w-80 flex border mx-auto"
                      >
                        <span className=" flex justify-between items-center w-40 ">
                          <p>Pending</p>
                          <DownOutlined />
                        </span>
                      </Dropdown>
                    </div> */}
                    <div className="flex space-x-4 justify-center py-4">
                      {/* <button className="bg-white text-black py-2 px-5 shadow-lg border font-semibold text-lg">
                        Preview
                      </button> */}

                      <Button
                       disabled={loading}
                        htmlType="submit"
                        className="bg-primary text-white py-2 h-12 flex items-center px-5 shadow-lg border border-primary font-semibold text-lg"
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditProduct;
