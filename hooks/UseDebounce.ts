import { useEffect, useState } from "react";

// sử dụng cái này để để deplay cái value, rồi mới request api
export function useDebounce<T> (value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)
  useEffect(()=>{
    const timer = setTimeout(()=> setDebouncedValue(value), delay || 500)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debouncedValue
}

