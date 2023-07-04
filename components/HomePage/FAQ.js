import { Collapse } from "antd";

const FAQ = () => {
  const { Panel } = Collapse;
  const text = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, temporibus labore? Omnis eius necessitatibus excepturi, mollitia placeat nesciunt adipisci expedita.
  `;
  const ArrowSvg = () => {
    return (
      <svg
        width={10}
        height={16}
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.99998 15.5L0.406982 13.907L6.31248 8L0.406982 2.093L1.99998 0.5L9.49998 8L1.99998 15.5Z"
          fill="#1C2129"
        />
      </svg>
    );
  };
  return (
    <div className="container mx-auto flex flex-col items-center my-20 w-full max-w-[750px]">
      <h2 className="font-semibold text-4xl mb-12">
        Frequently Asked Questions{" "}
      </h2>
      <div className="w-full">
        <Collapse
          defaultActiveKey={["1"]}
          className="w-full"
          bordered={false}
          ghost
          accordion
        >
          {/* <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  What is Favoland and how does it work?
                </p>
                <ArrowSvg />
              </div>
            }
            key="1"
            className="border-b"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">{text}</p>
          </Panel> */}
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  How do I sign up as a seller on Favoland?
                </p>
                <ArrowSvg />
              </div>
            }
            key="2"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">You sign up, upload your products, advise retailers, fill out information as requested  </p>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  Is there a fee to list my products on Favoland?
                </p>
                <ArrowSvg />
              </div>
            }
            key="3"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">Yes, we charge brands, retailers, and suppliers a minimal fee from $0.10 - $2 based on the number of products you upload.   On the marketplace we do not charge any extra fees for sales.  </p>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  How does Favoland determine which products to show to
                  customers?
                </p>
                <ArrowSvg />
              </div>
            }
            key="4"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">This is based on the consumer’s needs, if they have skin issues, allergies, religious, or personal preferences, we help them find products that meet their needs.  </p>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  How can I optimize my product listings for Favoland?
                </p>
                <ArrowSvg />
              </div>
            }
            key="5"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">Upload all relevant information.  Be transparent about everything.  Report on all areas, ingredients, sustainability, traceability, and ethics.  </p>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  Can I track my sales and performance on Favoland?
                </p>
                <ArrowSvg />
              </div>
            }
            key="6"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">Yes, Favoland will produce quarterly reports about activity on your company, products, and revenue.</p>
          </Panel>
          <Panel
            showArrow={false}
            header={
              <div className="flex justify-between items-center">
                <p className="text-black text-xl">
                  How do I handle shipping and fulfillment for orders made
                  through Favoland?
                </p>
                <ArrowSvg />
              </div>
            }
            key="7"
            style={{
              color: "#000",
              borderBottom: "2px solid #000",
            }}
          >
            <p className="text-gray-600 mb-4 text-lg">You are 100% responsible for shipping and fulfillment.  Favoland is there for the consumers needs.   </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;
