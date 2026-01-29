"use client";

import { handleSignOut } from "@/lib/actions/auth";
import {
  ShieldExclamationIcon,
  ArrowLeftIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

/**
 * AccessDenied Component
 * Handles the UI when a user is authenticated but doesn't have course access.
 * Includes a "Buy Now" button that integrates with PayOS.
 */
export default function AccessDenied({ userEmail, courseId }) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          amount: 500000,
          description: `Mua ${courseId} ${userEmail}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.details || "Payment initialization failed");
      }

      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Lỗi tạo link thanh toán. Vui lòng thử lại sau.");
      }
    } catch (err) {
      console.error("Purchase Error:", err);
      alert(`Đã có lỗi xảy ra: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-red-500/20 blur-2xl"></div>
            <div className="relative rounded-3xl border border-red-500/30 bg-[#1a1111] p-6 shadow-2xl">
              <ShieldExclamationIcon className="h-16 w-16 text-red-500" />
            </div>
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
          Truy cập bị từ chối
        </h1>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-md">
          <p className="mb-4 leading-relaxed text-gray-300">
            Bạn đang đăng nhập với email: <br />
            <span className="font-mono text-sm text-blue-400">{userEmail}</span>
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            Rất tiếc, tài khoản này chưa đăng ký khóa học:{" "}
            <strong className="text-white">{courseId}</strong>.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handlePurchase}
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
          >
            <SparklesIcon
              className={`h-5 w-5 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Đang tạo mã thanh toán..." : "Mua khóa học ngay (500k)"}
          </button>

          <Link
            href="/blog"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-3 font-medium text-gray-300 transition-all hover:bg-white/5"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Quay lại Blog
          </Link>

          <form action={handleSignOut}>
            <input type="hidden" name="redirectTo" value="/signin" />
            <button
              type="submit"
              className="text-sm text-gray-500 underline underline-offset-4 hover:text-gray-300"
            >
              Đăng nhập bằng tài khoản khác
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
