import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

interface FilterTagsProps {
  onFilterChange?: (selectedFilters: string[]) => void;
}

const FilterTags = ({ onFilterChange }: FilterTagsProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: "midterm", label: "Midterm" },
    { id: "termHoliday", label: "Term Holiday" },
    { id: "adultTerm", label: "Adult Term" },
    { id: "confirmed", label: "Confirmed" },
    { id: "pending", label: "Pending" },
    { id: "completed", label: "Completed" },
    { id: "canceled", label: "Canceled" },
  ];

  const toggleFilter = (filterId: string) => {
    let newFilters;
    if (selectedFilters.includes(filterId)) {
      newFilters = selectedFilters.filter((id) => id !== filterId);
    } else {
      newFilters = [...selectedFilters, filterId];
    }

    setSelectedFilters(newFilters);
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter.id}
          style={[
            styles.filterTag,
            selectedFilters.includes(filter.id) && styles.selectedFilterTag,
          ]}
          onPress={() => toggleFilter(filter.id)}
        >
          <Text
            style={[
              styles.filterText,
              selectedFilters.includes(filter.id) && styles.selectedFilterText,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterTag: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  selectedFilterTag: {
    backgroundColor: "#0066cc",
    borderColor: "#0066cc",
  },
  filterText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  selectedFilterText: {
    color: "white",
  },
});

export default FilterTags;
