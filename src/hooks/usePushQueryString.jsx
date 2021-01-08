import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

export function usePushQueryString() {
  const location = useLocation();
  const history = useHistory();
  const handlePushLocationSearch = (data) => {
    const locationSearch = qs.parse(location.search);
    history.push({ search: `?${qs.stringify(...locationSearch, ...data)}` });
  };
  return handlePushLocationSearch;
}
