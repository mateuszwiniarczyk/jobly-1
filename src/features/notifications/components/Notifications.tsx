import { useAppSelector } from '@/hooks/useAppStore';

import { Notification } from '@/features/notifications/components/Notification';

const Notifications = () => {
  const notifications = useAppSelector((state) => state.notifications);

  return (
    <div
      aria-live='assertive'
      className='pointer-events-none fixed inset-0 z-50 flex flex-col items-end space-y-4 px-4 py-6 sm:items-start sm:p-6'
    >
      {notifications.map(({ title, id, message, type }) => (
        <Notification key={id} type={type} title={title} message={message} />
      ))}
    </div>
  );
};

export { Notifications };
