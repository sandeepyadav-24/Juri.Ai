const LeftNavbar = () => {
  return (
    <div className="w-1/5 mx-5 bg-[#F9FCFE] h-screen">
      <div className="Profile my-5">
        <div className="flex flex-row px-1 py-3">
          <div className="bg-[#8B60CD] w-10 h-10"></div>
          <div>
            <h1>Advocate_Name / User_Name</h1>
            <h1>Advocate_designation</h1>
          </div>
        </div>
      </div>
      <div className="Feature_1 my-4 ">
        <div className="text-[#434769] font-semibold">CONTRACT</div>
        <div className="List text-[#3C455A] mx-3">
          <div>Ai Generation</div>
          <div>Contract Gen</div>
          <div>Issues</div>
          <div>Reports</div>
        </div>
      </div>
      <div className="Feature_2 my-4  ">
        <div className="text-[#434769] font-semibold">DEVELOPMENT</div>
        <div className="List text-[#3C455A] mx-3">
          <div>Code</div>
          <div>Releases</div>
        </div>
      </div>
      <div className="Feature_3 my-4 ">
        <div className="text-[#434769] font-semibold">PLANNING</div>
        <div className="List text-[#3C455A] mx-3">
          <div>Deployments</div>
          <div>On-call</div>
        </div>
      </div>
      <div className="setting my-3">
        <div className="text-[#434769] font-semibold">SETTING</div>
        <div className="List text-[#3C455A] mx-3">
          <div>General</div>
          <div>Token</div>
          <div>Data controls</div>
          <div></div>
        </div>
      </div>
      <hr />
      <div className="my-52 bg-[#7E8C8D] p-2 rounded-md text-white ml-r">
        <div>Switch Account</div>
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default LeftNavbar;
