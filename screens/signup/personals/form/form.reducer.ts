import { 
    PersonalsAction, 
    PersonalsReducerEnum, 
    PersonalsState 
} from "./form.types";

export const personalsReducer = (state: PersonalsState, action: PersonalsAction): PersonalsState => {
    switch (action.type) {
        case PersonalsReducerEnum.BIRTH_DAY:
            return {
                ...state,
                birthday: action.payload,
            };
        case PersonalsReducerEnum.COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        case PersonalsReducerEnum.FIRSTNAME:
            return {
                ...state,
                firstname: action.payload,
            };
        case PersonalsReducerEnum.GENDER:
            return {
                ...state,
                gender: action.payload,
            };
        case PersonalsReducerEnum.LASTNAME:
            return {
                ...state,
                lastname: action.payload,
            };
        case PersonalsReducerEnum.NATIONALITY:
            return {
                ...state,
                nationality: action.payload
            }
    }
};