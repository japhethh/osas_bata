"use client";

import { useState } from "react";
import TopWinner from "./TopWinner";
import Hello from "./Hello";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showGamingRegistration, setShowGamingRegistration] = useState(false);
  const [showSocialMediaStep, setShowSocialMediaStep] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowGamingRegistration(false);
    setShowSocialMediaStep(false);
  };

  const handleNextStep = () => {
    setShowModal(false);
    setShowGamingRegistration(true);
  };

  const handleSocialMediaStep = () => {
    setShowGamingRegistration(false);
    setShowSocialMediaStep(true);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-repeat-y bg-top bg-[url('/assets/background-03.svg')] ">
        <div className="flex justify-center items-center px-4">
          <div className="flex flex-col items-center translate-y-18">
            <div>
              <img src="/assets/hero-pepegang.svg" alt="Hero" />
            </div>
            <div className="mt-8">
              <img src="/assets/hero-text.svg" alt="Hero" />
            </div>
            <div>
              <img src="/assets/hero-osas-image.svg" alt="Hero" />
            </div>
            <div onClick={handleButtonClick} style={{ cursor: "pointer" }}>
              <img src="/assets/hero-button.svg" alt="button" />
            </div>
          </div>
        </div>
        <TopWinner />
      </div>

      {/* Initial Registration Modal */}
      {showModal && (
        <div
          className=""
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "384px",
              height: "80vh",
              background: "#033E9C",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              padding: "32px 24px",
              position: "relative",
              fontFamily: "system-ui, -apple-system, sans-serif",
              animation: "slideUp 0.3s ease-out",
              transform: showModal ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            <RegistrationForm onNext={handleNextStep} />
          </div>
        </div>
      )}

      {/* Gaming Registration Modal */}
      {showGamingRegistration && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "384px",
              height: "90vh",
              background: "#1e40af",
              borderRadius: "24px",
              padding: "0",
              position: "relative",
              fontFamily: "system-ui, -apple-system, sans-serif",
              animation: "slideUp 0.3s ease-out",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <GamingRegistrationForm
              onNext={handleSocialMediaStep}
              onClose={closeModal}
            />
          </div>
        </div>
      )}

      {/* Social Media Step Modal */}
      {showSocialMediaStep && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "384px",
              height: "90vh",
              background:
                "linear-gradient(to bottom, #1e40af, #1d4ed8, #2563eb)",
              borderRadius: "24px",
              padding: "0",
              position: "relative",
              fontFamily: "system-ui, -apple-system, sans-serif",
              animation: "slideUp 0.3s ease-out",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <SocialMediaStep onClose={closeModal} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

const RegistrationForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    const { fullName, email, contactNo } = formData;
    // Full name: at least 2 words
    if (!fullName.trim() || fullName.trim().split(' ').length < 2) {
      alert("Please enter your full name (at least 2 words).");
      return;
    }
    // Email: basic regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Contact No: PH mobile, starts with 09, at least 12 digits
    const contactRegex = /^09\d{10,}$/;
    if (!contactNo.trim() || !contactRegex.test(contactNo)) {
      alert("Please enter a valid Philippine mobile number (at least 12 digits, e.g. 091234567890).");
      return;
    }
    onNext();
  };

  return (
    <div
      className="px-2"
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <div
        className="flex justify-center items-center"
        style={{ marginBottom: "32px" }}
      >
        <img src="/assets/hero-pepegang.svg" alt="image" />
      </div>

      <h2
        className="-translate-y-5 text-center"
        style={{
          color: "#fbbf24",
          fontSize: "18px",

          margin: "0 0 8px 0",
        }}
      >
        <span className="font-bold">Step 1:</span>{" "}
        <span className="text-white">Raffle & Rewards Registration.</span>
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="fullName"
            style={{ color: "white", fontWeight: "500", fontSize: "16px" }}
          >
            Full Name
          </label>
          <input
            id="fullName"
            className="rounded-2xl"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "rgba(37, 99, 235, 0.3)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              padding: "0 16px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="email"
            style={{ color: "white", fontWeight: "500", fontSize: "16px" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="rounded-2xl"
            placeholder="doe.john@gmail.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "rgba(37, 99, 235, 0.3)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              padding: "0 16px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="contactNo"
            style={{ color: "white", fontWeight: "500", fontSize: "16px" }}
          >
            Contact No.
          </label>
          <input
            id="contactNo"
            type="tel"
            className="rounded-2xl"
            placeholder="09123456789"
            value={formData.contactNo}
            onChange={(e) => handleInputChange("contactNo", e.target.value)}
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "rgba(37, 99, 235, 0.3)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              padding: "0 16px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      <div
        onClick={handleNext}
        style={{
          cursor: "pointer",
          marginTop: "32px",
          display: "flex",
          justifyContent: "center",
          transition: "transform 0.2s ease",
        }}
      >
        <img src="/assets/next-button.svg" alt="next" />
      </div>
    </div>
  );
};

const GamingRegistrationForm = ({ onNext, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    mobileNumber: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Removed validation - now goes directly to next step
  const handleRegister = () => {
    console.log("Gaming registration data:", formData);
    onNext(); // Move to social media step immediately
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header - Fixed */}
      <div
        style={{
          padding: "24px",
          textAlign: "center",
          background: "#1e40af",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/hero-pepegang.svg"
            alt="image"
            style={{ width: "150px", height: "auto" }}
          />
        </div>
        <h2
          style={{
            color: "#fbbf24",
            fontSize: "18px",

            margin: "0 0 8px 0",
          }}
        >
          <span className="font-bold">Step 2:</span>{" "}
          <span className="text-white">Gaming Registration.</span>
        </h2>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "14px",
            margin: 0,
          }}
        >
          Click the <span className="font-bold">'Register'</span> button after
          filling up the form.
        </p>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Iframe Section */}
        <div
          className="pb-2 px-2"
          style={{
            height: "450px",
            minHeight: "360px",
            background: "#1e40af",
          }}
        >
          <iframe
            src="https://sureballpanalo.com/register"
            style={{
              width: "100%",
              height: "100%",
              border: "2px solid #3b82f6",
              borderRadius: "12px",
              display: "block",
            }}
            title="Embedded Website"
          />
        </div>

        {/* Bottom Section with Next Button */}
        <div
          style={{
            background: "#1e40af",
            padding: "32px 24px",
            textAlign: "center",
            color: "white",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="-translate-y-5">
            <div
              className="flex justify-center items-center"
              style={{ marginBottom: "16px" }}
            >
              <img
                src="/assets/arrow-up-02.svg"
                alt="arrow"
                style={{ width: "32px", height: "32px" }}
              />
            </div>

            <h1
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                margin: "0 0 16px 0",
              }}
            >
              Scroll Down
            </h1>

            <p
              className="italic text-xs"
              style={{
                fontSize: "14px",
                margin: "0 0 32px 0",
                lineHeight: "1.5",
              }}
            >
              <span className="font-bold">Note:</span> Please make sure to fill
              up the form before clicking the 'Next' button.
            </p>
          </div>

          {/* Next Button - Now works without validation */}
          <div
            className="-translate-y-5"
            onClick={handleRegister}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src="/assets/next-button.svg" alt="next" />
          </div>
        </div>
      </div>

      {/* Close Button - Fixed Position */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        ×
      </button>
    </div>
  );
};

const SocialMediaStep = ({ onClose }) => {
  const [completedActions, setCompletedActions] = useState({
    facebookPage: false,
    facebookGroup: false,
    facebookChannel: false,
  });

  const handleSocialAction = (action, url) => {
    window.open(url, "_blank");
    setCompletedActions((prev) => ({
      ...prev,
      [action]: true,
    }));
  };

  const handleClaimRewards = () => {
    const allCompleted = Object.values(completedActions).every(Boolean);
    if (allCompleted) {
      alert(
        "🎉 Congratulations! You have successfully completed all steps and can now claim your rewards!"
      );
      onClose();
    } else {
      alert(
        "Please complete all social media actions before claiming rewards!"
      );
    }
  };

  return (
    <div
      style={{
        height: "130%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        ×
      </button>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div className="flex justify-center items-center mb-4">
            <img
              src="/assets/hero-pepegang.svg"
              alt="image"
              width={200}
              height={200}
            />
          </div>

          <h2
            style={{
              color: "#fbbf24",
              fontSize: "20px",
              margin: "0 0 16px 0",
            }}
          >
            <span className="font-bold">Step 3:</span>
            <span className="text-white"> Follow our SocMed Accounts.</span>
          </h2>

          <p
            style={{
              color: "white",
              fontSize: "16px",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            This is the last step to join our daily raffle and exclusive
            giveaways!
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {/* Facebook Page */}
          <div
            className="py-4 px-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/assets/peryaplay-profile.svg"
                  alt="PERYA PLAY"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <span
                className="w-30"
                style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
              >
                Like our Facebook page
              </span>
            </div>
            <button
              onClick={() =>
                handleSocialAction(
                  "facebookPage",
                  "https://www.facebook.com/peryaplayofficial?mibextid=wwXIfr&rdid=51af6cqrCdpAEf2M&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Yq1aF74x6%2F%3Fmibextid%3DwwXIfr#"
                )
              }
              style={{
                background: completedActions.facebookPage
                  ? "linear-gradient(to right, #10b981, #059669)"
                  : "linear-gradient(to right, #fbbf24, #f59e0b)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              {completedActions.facebookPage ? "✓ Done" : "Open Link"}
            </button>
          </div>

          {/* Facebook Group */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/assets/peryagang.svg"
                  alt="PERYA PLAY"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <span
                className="w-30"
                style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
              >
                Join our Facebook group
              </span>
            </div>
            <button
              onClick={() =>
                handleSocialAction(
                  "facebookGroup",
                  "https://www.facebook.com/groups/peryaplaycommunity/?ref=share&mibextid=wwXIfr&rdid=Teo8gg09v3mgvbMl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fg%2F16h1n2w5he%2F%3Fmibextid%3DwwXIfr#"
                )
              }
              style={{
                background: completedActions.facebookGroup
                  ? "linear-gradient(to right, #10b981, #059669)"
                  : "linear-gradient(to right, #fbbf24, #f59e0b)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              {completedActions.facebookGroup ? "✓ Done" : "Open Link"}
            </button>
          </div>

          {/* Facebook Channel */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#000",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/assets/peryaplay-profile.svg"
                  alt="PERYA PLAY"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div
                className="w-30"
                style={{ color: "white", fontSize: "14px", fontWeight: "500" }}
              >
                Join Our Facebook Channel
              </div>
            </div>
            <button
              onClick={() =>
                handleSocialAction(
                  "facebookChannel",
                  "https://www.facebook.com/perya.play.2024?mibextid=wwXIfr&rdid=82xYYJfBrmQuhbnx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ckj3vka3a%2F%3Fmibextid%3DwwXIfr#"
                )
              }
              style={{
                background: completedActions.facebookGroup
                  ? "linear-gradient(to right, #10b981, #059669)"
                  : "linear-gradient(to right, #fbbf24, #f59e0b)",
                color: "white",
                border: "none",
                borderRadius: "25px",
                padding: "12px 24px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                minWidth: "100px",
              }}
            >
              {completedActions.facebookChannel ? "✓ Done" : "Open Link"}
            </button>
          </div>
        </div>

        <div>
          <p className="text-center italic text-xs text-white -translate-y-6">
            Note: Follow the steps above first to unlock claim button
          </p>
        </div>

        <div className="flex w-full justify-center py-5 items-center gap-4 -translate-y-5">
          {Object.values(completedActions).every(Boolean) ? (
            <Link to="/congratulation">
              <img
                src="/assets/claim-reward.svg"
                alt="img"
                className="cursor-pointer"
              />
            </Link>
          ) : (
            <button
              onClick={handleClaimRewards}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "not-allowed",
                opacity: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              disabled
              title="Complete all steps to claim your reward"
            >
              <img src="/assets/claim-reward.svg" alt="img" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
