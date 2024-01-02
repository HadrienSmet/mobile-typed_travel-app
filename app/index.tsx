import { SHADES } from "../constants";
import { 
    SignupMain, 
    SignupScreen,
} from "../screens";

const welcome = () => {
    
    return (
        <SignupScreen 
            backgroundColor={SHADES.orange04} 
            stackTitle="Sign up"
        >
            <SignupMain />
        </SignupScreen>
    );
};

export default welcome;
