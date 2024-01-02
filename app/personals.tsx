import { PersonalsMain, SignupScreen } from "../screens";
import { SHADES } from "../constants";

const personals = () => {
    return (
        <SignupScreen 
            backgroundColor={SHADES.orange055} 
            stackTitle="Personals"
        >
            <PersonalsMain />
        </SignupScreen>
    );
};

export default personals;
