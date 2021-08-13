import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = searchQueryParamName => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);
        if (value === "") {
            searchParams.delete(key);
        }
        else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }
    return replaceQueryParameter;
}