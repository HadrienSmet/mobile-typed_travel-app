import React, { useEffect, useReducer } from 'react';
import { View } from 'react-native';
import { WrapperReducer } from './updateWrapper.reducer';
import { ExplicitVersion, StatusEnum, WrapperState } from './updateWrapper.types';

type WrapperProps = {
    children: JSX.Element
}
const WRAPPER_INITIAL_STATE: WrapperState = {
    status: StatusEnum.UP_TO_DATE,
    latestVersion: undefined,
    skippabilityExpiresAt: undefined,
};




const UpdateWrapper = (props: WrapperProps) => {
    const [wrapperState, dispatchWrapper] = useReducer(WrapperReducer, WRAPPER_INITIAL_STATE);

    useEffect(() => {

    }, [])

    return (
        <View>
            
        </View>
    );
};

export default UpdateWrapper;