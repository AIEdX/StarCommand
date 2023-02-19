import type { CommandTypes } from "../Meta/Command.types";
export declare const Commands: {
    commands: Map<string, CommandTypes>;
    registerCommand(data: CommandTypes): void;
    getCommand(id: string): CommandTypes | undefined;
    run(input: string): void;
    error(error: string): void;
};
