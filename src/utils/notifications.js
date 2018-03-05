import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from 'react-native';

const NOTIFICATION_KEY = 'UdaciCards:notifications';

function createQuizNotification() {
  return {
    title: 'Take your flashcard quiz!',
    body: "Don't forget to take a quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function clearAllLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export async function setLocalQuizNotification() {
  const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const parsedData = JSON.parse(data);

  if (parsedData === null) {
    const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync();

      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(20);
      tomorrow.setMinutes(0);

      await Notifications.scheduleLocalNotificationAsync(
        createQuizNotification(),
        {
          time: new Date().getTime() + 1000,
        }
      );

      await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
}
