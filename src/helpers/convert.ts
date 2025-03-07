/** image onto base64 */
export default function convertToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
export const formatDate2 = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatEventType = (type: string): string => {
  switch (type) {
    case "adult-term":
      return "ADULT";
    case "kid-term":
      return "KIDS";
    case "kid-holiday":
      return "HOLIDAY";
    default:
      return type.toUpperCase();
  }
};

export function formatDate(inputDate: string | number | Date) {
  const date = new Date(inputDate);

  // Extract day, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Note: Months are zero-based
  const year = date.getFullYear();

  // Format the date components and remove leading zeros
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export const numberToStringDate = (milliseconds: number) => {
  const date = new Date(milliseconds);
  const isDate = new Date(date.getTime());
  const istDate = isDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour12: true,
  });
  return istDate;
};

export function hexToRgba(hex: string, opacity: number) {
  const normalizedHex = hex.replace("#", "");
  const bigint = parseInt(normalizedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
