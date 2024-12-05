import COLOUR from '@/constants/colour.constant';
import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

interface TabProps {
  onPress: () => void;
  isActive: boolean;
  tabKey: string;
  title: string;
}

interface TabsProps {
  routes: {
    title: string;
    key: string;
  }[];
  navigationState: { index: number; routes: { key: string }[] };
  jumpTo: (key: string) => void;
}

const Tab: React.FC<TabProps> = ({ onPress, isActive, tabKey, title }) => {
  const iconColor = isActive ? COLOUR.primary : COLOUR.secondary;
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Text style={{ color: iconColor, fontWeight: '700' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const Tabs: React.FC<TabsProps> = ({ routes, navigationState, jumpTo }) => {
  return (
    <View style={styles.tabs}>
      {routes.map((tab, index) => (
        <Tab
          key={index}
          tabKey={tab.key}
          title={tab.title}
          isActive={index === navigationState.index}
          onPress={() => jumpTo(tab.key)}
        />
      ))}
    </View>
  );
};

const UpcomingEvents = () => (
  <View style={styles.sceneContainer}>
    <Text>Upcoming Events Content</Text>
  </View>
);

const PastEvents = () => (
  <View style={styles.sceneContainer}>
    <Text>Past Events Content</Text>
  </View>
);

const renderScene = SceneMap({
  upcoming: UpcomingEvents,
  past: PastEvents,
});

const MyTabView = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'upcoming', title: 'Upcoming Events' },
    { key: 'past', title: 'Past Events' },
  ];
  const layout = useWindowDimensions();
  return (
    <TabView
      renderTabBar={(props) => <Tabs routes={routes} {...props} />}
      style={{ width: layout.width }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: 700 }}
    />
  );
};

export default MyTabView;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E5E5',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 1000,
    width: '100%'
  },
});
