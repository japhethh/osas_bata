import { Link } from "react-router-dom";

const Congratulation = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "384px",
        margin: "0 auto",
        height: "100vh",
        background: "#033E9C",
        padding: "32px 24px",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="flex justify-center items-center mb-4">
        <img
          src="/assets/hero-pepegang.svg"
          alt="image"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center items-center">
        <img src="/assets/congrats-icon.svg" alt="congratulations" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-center text-white">
          🎊 Vicki Murillo 🎊
        </h1>
      </div>
      <div>
        <h1 className="text-center py-4 text-white">Here’s what you get:</h1>
      </div>
      <div className="flex justify-center items-center">
        <img src="/assets/reward-01.svg" alt="image" />
      </div>
      <div>
        <h1 className="text-center py-4 text-white">
          Instructions to claim your rewards:
        </h1>
      </div>
      <div>
        <h1 className="text-[#FFBE00] text-md mb-5">🎟️ For vouchers</h1>
      </div>
      <div className="rounded-full bg-[#104AA6] border border-blue-800 py-3 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-sm">
            Stay active in our Facebook group <br /> and channels!
          </h1>
          <a
            href="https://www.peryaplay.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExVUlNbE9hUzNDOWdrVUMzVQEev9s6kvCxEqE1VVSVUPq1kK4jML7uCBafjlxd9f92vFmcK-gC8GXAJsRVcOg_aem_kLPrFc3V0reT3kegPK6P8A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-4 w-full text-sm"
            style={{
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: "#FFBE00",
              textAlign: "center",
              maxWidth: "150px",
            }}
          >
            Open Link
          </a>
        </div>
      </div>

      <div>
        <h1 className="text-[#FFBE00] text-md mb-5 mt-5">
          {" "}
          🎁 For raffles & giveaways
        </h1>
      </div>
      <div className="rounded-full bg-[#104AA6] border border-blue-800 py-3 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-sm">
            Stay active in our Facebook group <br /> and channels!
          </h1>
          <a
            href="https://www.facebook.com/groups/peryaplaycommunity/?ref=share&mibextid=wwXIfr&rdid=162nOtaTKGeRIiAR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F16h1n2w5he%2F%3Fmibextid%3DwwXIfr#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-4 w-full text-sm"
            style={{
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: "#FFBE00",
              textAlign: "center",
              maxWidth: "150px",
            }}
          >
            Open Link
          </a>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <img src="/assets/osas-success.svg" alt="img" />
      </div>
    </div>
  );
};

export default Congratulation;
