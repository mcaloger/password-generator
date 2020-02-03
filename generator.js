let segments = {
    words:["a", "able", "about", "above", "act", "add", "afraid", "after", "again", "against", "age", "ago", "agree", "air", "all", "allow", "also", "always", "am", "among", "an", "and", "anger", "animal", "answer", "any", "appear", "apple", "are", "area", "arm", "arrange", "arrive", "art", "as", "ask", "at", "atom", "baby", "back", "bad", "ball", "band", "bank", "bar", "base", "basic", "bat", "be", "bear", "beat", "beauty", "bed", "been", "before", "began", "begin", "behind", "believe", "bell", "best", "better", "between", "big", "bird", "bit", "black", "block", "blood", "blow", "blue", "board", "boat", "body", "bone", "book", "born", "both", "bottom", "bought", "box", "boy", "branch", "bread", "break", "bright", "bring", "broad", "broke", "brother", "brought", "brown", "build", "burn", "busy", "but", "buy", "by", "call", "came", "camp", "can", "capital", "captain", "car", "card", "care", "carry", "case", "cat", "catch", "caught", "cause", "cell", "cent", "center", "century", "certain", "chair", "chance", "change", "character", "charge", "chart", "check", "chick", "chief", "child", "children", "choose", "chord", "circle", "city", "claim", "class", "clean", "clear", "climb", "clock", "close", "clothe", "cloud", "coast", "coat", "cold", "collect", "colony", "color", "column", "come", "common", "company", "compare", "complete", "condition", "connect", "consider", "consonant", "contain", "continent", "continue", "control", "cook", "cool", "copy", "corn", "corner", "correct", "cost", "cotton", "could", "count", "country", "course", "cover", "cow", "crease", "create", "crop", "cross", "crowd", "cry", "current", "cut", "dad", "dance", "danger", "dark", "day", "dead", "deal", "dear", "death", "decide", "decimal", "deep", "degree", "depend", "describe", "desert", "design", "determine", "develop", "dictionary", "did", "die", "differ", "difficult", "direct", "discuss", "distant", "divide", "division", "do", "doctor", "does", "dog", "dollar", "dont", "done", "door", "double", "down", "draw", "dream", "dress", "drink", "drive", "drop", "dry", "duck", "during", "each", "ear", "early", "earth", "ease", "east", "eat", "edge", "effect", "egg", "eight", "either", "electric", "element", "else", "end", "enemy", "energy", "engine", "enough", "enter", "equal", "equate", "especially", "even", "evening", "event", "ever", "every", "exact", "example", "except", "excite", "exercise", "expect", "experience", "experiment", "eye", "face", "fact", "fair", "fall", "family", "famous", "far", "farm", "fast", "fat", "father", "favor", "fear", "feed", "feel", "feet", "fell", "felt", "few", "field", "fig", "fight", "figure", "fill", "final", "find", "fine", "finger", "finish", "fire", "first", "fish", "fit", "five", "flat", "floor", "flow", "flower", "fly", "follow", "food", "foot", "for", "force", "forest", "form", "forward", "found", "four", "fraction", "free", "fresh", "friend", "from", "front", "fruit", "full", "fun", "game", "garden", "gas", "gather", "gave", "general", "gentle", "get", "girl", "give", "glad", "glass", "go", "gold", "gone", "good", "got", "govern", "grand", "grass", "gray", "great", "green", "grew", "ground", "group", "grow", "guess", "guide", "gun", "had", "hair", "half", "hand", "happen", "happy", "hard", "has", "hat", "have", "he", "head", "hear", "heard", "heart", "heat", "heavy", "held", "help", "her", "here", "high", "hill", "him", "his", "history", "hit", "hold", "hole", "home", "hope", "horse", "hot", "hot", "hour", "house", "how", "huge", "human", "hundred", "hunt", "hurry", "I", "ice", "idea", "if", "imagine", "in", "inch", "include", "indicate", "industry", "insect", "instant", "instrument", "interest", "invent", "iron", "is", "island", "it", "job", "join", "joy", "jump", "just", "keep", "kept", "key", "kill", "kind", "king", "knew", "know", "lady", "lake", "land", "language", "large", "last", "late", "laugh", "law", "lay", "lead", "learn", "least", "leave", "led", "left", "leg", "length", "less", "let", "letter", "level", "lie", "life", "lift", "light", "like", "line", "liquid", "list", "listen", "little", "live", "locate", "log", "lone", "long", "look", "lost", "lot", "loud", "love", "low", "machine", "made", "magnet", "main", "major", "make", "man", "many", "map", "mark", "market", "mass", "master", "match", "material", "matter", "may", "me", "mean", "meant", "measure", "meat", "meet", "melody", "men", "metal", "method", "middle", "might", "mile", "milk", "million", "mind", "mine", "minute", "miss", "mix", "modern", "molecule", "moment", "money", "month", "moon", "more", "morning", "most", "mother", "motion", "mount", "mountain", "mouth", "move", "much", "multiply", "music", "must", "my", "name", "nation", "natural", "nature", "near", "necessary", "neck", "need", "neighbor", "never", "new", "next", "night", "nine", "no", "noise", "noon", "nor", "north", "nose", "note", "nothing", "notice", "noun", "now", "number", "numeral", "object", "observe", "occur", "ocean", "of", "off", "offer", "office", "often", "oh", "oil", "old", "on", "once", "one", "only", "open", "operate", "opposite", "or", "order", "organ", "original", "other", "our", "out", "over", "own", "oxygen", "page", "paint", "pair", "paper", "paragraph", "parent", "part", "particular", "party", "pass", "past", "path", "pattern", "pay", "people", "perhaps", "period", "person", "phrase", "pick", "picture", "piece", "pitch", "place", "plain", "plan", "plane", "planet", "plant", "play", "please", "plural", "poem", "point", "poor", "populate", "port", "pose", "position", "possible", "post", "pound", "power", "practice", "prepare", "present", "press", "pretty", "print", "probable", "problem", "process", "produce", "product", "proper", "property", "protect", "prove", "provide", "pull", "push", "put", "quart", "question", "quick", "quiet", "quite", "quotient", "race", "radio", "rail", "rain", "raise", "ran", "range", "rather", "reach", "read", "ready", "real", "reason", "receive", "record", "red", "region", "remember", "repeat", "reply", "represent", "require", "rest", "result", "rich", "ride", "right", "ring", "rise", "river", "road", "rock", "roll", "room", "root", "rope", "rose", "round", "row", "rub", "rule", "run", "safe", "said", "sail", "salt", "same", "sand", "sat", "save", "saw", "say", "scale", "school", "science", "score", "sea", "search", "season", "seat", "second", "section", "see", "seed", "seem", "segment", "select", "self", "sell", "send", "sense", "sent", "sentence", "separate", "serve", "set", "settle", "seven", "several", "shall", "shape", "share", "sharp", "she", "sheet", "shell", "shine", "ship", "shoe", "shop", "shore", "short", "should", "shoulder", "shout", "show", "side", "sight", "sign", "silent", "silver", "similar", "simple", "since", "sing", "single", "sister", "sit", "six", "size", "skill", "skin", "sky", "slave", "sleep", "slip", "slow", "small", "smell", "smile", "snow", "so", "soft", "soil", "soldier", "solution", "solve", "some", "son", "song", "soon", "sound", "south", "space", "speak", "special", "speech", "speed", "spell", "spend", "spoke", "spot", "spread", "spring", "square", "stand", "star", "start", "state", "station", "stay", "stead", "steam", "steel", "step", "stick", "still", "stone", "stood", "stop", "store", "story", "straight", "strange", "stream", "street", "stretch", "string", "strong", "student", "study", "subject", "substance", "subtract", "success", "such", "sudden", "suffix", "sugar", "suggest", "suit", "summer", "sun", "supply", "support", "sure", "surface", "surprise", "swim", "syllable", "symbol", "system", "table", "tail", "take", "talk", "tall", "teach", "team", "teeth", "tell", "temperature", "ten", "term", "test", "than", "thank", "that", "the", "their", "them", "then", "there", "these", "they", "thick", "thin", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "three", "through", "throw", "thus", "tie", "time", "tiny", "tire", "to", "together", "told", "tone", "too", "took", "tool", "top", "total", "touch", "toward", "town", "track", "trade", "train", "travel", "tree", "triangle", "trip", "trouble", "truck", "try", "tube", "turn", "twenty", "two", "type", "under", "unit", "until", "up", "us", "use", "usual", "valley", "value", "vary", "verb", "very", "view", "village", "visit", "voice", "vowel", "wait", "walk", "wall", "want", "war", "warm", "was", "wash", "watch", "water", "wave", "way", "we", "wear", "weather", "week", "weight", "well", "went", "were", "west", "what", "wheel", "when", "where", "whether", "which", "while", "white", "who", "whole", "whose", "why", "wide", "wife", "wild", "will", "win", "wind", "window", "wing", "winter", "wire", "wish", "with", "woman", "women", "wont", "wonder", "wood", "word", "work", "world", "would", "write", "written", "wrong", "wrote", "yard", "year", "yellow", "yes", "yet", "you", "young", "your"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbols: ["!", "@", "#", "$",  "%", "^", "&", "*", "_", "+", "-", "="]
}

let settings = {
    minLength: 12,
    maxLength: 20,
    symbols: true,
    atLeastoneSymbol: true,
    atLeastOneNumber: true,
    atLeastOneWord: true
}

let capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

let generateRandom = (min, max) => Math.floor((Math.random() * max) + min);

let pickOne = list => list[generateRandom(0, list.length)]

let pickSegment = () => {
    let result = {
        value: "",
        type: ""
    }
    let segment = generateRandom(1, 6)
    
    if(segment == 1){
        result.type = "symbol"
        result.value = pickOne(segments.symbols)
    } else if (segment == 2) {
        result.type = "number"
        result.value = pickOne(segments.numbers)
    } else {
        result.type = "word"
        let word = pickOne(segments.words)
        let cap = generateRandom(1, 2)
        if(cap == 1){
            result.value = word
        } else {
            result.value = capitalize(word)
        }
    }
    return result;
}

let generatePassword = () => {
    let result = "";
    let conditions = {
        symbol: false,
        number: false,
        word: false,
        minLength: false
    }
    let conditionsSatisifed = false

    while(conditionsSatisifed == false){
        segment = pickSegment()
        result += segment.value
        if(segment.type == "number") conditions.number = true
        if(segment.type == "word") conditions.word = true
        if(segment.type == "symbol") conditions.symbol = true
        if(result.length >= settings.minLength) conditions.minLength = true
        if(result.length >= settings.minLength) conditions.minLength = true
        if(result.length > settings.maxLength) {
            result = ""
            conditions.number = false
            conditions.minLength = false
            conditions.symbol = false
            conditions.word = false
            conditionsSatisifed = false
        }
        if(conditions.number && conditions.word && conditions.symbol && conditions.minLength) conditionsSatisifed = true     
    }

    return result
    
}

let createPasswordLine = text => {
    const passwordBox = document.getElementById("password-box");
    let card = document.createElement("div")
    card.classList.add("password", "card-1", "blurry-text")
    card.addEventListener("click", (e) => {
        if(e.target.classList.contains("card-title")) {
            navigator.clipboard.writeText(e.target.innerHTML).then(function() {
            /* clipboard successfully set */
            }, function() {
            /* clipboard write failed */
            });
        }
    })
    card.addEventListener("mouseover", (e) => {
        card.querySelector(".card-body").classList.remove("blurry-text")
        card.querySelector(".card-title").classList.remove("blurry-text")
    })

    card.addEventListener("mouseleave", (e) => {
        card.querySelector(".card-body").classList.add("blurry-text")
        card.querySelector(".card-title").classList.add("blurry-text")
    })

    let title = document.createElement("div")
    title.classList.add("card-title", "blurry-text")
    title.innerHTML = text
   
    let body = document.createElement("div")
    body.appendChild(phoneticComponent.constructPhoneticAsElement(text))
    body.classList.add("card-body", "blurry-text")
    

    card.appendChild(title)
    card.appendChild(body)
    passwordBox.appendChild(card)

}

document.getElementById("generate").addEventListener("click", () => {
    displayPasswords();
})

let phoneticComponent = {
    phonetic: (char) => {
        let result = ""
        let newChar = char.toLowerCase()
        
        switch(newChar) {
            case("a"):
                result = "alpha"
                break;
            case("b"):
                result = "bravo"
                break;
            case("c"):
                result = "charlie"
                break;
            case("d"):
                result = "delta"
                break;
            case("e"):
                result = "echo"
                break;
            case("f"):
                result = "foxtrot"
                break;
            case("g"):
                result = "golf"
                break;
            case("h"):
                result = "hotel"
                break;
            case("i"):
                result = "india"
                break;
            case("j"):
                result = "juliet"
                break;
            case("k"):
                result = "kilo"
                break;
            case("l"):
                result = "lima"
                break;
            case("m"):
                result = "mike"
                break;
            case("n"):
                result = "november"
                break;
            case("o"):
                result = "oscar"
                break;
            case("p"):
                result = "papa"
                break;
            case("q"):
                result = "quebec"
                break;
            case("r"):
                result = "romeo"
                break;
            case("s"):
                result = "sierra"
                break;
            case("t"):
                result = "tango"
                break;
            case("u"):
                result = "uniform"
                break;
            case("v"):
                result = "victor"
                break;
            case("w"):
                result = "whiskey"
                break;
            case("x"):
                result = "xray"
                break;
            case("y"):
                result = "yankee"
                break;
            case("z"):
                result = "zulu"
                break;
            case("1"):
                result = "one"
                break;
            case("2"):
                result = "two"
                break;
            case("3"):
                result = "three"
                break;
            case("4"):
                result = "four"
                break;
            case("5"):
                result = "five"
                break;
            case("6"):
                result = "six"
                break;
            case("7"):
                result = "seven"
                break;
            case("8"):
                result = "eight"
                break;
            case("9"):
                result = "nine"
                break;
            case("0"):
                result = "zero"
                break;
            case("!"):
                result = "exclamation-mark"
                break;
            case("@"):
                result = "at-sign"
                break;
            case("#"):
                result = "pound-sign"
                break;
            case("$"):
                result = "dollar-sign"
                break;
            case("%"):
                result = "percent-sign"
                break;
            case("^"):
                result = "caret-symbol"
                break;
            case("&"):
                result = "ampersand"
                break;
            case("*"):
                result = "asterisk"
                break;
            case("-"):
                result = "dash"
                break;
            case("_"):
                result = "underscore"
                break;
            case("+"):
                result = "plus-sign"
                break;
            case("="):
                result = "equals-sign"
                break;
            default: 
                result = "?"
        }
    
        if(newChar != char) result = "capital-" + result
    
        return result
    },
    constructPhoneticAsString: (phrase) => {
        let result = ""
        for(let i = 0 ; i < phrase.length ; i++) {
            
            result += phonetic(phrase.charAt(i)) + " "
        }
        return result
    },
    constructPhoneticAsElement: (phrase) => {
        let result = document.createElement("div")
        result.classList.add("word-list")
        for(let i = 0 ; i < phrase.length ; i++) {
            let word = document.createElement("div")
            word.classList.add("word")
            word.innerHTML = phoneticComponent.phonetic(phrase.charAt(i))
            result.appendChild(word)
        }
        return result
    }
}

let passwordGenerationComponent = {

}

function displayPasswords() {
    const passwordBox = document.getElementById("password-box");
    passwordBox.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        password = generatePassword();
        createPasswordLine(password);
    }
}

displayPasswords()