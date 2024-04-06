"use client";
import React, { useEffect, useState } from "react";

const useDebounce = (value: string | number, ms: number): any => {
  const [debounceValue, setDebounceValue] = useState<string | number>("");
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, ms);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [value, ms]);
  return debounceValue;
};

export default useDebounce;
