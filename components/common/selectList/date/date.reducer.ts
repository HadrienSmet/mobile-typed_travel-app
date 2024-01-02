import { 
    DateAction, 
    DateEnum, 
    DateState 
} from "./date.types";

export const dateReducer = (state: DateState, action: DateAction): DateState => {
    switch (action.type) {
        case DateEnum.DAY:
            return {
                ...state,
                day: action.payload,
            };
        case DateEnum.MONTH:
            return {
                ...state,
                month: action.payload,
            };
        case DateEnum.YEAR:
            return {
                ...state,
                year: action.payload
            }
    }
};
