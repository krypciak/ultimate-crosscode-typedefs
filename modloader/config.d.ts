export const gameAssetsDir: string;
export const modsDirs: string[];
export const stylesheetURLs: string[];
export const scriptURLs: string[];
export const gameScriptURL: string;
// TODO(lexisother): DOCUMENT!!!
export const impactConfig: Record<string, unknown>;

export function onGameDOMCreated(): MaybePromise<void>;
