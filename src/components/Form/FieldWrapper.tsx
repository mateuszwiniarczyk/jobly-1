type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = ({
  label,
  children,
  className,
}: FieldWrapperProps) => (
  <div className={className}>
    <label className='sr-only'>{label}</label>
    {children}
  </div>
);
