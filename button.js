export default class Button {
    constructor(line, code, options = {}) {
        this.options = options;
        this.code = code;
        this.line = line;
    }

    render(locale = "en", caps = false, pos, capsLock, shift) {
        const line = document.getElementById(`line_${this.line}`);
        let key;
        this.elem = document.createElement("button");
        this.elem.id = `key_${this.code}`;
        this.elem.className = "buttons";
        this.elem.dataset.buttonType = this.code;
        this.elem.dataset.buttonPos = pos;
        this.elem.innerText = caps ? this.options.locale[locale][1] : this.options.locale[locale][0];
        if (this.options.special) {
            key = !this.options.special.nonPrintable ? this.options.special.symbol : "";
            this.elem.dataset.buttonChar = key;
        } else {
            key = caps ? this.options.locale[locale][1] : this.options.locale[locale][0];
            this.elem.dataset.buttonChar = key;
        }
        if (this.code === "CapsLock" && capsLock) {
            this.elem.classList.add("buttons-fixed");
        }
        if (["ShiftLeft", "ShiftRight"].indexOf(this.code) >= 0 && shift) {
            this.elem.classList.add("buttons-fixed");
        }
        line.insertAdjacentElement("beforeend", this.elem);
    }

    animation(capslock, shift, virtual = true, type = "keydown") {
        if (["ShiftLeft", "ShiftRight"].indexOf(this.code) >= 0) {
            if (shift) {
                this.elem.classList.add("buttons-fixed");
            } else {
                this.elem.classList.remove("buttons-fixed");
            }
        }

        if (this.code === "CapsLock") {
            if (capslock) {
                this.elem.classList.add("buttons-fixed");
            } else {
                this.elem.classList.remove("buttons-fixed");
            }
        }

        if (virtual) {
            this.elem.classList.add("buttons-pressed");
            setTimeout(() => {
                this.elem.classList.remove("buttons-pressed");
            }, 100);
        } else {
            if (type === "keydown") {
                this.elem.classList.add("buttons-pressed");
            }

            if (type === "keyup") {
                setTimeout(() => {
                    this.elem.classList.remove("buttons-pressed");
                }, 100);
            }
        }
    }
}