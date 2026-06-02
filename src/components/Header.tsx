export interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <h6 className="text-lg uppercase tracking-widest font-bold print:text-base">
      {props.title}
    </h6>
  );
};
