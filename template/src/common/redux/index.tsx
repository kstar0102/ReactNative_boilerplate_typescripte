import React, {forwardRef, memo, useImperativeHandle} from 'react';
import isEqual from 'react-fast-compare';
import {useDispatch} from 'react-redux';
import {Action} from 'redux';

type ActionBase = Action<string>

const AppDispatchComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  useImperativeHandle(
    ref,
    () => ({
      dispatch: (action: ActionBase) => {
        dispatch(action);
      },
    }),
    [dispatch],
  );

  return null;
});

type AppDispatchType = {
  dispatch: (action: ActionBase) => void
}

const dispatchRef = React.createRef<AppDispatchType>();

export const AppDispatch = memo(
  () => <AppDispatchComponent ref={dispatchRef} />,
  isEqual,
);

export const dispatch = (action: ActionBase) => {
  if (dispatchRef.current) {
    dispatchRef.current.dispatch(action);
  }
};
