import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

export function useQueryString() {
  const location = useLocation();
  const queryString = useMemo(() => {
    qs.parse(location.search);
  }, [location.search]);
  return queryString;
}
