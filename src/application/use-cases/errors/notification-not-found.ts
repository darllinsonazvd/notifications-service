export class NotificationsNotFound extends Error {
  constructor() {
    super('Notifications not found.');
  }
}
