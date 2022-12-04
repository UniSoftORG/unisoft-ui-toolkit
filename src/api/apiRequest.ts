import { SupportedApiMethods } from "../interfaces/generics";
import { IBreadcrumbs } from "../interfaces/breadCrumbs";

/**
 * Global api request class. Use this to put any api request through
 *
 * It needs to know of a token, which means you need to create one instance without token (pre auth)
 * and one instance with a token (post auth). Otherwise you are doomed.
 *
 * On the createRequest method: this one will take a FULL url. For example api.staging.gg/admin/createUser.
 *
 * Before it used to be a lot simpler intake, limited to the endpoint itself, such as /admin/createUser.
 *
 * However, since this is an abstraction, and yu can't or don't need to put the env here as well, you will need
 * to mod the requests as per this specification. Thank you!
 *  */
export class ApiRequest {
  token: string;
  constructor(token: string) {
    this.token = token;
  }

  setToken = (newToken: string) => {
    if (!newToken.length) throw new Error("bad data!");

    console.log("[DEBUG TBD] NEW TOKEN HAS BEEN SET UP >>>>>>>");
    this.token = newToken;
  };

  requestHeaders = (additionalHeaders?: { [key: string]: string }) => {
    console.log("[DEBUG TBD] About to set headers", this.token);
    let headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${this.token}`,
      accept: "application/json",
    };
    console.log("[DEBUG TBD] Headers so far...", headers);

    if (!!additionalHeaders) {
      headers = { ...headers, ...additionalHeaders };
    }
    console.log("[DEBUG TBD] Final headers", headers);
    return headers;
  };

  getResponse = async <Type>(
    response: Response
  ): Promise<{ data: Type; statusCode: number; breadCrumbs: IBreadcrumbs }> => {
    const json = await response.json();
    const data = response.status < 400 ? json["data"] : json;
    const breadCrumbs = response.status < 400 ? json["breadcrumbs"] : json;

    return {
      data: data as Type,
      breadCrumbs: breadCrumbs as IBreadcrumbs,
      statusCode: response.status,
    };
  };

  createRequest = async <Type>(
    method: SupportedApiMethods,
    endpoint: string, // that will be a full on env dependant url
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    const headers = this.requestHeaders(additionalHeaders);

    const response = await fetch(endpoint, {
      method: method,
      body: payload,
      headers,
    });

    return await this.getResponse(response);
  };

  get = async <Type>(
    endpoint: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{
    data: Type;
    statusCode: number;
    breadCrumbs?: IBreadcrumbs;
  }> => {
    return await this.createRequest(
      SupportedApiMethods.GET,
      endpoint,
      undefined,
      additionalHeaders
    );
  };

  put = async <Type>(
    endpoint: string,
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    return await this.createRequest(
      SupportedApiMethods.PUT,
      endpoint,
      payload,
      additionalHeaders
    );
  };

  post = async <Type>(
    endpoint: string,
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    return await this.createRequest(
      SupportedApiMethods.POST,
      endpoint,
      payload,
      additionalHeaders
    );
  };

  delete = async <Type>(
    endpoint: string,
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    return await this.createRequest(
      SupportedApiMethods.DELETE,
      endpoint,
      payload,
      additionalHeaders
    );
  };

  patch = async <Type>(
    endpoint: string,
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    return await this.createRequest(
      SupportedApiMethods.PATCH,
      endpoint,
      payload,
      additionalHeaders
    );
  };
}
