import DATA from '@/constants/event.data.constant';

export const getCategories = () => {
  let categories: any = [];
  DATA.forEach((event) => {
    if (!categories.includes(event.type)) {
      categories.push(event.type);
    }
  });
  return categories;
};

export const getEventsByCategory = (category: any) => {
  return DATA.filter((event) => event.type === category);
};

export const getAllEvent = () => {
  return DATA;
};

export const getEventById = (id: any) => {
  return DATA.find((event) => event.id === id);
};