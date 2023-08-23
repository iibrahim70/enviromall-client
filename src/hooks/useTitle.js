import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Enviromall`;
  }, [title]);
};

export default useTitle;
