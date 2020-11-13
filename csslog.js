// define colors
const C_DEFAULT       = '[m'
const C_WHITE         = "[1m"
const C_BLACK         = "[30m"
const C_RED           = "[31m "
const C_GREEN         = "[32m"
const C_YELLOW        = "[33m"
const C_BLUE          = "[34m"
const C_PURPLE        = "[35m"
const C_CYAN          = "[36m"
const C_LIGHTGRAY     = "[37m"
const C_DARKGRAY      = "[1;30m"
const C_LIGHTRED      = "[1;31m"
const C_LIGHTGREEN    = "[1;32m"
const C_LIGHTYELLOW   = "[1;33m"
const C_LIGHTBLUE     = "[1;34m"
const C_LIGHTPURPLE   = "[1;35m"
const C_LIGHTCYAN     = "[1;36m"

const C_BG_BLACK      = "[40m"
const C_BG_RED        = "[41m"
const C_BG_GREEN      = "[42m"
const C_BG_YELLOW     = "[43m"
const C_BG_BLUE       = "[44m"
const C_BG_PURPLE     = "[45m"
const C_BG_CYAN       = "[46m"
const C_BG_LIGHTGRAY  = "[47m"

const ANSI_PREFIX     = "\u001b"
const ANSI_RESET      = "[0m"

class Slog {

    constructor() {}

    error (message) {
        console.log(ANSI_PREFIX + C_WHITE + ANSI_PREFIX + C_BG_RED + 'SERVER ERROR: ' + ANSI_PREFIX + C_BG_BLACK + ANSI_PREFIX + C_RED + message + ANSI_PREFIX + ANSI_RESET)
    }
    
}


class Clog {

    constructor() {}

    error (message) {
        console.log(
            "%c%s",
            "color: #ffffff; background: #ff0000",
            message
        )
    }

}

export default { Slog, Clog }