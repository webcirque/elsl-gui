function KeyPattern(key) {
    if (key) {
        let arr = key.toUpperCase().trim();
        while (arr.search(" +") != -1) {
            arr = arr.replace(" +","+");
        }
        while (arr.indexOf("+ ") != -1) {
            arr = arr.replace("+ ","+");
        }
        arr = arr.split("+");
        let count = 0;
        while (count < arr.length) {
            if (arr[count] == parseInt(arr[count]).toString() && parseInt(arr[count]) >= 20) {
                this.key = parseInt(arr[count]);
            } else {
                switch (arr[count]) {
                    case "CTRL":
                        this.ctrl = true;
                        break;
                    case "SHIFT":
                        this.shift = true;
                        break;
                    case "ALT":
                        this.alt = true;
                        break;
                    case "SUPER":
                        this.super = true;
                        break;
                    case "HOME":
                        this.key = 36;
                        break;
                    case "END":
                        this.key = 35;
                        break;
                    case "PGUP":
                    case "PAGEUP":
                        this.key = 33;
                        break;
                    case "PGDN":
                    case "PGDW":
                    case "PGDOWN":
                    case "PAGEDOWN":
                        this.key = 34;
                        break;
                    case "INS":
                    case "INSERT":
                        this.key = 45;
                        break;
                    case "DEL":
                    case "DELETE":
                        this.key = 46;
                        break;
                    case "ENTER":
                        this.key = 13;
                        break;
                    case "BKSP":
                    case "BACKSP":
                    case "BKSPACE":
                    case "BACKSPACE":
                        this.key = 8;
                        break;
                    case "ESC":
                    case "ESCAPE":
                        this.key = 27;
                        break;
                    case "[":
                        this.key = 219;
                        break;
                    case "]":
                        this.key = 221;
                        break;
                    case "-":
                    case "MINUS":
                        this.key = 189;
                        break;
                    case "=":
                    case "EQUAL":
                        this.key = 187;
                        break;
                    case "\\":
                    case "BACKSLASH":
                        this.key = 220;
                        break;
                    case ";":
                    case "SEMICOLON":
                        this.key = 186;
                        break;
                    case "'":
                        this.key = 222;
                        break;
                    case ",":
                    case "COMMA":
                        this.key = 188;
                        break;
                    case ".":
                    case "PERIOD":
                    case "FULLSTOP":
                        this.key = 190;
                        break;
                    case "/":
                    case "SLASH":
                        this.key = 191;
                        break;
                    case "`":
                    case "GRAVE":
                        this.key = 192;
                        break;
                    default:
                        if (arr[count].match(/[A-Z0-9]/)[0] == arr[count]) {
                            this.key = arr[count].charCodeAt(0);
                        } else {
                            throw(new Error("Unknown key \"" + arr[count] + "\""));
                        }
                }
            }
            count ++;
        }
    }
    this.action = () => {};
}
