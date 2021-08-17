import { StyledInput } from "../../../tasks/Input/index";
import { Wrapper } from "./styled";
import { searchQueryParamName } from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

export const Search = () => {
    const replaceQueryParameter = useReplaceQueryParameter();
    const query = useQueryParameter(searchQueryParamName);

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });
    };

    return (
        <Wrapper>
            <StyledInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};