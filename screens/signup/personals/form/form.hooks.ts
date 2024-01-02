import { useReducer } from "react";

import { 
    personalsReducer 
} from "./form.reducer";
import { 
    PERSONALS_DEFAULT_STATE 
} from "./form.constants";
import { 
    getBirthdayAction, 
    getCountryAction, 
    getFirstnameAction, 
    getGenderaction, 
    getLastnameAction, 
    getNationalityAction 
} from "./form.actions";
import { 
    Genders, 
    PersonalsState 
} from "./form.types";

type PersonalsHookOutput = {
    readonly personalsState: PersonalsState;
    readonly handleBirthday: (value: number) => void;
    readonly handleCountry: (value: string) => void;
    readonly handleFirstname: (value: string) => void;
    readonly handleGender: (value: Genders) => void;
    readonly handleLastname: (value: string) => void;
    readonly handleNationality: (value: string) => void;
}

export const usePersonalsForm = (): PersonalsHookOutput => {
    const [personalsState, dispatchPersonalsState] = useReducer(personalsReducer, PERSONALS_DEFAULT_STATE);

    const handleBirthday = (date: number) => dispatchPersonalsState(getBirthdayAction(date));
    const handleCountry = (country: string) => dispatchPersonalsState(getCountryAction(country));
    const handleFirstname = (firstname: string) => dispatchPersonalsState(getFirstnameAction(firstname));
    const handleGender = (gender: Genders) => dispatchPersonalsState(getGenderaction(gender));
    const handleLastname = (lastname: string) => dispatchPersonalsState(getLastnameAction(lastname));
    const handleNationality = (nationality: string) => dispatchPersonalsState(getNationalityAction(nationality));

    return {
        personalsState,

        handleBirthday,
        handleCountry,
        handleFirstname,
        handleGender,
        handleLastname,
        handleNationality
    }
};
