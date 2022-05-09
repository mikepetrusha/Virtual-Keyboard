import { buttons } from "./buttons.js";

class Keyboard {
    constructor() {
        this.buttons = buttons;
        this.locale = localStorage.locale || "en";
        this.caps = false;
        this.CapsLock = false;
        this.Shift = false;
    }

    init() {
        document.body.insertAdjacentHTML(
            "beforeend",
            '<section class="virtual_keyboard" id="main">' +
            '<textarea name="textarea" class="textarea" id="editor" cols="100" rows="10">' +
            "</textarea>" +
            '<div class="keyboard" id="keyboard">' +
            '<div class="line_1" id="line_1">' +
            "</div>" +
            '<div class="line_2" id="line_2">' +
            "</div>" +
            '<div class="line_3" id="line_3">' +
            "</div>" +
            '<div class="line_4" id="line_4">' +
            "</div>" +
            '<div class="line_5" id="line_5">' +
            "</div>" +
            "</div>" +
            "</section>"
        );
        this.buttons.forEach((button) =>
            button.render(
                this.locale,
                false,
                this.buttons.indexOf(button),
                this.CapsLock
            )
        );

        this.main = document.getElementById("main");
        this.editor = document.getElementById("editor");
        this.main.addEventListener("click", this.clickHandle.bind(this));
        document.body.addEventListener("keydown", this.keyHandle.bind(this));
        document.body.addEventListener("keypress", this.keyHandle.bind(this));
        document.body.addEventListener("keyup", this.keyHandle.bind(this));
        this.showInfo();
    }

    showInfo() {
        if (document.querySelector("#information") === null) {
            this.editor.insertAdjacentHTML(
                "afterend",
                '<div class="info__container">' +
                '<span class="info__text" id="information">' +
                "</span>" +
                "</div>"
            );
        }
        const INFO = document.querySelector("#information");
        INFO.innerText = `Раскладка клавиатуры: ${this.locale} (переключение Shift + Alt)`;
    }

    render() {
        const keyboard = document.getElementById("keyboard");
        keyboard.innerHTML = "";
        keyboard.insertAdjacentHTML(
            "beforeend",
            '<div class="line_1" id="line_1">' +
            "</div>" +
            '<div class="line_2" id="line_2">' +
            "</div>" +
            '<div class="line_3" id="line_3">' +
            "</div>" +
            '<div class="line_4" id="line_4">' +
            "</div>" +
            '<div class="line_5" id="line_5">' +
            "</div>"
        );
        this.buttons.forEach((button) =>
            button.render(
                this.locale,
                this.caps,
                this.buttons.indexOf(button),
                this.CapsLock,
                this.Shift
            )
        );
        this.showInfo();
    }

    keyHandle(e) {
        const button = e.code;
        if (e.altKey && e.shiftKey) {
            this.locale = this.locale === "en" ? "ru" : "en";
            localStorage.locale = this.locale;
            this.render();
        }

        if (e.code === "CapsLock" && e.type === "keydown") {
            this.caps = !this.caps;
            this.CapsLock = !this.CapsLock;
            this.render();
        }

        if (e.code === "Backspace" && e.type === "keydown") {
            this.deleteChar(-1);
        }

        if (e.code === "Delete" && e.type === "keydown") {
            this.deleteChar(1);
        }

        if (e.shiftKey && !e.repeat) {
            this.caps = !this.caps;
            this.Shift = !this.Shift;
            this.render();
        }

        if (!e.shiftKey && this.Shift) {
            this.caps = !this.caps;
            this.Shift = !this.Shift;
            this.render();
        }

        if (
            e.type === "keydown" &&
            (e.code === "ArrowLeft" || e.code === "ArrowRight")
        ) {
            if (e.code === "ArrowLeft") this.changeSelectionStart(-1);
            if (e.code === "ArrowRight") this.changeSelectionStart(1);
        }

        if (
            e.type === "keydown" &&
            (e.code === "ArrowUp" || e.code === "ArrowDown")
        ) {
            if (e.code === "ArrowUp") this.setSelectionOnStart();
            if (e.code === "ArrowDown") this.setSelectionOnEnd();
        }

        const el = document.getElementById(`key_${button}`);
        if (el !== null && el.dataset) {
            if (e.type === "keydown") this.printer(el.dataset.buttonChar);
            this.buttons[el.dataset.buttonPos].animation(
                this.CapsLock,
                this.Shift,
                false,
                e.type
            );
        }
        e.preventDefault();
    }

