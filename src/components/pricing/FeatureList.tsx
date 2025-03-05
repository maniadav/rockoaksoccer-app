import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Offer {
  id: number;
  type: string;
  details: string;
}

interface Membership {
  id: string;
  includedOffers: number[];
}

interface FeatureListProps {
  selectedMembership: Membership;
  offers: Offer[];
}

const FeatureList: React.FC<FeatureListProps> = ({ 
  selectedMembership, 
  offers 
}) => {
  // Get the icon for each feature type
  const getFeatureIcon = (type: string, isIncluded: boolean) => {    // Special color for Holiday Clinic feature
    const iconColor = type === 'Holiday Clinic' && isIncluded ? '#ff5e62' : '#993b1f';
    
    switch (type) {
      case 'Training':
        return <MaterialCommunityIcons name="whistle" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Matches':
        return <MaterialCommunityIcons name="soccer" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Equipment':
        return <MaterialCommunityIcons name="soccer-field" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Training Program':
        return <MaterialCommunityIcons name="clipboard-list" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Technology':
        return <MaterialCommunityIcons name="tablet-cellphone" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Video Analysis':
        return <MaterialCommunityIcons name="video" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Mobile App':
        return <MaterialCommunityIcons name="cellphone" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Nutrition':
        return <MaterialCommunityIcons name="food-apple" size={22} color={isIncluded ? iconColor : '#ccc'} />;
      case 'Holiday Clinic':
        return <MaterialCommunityIcons name="calendar-star" size={24} color={isIncluded ? iconColor : '#ccc'} />;
      default:
        return <Ionicons name="checkmark-circle" size={22} color={isIncluded ? iconColor : '#ccc'} />;
    }
  };

  return (
    <View style={styles.container}>
      {offers.map((offer) => {
        const isIncluded = selectedMembership.includedOffers.includes(offer.id);
        
        return (          <View key={offer.id} style={[
            styles.featureItem,
            isIncluded ? styles.featureIncluded : styles.featureExcluded,
            offer.type === 'Holiday Clinic' && isIncluded ? styles.holidayFeature : null
          ]}>
            <View style={styles.iconContainer}>
              {isIncluded ? 
                getFeatureIcon(offer.type, true) : 
                <Ionicons name="close-circle" size={22} color="#ccc" />
              }
            </View>
            <View style={styles.featureContent}>
              <View style={styles.featureTitleContainer}>
                <Text style={[
                  styles.featureTitle,
                  isIncluded ? styles.includedText : styles.excludedText,
                  offer.type === 'Holiday Clinic' && isIncluded ? styles.holidayText : null
                ]}>
                  {offer.type}
                </Text>
                
                {offer.type === 'Holiday Clinic' && isIncluded && (
                  <View style={styles.exclusiveTag}>
                    <Text style={styles.exclusiveTagText}>EXCLUSIVE</Text>
                  </View>
                )}
              </View>
              
              <Text style={[
                styles.featureDetails,
                isIncluded ? styles.includedDetails : styles.excludedDetails,
                offer.type === 'Holiday Clinic' && isIncluded ? styles.holidayDetails : null
              ]}>
                {offer.details}
              </Text>
              
              {offer.type === 'Holiday Clinic' && isIncluded && (
                <Text style={styles.holidayNote}>
                  *Only available with Kid Term + School Holiday Clinic plan
                </Text>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({  container: {
    backgroundColor: '#f0e6d6',
    borderRadius: 12,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    borderColor: '#993b1f',
    borderWidth: 1,
    borderTopWidth: 0,
  },  featureItem: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#cdc2af',
    marginBottom: 2,
  },
  featureIncluded: {
    opacity: 1,
  },
  featureExcluded: {
    opacity: 0.6,
  },
  holidayFeature: {
    backgroundColor: 'rgba(255, 94, 98, 0.05)',
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    borderLeftWidth: 3,
    borderLeftColor: '#ff5e62',
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureContent: {
    flex: 1,
    paddingLeft: 8,
  },
  featureTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  includedText: {
    color: '#333',
  },
  excludedText: {
    color: '#999',
  },
  holidayText: {
    color: '#ff5e62',
    fontWeight: '700',
  },
  exclusiveTag: {
    backgroundColor: '#ff5e62',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  exclusiveTagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  featureDetails: {
    fontSize: 14,
    lineHeight: 20,
  },
  includedDetails: {
    color: '#666',
  },
  excludedDetails: {
    color: '#bbb',
  },
  holidayDetails: {
    color: '#333',
  },
  holidayNote: {
    color: '#ff5e62',
    fontSize: 12,
    marginTop: 4,
    fontStyle: 'italic',
  },
});

export default FeatureList;