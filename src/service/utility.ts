import Config from "react-native-config";
import RockOakApi from "./RockOakAPI";
import { API_ENDPOINT } from "@constants/api.constant";
import { getAsyncStorageValue } from "@utils/localStorage";
import { LOCALSTORAGE } from "@constants/storage.constant";

class UtilityAPI extends RockOakApi {
  private instance = UtilityAPI.createInstance();

  public generateOTP = (username: string) => {
    return this.instance.get(`/api/generateOTP`, { params: { username } });
  };
  public verifyOTP = (data: any) => {
    return this.instance.get("/api/verifyOTP", { ...data });
  };
  // email above generated otp
  public senMailWithOTP = (data: any) => {
    return this.instance.post("/api/registerMail", { ...data });
  };

  public uploadImage = (body: FormData) => {
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryqwvzmIgWW9pMEq6p",
    };
    return this.instance.post(API_ENDPOINT.utility.uploadImage, body, {
      headers,
    });
  };

  public getOPlist = (params: { selectedDate: string }) => {
    return this.instance.post("/api/getPatientData1", params);
  };
  public getOPEMR = (appointmentID: string) => {
    const url = `/api/fetchInformation1${
      appointmentID && `?ID=${appointmentID}`
    }`;
    return this.instance.get(url);
  };
  public getPatientInfo = (uniqueID: string) => {
    const url = `api/patientInfo${uniqueID && `?uniqueID=${uniqueID}`}`;
    return this.instance.get(url);
  };
  public getPatientPrevReport = (uniqueID: string) => {
    const url = `api/PreviousReports${uniqueID && `/${uniqueID}`}`;
    return this.instance.get(url);
  };
  public updateOPEMR = (data: any) => {
    return this.instance.post("/api/postData", { ...data });
  };
  public finalizeOPEMR = (data: any) => {
    return this.instance.post("/api/finaliseReport", { ...data });
  };
  public submitReportOPEMR = (data: any) => {
    return this.instance.post("/api/outpatientReportFile", { ...data });
  };
  public submitReportOPEMR2 = (body: FormData) => {
    console.error(body);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryqwvzmIgWW9pMEq6p",
    };
    return this.instance.post("/api/outpatientReportFile", body, { headers });
  };
  public getPatientCompaint = (personId: any) => {
    return this.instance.get(`/complaints/${personId}`);
  };
  public verifyUsername = (username: string) => {
    return this.instance.post("/api/authenticate", { username });
  };
  public getUserProfile = (personUsername: any) => {
    return this.instance.get(`/api/user/${personUsername}`);
  };
  public getUser = (username: string) => {
    return this.instance.get(`/api/user/${username}`);
  };
  // follow up
  public followUpCreate = (data: any) => {
    return this.instance.post("/api/followAppointments", { ...data });
  };
  public fetchInformationforFollowUp = (id: string) => {
    return this.instance.get(`api/fetchInformationforFollowUp?ID=${id}`);
  };
  public followUpPostDraft = (data: any) => {
    return this.instance.post("/api/postDataForFollowUp", { ...data });
  };
  public followUpPostFinal = (data: any) => {
    return this.instance.post("/api/postDataFinaliseForFollowUp", {
      ...data,
    });
  };
  public getFollowUpAppointment = (uniqueID: string) => {
    return this.instance.get(`/api/getFollowUpAppointment/${uniqueID}`);
  };
  public getFollowUpList = (params: { selectedDate: string }) => {
    return this.instance.post("/api/getFollowUpPatient", params);
  };
  // tele-medicine
  public getTelemedicinePatient = (params: { selectedDate: string }) => {
    return this.instance.post("/api/getTelemedicinePatient", params);
  };
  // in-patient
  public inPatientCreate = (data: any) => {
    return this.instance.post("/api/createInPatient", { ...data });
  };
  public getIPlist = (params: { admittingDate: string }) => {
    return this.instance.post("/api/getInPatient", params);
  };
  public getIPEMR = (appointmentID: string) => {
    const url = `/api/getInPatient2/${appointmentID && `${appointmentID}`}`;
    return this.instance.post(url);
  };
  public postIPEMR = (params: any) => {
    return this.instance.post("/api/postDataForInpatientRecord", params);
  };

  // auth
  public userRegister = (body: any) => {
    // let headers = {
    //   apikey: process.env.NUCLEUS_APIKEY,
    //   'content-type':
    //     'multipart/form-data; boundary=----WebKitFormBoundaryqwvzmIgWW9pMEq6p',
    // };
    return this.instance.post(`${API_ENDPOINT.auth.register}`, body);
  };
  // get access token
  public getAccessToken = async () => {
    const user = await getAsyncStorageValue(LOCALSTORAGE.LOGGED_IN_USER, true);
    return this.instance.post(
      `${API_ENDPOINT.auth.getAccessToken}`,
      { username: user.username },
      {
        withCredentials: true,
      }
    );
  };

  public userLogin = (data: any) => {
    return this.instance.post(`${API_ENDPOINT.auth.login}`, { ...data });
  };

  // user
  public fetchProfile = () => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      Authorization: `Bearer ${token}`,
    };
    return this.instance.get(`${API_ENDPOINT.user.profile.fetch}`, {
      headers,
    });
  };

  public updateProfile = async (data: any) => {
    const token = await getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    console.log(`${token}`);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`, // remove this as already sending in x-access-token in RockOakApi, update backend
    };
    return this.instance.put(
      `${API_ENDPOINT.user.profile.update}`,
      { ...data },
      { headers }
    );
  };

  public updateUserData = (data: any) => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      Authorization: `Bearer ${token}`,
    };
    return this.instance.post("/api/postData", { ...data }, { headers });
  };
  public sendPasswordResetLink = (data: any) => {
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
    };

    return this.instance.post(
      API_ENDPOINT.auth.sendPasswordResetLink,
      { ...data },
      { headers }
    );
  };
  public resetPassword = (data: any) => {
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
    };

    return this.instance.post(
      API_ENDPOINT.auth.resetPassword,
      { ...data },
      { headers }
    );
  };
  public updatePassword = (data: any) => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`,
    };

    return this.instance.post(
      API_ENDPOINT.auth.updatePassword,
      { ...data },
      { headers }
    );
  };

  // payment
  public createMembership = (planID: any) => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`,
    };
    return this.instance.post(
      `${API_ENDPOINT.payment.createMembership}`,
      { planID },
      { headers }
    );
  };

  public fetchPricing = () => {
    return this.instance.get(`${API_ENDPOINT.pricing.fetchAll}`);
  };

  // plan
  public fetchPlan = () => {
    return this.instance.get(`${API_ENDPOINT.plan.fetchAll}`);
  };
  // event
  public fetchEvents = () => {
    return this.instance.get(`${API_ENDPOINT.event.fetchAll}`);
  };
  public fetchEventDetails = (eventID: string) => {
    return this.instance.get(
      `${API_ENDPOINT.event.fetchDetails}?eventID=${eventID}`
    );
  };

  // list all booked user
  public fetchUsersInEvent = (eventID: string) => {
    return this.instance.get(
      `${API_ENDPOINT.event.bookedUserInEvent}/${eventID}`
    );
  };

  // user
  public fetchBookedEvents = () => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`,
    };

    return this.instance.get(`${API_ENDPOINT.user.fetchBookedEvents}`, {
      headers,
    });
  };
  public createEventBooking = (eventId: string) => {
    const token = getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`,
    };

    return this.instance.post(
      `${API_ENDPOINT.user.createEventBooking}`,
      { eventId },
      {
        headers,
      }
    );
  };
  // membership
  public fetchMembershipDetails = async () => {
    const token = await getAsyncStorageValue(LOCALSTORAGE.MFA_ACCESS_TOKEN);
    console.log(`${token}`);
    let headers = {
      apikey: process.env.NUCLEUS_APIKEY,
      authorization: `Bearer ${token}`, // remove this as already sending in x-access-token in RockOakApi, update backend
    };
    return this.instance.get(`${API_ENDPOINT.membership.details}`, {
      headers,
    });
  };
}

export default UtilityAPI;