    clickHandle(e) {
        const el = e.target;
        if (el.dataset && el.dataset.buttonPos) {
            if (el.dataset.buttonChar) {
                this.printer(el.dataset.buttonChar);
            }

            if (el.dataset.buttonType === "Backspace") {
                this.deleteChar(-1);
            }

            if (el.dataset.buttonType === "Delete") {
                this.deleteChar(1);
            }

            if (el.dataset.buttonType === "CapsLock") {
                this.caps = !this.caps;
                this.CapsLock = !this.CapsLock;
                this.render();
            }

            if (
                el.dataset.buttonType === "ShiftLeft" ||
                el.dataset.buttonType === "ShiftRight"
            ) {
                this.caps = !this.caps;
                this.Shift = !this.Shift;
                this.render();
            }

            if (
                el.dataset.buttonType === "ControlLeft" &&
                this.Shift &&
                !this.CapsLock
            ) {
                this.locale = this.locale === "en" ? "ru" : "en";
                localStorage.locale = this.locale;
                this.render();
            }

            if (
                el.dataset.buttonType === "ArrowLeft" ||
                el.dataset.buttonType === "ArrowRight"
            ) {
                if (el.dataset.buttonType === "ArrowLeft")
                    this.changeSelectionStart(-1);
                if (el.dataset.buttonType === "ArrowRight")
                    this.changeSelectionStart(1);
            }

            if (
                el.dataset.buttonType === "ArrowUp" ||
                el.dataset.buttonType === "ArrowDown"
            ) {
                if (el.dataset.buttonType === "ArrowUp") this.setSelectionOnStart();
                if (el.dataset.buttonType === "ArrowDown") this.setSelectionOnEnd();
            }

            this.buttons[el.dataset.buttonPos].animation(this.CapsLock, this.Shift);
        }
    }

    printer(char) {
        this.editor.setRangeText(
            char,
            this.editor.selectionStart,
            this.editor.selectionEnd,
            "end"
        );
        this.editor.focus();
    }

    getLength() {
        return this.editor.value.length;
    }

    changeSelectionStart(num) {
        let pos = this.editor.selectionStart;
        pos += num;
        if (num < 0) {
            pos = this.editor.selectionStart < 1 ? 0 : pos;
        }
        if (num > 0) {
            pos =
                this.editor.selectionStart === this.getLength ? this.getLength : pos;
        }
        this.editor.selectionStart = pos;
        this.editor.selectionEnd = this.editor.selectionStart;
        this.editor.focus();
    }

    setSelectionOnStart() {
        this.editor.selectionStart = 0;
        this.editor.selectionEnd = this.editor.selectionStart;
        this.editor.focus();
    }

    setSelectionOnEnd() {
        this.editor.selectionStart = this.editor.value.length;
        this.editor.selectionEnd = this.editor.selectionStart;
        this.editor.focus();
    }

    setSelectionPosition(num) {
        this.editor.selectionStart = num;
        this.editor.selectionEnd = this.editor.selectionStart;
        this.editor.focus();
    }

    deleteChar(num) {
        const str = this.editor.value;
        let startPos = this.editor.selectionStart;
        let endPos = this.editor.selectionEnd;
        if (startPos !== endPos) {
            this.editor.value =
                str.slice(0, startPos) + str.slice(endPos, str.length);
        } else {
            startPos = num < 0 ? startPos + num : startPos;
            endPos = num < 0 ? endPos : endPos + num;
            this.editor.value =
                str.slice(0, startPos) + str.slice(endPos, str.length);
        }
        this.setSelectionPosition(startPos);
    }
}

const keyboard = new Keyboard();
keyboard.init();