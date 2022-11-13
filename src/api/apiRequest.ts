import { SupportedApiMethods } from "../interfaces/generics";
import { IBreadcrumbs } from "../interfaces/breadCrumbs";

/// Global api request class. Use this to put any api request through
export class ApiRequest {
  token: string;
  constructor(token: string) {
    this.token = token;
  }

  setToken = (newToken: string) => {
    if (!newToken.length) throw new Error("bad data!");

    console.log(">>>>>>> NEW TOKEN HAS BEEN SET UP >>>>>>>");
    this.token = newToken;
  };

  requestHeaders = (additionalHeaders?: { [key: string]: string }) => {
    let headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${this.token}` ?? undefined,
      accept: "application/json",
    };

    if (!!additionalHeaders) {
      headers = { ...headers, ...additionalHeaders };
    }
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
    endpoint: string,
    payload?: string,
    additionalHeaders?: { [key: string]: string }
  ): Promise<{ data: Type; statusCode: number }> => {
    const headers = this.requestHeaders(additionalHeaders);

    const response = await fetch(
      // `http://127.0.0.1:8000/api${endpoint}`,
      // TODO: Move this to an env file
      `https://api.staging.gamespace.gg/api${endpoint}`,
      {
        method: method,
        body: payload,
        headers,
      }
    );

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
