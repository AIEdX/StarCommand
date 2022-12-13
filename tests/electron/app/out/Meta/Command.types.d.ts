import type { IO } from "../IO/IO";
export declare type CommandData = {
    id: string;
    note?: string;
    arguments: CommandArguments[];
    run: (onDone: Function, io: typeof IO, args: Record<string, any>) => void;
};
export declare type CommandDataNoArgs = {
    id: string;
    note?: string;
    arguments: false;
    run: (onDone: Function, io: typeof IO, args: Record<string, any>) => void;
};
export declare type CommandTypes = CommandData | CommandDataNoArgs;
export declare type CommandArgumentsBase = {
    shortId: string;
    fullId: string;
    required: boolean;
    note?: string;
};
export declare type CommandDataArg = {
    type: "data";
} & CommandArgumentsBase;
export declare type CommandStringArg = {
    type: "string";
} & CommandArgumentsBase;
export declare type CommandNumberArg = {
    type: "number";
} & CommandArgumentsBase;
export declare type CommandNumberArrayArg = {
    type: "number-array";
    length: number;
} & CommandArgumentsBase;
export declare type CommandBooleanArg = {
    type: "boolean";
} & CommandArgumentsBase;
export declare type CommandArguments = CommandStringArg | CommandNumberArg | CommandBooleanArg | CommandNumberArrayArg | CommandDataArg;
export declare type CommandArgTypes = "data" | "string" | "number" | "number-array" | "boolean";
