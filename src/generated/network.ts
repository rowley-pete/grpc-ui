// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "network.proto" (package "network", syntax proto3)
// tslint:disable
import { Empty } from "./google/protobuf/empty";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message network.ConnectedNetwork
 */
export interface ConnectedNetwork {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: string status = 3;
     */
    status: string;
    /**
     * @generated from protobuf field: string type = 4;
     */
    type: string;
    /**
     * @generated from protobuf field: int64 speed = 5;
     */
    speed: bigint;
    /**
     * @generated from protobuf field: string mac_address = 6;
     */
    macAddress: string;
    /**
     * @generated from protobuf field: repeated string ip_addresses = 7;
     */
    ipAddresses: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ConnectedNetwork$Type extends MessageType<ConnectedNetwork> {
    constructor() {
        super("network.ConnectedNetwork", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "status", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "speed", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "mac_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "ip_addresses", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ConnectedNetwork>): ConnectedNetwork {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.description = "";
        message.status = "";
        message.type = "";
        message.speed = 0n;
        message.macAddress = "";
        message.ipAddresses = [];
        if (value !== undefined)
            reflectionMergePartial<ConnectedNetwork>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ConnectedNetwork): ConnectedNetwork {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* string status */ 3:
                    message.status = reader.string();
                    break;
                case /* string type */ 4:
                    message.type = reader.string();
                    break;
                case /* int64 speed */ 5:
                    message.speed = reader.int64().toBigInt();
                    break;
                case /* string mac_address */ 6:
                    message.macAddress = reader.string();
                    break;
                case /* repeated string ip_addresses */ 7:
                    message.ipAddresses.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ConnectedNetwork, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* string status = 3; */
        if (message.status !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.status);
        /* string type = 4; */
        if (message.type !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.type);
        /* int64 speed = 5; */
        if (message.speed !== 0n)
            writer.tag(5, WireType.Varint).int64(message.speed);
        /* string mac_address = 6; */
        if (message.macAddress !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.macAddress);
        /* repeated string ip_addresses = 7; */
        for (let i = 0; i < message.ipAddresses.length; i++)
            writer.tag(7, WireType.LengthDelimited).string(message.ipAddresses[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message network.ConnectedNetwork
 */
export const ConnectedNetwork = new ConnectedNetwork$Type();
/**
 * @generated ServiceType for protobuf service network.NetworkService
 */
export const NetworkService = new ServiceType("network.NetworkService", [
    { name: "SubscribeNetwork", serverStreaming: true, options: {}, I: Empty, O: ConnectedNetwork },
    { name: "PushNetworkInterface", options: {}, I: ConnectedNetwork, O: Empty }
]);
