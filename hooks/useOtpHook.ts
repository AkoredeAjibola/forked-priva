import { useRef, useState } from "react";

export interface useOtpOptions {
  length: number;
  onComplete?: (otp: string) => Promise<void>;
}

const useOtp = ({ length, onComplete }: useOtpOptions) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputsRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (inputsRefs.current.length !== length) {
    inputsRefs.current = Array(length).fill(null);
  }

  function handleInputChange(index: number, value: string) {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < length - 1) {
        inputsRefs.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit != "") && onComplete) {
        onComplete(newOtp.join(""));
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  }

  function handleKeyDown(index: number, key: string) {
    if (key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRefs.current[index - 1]?.focus();
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    const pastedArray = pastedData.slice(0, length).split("");

    if (pastedArray.some((char) => isNaN(Number(char)))) return;

    setOtp((currentOtp) => {
      const newOtp = [...currentOtp];
      pastedArray.forEach((value, index) => {
        if (index < length) newOtp[index] = value;
      });

      // Check if OTP is complete after paste
      if (!newOtp.includes("") && onComplete) {
        onComplete(newOtp.join(""));
      }

      return newOtp;
    });

    // Focus last filled input or first empty input
    const lastFilledIndex = pastedArray.length - 1;
    if (lastFilledIndex < length - 1) {
      inputsRefs.current[lastFilledIndex + 1]?.focus();
    }
  };
  return {
    otp,
    inputsRefs,
    handleKeyDown,
    handleInputChange,
    handlePaste,
  };
};

export default useOtp;
