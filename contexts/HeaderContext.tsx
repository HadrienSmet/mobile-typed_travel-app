import React,{
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState
} from "react";

type HeaderContextData = {
    headerHeight: number | null;
    setHeaderHeight: Dispatch<SetStateAction<number | null>>;
};
type HeaderContextProps = {
    readonly children: ReactNode;
}

const DEFAULT_STATE = {
    headerHeight: null,
    setHeaderHeight: () => {},
} as const;

const MyHeaderContext = createContext<HeaderContextData>(DEFAULT_STATE);

export const useHeaderContext = () => useContext(MyHeaderContext);

const HeaderContext = ({ children }: HeaderContextProps) => {
    const [headerHeight, setHeaderHeight] = useState<number | null>(null);

    return (
        <MyHeaderContext.Provider 
            value={{ headerHeight, setHeaderHeight }}
        >
            {children}
        </MyHeaderContext.Provider>
    )
}

export default HeaderContext;
