import Image from "next/image";
const LeftNavbar = () => {
  return (
    <div className=" md:w-1/5 px-5 bg-[#F9F9F9] h-screen">
      <div className="Profile py-5">
        <div className="flex flex-row px-1 py-3">
          <Image
            src="/profile.png"
            width={70}
            height={70}
            alt="Picture of the author"
            className="rounded-full"
          />
          <div className="py-4 px-4">
            <h1>Ankur Bisht</h1>
            <h1>Lead Advisor</h1>
          </div>
        </div>
      </div>
      <div className="Feature_1 my-4 ">
        <div className="text-[#434769] font-semibold">CONTRACT</div>
        <div className="List text-[#3C455A] ">
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Ai Generation
          </div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Contract Gen
          </div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">Issues</div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Reports
          </div>
        </div>
      </div>
      <div className="Feature_2 my-4  ">
        <div className="text-[#434769] font-semibold">DEVELOPMENT</div>
        <div className="List text-[#3C455A]">
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">Code</div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Releases
          </div>
        </div>
      </div>
      <div className="Feature_3 my-4 ">
        <div className="text-[#434769] font-semibold">PLANNING</div>
        <div className="List text-[#3C455A]">
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Deployments
          </div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            On-call
          </div>
        </div>
      </div>
      <div className="setting my-4  ">
        <div className="text-[#434769] font-semibold">SETTING</div>
        <div className="List text-[#3C455A] ">
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            General
          </div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">Token</div>
          <div className="hover:bg-[#CDCDCD] rounded-md  px-3 py-1">
            Data controls
          </div>
          <div></div>
        </div>
      </div>
      <hr className="font-bold text-xl" />
      <div className="my-2">
        <div className="font-semibold text-[#434769]">Switch Account</div>
        <div className="font-semibold text-[#434769]">Log Out</div>
      </div>
    </div>
  );
};

export default LeftNavbar;
