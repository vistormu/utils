class _Formatter:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    END = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

    @classmethod
    def bold(cls, message: str) -> str:
        return cls.BOLD + message + cls.END

    @classmethod
    def green(cls, message: str) -> str:
        return cls.GREEN + message + cls.END

    @classmethod
    def blue(cls, message: str) -> str:
        return cls.BLUE + message + cls.END

    @classmethod
    def yellow(cls, message: str) -> str:
        return cls.YELLOW + message + cls.END

    @classmethod
    def red(cls, message: str) -> str:
        return cls.RED + message + cls.END


class Logger:

    muteInfo = False
    muteDebug = False
    muteWarning = False
    muteError = False
    muteAll = False

    def __init__(self, name: str):
        self.name = name

    def info(self, *message):
        name = _Formatter.bold('[' + self.name + ']')
        name = _Formatter.green(name)
        level = _Formatter.green('[INFO]')
        message = ''.join(map(str, message))
        message = _Formatter.green(message)

        if not self.muteAll and not self.muteInfo:
            print(name + level + ' ' + message)

    def debug(self, *message):
        name = _Formatter.bold('[' + self.name + ']')
        name = _Formatter.blue(name)
        level = _Formatter.blue('[DEBUG]')
        message = ''.join(map(str, message))
        message = _Formatter.blue(message)

        if not self.muteAll and not self.muteDebug:
            print(name + level + ' ' + message)

    def warning(self, *message):
        name = _Formatter.bold('[' + self.name + ']')
        name = _Formatter.yellow(name)
        level = _Formatter.yellow('[WARNING]')
        message = ''.join(map(str, message))
        message = _Formatter.yellow(message)

        if not self.muteAll and not self.muteWarning:
            print(name + level + ' ' + message)

    def error(self, *message):
        name = _Formatter.bold('[' + self.name + ']')
        name = _Formatter.red(name)
        level = _Formatter.red('[ERROR]')
        message = ''.join(map(str, message))
        message = _Formatter.red(message)

        if not self.muteAll and not self.muteError:
            print(name + level + ' ' + message)
