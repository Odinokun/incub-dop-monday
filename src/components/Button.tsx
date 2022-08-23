import React, {FC} from 'react';

type PropsType = {
  name: string
  callBack: () => void
};

export const Button: FC<PropsType> = (props) => {
  const onClickHandler = () => {
    props.callBack();
  }

  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}