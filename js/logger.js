const Codes = Object.freeze({
    end: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    highlight: "\x1b[7m",
    hidden: "\x1b[8m",
    strikethrough: "\x1b[9m",
    doubleUnderscore: "\x1b[21m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    blackBG: "\x1b[40m",
    redBG: "\x1b[41m",
    greenBG: "\x1b[42m",
    yellowBG: "\x1b[43m",
    blueBG: "\x1b[44m",
    magentaBG: "\x1b[45m",
    cyanBG: "\x1b[46m",
    whiteBG: "\x1b[47m",

    secondaryBlack: "\x1b[90m",
    secondaryRed: "\x1b[91m",
    secondaryGreen: "\x1b[92m",
    secondaryYellow: "\x1b[93m",
    secondaryBlue: "\x1b[94m",
    secondaryMagenta: "\x1b[95m",
    secondaryCyan: "\x1b[96m",
    secondaryWhite: "\x1b[97m",

    secondaryBlackBG: "\x1b[40m",
    secondaryRedBG: "\x1b[41m",
    secondaryGreenBG: "\x1b[42m",
    secondaryYellowBG: "\x1b[43m",
    secondaryBlueBG: "\x1b[44m",
    secondaryMagentaBG: "\x1b[45m",
    secondaryCyanBG: "\x1b[46m",
    secondaryWhiteBG: "\x1b[47m",

    lineUp: '\x1b[1A',
    lineClear: '\x1b[2K',
})

class Formatter {

    static bold(message) {
        return Codes.bold + message + Codes.end;
    }

    static black(message) {
        return Codes.black + message + Codes.end;
    }

    static secondaryBlack(message) {
        return Codes.secondaryBlack + message + Codes.end;
    }

    static red(message) {
        return Codes.red + message + Codes.end;
    }

    static secondaryRed(message) {
        return Codes.secondaryRed + message + Codes.end;
    }

    static green(message) {
        return Codes.green + message + Codes.end;
    }

    static secondaryGreen(message) {
        return Codes.secondaryGreen + message + Codes.end;
    }

    static yellow(message) {
        return Codes.yellow + message + Codes.end;
    }

    static secondaryYellow(message) {
        return Codes.secondaryYellow + message + Codes.end;
    }

    static blue(message) {
        return Codes.blue + message + Codes.end;
    }

    static secondaryBlue(message) {
        return Codes.secondaryBlue + message + Codes.end;
    }

    static magenta(message) {
        return Codes.magenta + message + Codes.end;
    }

    static secondaryMagenta(message) {
        return Codes.secondaryMagenta + message + Codes.end;
    }

    static cyan(message) {
        return Codes.cyan + message + Codes.end;
    }

    static secondaryCyan(message) {
        return Codes.secondaryCyan + message + Codes.end;
    }

    static white(message) {
        return Codes.white + message + Codes.end;
    }

    static secondaryWhite(message) {
        return Codes.secondaryWhite + message + Codes.end;
    }
}

export default class Logger {

    #infoPrefix;
    #debugPrefix;
    #warningPrefix;
    #errorPrefix;

    #muteInfo = false;
    #muteDebug = false;
    #muteWarning = false;
    #muteError = false;

    constructor(name) {
        this.#infoPrefix = this.#createPrefix(name, 'info');
        this.#debugPrefix = this.#createPrefix(name, 'debug');
        this.#warningPrefix = this.#createPrefix(name, 'warning');
        this.#errorPrefix = this.#createPrefix(name, 'error');
    }

    #createPrefix(name, level) {
        let prefix = Formatter.bold("[" + name + "]");

        switch (level) {
            case "info":
                return Formatter.secondaryGreen(prefix) + Formatter.secondaryGreen("[INFO] ");
            case "debug":
                return Formatter.secondaryBlue(prefix) + Formatter.secondaryBlue("[DEBUG] ");
            case "warning":
                return Formatter.yellow(prefix) + Formatter.yellow("[WARNING] ");
            case "error":
                return Formatter.red(prefix) + Formatter.red("[ERROR] ");
        }
    }

    #print(message, flush) {
        flush ? message += '\r' : message += '\n';
        process.stdout.write(message);
    }

    info(message, { flush = false } = {}) {
        if (this.#muteInfo) return
        this.#print(this.#infoPrefix + Formatter.secondaryGreen(message), flush);
    }

    debug(message, { flush = false } = {}) {
        if (this.#muteDebug) return
        this.#print(this.#debugPrefix + Formatter.secondaryBlue(message), flush);
    }

    warning(message, { flush = false } = {}) {
        if (this.#muteWarning) return
        this.#print(this.#warningPrefix + Formatter.yellow(message), flush);
    }

    error(message, { flush = false } = {}) {
        if (this.#muteError) return
        this.#print(this.#errorPrefix + Formatter.red(message), flush);
    }

    mute(...level) {
        if (level.includes('info') || level.includes('all'))
            this.#muteInfo = true;
        if (level.includes('debug') || level.includes('all'))
            this.#muteDebug = true;
        if (level.includes('warning') || level.includes('all'))
            this.#muteWarning = true;
        if (level.includes('error') || level.includes('all'))
            this.#muteError = true;
    }
}
