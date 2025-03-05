import { useEffect } from "react";
// import RockOakApi from "@/services/RockOakApi";
// import UtilityAPI from "@/services/utility";
import EVENT_TYPE from "@constants/event.constant";
import { getAsyncStorageValue, setAsyncStorageValue } from "./localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";

/** Utility to check user login status */
export async function checkUserLoginStatus() {
  try {
    const currentUser = await getAsyncStorageValue(
      LOCALSTORAGE.LOGGED_IN_USER,
      true
    );
    return currentUser?._id ? true : false;
  } catch (err) {
    console.log("Error checking login status:", err);
    return undefined;
  }
}

/** Utility to get vendor code at runtime */
export async function getVendorCode() {
  let countryName;

  // Try fetching from async storage
  const storedCountry = await getAsyncStorageValue(
    LOCALSTORAGE.SELECTED_COUNTRY_NAME
  );
  const paramCountryName = await getAsyncStorageValue(
    LOCALSTORAGE.SELECTED_COUNTRY,
    true
  );

  if (paramCountryName) {
    await setAsyncStorageValue(
      LOCALSTORAGE.SELECTED_COUNTRY_NAME,
      paramCountryName
    );
    countryName = paramCountryName;
  } else if (storedCountry) {
    countryName = storedCountry;
  } else {
    countryName = "";
  }

  let vendorCode = await getAsyncStorageValue(LOCALSTORAGE.SELECTED_VENDORCODE);
  if (
    countryName &&
    countryName !== "IND" &&
    ["tmc", "srn", "orh"].includes(vendorCode)
  ) {
    vendorCode = `${vendorCode}-${countryName}`.toLowerCase();
  }

  return vendorCode;
}

/** Fetch membership details */
export async function getMembershipDetails() {
  try {
    const membershipValidTypes = EVENT_TYPE.filter(
      (event) => event.id !== "all-events"
    ).map((event) => event.id);

    const storedMembership = await getAsyncStorageValue(
      LOCALSTORAGE.ACTIVE_MEMBERSHIP,
      true
    );

    if (storedMembership?.isValid) {
      return storedMembership;
    }

    // const rockOakApi = new UtilityAPI();
    // const res = await rockOakApi.fetchMembershipDetails();
    const memRes: any = false; //res?.data?.member;

    if (memRes) {
      const data = {
        isValid:
          membershipValidTypes.includes(memRes.type) &&
          memRes.status === "active",
        ...memRes,
      };
      await setAsyncStorageValue(LOCALSTORAGE.ACTIVE_MEMBERSHIP, data, true);
      return data;
    }

    return { isValid: false };
  } catch (error) {
    console.error("Failed to fetch membership data:", error);
    return { isValid: false };
  }
}
