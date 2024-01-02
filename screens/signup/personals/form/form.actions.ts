import { 
    Genders, 
    PersonalsAction, 
    PersonalsReducerEnum 
} from "./form.types";

export const getBirthdayAction = (date: number): PersonalsAction => ({ type: PersonalsReducerEnum.BIRTH_DAY, payload: date });
export const getCountryAction = (country: string): PersonalsAction => ({ type: PersonalsReducerEnum.COUNTRY, payload: country });
export const getFirstnameAction = (firstname: string): PersonalsAction => ({ type: PersonalsReducerEnum.FIRSTNAME, payload: firstname });
export const getGenderaction = (gender: Genders): PersonalsAction => ({ type: PersonalsReducerEnum.GENDER, payload: gender });
export const getLastnameAction = (lastname: string): PersonalsAction => ({ type: PersonalsReducerEnum.LASTNAME, payload: lastname });
export const getNationalityAction = (nationality: string): PersonalsAction => ({ type: PersonalsReducerEnum.NATIONALITY, payload: nationality });
