import { useState } from "react";

export default function RegistrationForm() {
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
    console.log("Form data:", formData);
  };

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
      {/* Brand Logo */}
      <div className="flex justify-center items-center"
      >
       <img src="/assets/hero-pepegang.svg" alt="image" />
      </div>

      {/* Form Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {/* Full Name Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="fullName"
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
            }}
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
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(147, 197, 253, 1)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.4)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(96, 165, 250, 0.3)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.3)";
            }}
          />
        </div>

        {/* Email Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="email"
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
            }}
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
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(147, 197, 253, 1)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.4)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(96, 165, 250, 0.3)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.3)";
            }}
          />
        </div>

        {/* Contact Number Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            htmlFor="contactNo"
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "16px",
            }}
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
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(147, 197, 253, 1)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.4)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(96, 165, 250, 0.3)";
              e.target.style.backgroundColor = "rgba(37, 99, 235, 0.3)";
            }}
          />
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "24px",
          right: "24px",
          height: "56px",
          background: "linear-gradient(to bottom, #fbbf24, #f59e0b, #d97706)",
          color: "white",
          fontWeight: "900",
          fontSize: "18px",
          letterSpacing: "0.1em",
          border: "2px solid #fcd34d",
          borderRadius: "16px",
          cursor: "pointer",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.background =
            "linear-gradient(to bottom, #f59e0b, #d97706, #b45309)";
        }}
        onMouseOut={(e) => {
          e.target.style.background =
            "linear-gradient(to bottom, #fbbf24, #f59e0b, #d97706)";
        }}
      >
        NEXT
      </button>

      <style jsx>{`
        input::placeholder {
          color: rgba(191, 219, 254, 0.6);
        }
      `}</style>
    </div>
  );
}
