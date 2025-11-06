import React, { useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";


const Payments = () => {
   useEffect(() => {
          AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);
  const handlePayment = async (amount) => {
    try {
      // Create an order on backend
    //   const { data } = await axios.post("http://localhost:4000/api/payments/create-order", {
    //     amount,
    //     currency: "INR",
    //   });
        const { data } = await axios.post("http://localhost:4000/api/create-order", {
         amount, currency: "INR",
         });
      // Configure Razorpay options
      const options = {
        key: "rzp_test_RbZFWojAlfpR2j", // Your key_id from .env
        amount: data.order.amount,
        currency: data.order.currency,
        name: "SkillSwap",
        description: "Premium Features Payment",
        order_id: data.order.id,    // Add this, required by Razorpay
        handler: async (response) => {
          //Verify payment on backend
    //    await axios.post("http://localhost:4000/api/payments/verify-payment", response);
          await axios.post("http://localhost:4000/api/verify-payment", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "Guru Ji", // optional
          email: "guruji@example.com", // optional
        },
        theme: { color: "#4F46E5" },
      };

      // Open Razorpay checkout
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("Payment error", err);
      alert("Payment failed to initialize");
    }
  };

  return (
    <div  className="px-4 py-35 pt-50 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50">
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">SkillSwap Premium Options</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => handlePayment(99)}
          data-aos="fade-left"
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow hover:bg-indigo-700 button-anim"
        >
          🗲 Boost Skill Post - ₹99/week
        </button>

        <button
          onClick={() => handlePayment(199)}
          data-aos="fade-right"
          className="bg-green-600 text-white px-8 py-4 rounded-lg shadow hover:bg-green-700 button-anim"
        >
          Get Verified - ₹199
        </button>
      </div>
    </div>
  );
};

export default Payments;
