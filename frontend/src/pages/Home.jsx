import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div className="w-36 pt-36 pl-20">
          <img src="../img/paytm_upi.avif" alt="" />
        </div>
        <div className="pt-10 justify-end grid grid-cols-2 pl-16">
          <div className=" ">
            <div className="text-6xl font-bold">
              India's Most-loved <br />
              Payments App
            </div>
            <div className="pt-8 text-2xl">
              Recharge & pay bills, book flights & movie tickets, <br />
              open a savings account, invest in stocks & mutual <br /> funds,
              and do a lot more.
            </div>
          </div>
          <div className="flex justify-end pr-10 px-72 h-7/8">
            <img src="../img/paytm_home.avif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
