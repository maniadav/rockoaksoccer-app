import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const renderItem = ({ item, index }: { item: FAQItem; index: number }) => (
    <View style={styles.faqItem}>
      <TouchableOpacity
        onPress={() => toggleExpand(index)}
        style={styles.faqQuestionContainer}
      >
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <Text style={styles.arrow}>{expandedIndex === index ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {expandedIndex === index && (
        <Text style={styles.faqAnswer}>{item.answer}</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>FAQ</Text>
        <Text style={styles.subHeader}>Frequently asked questions</Text>
      </View>
      <FlatList
        data={dummyFAQs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.faqList}
      />
    </View>
  );
};

export default FAQ;

interface FAQItem {
  question: string;
  answer: string;
}

const dummyFAQs: FAQItem[] = [
  {
    question: 'Can I get a refund for my subscription?',
    answer:
      'We offer a 30-day money-back guarantee for most of our subscription plans. If you are not satisfied within the first 30 days, you can request a full refund. Refunds for subscriptions active for longer than 30 days may be considered on a case-by-case basis.',
  },
  {
    question: 'How do I change my password?',
    answer:
      'To change your password, go to your account settings, click on "Security", and then select "Change Password". Follow the prompts to update your password.',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can contact our customer support team by emailing info@rockoaksoccer.com.au or by using the live chat feature available on our website.',
  },
  {
    question: 'Can I upgrade my subscription plan later?',
    answer:
      'Yes, you can upgrade your subscription plan at any time from your account settings. Navigate to the "Subscription" section and choose the plan that best fits your needs.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'To cancel your subscription, go to your account settings, select "Subscription", and click on "Cancel Subscription". Follow the instructions to complete the cancellation process.',
  },
  {
    question: 'When are the training sessions?',
    answer:
      'We have two training sessions, morning and evening sessions. The morning session starts at 6:00AM and the evening session starts at 5PM. Refer Program Page for more detailed information.',
  },
  {
    question: 'How secure is my personal information?',
    answer:
      'We take the security of your personal information very seriously. Our platform uses industry-standard encryption and security measures to protect your data.',
  },
  {
    question: 'Can I share my account with others?',
    answer:
      'Sharing your account is against our terms of service. Each account is intended for individual use only. If you need multiple accounts, please contact our support team for assistance.',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeader: {
    fontSize: 18,
    color: '#555',
    marginTop: 8,
  },
  faqList: {
    marginTop: 16,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  faqQuestionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#333',
  },
  faqAnswer: {
    marginTop: 12,
    fontSize: 14,
    color: '#555',
  },
});
