type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
  id: string;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label,
  id,
  children,
  className,
  labelClassName,
}: FieldWrapperProps) => (
  <div className={className}>
    {children}
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
  </div>
);
