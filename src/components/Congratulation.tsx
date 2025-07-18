import { Link } from "react-router-dom";

import { useState } from "react";

const Congratulation = () => {
  const [voucherClicked, setVoucherClicked] = useState(false);
  const [raffleClicked, setRaffleClicked] = useState(false);

  const handleVoucherClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.peryaplay.com/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExVUlNbE9hUzNDOWdrVUMzVQEev9s6kvCxEqE1VVSVUPq1kK4jML7uCBafjlxd9f92vFmcK-gC8GXAJsRVcOg_aem_kLPrFc3V0reT3kegPK6P8A",
      "_blank"
    );
    setVoucherClicked(true);
  };

  const handleRaffleClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.facebook.com/groups/peryaplaycommunity/?ref=share&mibextid=wwXIfr&rdid=162nOtaTKGeRIiAR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F16h1n2w5he%2F%3Fmibextid%3DwwXIfr#",
      "_blank"
    );
    setRaffleClicked(true);
  };

  const allLinksClicked = voucherClicked && raffleClicked;

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
      <div className="rounded-3xl bg-[#104AA6] border border-blue-800 py-3 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-sm">
            Log in to your account <br />
            at PeryaPlay.
          </h1>
          <button
            onClick={handleVoucherClick}
            className="px-2 py-4 w-full text-sm"
            style={{
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: voucherClicked ? "not-allowed" : "pointer",
              background: voucherClicked
                ? "linear-gradient(to right, #10b981, #059669)"
                : "linear-gradient(to right, #fbbf24, #f59e0b)",
              textAlign: "center",
              maxWidth: "150px",
              opacity: 1,
              transition: "background 0.2s",
            }}
            disabled={voucherClicked}
          >
            {voucherClicked ? "✓ Done" : "Open Link"}
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-[#FFBE00] text-md mb-5 mt-5">
          {" "}
          🎁 For raffles & giveaways
        </h1>
      </div>
      <div className="rounded-3xl bg-[#104AA6] border border-blue-800 py-3 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-sm">
            Stay active in our Facebook group <br /> and channels!
          </h1>
          <button
            onClick={handleRaffleClick}
            className="px-2 py-4 w-full text-sm"
            style={{
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              cursor: raffleClicked ? "not-allowed" : "pointer",
              background: raffleClicked
                ? "linear-gradient(to right, #10b981, #059669)"
                : "linear-gradient(to right, #fbbf24, #f59e0b)",
              textAlign: "center",
              maxWidth: "150px",
              opacity: 1,
              transition: "background 0.2s",
            }}
            disabled={raffleClicked}
          >
            {raffleClicked ? "✓ Done" : "Open Link"}
          </button>
        </div>
      </div>

  
        <div className="mt-10 flex justify-center items-center">
          <img src="/assets/osas-success.svg" alt="img" />
        </div>
    </div>
  );
};

export default Congratulation;
