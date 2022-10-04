import { UseFormRegisterReturn } from 'react-hook-form';

import { clsxm } from '@/lib/clsxm';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'tel' | 'checkbox';
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = ({
  type = 'text',
  label,
  placeholder,
  id,
  className,
  registration,
  labelClassName,
}: InputFieldProps) => (
  <FieldWrapper label={label} labelClassName={labelClassName} id={id}>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={clsxm(
        type === 'checkbox'
          ? 'h-5 w-5 cursor-pointer rounded border-none bg-gray-400 focus:ring-0 focus:ring-offset-0 dark:bg-slate-100 dark:checked:bg-primary-200'
          : 'h-14 w-full rounded-lg border-gray-700 p-4 text-sm font-bold text-black placeholder:font-bold placeholder:text-slate-100 focus:border-primary-200 focus:ring-primary-200 dark:bg-transparent dark:text-white',
        className
      )}
      {...registration}
    />
  </FieldWrapper>
);
