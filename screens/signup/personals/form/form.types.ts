export enum PersonalsReducerEnum {
    BIRTH_DAY,
    COUNTRY,
    FIRSTNAME,
    GENDER,
    LASTNAME,
    NATIONALITY
}
export type Genders = "Men" | "Women" | "Other" | undefined;
export type PersonalsState = {
    readonly birthday: number;
    readonly country: string;
    readonly firstname: string;
    readonly gender: Genders;
    readonly lastname: string;
    readonly nationality: string;
}
type _PersonalsAction<T extends PersonalsReducerEnum, P> = {
    type: T;
    payload: P
};
type BirthDayAction = _PersonalsAction<PersonalsReducerEnum.BIRTH_DAY, number>;
type CountryAction = _PersonalsAction<PersonalsReducerEnum.COUNTRY, string>;
type FirstnameAction = _PersonalsAction<PersonalsReducerEnum.FIRSTNAME, string>;
type GenderAction = _PersonalsAction<PersonalsReducerEnum.GENDER, Genders>;
type LastnameAction = _PersonalsAction<PersonalsReducerEnum.LASTNAME, string>;
type NationalityAction = _PersonalsAction<PersonalsReducerEnum.NATIONALITY, string>;
export type PersonalsAction = 
    | BirthDayAction
    | CountryAction
    | FirstnameAction
    | GenderAction
    | LastnameAction
    | NationalityAction;
