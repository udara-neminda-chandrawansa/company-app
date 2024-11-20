import { useState, useEffect } from "react";

export const Loader = ({ page }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(false);
    };

    // Simulate page load or actual loading logic
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  // Spinner component
  const spinner = (
    <div className="flex justify-center items-center h-screen">
      <svg className="animate-spin h-10 w-10 text-[#006E8A]" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
        ></path>
      </svg>
    </div>
  );

  return isLoading ? spinner : page;
};
