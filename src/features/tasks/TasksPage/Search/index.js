import { useHistory, useLocation } from "react-router-dom";
import { StyledInput } from "../../../tasks/Input/index";
import { Wrapper } from "./styled";
import { searchQueryParamName } from "../searchQueryParamName";
import { useQueryParameter } from "./queryParameters";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        }
        else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <Wrapper>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};