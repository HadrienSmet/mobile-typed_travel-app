import { usePersonalsForm } from "./form.hooks";
import { 
    CoreButtonEnum,
    CountrySelectList,
    CustomTextInput, 
    DateSelectList, 
    DefaultButton, 
    GenderSelectList, 
    InputTypesEnum, 
    NationalitySelectList
} from "../../../../components";
import { SignupFormContainer, SignupInputsContainer } from "../../components";
import { COLORS } from "../../../../constants";

export const PersonalsForm = () => {
    const {
        personalsState,

        handleBirthday,
        handleCountry,
        handleFirstname,
        handleGender,
        handleLastname,
        handleNationality
    } = usePersonalsForm();
    
    return (
        <SignupFormContainer>
            <SignupInputsContainer>
                <CustomTextInput
                    label="Firstname:"
                    type={InputTypesEnum.TEXT}
                    inputValue={personalsState.firstname}
                    inputHandler={handleFirstname}
                    inputPlaceholder={Math.random() < 0.5 ? "John" : "Jane"}
                />
                <CustomTextInput
                    label="Lastname:"
                    type={InputTypesEnum.TEXT}
                    inputValue={personalsState.lastname}
                    inputHandler={handleLastname}
                    inputPlaceholder="Doe"
                />
                <GenderSelectList
                    value={personalsState.gender}
                    setSelected={handleGender}
                />
                <DateSelectList
                    handleDate={handleBirthday}
                    context="signup"
                    label="Birthday:"
                />
                <CountrySelectList
                    handleCountry={handleCountry}
                    country={personalsState.country}
                />
                <NationalitySelectList
                    nationality={personalsState.nationality}
                    handleNationality={handleNationality}
                />
            </SignupInputsContainer>
            <DefaultButton 
                type={CoreButtonEnum.TEXT}
                value="Confirm" 
                backgroundColor={COLORS.secondary}
                handlePress={() => null} 
                />
        </SignupFormContainer>
    );
};
