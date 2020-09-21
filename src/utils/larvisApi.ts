import { getCurrentUser } from "utils";

const baseUrl = "http://localhost:8000";

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

interface TokenPayload {
  user_id: string;
  password: string;
}

interface TokenResponse extends Response {
  access: string;
}

export interface User {
  name: string;
  user_id: string;
}

const http = async <T>(request: RequestInfo): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(request);

  try {
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return response;
};

let { access } = getCurrentUser();

export const token = async ({
  user_id,
  password,
}: TokenPayload): Promise<HttpResponse<TokenResponse>> => {
  const response = await http<TokenResponse>(
    new Request(`${baseUrl}/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id,
        password,
      }),
    })
  );
  access = response?.parsedBody?.access || "";
  return response;
};

export const userList = async (): Promise<HttpResponse<User[]>> => {
  return await http<User[]>(
    new Request(`${baseUrl}/users`, {
      method: "GET",
      headers: { Authorization: `Bearer ${access}` },
    })
  );
};
