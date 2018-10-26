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
