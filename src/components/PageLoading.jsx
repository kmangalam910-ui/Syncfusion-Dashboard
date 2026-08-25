import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "./Skeleton";

const PageLoading = ({children}) => {

  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300)

    return () => clearTimeout(timer)
  }, [location])

  return isLoading ? <Skeleton /> : children;
}

export default PageLoading;