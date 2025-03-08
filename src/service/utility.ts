import Config from "react-native-config";
import RockOakApi from "./RockOakAPI";
import { API_ENDPOINT } from "@constants/api.constant";
import { getAsyncStorageValue } from "@utils/localStorage";

class UtilityAPI extends RockOakApi {
  private instance = UtilityAPI.createInstance();

  public generateOTP = (username: string) => {
    return this.instance.get(`/api/generateOTP`, { params: { username } });
  };

  public verifyOTP = (data: any) => {
    return this.instance.get("/api/verifyOTP", { params: data });
  };

  public sendMailWithOTP = (data: any) => {
    return this.instance.post("/api/registerMail", data);
  };

  public uploadImage = async (body: FormData) => {
    const headers = {
      apikey: Config.NUCLEUS_APIKEY,
      "content-type": "multipart/form-data",
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
      appointmentID ? `?ID=${appointmentID}` : ""
    }`;
    return this.instance.get(url);
  };

  public getPatientInfo = (uniqueID: string) => {
    const url = `/api/patientInfo${uniqueID ? `?uniqueID=${uniqueID}` : ""}`;
    return this.instance.get(url);
  };

  public getPatientPrevReport = (uniqueID: string) => {
    const url = `/api/PreviousReports${uniqueID ? `/${uniqueID}` : ""}`;
    return this.instance.get(url);
  };

  public updateOPEMR = (data: any) => {
    return this.instance.post("/api/postData", data);
  };

  // ... (similar modifications for other methods)

  public getAccessToken = async () => {
    const userString = await getAsyncStorageValue("LOGGED_IN_USER");
    const user = userString ? JSON.parse(userString) : null;
    return this.instance.post(`${API_ENDPOINT.auth.getAccessToken}`, {
      username: user?.username,
    });
  };

  public userLogin = (data: any) => {
    return this.instance.post(`${API_ENDPOINT.auth.login}`, data);
  };

  public fetchProfile = async () => {
    const token = await getAsyncStorageValue("MFA_ACCESS_TOKEN");
    const headers = {
      apikey: Config.NUCLEUS_APIKEY,
      Authorization: `Bearer ${token}`,
    };
    return this.instance.get(`${API_ENDPOINT.user.profile.fetch}`, { headers });
  };

  public updateProfile = async (data: any) => {
    const token = await getAsyncStorageValue("MFA_ACCESS_TOKEN");
    const headers = {
      apikey: Config.NUCLEUS_APIKEY,
      Authorization: `Bearer ${token}`,
    };
    return this.instance.put(`${API_ENDPOINT.user.profile.update}`, data, {
      headers,
    });
  };

  // ... (continue similar pattern for other methods)

  public createMembership = async (planID: any) => {
    const token = await getAsyncStorageValue("MFA_ACCESS_TOKEN");
    const headers = {
      apikey: Config.NUCLEUS_APIKEY,
      Authorization: `Bearer ${token}`,
    };
    return this.instance.post(
      `${API_ENDPOINT.payment.createMembership}`,
      { planID },
      { headers }
    );
  };

  // ... remaining methods
}

export default UtilityAPI;
