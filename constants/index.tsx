import React from 'react';
import { Dimensions, View, Text } from 'react-native';

// Constants
export const APP_NAME = 'Instagram';
export const CLASSIFY_API = 'http://192.168.1.2:5555/classify';
export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoidnVjbXMwMjAyIiwiYSI6ImNrYzd3YXN5YjB0bzQyeWxqaHk3cndkZWUifQ.Rrt9iMYACnqGK-rCblD0Ag';
export const STATUS_BAR_HEIGHT = 100;
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

export const DEFAULT_PHOTO_URI =
  'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png';

// Placeholder Components
const DummyComponent = (props: any) => (
  <View>
    <Text>{props.name}</Text>
  </View>
);

// Setting Navigation Map
export type SettingNavigation = {
  icon?: string;
  name: string;
  component: (props?: any) => JSX.Element;
  navigationName: string;
  child?: SettingNavigation[];
};

export const settingNavigationMap: SettingNavigation[] = [
  {
    icon: 'account-plus-outline',
    name: 'Follow and Invite Friends',
    navigationName: 'FollowFriendSetting',
    component: (props) => (
      <DummyComponent name="Follow and Invite Friends" {...props} />
    ),
    child: [
      {
        icon: 'account-plus-outline',
        name: 'Follow Contacts',
        component: (props) => (
          <DummyComponent name="Follow Contacts" {...props} />
        ),
        navigationName: 'FollowContact',
      },
      {
        icon: 'email-outline',
        name: 'Invite Friends by Email',
        component: (props) => (
          <DummyComponent name="Invite Friends by Email" {...props} />
        ),
        navigationName: 'InviteByEmail',
      },
      {
        icon: 'comment-outline',
        name: 'Invite Friends by SMS',
        component: (props) => (
          <DummyComponent name="Invite Friends by SMS" {...props} />
        ),
        navigationName: 'InviteBySMS',
      },
      {
        icon: 'share-outline',
        name: 'Invite Friends by...',
        component: (props) => (
          <DummyComponent name="Invite Friends by..." {...props} />
        ),
        navigationName: 'InviteByOther',
      },
    ],
  },
  // Additional categories following the same pattern
];
