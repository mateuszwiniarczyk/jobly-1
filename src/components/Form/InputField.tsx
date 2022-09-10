import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'tel';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({
  type = 'text',
  label,
  className,
  registration,
}: InputFieldProps) => (
  <FieldWrapper label={label}>
    <input
      type={type}
      placeholder={label}
      className={clsx(
        'focus:ring-blue-200 focus:border-blue-200 h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 dark:bg-transparent dark:text-white',
        className
      )}
      {...registration}
    />
  </FieldWrapper>
);
