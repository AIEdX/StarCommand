import type { CommandArguments } from "../Meta/Command.types";
export declare const CommandParser: {
    getCommandId(input: string): {
        id: string;
        index: number;
    };
    parseArgs(input: string, args: CommandArguments[], index: number): Record<string, any> | null;
};
