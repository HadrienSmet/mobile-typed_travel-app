import { View } from "react-native";

import { Label } from "../../label";

import { CoreSelectList, SelectListEnum } from "../core";

import { useCountryArray } from "./countryList.hooks";
import styles from "./countryList.styles";

type CountryListProps = {
    readonly country: string;
    readonly handleCountry: (value: string) => void;
}

export const CountrySelectList = (props: CountryListProps) => {
    const { countriesArray } = useCountryArray();

    return (
        <View style={styles.container}>
            <Label label="Country:" />
            <CoreSelectList
                placeholder="Select a country"
                type={SelectListEnum.COUNTRY}
                data={countriesArray}
                value={props.country}
                setSelected={props.handleCountry}
            />
        </View>
    )
};
