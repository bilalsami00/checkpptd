"use client";
import React from "react";

interface Props {
  onClose: () => void;
  onSubscribe: () => void;
}

export default function DashboardPopup({ onClose, onSubscribe }: Props) {
  return (
    <div className="fixed inset-0 bg-[#00000033] flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our service</h2>
        <p className="text-gray-600 mb-6">Get full access to premium peptide insights and tracking features.</p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            Maybe Later
          </button>
          <button
            className="bg-[#06AB78] text-white px-4 py-2 rounded"
            onClick={onSubscribe}
          >
            Subscribed
          </button>
        </div>
      </div>
    </div>
  );
}
