"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { square } from "@/lib/utils";

const Home = () => {
  const [count, setCount] = useState(0);
  const [multiCount, setMultiCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const logValue = () => {
    console.log("Value: ", inputValue);
  };

  const handleReset = () => {
    setInputValue("");
    setCount(0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSquareClick = () => {
    const value = Number(inputValue) || 0;
    setCount(square(value));
  };

  useEffect(() => {
    logValue();
  }, [inputValue, logValue]);

  useEffect(() => {
    setMultiCount(count * count);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="w-full max-w-sm space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          type="number"
          placeholder="Number to square"
        />
        <div className="flex flex-col gap-2">
          <Button onClick={handleSquareClick}>
            Square me
          </Button>
        </div>
        <div>
          <p>square = {count}</p>
          <p>square on square = {multiCount}</p>
        </div>
        <div>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
