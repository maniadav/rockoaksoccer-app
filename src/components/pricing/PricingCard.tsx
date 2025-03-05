import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // Card takes up 75% of screen width


interface Membership {
  id: string;
  name: string;
  per: string;
  price: number;
  description: string;
  valueAdded: boolean;
  includedOffers: number[];
}

interface Currency {
  name: string;
  symbol: string;
  code: string;
}

interface PricingCardProps {
  membership: Membership;
  selected: boolean;
  currency: Currency;
  onSelect: (membership: Membership) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  membership, 
  selected, 
  currency, 
  onSelect 
}) => {
  const animatedScale = React.useRef(new Animated.Value(1)).current;
  
  React.useEffect(() => {
    Animated.spring(animatedScale, {
      toValue: selected ? 1.05 : 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true
    }).start();
  }, [selected]);

  const handlePress = () => {
    onSelect(membership);
  };

  return (
    <Animated.View 
      style={[
        styles.card, 
        selected && styles.selectedCard,
        { transform: [{ scale: animatedScale }] }
      ]}
    >      {membership.valueAdded && (
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Best Value</Text>
          </View>
        </View>
      )}
      
      {membership.id === 'kidholiday' && (
        <View style={styles.holidayBadgeContainer}>
          <View style={styles.holidayBadge}>
            <Text style={styles.holidayBadgeText}>Holiday Clinic Included</Text>
          </View>
        </View>
      )}
      
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{membership.name}</Text>
        <Text style={styles.cardDescription}>{membership.description}</Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.currencySymbol}>{currency.symbol}</Text>
        <Text style={styles.price}>{membership.price}</Text>
        <Text style={styles.period}>/{membership.per}</Text>
      </View>      <View style={styles.includedFeaturesPreview}>
        <View style={styles.featureRow}>
          <Ionicons name="checkmark-circle" size={18} color="#993b1f" />
          <Text style={styles.featureText}>
            {membership.includedOffers.length} features included
          </Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.selectButton, selected && styles.selectedButton]} 
        onPress={handlePress}
      >
        <Text style={[styles.selectButtonText, selected && styles.selectedButtonText]}>
          {selected ? 'Selected' : 'Select Plan'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({  card: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 24,
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    position: 'relative',
    borderColor: '#993b1f',
    borderWidth: 1,
  },  selectedCard: {
    shadowColor: '#993b1f',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
    borderColor: '#993b1f',
    borderWidth: 2,
  },
  badgeContainer: {
    position: 'absolute',
    top: -12,
    right: 20,
  },
  badge: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  holidayBadgeContainer: {
    position: 'absolute',
    top: -12,
    left: 20,
  },
  holidayBadge: {
    backgroundColor: '#ff9966',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  holidayBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  period: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    marginLeft: 2,
  },
  includedFeaturesPreview: {
    marginBottom: 20,
  },  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },  selectButton: {
    backgroundColor: '#f0e6d6',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#993b1f',
  },
  selectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#993b1f',
  },
  selectedButtonText: {
    color: 'white',
  },
});

export default PricingCard;