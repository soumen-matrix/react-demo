import logo from "../../assets/nykaa.svg";
import banner from "../../assets/banner.png";

const Home = () => {
  let tabOptionArr = [
    "Categories",
    "Brands",
    "Luxe",
    "Nykaa Fashion",
    "Beauty Advice",
  ];
  let tabOptionArr2 = [
    "Makeup",
    "Skin",
    "Hair",
    "Appliances",
    "Bath & Body",
    "Natural",
    "Mom & Baby",
    "Health & Wellness",
    "Men",
    "Fragrance",
    "Lingerie & Accessories",
  ];
  return (
    <div>
      {/* //-------header section start--------// */}

      {/* //----top section-----// */}
      <div className="flex  bg-linear-to-r from-[#B8A5FE] to-[#EFC49A] justify-center items-center">
        <div className="flex w-3/4 items-center">
          <p className="text-[16px] font-[600] text-[#03021a]">
            Deals As Vibrant As You! Shop From Our Holi Hungama Sale Now!
          </p>

          <div className="flex items-center ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="mobile"
              height={35}
              width={20}
            >
              <path d="M12,1.5a.5.5,0,1,0,.5.5A.5.5,0,0,0,12,1.5ZM17,0H7A2.5,2.5,0,0,0,4.5,2.5v19A2.5,2.5,0,0,0,7,24H17a2.5,2.5,0,0,0,2.5-2.5V2.5A2.5,2.5,0,0,0,17,0Zm1.5,21.5A1.5,1.5,0,0,1,17,23H7a1.5,1.5,0,0,1-1.5-1.5V18h13Zm0-4.5H5.5V4h13Zm0-14H5.5V2.5A1.5,1.5,0,0,1,7,1H17a1.5,1.5,0,0,1,1.5,1.5ZM12,22a1.5,1.5,0,1,0-1.5-1.5A1.5,1.5,0,0,0,12,22Zm0-2a.5.5,0,1,1-.5.5A.5.5,0,0,1,12,20Z"></path>
            </svg>
            <p className="text-[14px] font-[400] text-[#03021a]">Get App</p>

            <div className="h-[25px] w-[1px] bg-[#03021a] mx-[20px]" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={20}
              viewBox="0 0 12 16"
              id="location"
            >
              <g
                id="Octicons"
                fill="none"
                fill-rule="evenodd"
                stroke="none"
                stroke-width="1"
              >
                <g id="location" fill="#000">
                  <path
                    id="Shape"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </g>
              </g>
            </svg>
            <p className="text-[14px] font-[400] text-[#03021a] ml-[5px]">
              Store & Events
            </p>

            <div className="h-[25px] w-[1px] bg-[#03021a] mx-[20px]" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="gift"
              height={40}
              width={24}
            >
              <path
                fill="none"
                stroke="#222"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M44.14 17.16a9.4 9.4 0 0 0 1.13-.68c2.92-2.05 3.82-5.82 2-8.4s-5.66-3-8.58-.93-4.42 5.73-6.05 10zM8.7 30.46H55.31a0 0 0 0 1 0 0v23.7a4 4 0 0 1-4 4H12.7a4 4 0 0 1-4-4V30.46A0 0 0 0 1 8.7 30.46z"
              ></path>
              <rect
                width="11.7"
                height="27.7"
                x="26.15"
                y="30.46"
                fill="none"
                stroke="#222"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              ></rect>
              <path
                fill="none"
                stroke="#222"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M19.86,17.16a8.57,8.57,0,0,1-1.12-.68c-2.92-2.05-3.83-5.82-2-8.4s5.66-3,8.59-.93,4.41,5.73,6.05,10Z"
              ></path>
              <rect
                width="51"
                height="13.3"
                x="6.5"
                y="17.16"
                fill="none"
                stroke="#222"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                rx="3"
              ></rect>
              <rect
                width="13.83"
                height="13.3"
                x="25.09"
                y="17.16"
                fill="none"
                stroke="#222"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
              ></rect>
            </svg>
            <p className="text-[14px] font-[400] text-[#03021a] ml-[5px]">
              Gift Card
            </p>

            <div className="h-[25px] w-[1px] bg-[#03021a] mx-[20px]" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="help"
              height={24}
              width={24}
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"></path>
            </svg>
            <p className="text-[14px] font-[400] text-[#03021a] ml-[5px]">
              Help
            </p>
          </div>
        </div>
      </div>

      {/* //----1st section-----// */}
      <div className="flex justify-center py-3 border-b-1 border-[#aaaaad]">
        <div className="flex w-3/4 items-center">
          <div className="flex w-1/2 items-center justify-between">
            <img src={logo} height={50} width={95} />
            {tabOptionArr.map((item) => {
              return (
                <p className="text-[14px] font-[600] text-[#03021a]">{item}</p>
              );
            })}
          </div>
          <input
            className="bg-[#F4F4F4] ml-auto w-50 px-3 py-2 border-1 border-gray-300 rounded-md text-[14px] font-[400]"
            placeholder="Search on Nykaa"
          />
          <div className="bg-pink-500 px-3 py-2 rounded-md text-[#FFFF] text-[14px] font-[600] ml-3 mr-[30px]">
            Sign in
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            id="bag"
          >
            <path
              fill="#14171A"
              fill-rule="evenodd"
              d="M16 18.75h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#14171A"
              fill-rule="evenodd"
              d="M7.677 6.25a4.246 4.246 0 0 1 4.24-4h.003a4.25 4.25 0 0 1 4.242 4h.836a4.75 4.75 0 0 1 4.749 4.656l.12 6a4.75 4.75 0 0 1-4.75 4.844H7.12a4.751 4.751 0 0 1-4.75-4.656l-.118-6A4.75 4.75 0 0 1 7 6.25h.677Zm-.007 1.5H7a3.248 3.248 0 0 0-3.25 3.315l.12 6a3.25 3.25 0 0 0 3.249 3.185h9.999a3.248 3.248 0 0 0 3.249-3.315l-.12-6a3.25 3.25 0 0 0-3.25-3.185h-.827V9a.75.75 0 0 1-1.5 0V7.75h-5.5V9a.75.75 0 0 1-1.5 0V7.75Zm6.989-1.5a2.751 2.751 0 0 0-2.74-2.5h-.001a2.748 2.748 0 0 0-2.737 2.5h5.478Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/* //----2nd section-----// */}
      <div className="flex justify-center  py-3">
        <div className="flex w-3/4 items-center justify-around">
          {tabOptionArr2.map((item) => {
            return (
              <p className="text-[14px] font-[500] text-[#595961]">{item}</p>
            );
          })}
        </div>
      </div>
      {/* //-------header section end--------// */}

      {/* //-------banner section start--------// */}
      <img src={banner} />
      {/* //-------banner section end--------// */}
    </div>
  );
};

export default Home;
