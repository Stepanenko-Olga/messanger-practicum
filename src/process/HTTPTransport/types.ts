export interface Headers {
    name: string;
    value: string;
}

export interface Options {
    method?: string;
    data?: unknown[];
    timeout?: number;
    headers?: Headers;
}

export interface HTTPMethods {
    (url: string, options: Options) : Promise<XMLHttpRequest>
}

export interface HTTPRequest {
    (url: string, options: Options, timeout?: number) : Promise<XMLHttpRequest>;
}
