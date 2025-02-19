export function DaysLeft(dateString: string): string {
  const providedDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const differenceInTime = providedDate.getTime() - currentDate.getTime();

  // Calculate difference in days
  const daysLeft = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  // If the date has passed, return "Closed"
  return daysLeft < 0 ? 'Closed' : `${daysLeft} days left`;
}
