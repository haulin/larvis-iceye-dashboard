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

export const token = async ({
  user_id,
  password,
}: TokenPayload): Promise<HttpResponse<TokenResponse>> => {
  return await http<TokenResponse>(
    new Request(`${baseUrl}/token`, {
      method: "POST",
      body: JSON.stringify({
        user_id,
        password,
      }),
    })
  );
};
