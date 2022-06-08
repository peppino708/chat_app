import { FC } from "react";

type Props = {
  name: string;
};

export const Main: FC<Props> = (props) => {
  const { name } = props;
  return <div>Main</div>;
};
