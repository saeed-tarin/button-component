export interface buttonProps {
  id?: string;
  className?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
  style?: Object;
  disable?: boolean;
  children?: any;
}
