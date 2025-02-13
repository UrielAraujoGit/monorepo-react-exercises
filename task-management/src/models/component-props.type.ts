import { ElementType } from "react";

export type TComponentProps<T extends ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<T>
>;
