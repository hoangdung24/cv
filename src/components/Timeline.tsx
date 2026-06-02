import clsx from "clsx";
import { Fragment, type ReactNode } from "react";

export interface TimelineProps {
  items: ReactNode[];
}

export const Timeline = (props: TimelineProps) => {
  const { items } = props;

  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4">
      {items.map((el, idx, arr) => {
        return (
          <Fragment key={idx}>
            <div className="w-4 relative">
              {idx !== arr.length - 1 && (
                <div className="absolute w-0.5 h-full left-1/2 translate-y-1 bg-decoration -translate-x-1/2" />
              )}
              <div className="w-4 h-4 rounded-full bg-decoration relative translate-y-1" />
            </div>
            <div className={clsx(idx !== arr.length - 1 && "pb-6 print:pb-3")}>
              {el}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
