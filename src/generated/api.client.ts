// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "api.proto" (package "api", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ApiService } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { VersionResponse } from "./api";
import type { Empty } from "./google/protobuf/empty";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service api.ApiService
 */
export interface IApiServiceClient {
    /**
     * @generated from protobuf rpc: GetVersion(google.protobuf.Empty) returns (api.VersionResponse);
     */
    getVersion(input: Empty, options?: RpcOptions): UnaryCall<Empty, VersionResponse>;
}
/**
 * @generated from protobuf service api.ApiService
 */
export class ApiServiceClient implements IApiServiceClient, ServiceInfo {
    typeName = ApiService.typeName;
    methods = ApiService.methods;
    options = ApiService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: GetVersion(google.protobuf.Empty) returns (api.VersionResponse);
     */
    getVersion(input: Empty, options?: RpcOptions): UnaryCall<Empty, VersionResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, VersionResponse>("unary", this._transport, method, opt, input);
    }
}
