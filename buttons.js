import Button from "./button.js";

let buttons = [
    new Button(1, "Backquote", {
        locale: {
            en: ["`", "~"],
            ru: ["ё", "Ё"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit1", {
        locale: {
            en: ["1", "!"],
            ru: ["1", "!"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit2", {
        locale: {
            en: ["2", "@"],
            ru: ["2", '"'],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit3", {
        locale: {
            en: ["3", "#"],
            ru: ["3", "№"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit4", {
        locale: {
            en: ["4", "$"],
            ru: ["4", ";"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit5", {
        locale: {
            en: ["5", "%"],
            ru: ["5", "%"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit6", {
        locale: {
            en: ["6", "^"],
            ru: ["6", ":"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit7", {
        locale: {
            en: ["7", "&"],
            ru: ["7", "?"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit8", {
        locale: {
            en: ["8", "*"],
            ru: ["8", "*"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit9", {
        locale: {
            en: ["9", "("],
            ru: ["9", "("],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Digit0", {
        locale: {
            en: ["0", ")"],
            ru: ["0", ")"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Minus", {
        locale: {
            en: ["-", "_"],
            ru: ["-", "_"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Equal", {
        locale: {
            en: ["=", "+"],
            ru: ["=", "+"],
        },
        special: false,
        caps: false,
    }),
    new Button(1, "Backspace", {
        locale: {
            en: ["Backspace", "Backspace"],
            ru: ["Backspace", "Backspace"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(2, "Tab", {
        locale: {
            en: ["Tab", "Tab"],
            ru: ["Tab", "Tab"],
        },
        special: {
            symbol: "\t",
        },
        caps: false,
    }),
    new Button(2, "KeyQ", {
        locale: {
            en: ["q", "Q"],
            ru: ["й", "Й"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyW", {
        locale: {
            en: ["w", "W"],
            ru: ["ц", "Ц"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyE", {
        locale: {
            en: ["e", "E"],
            ru: ["у", "У"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyR", {
        locale: {
            en: ["r", "R"],
            ru: ["к", "К"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyT", {
        locale: {
            en: ["t", "T"],
            ru: ["е", "Е"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyY", {
        locale: {
            en: ["y", "Y"],
            ru: ["н", "Н"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyU", {
        locale: {
            en: ["u", "U"],
            ru: ["г", "Г"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyI", {
        locale: {
            en: ["i", "I"],
            ru: ["ш", "Ш"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyO", {
        locale: {
            en: ["o", "O"],
            ru: ["щ", "Щ"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "KeyP", {
        locale: {
            en: ["p", "P"],
            ru: ["з", "З"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "BracketLeft", {
        locale: {
            en: ["[", "{" + ""],
            ru: ["х", "Х"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "BracketRight", {
        locale: {
            en: ["]", "}"],
            ru: ["ъ", "Ъ"],
        },
        special: false,
        caps: true,
    }),
    new Button(2, "Backslash", {
        locale: {
            en: ["\\", "|"],
            ru: ["\\", "/"],
        },
        special: false,
        caps: false,
    }),
    new Button(2, "Delete", {
        locale: {
            en: ["Del", "Del"],
            ru: ["Del", "Del"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(3, "CapsLock", {
        locale: {
            en: ["CapsLock", "CapsLock"],
            ru: ["CapsLock", "CapsLock"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(3, "KeyA", {
        locale: {
            en: ["a", "A"],
            ru: ["ф", "Ф"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyS", {
        locale: {
            en: ["s", "S"],
            ru: ["ы", "Ы"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyD", {
        locale: {
            en: ["d", "D"],
            ru: ["в", "В"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyF", {
        locale: {
            en: ["f", "F"],
            ru: ["а", "А"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyG", {
        locale: {
            en: ["g", "G"],
            ru: ["п", "П"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyH", {
        locale: {
            en: ["h", "H"],
            ru: ["р", "Р"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyJ", {
        locale: {
            en: ["j", "J"],
            ru: ["о", "О"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyK", {
        locale: {
            en: ["k", "K"],
            ru: ["л", "Л"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "KeyL", {
        locale: {
            en: ["l", "L"],
            ru: ["д", "Д"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "Semicolon", {
        locale: {
            en: [";", ":"],
            ru: ["ж", "Ж"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "Quote", {
        locale: {
            en: ["'", '"'],
            ru: ["э", "Э"],
        },
        special: false,
        caps: true,
    }),
    new Button(3, "Enter", {
        locale: {
            en: ["Enter", "Enter"],
            ru: ["Enter", "Enter"],
        },
        special: {
            symbol: "\n",
        },
        caps: false,
    }),
    new Button(4, "ShiftLeft", {
        locale: {
            en: ["Shift", "Shift"],
            ru: ["Shift", "Shift"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(4, "KeyZ", {
        locale: {
            en: ["z", "Z"],
            ru: ["я", "Я"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyX", {
        locale: {
            en: ["x", "X"],
            ru: ["ч", "Ч"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyC", {
        locale: {
            en: ["c", "C"],
            ru: ["с", "С"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyV", {
        locale: {
            en: ["v", "V"],
            ru: ["м", "М"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyB", {
        locale: {
            en: ["b", "B"],
            ru: ["и", "И"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyN", {
        locale: {
            en: ["n", "N"],
            ru: ["т", "Т"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "KeyM", {
        locale: {
            en: ["m", "M"],
            ru: ["ь", "Ь"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "Comma", {
        locale: {
            en: [",", "<"],
            ru: ["б", "Б"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "Period", {
        locale: {
            en: [".", ">"],
            ru: ["ю", "Ю"],
        },
        special: false,
        caps: true,
    }),
    new Button(4, "Slash", {
        locale: {
            en: ["/", "?"],
            ru: [".", ","],
        },
        special: false,
        caps: false,
    }),
    new Button(4, "ArrowUp", {
        locale: {
            en: ["▲", "▲"],
            ru: ["▲", "▲"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(4, "ShiftRight", {
        locale: {
            en: ["Shift", "Shift"],
            ru: ["Shift", "Shift"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "ControlLeft", {
        locale: {
            en: ["Ctrl", "Ctrl"],
            ru: ["Ctrl", "Ctrl"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "AltLeft", {
        locale: {
            en: ["Alt", "Alt"],
            ru: ["Alt", "Alt"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "MetaLeft", {
        locale: {
            en: ["Win", "Win"],
            ru: ["Win", "Win"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "Space", {
        locale: {
            en: ["", ""],
            ru: ["", ""],
        },
        special: {
            symbol: " ",
        },
        caps: false,
    }),
    new Button(5, "AltRight", {
        locale: {
            en: ["Alt", "Alt"],
            ru: ["Alt", "Alt"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "ControlRight", {
        locale: {
            en: ["Ctrl", "Ctrl"],
            ru: ["Ctrl", "Ctrl"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "ArrowLeft", {
        locale: {
            en: ["◄", "◄"],
            ru: ["◄", "◄"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "ArrowDown", {
        locale: {
            en: ["▼", "▼"],
            ru: ["▼", "▼"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
    new Button(5, "ArrowRight", {
        locale: {
            en: ["►", "►"],
            ru: ["►", "►"],
        },
        special: {
            nonPrintable: true,
        },
        caps: false,
    }),
];
export { buttons };