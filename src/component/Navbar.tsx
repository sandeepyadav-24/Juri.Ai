const Navbar = () => {
  return (
    <div className="flex flex-row justify-between  mx-10 my-5 ">
      <div className=" flex flex-row justify-between">
        <div className="font-bold text-4xl mx-7">Juri.Ai</div>
        <div className="flex flex-row">
          <div className="mx-3 my-2">Advocates</div>
          <div className="mx-3 my-2">Pricing </div>
          <div className="mx-3 my-2">ChatBot</div>
        </div>
      </div>
      <div className="flex flex-row  ">
        <div className="mx-3 text-[#284AF2] border-[1px] border-[#284AF2] px-3 py-2 rounded-3xl">
          Sign Up
        </div>
        <div className="mx-3 my-2">Login</div>
      </div>
    </div>
  );
};
export default Navbar;
