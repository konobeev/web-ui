import {useDispatch, useSelector} from "react-redux";

interface RootState {
    isOn: boolean
}

// TS infers type: (state: RootState) => boolean
const selectIsOn = (state: RootState) => state.isOn

// TS infers `isOn` is boolean
const isOn = useSelector(selectIsOn)

const dispatch = useDispatch()