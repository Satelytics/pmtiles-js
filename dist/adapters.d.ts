import { PMTiles } from "./index";
export declare const leafletRasterLayer: (source: PMTiles, options: any) => any;
type RequestParameters = {
    url: string;
    headers?: any;
    method?: "GET" | "POST" | "PUT";
    body?: string;
    type?: "string" | "json" | "arrayBuffer" | "image";
    credentials?: "same-origin" | "include";
    collectResourceTiming?: boolean;
};
type ResponseCallback = (error?: Error | null, data?: any | null, cacheControl?: string | null, expires?: string | null) => void;
type Cancelable = {
    cancel: () => void;
};
export declare class Protocol {
    tiles: Map<string, PMTiles>;
    constructor();
    add(p: PMTiles): void;
    get(url: string): PMTiles | undefined;
    tile: (params: RequestParameters, callback: ResponseCallback) => Cancelable;
}
export declare class ProtocolServer {
    tiles: Map<string, PMTiles>;
    constructor();
    add(p: PMTiles): void;
    get(url: string): PMTiles | undefined;
    tile: (params: RequestParameters, callback: ResponseCallback) => Cancelable;
}
export {};
