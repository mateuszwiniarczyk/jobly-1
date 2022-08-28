import CheckCircleIcon from 'public/svg/check.svg';
import CloseIcon from 'public/svg/close.svg';
import ErrorCircleIcon from 'public/svg/error.svg';
import InformationCircleIcon from 'public/svg/info.svg';
import WarningCircleIcon from 'public/svg/warning.svg';

import { useAppDispatch } from '@/hooks/useAppStore';

import {
  dismissNotification,
  Notification,
} from '@/features/notifications/notificationSlice';

const icons = {
  info: <InformationCircleIcon className='h-6 w-6' aria-hidden='true' />,
  success: <CheckCircleIcon className='h-6 w-6' aria-hidden='true' />,
  warning: <WarningCircleIcon className='h-6 w-6' aria-hidden='true' />,
  error: <ErrorCircleIcon className='h-6 w-6' aria-hidden='true' />,
};

const Notification = ({ type, title, message, id }: Notification) => {
  const dispatch = useAppDispatch();

  return (
    <div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
      <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-500 ring-opacity-5 dark:bg-slate-300 dark:ring-black'>
        <div className='p-4' role='alert' aria-label={title}>
          <div className='flex items-start'>
            <div className='flex-shrink-0'>{icons[type]}</div>
            <div className='ml-3 w-0 flex-1 pt-0.5 dark:text-gray-300'>
              <p className='text-sm font-medium'>{title}</p>
              <p className='mt-1 text-sm'>{message}</p>
            </div>
            <div className='ml-4 flex flex-shrink-0'>
              <button
                className='inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
                onClick={() => dispatch(dismissNotification(id))}
              >
                <span className='sr-only'>Close</span>
                <CloseIcon
                  className='h-5 w-5 dark:fill-gray-300'
                  aria-hidden='true'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Notification };
