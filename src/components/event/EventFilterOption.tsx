import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import EVENT_TYPE from "@constants/event.constant";
import COLOUR from "@constants/colour.constant";

const FILTER_OPTIONS = [
  { ...EVENT_TYPE[0], icon: "trending-up" },
  { ...EVENT_TYPE[1], icon: "boy" },
  { ...EVENT_TYPE[2], icon: "beach-access" },
  { ...EVENT_TYPE[3], icon: "auto-awesome" },
];

// const FILTER_OPTIONS = EVENT_TYPE.map((item, index) => {});

const EventFilterOption = ({ selectedFilter, setSelectedFilter }: any) => (
  <View style={styles.filtersContainer}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filtersScrollContent}
    >
      {FILTER_OPTIONS.map((option) => (
        <FilterOption
          key={option.id}
          option={option}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      ))}
    </ScrollView>
  </View>
);

const FilterOption = ({ selectedFilter, option, setSelectedFilter }: any) => (
  <TouchableOpacity
    style={[
      styles.filterOption,
      selectedFilter === option.id && styles.selectedFilterOption,
    ]}
    onPress={() => setSelectedFilter(option.id)}
  >
    <MaterialIcons
      name={option.icon}
      size={22}
      color={selectedFilter === option.id ? COLOUR.primary : "#717171"}
    />
    <Text
      style={[
        styles.filterText,
        selectedFilter === option.id && styles.selectedFilterText,
      ]}
    >
      {option.title}
    </Text>
  </TouchableOpacity>
);

export default EventFilterOption;

const styles = StyleSheet.create({
  filtersContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  filtersScrollContent: {
    paddingHorizontal: 10,
  },
  filterOption: {
    alignItems: "center",
    marginRight: 24,
    paddingBottom: 8,
    opacity: 0.6,
  },
  filterOptionText: {},
  selectedFilterOption: {
    borderBottomWidth: 2,
    borderBottomColor: COLOUR.primary,
    opacity: 1,
  },
  selectedFilterText: {
    color: COLOUR.primary,
    fontWeight: "500",
  },
  filterText: {
    fontSize: 12,
    marginTop: 6,
    color: "#717171",
  },
});
