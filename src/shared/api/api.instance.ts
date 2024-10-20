import type { ToFormDataOptions } from "../lib/to-form-data";
import { toFormData } from "../lib/to-form-data";
import { toQueryParams } from "../lib/to-query-params";
import { appFetch } from "./app-fetch";

type GetOptions = {
  params?: Record<string | number, any>;
} & Partial<Parameters<typeof fetch>[1]>;

type DeleteOptions = {
  params?: Record<string | number, any>;
} & Partial<Parameters<typeof fetch>[1]>;

type PostOptions = {
  params?: Record<string | number, any>;
} & Partial<Parameters<typeof fetch>[1]>;

type PostFormOptions = {
  params?: Record<string | number, any>;
  transformOptions?: ToFormDataOptions;
} & Partial<Parameters<typeof fetch>[1]>;

type PatchOptions = {
  params?: Record<string | number, any>;
} & Partial<Parameters<typeof fetch>[1]>;

type PatchFormOptions = {
  params?: Record<string | number, any>;
  transformOptions?: ToFormDataOptions;
} & Partial<Parameters<typeof fetch>[1]>;

type PutOptions = {
  params?: Record<string | number, any>;
} & Partial<Parameters<typeof fetch>[1]>;

type PutFormOptions = {
  params?: Record<string | number, any>;
  transformOptions?: ToFormDataOptions;
} & Partial<Parameters<typeof fetch>[1]>;

type ApiReturn<Req, T = unknown> = {
  data: T;
  response: Response;
  request: Req;
};

type GetReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: GetOptions;
  },
  T
>;

type DeleteReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: GetOptions;
  },
  T
>;

type PostReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PostOptions;
  },
  T
>;

type PostFormReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PostOptions;
  },
  T
>;

type PatchReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PatchOptions;
  },
  T
>;

type PatchFormReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PatchFormOptions;
  },
  T
>;

type PutReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PutOptions;
  },
  T
>;

type PutFormReturn<T = unknown> = ApiReturn<
  {
    path: string;
    options: PutFormOptions;
  },
  T
>;

class Api {
  constructor(private fetchFn: typeof fetch) {}

  get = async <T>(path: string, options: GetOptions = {}): Promise<GetReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options.params);

    const response = await this.fetchFn(url, restFetchOptions);

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  delete = async <T>(
    path: string,
    options: DeleteOptions = {}
  ): Promise<DeleteReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "POST",
      ...restFetchOptions,
      headers: {
        ...restFetchOptions.headers,
      },
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  post = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PostOptions = {}
  ): Promise<PostReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "POST",
      ...(body ? { body: JSON.stringify(body) } : {}),
      ...restFetchOptions,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...restFetchOptions.headers,
      },
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  postForm = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PostFormOptions = {}
  ): Promise<PostFormReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "POST",
      ...(body ? { body: toFormData(body, options.transformOptions) } : {}),
      ...restFetchOptions,
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  patch = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PatchOptions = {}
  ): Promise<PatchReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "PATCH",
      ...(body ? { body: JSON.stringify(body) } : {}),
      ...restFetchOptions,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...restFetchOptions.headers,
      },
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  patchForm = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PatchFormOptions = {}
  ): Promise<PatchFormReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "PATCH",
      ...(body ? { body: toFormData(body, options.transformOptions) } : {}),
      ...restFetchOptions,
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  put = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PutOptions = {}
  ): Promise<PutReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "PUT",
      ...(body ? { body: JSON.stringify(body) } : {}),
      ...restFetchOptions,
      headers: {
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...restFetchOptions.headers,
      },
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  putForm = async <T>(
    path: string,
    body?: Record<string | number, any>,
    options: PutFormOptions = {}
  ): Promise<PutFormReturn<T>> => {
    const { params, ...restFetchOptions } = options;
    const url = toQueryParams(path, options?.params);

    const response = await this.fetchFn(url, {
      method: "PUT",
      ...(body ? { body: toFormData(body, options.transformOptions) } : {}),
      ...restFetchOptions,
    });

    const request = {
      path,
      options,
    };

    const data = await this.processResponse<T>(response);

    return { data, response, request };
  };

  private async processResponse<T>(response: Response): Promise<T> {
    if (response.status >= 400) throw await response.json();

    if (response.status === 204) return null as unknown as T;

    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      return (await response.json()) as T;
    }

    if (contentType?.includes("text/plain")) {
      return (await response.text()) as unknown as T;
    }

    return null as unknown as T;
  }
}

export const api = new Api(appFetch);
