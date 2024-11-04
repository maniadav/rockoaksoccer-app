import DATA, { EventDraft } from '@/constants/event.data.constant';

export const getCategories = () => {
  let categories: any = [];
  DATA.forEach((event) => {
    if (!categories.includes(event.type)) {
      categories.push(event.type);
    }
  });
  return categories;
};

export const getAllEvent = () => {
  return EventDraft;
};

export const getEventById = (id: any) => {
  return DATA.find((event) => event.uniqueId === id);
};
