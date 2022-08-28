import { Notification } from '@/features/notifications/notificationSlice';

const Notification = ({ type, title, message }: Omit<Notification, 'id'>) => (
  <div>
    <span>{type}</span>
    <h3>{title}</h3>
    <p>{message}</p>
  </div>
);

export { Notification };
