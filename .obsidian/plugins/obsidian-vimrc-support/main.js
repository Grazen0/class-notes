'use strict';

var obsidian = require('obsidian');

const modifiers = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|AltGr|Option|Alt|Shift|Super)/i;
const keyCodes = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|VolumeUp|VolumeDown|VolumeMute|MediaNextTrack|MediaPreviousTrack|MediaStop|MediaPlayPause|PrintScreen|F24|F23|F22|F21|F20|F19|F18|F17|F16|F15|F14|F13|F12|F11|F10|F9|F8|F7|F6|F5|F4|F3|F2|F1|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i;
const UNSUPPORTED = {};

function _command(accelerator, event, modifier) {
	if (process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.metaKey) {
		throw new Error('Double `Command` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _super(accelerator, event, modifier) {
	if (event.metaKey) {
		throw new Error('Double `Super` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {metaKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _commandorcontrol(accelerator, event, modifier) {
	if (process.platform === 'darwin') {
		if (event.metaKey) {
			throw new Error('Double `Command` modifier specified.');
		}

		return {
			event: Object.assign({}, event, {metaKey: true}),
			accelerator: accelerator.slice(modifier.length)
		};
	}

	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _alt(accelerator, event, modifier) {
	if (modifier === 'option' && process.platform !== 'darwin') {
		return UNSUPPORTED;
	}

	if (event.altKey) {
		throw new Error('Double `Alt` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {altKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _shift(accelerator, event, modifier) {
	if (event.shiftKey) {
		throw new Error('Double `Shift` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {shiftKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function _control(accelerator, event, modifier) {
	if (event.ctrlKey) {
		throw new Error('Double `Control` modifier specified.');
	}

	return {
		event: Object.assign({}, event, {ctrlKey: true}),
		accelerator: accelerator.slice(modifier.length)
	};
}

function reduceModifier({accelerator, event}, modifier) {
	switch (modifier) {
		case 'command':
		case 'cmd': {
			return _command(accelerator, event, modifier);
		}

		case 'super': {
			return _super(accelerator, event, modifier);
		}

		case 'control':
		case 'ctrl': {
			return _control(accelerator, event, modifier);
		}

		case 'commandorcontrol':
		case 'cmdorctrl': {
			return _commandorcontrol(accelerator, event, modifier);
		}

		case 'option':
		case 'altgr':
		case 'alt': {
			return _alt(accelerator, event, modifier);
		}

		case 'shift': {
			return _shift(accelerator, event, modifier);
		}

		default:
			console.error(modifier);
	}
}

function reducePlus({accelerator, event}) {
	return {
		event,
		accelerator: accelerator.trim().slice(1)
	};
}

const virtualKeyCodes = {
	0: 'Digit0',
	1: 'Digit1',
	2: 'Digit2',
	3: 'Digit3',
	4: 'Digit4',
	5: 'Digit5',
	6: 'Digit6',
	7: 'Digit7',
	8: 'Digit8',
	9: 'Digit9',
	'-': 'Minus',
	'=': 'Equal',
	Q: 'KeyQ',
	W: 'KeyW',
	E: 'KeyE',
	R: 'KeyR',
	T: 'KeyT',
	Y: 'KeyY',
	U: 'KeyU',
	I: 'KeyI',
	O: 'KeyO',
	P: 'KeyP',
	'[': 'BracketLeft',
	']': 'BracketRight',
	A: 'KeyA',
	S: 'KeyS',
	D: 'KeyD',
	F: 'KeyF',
	G: 'KeyG',
	H: 'KeyH',
	J: 'KeyJ',
	K: 'KeyK',
	L: 'KeyL',
	';': 'Semicolon',
	'\'': 'Quote',
	'`': 'Backquote',
	'/': 'Backslash',
	Z: 'KeyZ',
	X: 'KeyX',
	C: 'KeyC',
	V: 'KeyV',
	B: 'KeyB',
	N: 'KeyN',
	M: 'KeyM',
	',': 'Comma',
	'.': 'Period',
	'\\': 'Slash',
	' ': 'Space'
};

function reduceKey({accelerator, event}, key) {
	if (key.length > 1 || event.key) {
		throw new Error(`Unvalid keycode \`${key}\`.`);
	}

	const code =
		key.toUpperCase() in virtualKeyCodes ?
			virtualKeyCodes[key.toUpperCase()] :
			null;

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice(key.length)
	};
}

const domKeys = Object.assign(Object.create(null), {
	plus: 'Add',
	space: 'Space',
	tab: 'Tab',
	backspace: 'Backspace',
	delete: 'Delete',
	insert: 'Insert',
	return: 'Return',
	enter: 'Return',
	up: 'ArrowUp',
	down: 'ArrowDown',
	left: 'ArrowLeft',
	right: 'ArrowRight',
	home: 'Home',
	end: 'End',
	pageup: 'PageUp',
	pagedown: 'PageDown',
	escape: 'Escape',
	esc: 'Escape',
	volumeup: 'AudioVolumeUp',
	volumedown: 'AudioVolumeDown',
	volumemute: 'AudioVolumeMute',
	medianexttrack: 'MediaTrackNext',
	mediaprevioustrack: 'MediaTrackPrevious',
	mediastop: 'MediaStop',
	mediaplaypause: 'MediaPlayPause',
	printscreen: 'PrintScreen'
});

// Add function keys
for (let i = 1; i <= 24; i++) {
	domKeys[`f${i}`] = `F${i}`;
}

function reduceCode({accelerator, event}, {code, key}) {
	if (event.code) {
		throw new Error(`Duplicated keycode \`${key}\`.`);
	}

	return {
		event: Object.assign({}, event, {key}, code ? {code} : null),
		accelerator: accelerator.trim().slice((key && key.length) || 0)
	};
}

/**
 * This function transform an Electron Accelerator string into
 * a DOM KeyboardEvent object.
 *
 * @param  {string} accelerator an Electron Accelerator string, e.g. `Ctrl+C` or `Shift+Space`.
 * @return {object} a DOM KeyboardEvent object derivate from the `accelerator` argument.
 */
function toKeyEvent(accelerator) {
	let state = {accelerator, event: {}};
	while (state.accelerator !== '') {
		const modifierMatch = state.accelerator.match(modifiers);
		if (modifierMatch) {
			const modifier = modifierMatch[0].toLowerCase();
			state = reduceModifier(state, modifier);
			if (state === UNSUPPORTED) {
				return {unsupportedKeyForPlatform: true};
			}
		} else if (state.accelerator.trim()[0] === '+') {
			state = reducePlus(state);
		} else {
			const codeMatch = state.accelerator.match(keyCodes);
			if (codeMatch) {
				const code = codeMatch[0].toLowerCase();
				if (code in domKeys) {
					state = reduceCode(state, {
						code: domKeys[code],
						key: code
					});
				} else {
					state = reduceKey(state, code);
				}
			} else {
				throw new Error(`Unvalid accelerator: "${state.accelerator}"`);
			}
		}
	}

	return state.event;
}

var keyboardeventFromElectronAccelerator = {
	UNSUPPORTED,
	reduceModifier,
	reducePlus,
	reduceKey,
	reduceCode,
	toKeyEvent
};

/**
 * Follows the link under the cursor, temporarily moving the cursor if necessary for follow-link to
 * work (i.e. if the cursor is on a starting square bracket).
 */
const followLinkUnderCursor = (vimrcPlugin) => {
    const obsidianEditor = vimrcPlugin.getActiveObsidianEditor();
    const { line, ch } = obsidianEditor.getCursor();
    const firstTwoChars = obsidianEditor.getRange({ line, ch }, { line, ch: ch + 2 });
    let numCharsMoved = 0;
    for (const char of firstTwoChars) {
        if (char === "[") {
            obsidianEditor.exec("goRight");
            numCharsMoved++;
        }
    }
    vimrcPlugin.executeObsidianCommand("editor:follow-link");
    // Move the cursor back to where it was
    for (let i = 0; i < numCharsMoved; i++) {
        obsidianEditor.exec("goLeft");
    }
};

/**
 * Moves the cursor down `repeat` lines, skipping over folded sections.
 */
const moveDownSkippingFolds = (vimrcPlugin, cm, { repeat }) => {
    moveSkippingFolds(vimrcPlugin, repeat, "down");
};
/**
 * Moves the cursor up `repeat` lines, skipping over folded sections.
 */
const moveUpSkippingFolds = (vimrcPlugin, cm, { repeat }) => {
    moveSkippingFolds(vimrcPlugin, repeat, "up");
};
function moveSkippingFolds(vimrcPlugin, repeat, direction) {
    const obsidianEditor = vimrcPlugin.getActiveObsidianEditor();
    let { line: oldLine, ch: oldCh } = obsidianEditor.getCursor();
    const commandName = direction === "up" ? "goUp" : "goDown";
    for (let i = 0; i < repeat; i++) {
        obsidianEditor.exec(commandName);
        const { line: newLine, ch: newCh } = obsidianEditor.getCursor();
        if (newLine === oldLine && newCh === oldCh) {
            // Going in the specified direction doesn't do anything anymore, stop now
            return;
        }
        [oldLine, oldCh] = [newLine, newCh];
    }
}

/**
 * Returns the position of the repeat-th instance of a pattern from a given cursor position, in the
 * given direction; looping to the other end of the document when reaching one end. Returns the
 * original cursor position if no match is found.
 *
 * Under the hood, to avoid repeated loops of the document: we get all matches at once, order them
 * according to `direction` and `cursorPosition`, and use modulo arithmetic to return the
 * appropriate match.
 *
 * @param cm The CodeMirror editor instance.
 * @param cursorPosition The current cursor position.
 * @param repeat The number of times to repeat the jump (e.g. 1 to jump to the very next match). Is
 * modulo-ed for efficiency.
 * @param regex The regex pattern to jump to.
 * @param filterMatch Optional filter function to run on the regex matches. Return false to ignore
 * a given match.
 * @param direction The direction to jump in.
 */
function jumpToPattern({ cm, cursorPosition, repeat, regex, filterMatch = () => true, direction, }) {
    const content = cm.getValue();
    const cursorIdx = cm.indexFromPos(cursorPosition);
    const orderedMatches = getOrderedMatches({ content, regex, cursorIdx, filterMatch, direction });
    const effectiveRepeat = (repeat % orderedMatches.length) || orderedMatches.length;
    const matchIdx = orderedMatches[effectiveRepeat - 1]?.index;
    if (matchIdx === undefined) {
        return cursorPosition;
    }
    const newCursorPosition = cm.posFromIndex(matchIdx);
    return newCursorPosition;
}
/**
 * Returns an ordered array of all matches of a regex in a string in the given direction from the
 * cursor index (looping around to the other end of the document when reaching one end).
 */
function getOrderedMatches({ content, regex, cursorIdx, filterMatch, direction, }) {
    const { previousMatches, currentMatches, nextMatches } = getAndGroupMatches(content, regex, cursorIdx, filterMatch);
    if (direction === "next") {
        return [...nextMatches, ...previousMatches, ...currentMatches];
    }
    return [
        ...previousMatches.reverse(),
        ...nextMatches.reverse(),
        ...currentMatches.reverse(),
    ];
}
/**
 * Finds all matches of a regex in a string and groups them by their positions relative to the
 * cursor.
 */
function getAndGroupMatches(content, regex, cursorIdx, filterMatch) {
    const globalRegex = makeGlobalRegex(regex);
    const allMatches = [...content.matchAll(globalRegex)].filter(filterMatch);
    const previousMatches = allMatches.filter((match) => match.index < cursorIdx && !isWithinMatch(match, cursorIdx));
    const currentMatches = allMatches.filter((match) => isWithinMatch(match, cursorIdx));
    const nextMatches = allMatches.filter((match) => match.index > cursorIdx);
    return { previousMatches, currentMatches, nextMatches };
}
function makeGlobalRegex(regex) {
    const globalFlags = getGlobalFlags(regex);
    return new RegExp(regex.source, globalFlags);
}
function getGlobalFlags(regex) {
    const { flags } = regex;
    return flags.includes("g") ? flags : `${flags}g`;
}
function isWithinMatch(match, index) {
    return match.index <= index && index < match.index + match[0].length;
}

/** Naive Regex for a Markdown heading (H1 through H6). "Naive" because it does not account for
 * whether the match is within a codeblock (e.g. it could be a Python comment, not a heading).
 */
const NAIVE_HEADING_REGEX = /^#{1,6} /gm;
/** Regex for a Markdown fenced codeblock, which begins with some number >=3 of backticks at the
 * start of a line. It either ends on the nearest future line that starts with at least as many
 * backticks (\1 back-reference), or extends to the end of the string if no such future line exists.
 */
const FENCED_CODEBLOCK_REGEX = /(^```+)(.*?^\1|.*)/gms;
/**
 * Jumps to the repeat-th next heading.
 */
const jumpToNextHeading = (cm, cursorPosition, { repeat }) => {
    return jumpToHeading({ cm, cursorPosition, repeat, direction: "next" });
};
/**
 * Jumps to the repeat-th previous heading.
 */
const jumpToPreviousHeading = (cm, cursorPosition, { repeat }) => {
    return jumpToHeading({ cm, cursorPosition, repeat, direction: "previous" });
};
/**
 * Jumps to the repeat-th heading in the given direction.
 *
 * Under the hood, we use the naive heading regex to find all headings, and then filter out those
 * that are within codeblocks. `codeblockMatches` is passed in a closure to avoid repeated
 * computation.
 */
function jumpToHeading({ cm, cursorPosition, repeat, direction, }) {
    const codeblockMatches = findAllCodeblocks(cm);
    const filterMatch = (match) => !isMatchWithinCodeblock(match, codeblockMatches);
    return jumpToPattern({
        cm,
        cursorPosition,
        repeat,
        regex: NAIVE_HEADING_REGEX,
        filterMatch,
        direction,
    });
}
function findAllCodeblocks(cm) {
    const content = cm.getValue();
    return [...content.matchAll(FENCED_CODEBLOCK_REGEX)];
}
function isMatchWithinCodeblock(match, codeblockMatches) {
    return codeblockMatches.some((codeblockMatch) => isWithinMatch(codeblockMatch, match.index));
}

const WIKILINK_REGEX_STRING = "\\[\\[.*?\\]\\]";
const MARKDOWN_LINK_REGEX_STRING = "\\[.*?\\]\\(.*?\\)";
const URL_REGEX_STRING = "\\w+://\\S+";
/**
 * Regex for a link (which can be a wikilink, a markdown link, or a standalone URL).
 */
const LINK_REGEX_STRING = `${WIKILINK_REGEX_STRING}|${MARKDOWN_LINK_REGEX_STRING}|${URL_REGEX_STRING}`;
const LINK_REGEX = new RegExp(LINK_REGEX_STRING, "g");
/**
 * Jumps to the repeat-th next link.
 *
 * Note that `jumpToPattern` uses `String.matchAll`, which internally updates `lastIndex` after each
 * match; and that `LINK_REGEX` matches wikilinks / markdown links first. So, this won't catch
 * non-standalone URLs (e.g. the URL in a markdown link). This should be a good thing in most cases;
 * otherwise it could be tedious (as a user) for each markdown link to contain two jumpable spots.
*/
const jumpToNextLink = (cm, cursorPosition, { repeat }) => {
    return jumpToPattern({
        cm,
        cursorPosition,
        repeat,
        regex: LINK_REGEX,
        direction: "next",
    });
};
/**
 * Jumps to the repeat-th previous link.
 */
const jumpToPreviousLink = (cm, cursorPosition, { repeat }) => {
    return jumpToPattern({
        cm,
        cursorPosition,
        repeat,
        regex: LINK_REGEX,
        direction: "previous",
    });
};

/**
 * Utility types and functions for defining Obsidian-specific Vim commands.
 */
function defineAndMapObsidianVimMotion(vimObject, motionFn, mapping) {
    vimObject.defineMotion(motionFn.name, motionFn);
    vimObject.mapCommand(mapping, "motion", motionFn.name, undefined, {});
}
function defineAndMapObsidianVimAction(vimObject, vimrcPlugin, obsidianActionFn, mapping) {
    vimObject.defineAction(obsidianActionFn.name, (cm, actionArgs) => {
        obsidianActionFn(vimrcPlugin, cm, actionArgs);
    });
    vimObject.mapCommand(mapping, "action", obsidianActionFn.name, undefined, {});
}

const DEFAULT_SETTINGS = {
    vimrcFileName: ".obsidian.vimrc",
    displayChord: false,
    displayVimMode: false,
    fixedNormalModeLayout: false,
    capturedKeyboardMap: {},
    supportJsCommands: false,
    vimStatusPromptMap: {
        normal: '🟢',
        insert: '🟠',
        visual: '🟡',
        replace: '🔴',
    },
};
const vimStatusPromptClass = "vimrc-support-vim-mode";
// NOTE: to future maintainers, please make sure all mapping commands are included in this array.
const mappingCommands = [
    "map",
    "nmap",
    "noremap",
    "iunmap",
    "nunmap",
    "vunmap",
];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class VimrcPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.codeMirrorVimObject = null;
        this.initialized = false;
        this.lastYankBuffer = [""];
        this.lastSystemClipboard = "";
        this.yankToSystemClipboard = false;
        this.currentKeyChord = [];
        this.vimChordStatusBar = null;
        this.vimStatusBar = null;
        this.currentVimStatus = "normal" /* vimStatus.normal */;
        this.customVimKeybinds = {};
        this.currentSelection = null;
        this.isInsertMode = false;
        this.logVimModeChange = async (cm) => {
            if (!cm)
                return;
            this.isInsertMode = cm.mode === 'insert';
            switch (cm.mode) {
                case "insert":
                    this.currentVimStatus = "insert" /* vimStatus.insert */;
                    break;
                case "normal":
                    this.currentVimStatus = "normal" /* vimStatus.normal */;
                    break;
                case "visual":
                    this.currentVimStatus = "visual" /* vimStatus.visual */;
                    break;
                case "replace":
                    this.currentVimStatus = "replace" /* vimStatus.replace */;
                    break;
            }
            if (this.settings.displayVimMode)
                this.updateVimStatusBar();
        };
        this.onVimKeypress = async (vimKey) => {
            if (vimKey != "<Esc>") { // TODO figure out what to actually look for to exit commands.
                this.currentKeyChord.push(vimKey);
                if (this.customVimKeybinds[this.currentKeyChord.join("")] != undefined) { // Custom key chord exists.
                    this.currentKeyChord = [];
                }
            }
            else {
                this.currentKeyChord = [];
            }
            // Build keychord text
            let tempS = "";
            for (const s of this.currentKeyChord) {
                tempS += " " + s;
            }
            if (tempS != "") {
                tempS += "-";
            }
            this.vimChordStatusBar?.setText(tempS);
        };
        this.onVimCommandDone = async (reason) => {
            this.vimChordStatusBar?.setText("");
            this.currentKeyChord = [];
        };
        this.onKeydown = (ev) => {
            if (this.settings.fixedNormalModeLayout) {
                const keyMap = this.settings.capturedKeyboardMap;
                if (!this.isInsertMode && !ev.shiftKey &&
                    ev.code in keyMap && ev.key != keyMap[ev.code]) {
                    let view = this.getActiveView();
                    if (view) {
                        const cmEditor = this.getCodeMirror(view);
                        if (cmEditor) {
                            this.codeMirrorVimObject.handleKey(cmEditor, keyMap[ev.code], 'mapping');
                        }
                    }
                    ev.preventDefault();
                    return false;
                }
            }
        };
    }
    updateVimStatusBar() {
        this.vimStatusBar.setText(this.settings.vimStatusPromptMap[this.currentVimStatus]);
        this.vimStatusBar.dataset.vimMode = this.currentVimStatus;
    }
    async captureKeyboardLayout() {
        // This is experimental API and it might break at some point:
        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardLayoutMap
        let keyMap = {};
        let layout = await navigator.keyboard.getLayoutMap();
        let doneIterating = new Promise((resolve, reject) => {
            let counted = 0;
            layout.forEach((value, index) => {
                keyMap[index] = value;
                counted += 1;
                if (counted === layout.size)
                    resolve();
            });
        });
        await doneIterating;
        new obsidian.Notice('Keyboard layout captured');
        return keyMap;
    }
    async initialize() {
        if (this.initialized)
            return;
        this.codeMirrorVimObject = window.CodeMirrorAdapter?.Vim;
        this.registerYankEvents(activeWindow);
        this.app.workspace.on("window-open", (workspaceWindow, w) => {
            this.registerYankEvents(w);
        });
        this.prepareChordDisplay();
        this.prepareVimModeDisplay();
        // Two events cos
        // this don't trigger on loading/reloading obsidian with note opened
        this.app.workspace.on("active-leaf-change", async () => {
            this.updateSelectionEvent();
            this.updateVimEvents();
        });
        // and this don't trigger on opening same file in new pane
        this.app.workspace.on("file-open", async () => {
            this.updateSelectionEvent();
            this.updateVimEvents();
        });
        this.initialized = true;
    }
    registerYankEvents(win) {
        this.registerDomEvent(win.document, 'click', () => {
            this.captureYankBuffer(win);
        });
        this.registerDomEvent(win.document, 'keyup', () => {
            this.captureYankBuffer(win);
        });
        this.registerDomEvent(win.document, 'focusin', () => {
            this.captureYankBuffer(win);
        });
    }
    async updateSelectionEvent() {
        const view = this.getActiveView();
        if (!view)
            return;
        let cm = this.getCodeMirror(view);
        if (!cm)
            return;
        if (this.getCursorActivityHandlers(cm).some((e) => e.name === "updateSelection"))
            return;
        cm.on("cursorActivity", async (cm) => this.updateSelection(cm));
    }
    async updateSelection(cm) {
        this.currentSelection = cm.listSelections();
    }
    getCursorActivityHandlers(cm) {
        return cm._handlers.cursorActivity;
    }
    async updateVimEvents() {
        if (!this.app.isVimEnabled())
            return;
        let view = this.getActiveView();
        if (view) {
            const cmEditor = this.getCodeMirror(view);
            // See https://codemirror.net/doc/manual.html#vimapi_events for events.
            this.isInsertMode = false;
            this.currentVimStatus = "normal" /* vimStatus.normal */;
            if (this.settings.displayVimMode)
                this.updateVimStatusBar();
            if (!cmEditor)
                return;
            cmEditor.off('vim-mode-change', this.logVimModeChange);
            cmEditor.on('vim-mode-change', this.logVimModeChange);
            this.currentKeyChord = [];
            cmEditor.off('vim-keypress', this.onVimKeypress);
            cmEditor.on('vim-keypress', this.onVimKeypress);
            cmEditor.off('vim-command-done', this.onVimCommandDone);
            cmEditor.on('vim-command-done', this.onVimCommandDone);
            CodeMirror.off(cmEditor.getInputField(), 'keydown', this.onKeydown);
            CodeMirror.on(cmEditor.getInputField(), 'keydown', this.onKeydown);
        }
    }
    async onload() {
        await this.loadSettings();
        this.addSettingTab(new SettingsTab(this.app, this));
        console.log('loading Vimrc plugin');
        this.app.workspace.on('active-leaf-change', async () => {
            if (!this.initialized)
                await this.initialize();
            if (this.codeMirrorVimObject.loadedVimrc)
                return;
            let fileName = this.settings.vimrcFileName;
            if (!fileName || fileName.trim().length === 0) {
                fileName = DEFAULT_SETTINGS.vimrcFileName;
                console.log('Configured Vimrc file name is illegal, falling-back to default');
            }
            let vimrcContent = '';
            try {
                vimrcContent = await this.app.vault.adapter.read(fileName);
            }
            catch (e) {
                console.log('Error loading vimrc file', fileName, 'from the vault root', e.message);
            }
            this.readVimInit(vimrcContent);
        });
    }
    async loadSettings() {
        const data = await this.loadData();
        this.settings = Object.assign({}, DEFAULT_SETTINGS, data);
    }
    async saveSettings() {
        await this.saveData(this.settings);
    }
    onunload() {
        console.log('unloading Vimrc plugin (but Vim commands that were already loaded will still work)');
    }
    getActiveView() {
        return this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
    }
    getActiveObsidianEditor() {
        return this.getActiveView().editor;
    }
    getCodeMirror(view) {
        return view.editMode?.editor?.cm?.cm;
    }
    readVimInit(vimCommands) {
        let view = this.getActiveView();
        if (view) {
            var cmEditor = this.getCodeMirror(view);
            if (cmEditor && !this.codeMirrorVimObject.loadedVimrc) {
                this.defineBasicCommands(this.codeMirrorVimObject);
                this.defineAndMapObsidianVimCommands(this.codeMirrorVimObject);
                this.defineSendKeys(this.codeMirrorVimObject);
                this.defineObCommand(this.codeMirrorVimObject);
                this.defineSurround(this.codeMirrorVimObject);
                this.defineJsCommand(this.codeMirrorVimObject);
                this.defineJsFile(this.codeMirrorVimObject);
                this.defineSource(this.codeMirrorVimObject);
                this.loadVimCommands(vimCommands);
                // Make sure that we load it just once per CodeMirror instance.
                // This is supposed to work because the Vim state is kept at the keymap level, hopefully
                // there will not be bugs caused by operations that are kept at the object level instead
                this.codeMirrorVimObject.loadedVimrc = true;
            }
            if (cmEditor) {
                cmEditor.off('vim-mode-change', this.logVimModeChange);
                cmEditor.on('vim-mode-change', this.logVimModeChange);
                CodeMirror.off(cmEditor.getInputField(), 'keydown', this.onKeydown);
                CodeMirror.on(cmEditor.getInputField(), 'keydown', this.onKeydown);
            }
        }
    }
    loadVimCommands(vimCommands) {
        let view = this.getActiveView();
        if (view) {
            var cmEditor = this.getCodeMirror(view);
            vimCommands.split("\n").forEach(function (line, index, arr) {
                if (line.trim().length > 0 && line.trim()[0] != '"') {
                    let split = line.split(" ");
                    if (mappingCommands.includes(split[0])) {
                        // Have to do this because "vim-command-done" event doesn't actually work properly, or something.
                        this.customVimKeybinds[split[1]] = true;
                    }
                    this.codeMirrorVimObject.handleEx(cmEditor, line);
                }
            }.bind(this) // Faster than an arrow function. https://stackoverflow.com/questions/50375440/binding-vs-arrow-function-for-react-onclick-event
            );
        }
    }
    defineBasicCommands(vimObject) {
        vimObject.defineOption('clipboard', '', 'string', ['clip'], (value, cm) => {
            if (value) {
                if (value.trim() == 'unnamed' || value.trim() == 'unnamedplus') {
                    if (!this.yankToSystemClipboard) {
                        this.yankToSystemClipboard = true;
                        console.log("Vim is now set to yank to system clipboard.");
                    }
                }
                else {
                    throw new Error("Unrecognized clipboard option, supported are 'unnamed' and 'unnamedplus' (and they do the same)");
                }
            }
        });
        vimObject.defineOption('tabstop', 4, 'number', [], (value, cm) => {
            if (value && cm) {
                cm.setOption('tabSize', value);
            }
        });
        vimObject.defineEx('iunmap', '', (cm, params) => {
            if (params.argString.trim()) {
                this.codeMirrorVimObject.unmap(params.argString.trim(), 'insert');
            }
        });
        vimObject.defineEx('nunmap', '', (cm, params) => {
            if (params.argString.trim()) {
                this.codeMirrorVimObject.unmap(params.argString.trim(), 'normal');
            }
        });
        vimObject.defineEx('vunmap', '', (cm, params) => {
            if (params.argString.trim()) {
                this.codeMirrorVimObject.unmap(params.argString.trim(), 'visual');
            }
        });
        vimObject.defineEx('noremap', '', (cm, params) => {
            if (!params?.args?.length) {
                throw new Error('Invalid mapping: noremap');
            }
            if (params.argString.trim()) {
                this.codeMirrorVimObject.noremap.apply(this.codeMirrorVimObject, params.args);
            }
        });
        // Allow the user to register an Ex command
        vimObject.defineEx('exmap', '', (cm, params) => {
            if (params?.args?.length && params.args.length < 2) {
                throw new Error(`exmap requires at least 2 parameters: [name] [actions...]`);
            }
            let commandName = params.args[0];
            params.args.shift();
            let commandContent = params.args.join(' ');
            // The content of the user's Ex command is just the remaining parameters of the exmap command
            this.codeMirrorVimObject.defineEx(commandName, '', (cm, params) => {
                this.codeMirrorVimObject.handleEx(cm, commandContent);
            });
        });
    }
    defineAndMapObsidianVimCommands(vimObject) {
        defineAndMapObsidianVimMotion(vimObject, jumpToNextHeading, ']]');
        defineAndMapObsidianVimMotion(vimObject, jumpToPreviousHeading, '[[');
        defineAndMapObsidianVimMotion(vimObject, jumpToNextLink, 'gl');
        defineAndMapObsidianVimMotion(vimObject, jumpToPreviousLink, 'gL');
        defineAndMapObsidianVimAction(vimObject, this, moveDownSkippingFolds, 'zj');
        defineAndMapObsidianVimAction(vimObject, this, moveUpSkippingFolds, 'zk');
        defineAndMapObsidianVimAction(vimObject, this, followLinkUnderCursor, 'gf');
    }
    defineSendKeys(vimObject) {
        vimObject.defineEx('sendkeys', '', async (cm, params) => {
            if (!params?.args?.length) {
                console.log(params);
                throw new Error(`The sendkeys command requires a list of keys, e.g. sendKeys Ctrl+p a b Enter`);
            }
            let allGood = true;
            let events = [];
            for (const key of params.args) {
                if (key.startsWith('wait')) {
                    const delay = key.slice(4);
                    await sleep(delay * 1000);
                }
                else {
                    let keyEvent = null;
                    try {
                        keyEvent = new KeyboardEvent('keydown', keyboardeventFromElectronAccelerator.toKeyEvent(key));
                        events.push(keyEvent);
                    }
                    catch (e) {
                        allGood = false;
                        throw new Error(`Key '${key}' couldn't be read as an Electron Accelerator`);
                    }
                    if (allGood) {
                        for (keyEvent of events)
                            window.postMessage(JSON.parse(JSON.stringify(keyEvent)), '*');
                        // view.containerEl.dispatchEvent(keyEvent);
                    }
                }
            }
        });
    }
    executeObsidianCommand(commandName) {
        const availableCommands = this.app.commands.commands;
        if (!(commandName in availableCommands)) {
            throw new Error(`Command ${commandName} was not found, try 'obcommand' with no params to see in the developer console what's available`);
        }
        const view = this.getActiveView();
        const editor = view.editor;
        const command = availableCommands[commandName];
        const { callback, checkCallback, editorCallback, editorCheckCallback } = command;
        if (editorCheckCallback)
            editorCheckCallback(false, editor, view);
        else if (editorCallback)
            editorCallback(editor, view);
        else if (checkCallback)
            checkCallback(false);
        else if (callback)
            callback();
        else
            throw new Error(`Command ${commandName} doesn't have an Obsidian callback`);
    }
    defineObCommand(vimObject) {
        vimObject.defineEx('obcommand', '', async (cm, params) => {
            if (!params?.args?.length || params.args.length != 1) {
                const availableCommands = this.app.commands.commands;
                console.log(`Available commands: ${Object.keys(availableCommands).join('\n')}`);
                throw new Error(`obcommand requires exactly 1 parameter`);
            }
            const commandName = params.args[0];
            this.executeObsidianCommand(commandName);
        });
    }
    defineSurround(vimObject) {
        // Function to surround selected text or highlighted word.
        var surroundFunc = (params) => {
            var editor = this.getActiveView().editor;
            if (!params?.length) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            let newArgs = params.join(" ").match(/(\\.|[^\s\\\\]+)+/g);
            if (newArgs.length != 2) {
                throw new Error("surround requires exactly 2 parameters: prefix and postfix text.");
            }
            let beginning = newArgs[0].replace("\\\\", "\\").replace("\\ ", " "); // Get the beginning surround text
            let ending = newArgs[1].replace("\\\\", "\\").replace("\\ ", " "); // Get the ending surround text
            let currentSelections = this.currentSelection;
            var chosenSelection = currentSelections?.[0] ? currentSelections[0] : { anchor: editor.getCursor(), head: editor.getCursor() };
            if (currentSelections?.length > 1) {
                console.log("WARNING: Multiple selections in surround. Attempt to select matching cursor. (obsidian-vimrc-support)");
                const cursorPos = editor.getCursor();
                for (const selection of currentSelections) {
                    if (selection.head.line == cursorPos.line && selection.head.ch == cursorPos.ch) {
                        console.log("RESOLVED: Selection matching cursor found. (obsidian-vimrc-support)");
                        chosenSelection = selection;
                        break;
                    }
                }
            }
            if (editor.posToOffset(chosenSelection.anchor) === editor.posToOffset(chosenSelection.head)) {
                // No range of selected text, so select word.
                let wordAt = editor.wordAt(chosenSelection.head);
                if (wordAt) {
                    chosenSelection = { anchor: wordAt.from, head: wordAt.to };
                }
            }
            if (editor.posToOffset(chosenSelection.anchor) > editor.posToOffset(chosenSelection.head)) {
                [chosenSelection.anchor, chosenSelection.head] = [chosenSelection.head, chosenSelection.anchor];
            }
            let currText = editor.getRange(chosenSelection.anchor, chosenSelection.head);
            editor.replaceRange(beginning + currText + ending, chosenSelection.anchor, chosenSelection.head);
            // If no selection, place cursor between beginning and ending
            if (editor.posToOffset(chosenSelection.anchor) === editor.posToOffset(chosenSelection.head)) {
                chosenSelection.head.ch += beginning.length;
                editor.setCursor(chosenSelection.head);
            }
        };
        vimObject.defineEx("surround", "", (cm, params) => { surroundFunc(params.args); });
        vimObject.defineEx("pasteinto", "", (cm, params) => {
            // Using the register for when this.yankToSystemClipboard == false
            surroundFunc(['[',
                '](' + vimObject.getRegisterController().getRegister('yank').keyBuffer + ")"]);
        });
        this.getActiveView().editor;
        // Handle the surround dialog input
        var surroundDialogCallback = (value) => {
            if ((/^\[+$/).test(value)) { // check for 1-inf [ and match them with ]
                surroundFunc([value, "]".repeat(value.length)]);
            }
            else if ((/^\(+$/).test(value)) { // check for 1-inf ( and match them with )
                surroundFunc([value, ")".repeat(value.length)]);
            }
            else if ((/^\{+$/).test(value)) { // check for 1-inf { and match them with }
                surroundFunc([value, "}".repeat(value.length)]);
            }
            else { // Else, just put it before and after.
                surroundFunc([value, value]);
            }
        };
        vimObject.defineOperator("surroundOperator", () => {
            let p = "<span>Surround with: <input type='text'></span>";
            CodeMirror.openDialog(p, surroundDialogCallback, { bottom: true, selectValueOnOpen: false });
        });
        vimObject.mapCommand("<A-y>s", "operator", "surroundOperator");
    }
    async captureYankBuffer(win) {
        if (!this.yankToSystemClipboard) {
            return;
        }
        const yankRegister = this.codeMirrorVimObject.getRegisterController().getRegister('yank');
        const currentYankBuffer = yankRegister.keyBuffer;
        // yank -> clipboard
        const buf = currentYankBuffer[0];
        if (buf !== this.lastYankBuffer[0]) {
            await win.navigator.clipboard.writeText(buf);
            this.lastYankBuffer = currentYankBuffer;
            this.lastSystemClipboard = await win.navigator.clipboard.readText();
            return;
        }
        // clipboard -> yank
        try {
            const currentClipboardText = await win.navigator.clipboard.readText();
            if (currentClipboardText !== this.lastSystemClipboard) {
                yankRegister.setText(currentClipboardText);
                this.lastYankBuffer = yankRegister.keyBuffer;
                this.lastSystemClipboard = currentClipboardText;
            }
        }
        catch (e) {
            // XXX: Avoid "Uncaught (in promise) DOMException: Document is not focused."
            // XXX: It is not good but easy workaround
        }
    }
    prepareChordDisplay() {
        if (this.settings.displayChord) {
            // Add status bar item
            this.vimChordStatusBar = this.addStatusBarItem();
            // Move vimChordStatusBar to the leftmost position and center it.
            let parent = this.vimChordStatusBar.parentElement;
            this.vimChordStatusBar.parentElement.insertBefore(this.vimChordStatusBar, parent.firstChild);
            this.vimChordStatusBar.style.marginRight = "auto";
            const view = this.getActiveView();
            if (!view)
                return;
            let cmEditor = this.getCodeMirror(view);
            // See https://codemirror.net/doc/manual.html#vimapi_events for events.
            cmEditor.off('vim-keypress', this.onVimKeypress);
            cmEditor.on('vim-keypress', this.onVimKeypress);
            cmEditor.off('vim-command-done', this.onVimCommandDone);
            cmEditor.on('vim-command-done', this.onVimCommandDone);
        }
    }
    prepareVimModeDisplay() {
        if (this.settings.displayVimMode) {
            this.vimStatusBar = this.addStatusBarItem(); // Add status bar item
            this.vimStatusBar.setText(this.settings.vimStatusPromptMap["normal" /* vimStatus.normal */]); // Init the vimStatusBar with normal mode
            this.vimStatusBar.addClass(vimStatusPromptClass);
            this.vimStatusBar.dataset.vimMode = this.currentVimStatus;
        }
    }
    defineJsCommand(vimObject) {
        vimObject.defineEx('jscommand', '', (cm, params) => {
            if (!this.settings.supportJsCommands)
                throw new Error("JS commands are turned off; enable them via the Vimrc plugin configuration if you're sure you know what you're doing");
            const jsCode = params.argString.trim();
            if (jsCode[0] != '{' || jsCode[jsCode.length - 1] != '}')
                throw new Error("Expected an argument which is JS code surrounded by curly brackets: {...}");
            let currentSelections = this.currentSelection;
            var chosenSelection = currentSelections && currentSelections.length > 0 ? currentSelections[0] : null;
            const command = Function('editor', 'view', 'selection', jsCode);
            const view = this.getActiveView();
            command(view.editor, view, chosenSelection);
        });
    }
    defineJsFile(vimObject) {
        vimObject.defineEx('jsfile', '', async (cm, params) => {
            if (!this.settings.supportJsCommands)
                throw new Error("JS commands are turned off; enable them via the Vimrc plugin configuration if you're sure you know what you're doing");
            if (params?.args?.length < 1)
                throw new Error("Expected format: fileName {extraCode}");
            let extraCode = '';
            const fileName = params.args[0];
            if (params.args.length > 1) {
                params.args.shift();
                extraCode = params.args.join(' ').trim();
                if (extraCode[0] != '{' || extraCode[extraCode.length - 1] != '}')
                    throw new Error("Expected an extra code argument which is JS code surrounded by curly brackets: {...}");
            }
            let currentSelections = this.currentSelection;
            var chosenSelection = currentSelections && currentSelections.length > 0 ? currentSelections[0] : null;
            let content = '';
            try {
                content = await this.app.vault.adapter.read(fileName);
            }
            catch (e) {
                throw new Error(`Cannot read file ${params.args[0]} from vault root: ${e.message}`);
            }
            const command = Function('editor', 'view', 'selection', content + extraCode);
            const view = this.getActiveView();
            command(view.editor, view, chosenSelection);
        });
    }
    defineSource(vimObject) {
        vimObject.defineEx('source', '', async (cm, params) => {
            if (params?.args?.length > 1)
                throw new Error("Expected format: source [fileName]");
            const fileName = params.argString.trim();
            try {
                this.app.vault.adapter.read(fileName).then(vimrcContent => {
                    this.loadVimCommands(vimrcContent);
                });
            }
            catch (e) {
                console.log('Error loading vimrc file', fileName, 'from the vault root', e.message);
            }
        });
    }
}
class SettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Vimrc Settings' });
        new obsidian.Setting(containerEl)
            .setName('Vimrc file name')
            .setDesc('Relative to vault directory (requires restart)')
            .addText((text) => {
            text.setPlaceholder(DEFAULT_SETTINGS.vimrcFileName);
            text.setValue(this.plugin.settings.vimrcFileName || DEFAULT_SETTINGS.vimrcFileName);
            text.onChange(value => {
                this.plugin.settings.vimrcFileName = value;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim chord display')
            .setDesc('Displays the current chord until completion. Ex: "<Space> f-" (requires restart)')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.displayChord || DEFAULT_SETTINGS.displayChord);
            toggle.onChange(value => {
                this.plugin.settings.displayChord = value;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Vim mode display')
            .setDesc('Displays the current vim mode (requires restart)')
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.displayVimMode || DEFAULT_SETTINGS.displayVimMode);
            toggle.onChange(value => {
                this.plugin.settings.displayVimMode = value;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Use a fixed keyboard layout for Normal mode')
            .setDesc('Define a keyboard layout to always use when in Normal mode, regardless of the input language (experimental).')
            .addButton(async (button) => {
            button.setButtonText('Capture current layout');
            button.onClick(async () => {
                this.plugin.settings.capturedKeyboardMap = await this.plugin.captureKeyboardLayout();
                this.plugin.saveSettings();
            });
        })
            .addToggle((toggle) => {
            toggle.setValue(this.plugin.settings.fixedNormalModeLayout || DEFAULT_SETTINGS.fixedNormalModeLayout);
            toggle.onChange(async (value) => {
                this.plugin.settings.fixedNormalModeLayout = value;
                if (value && Object.keys(this.plugin.settings.capturedKeyboardMap).length === 0)
                    this.plugin.settings.capturedKeyboardMap = await this.plugin.captureKeyboardLayout();
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Support JS commands (beware!)')
            .setDesc("Support the 'jscommand' and 'jsfile' commands, which allow defining Ex commands using Javascript. WARNING! Review the README to understand why this may be dangerous before enabling.")
            .addToggle(toggle => {
            toggle.setValue(this.plugin.settings.supportJsCommands ?? DEFAULT_SETTINGS.supportJsCommands);
            toggle.onChange(value => {
                this.plugin.settings.supportJsCommands = value;
                this.plugin.saveSettings();
            });
        });
        containerEl.createEl('h2', { text: 'Vim Mode Display Prompt' });
        new obsidian.Setting(containerEl)
            .setName('Normal mode prompt')
            .setDesc('Set the status prompt text for normal mode.')
            .addText((text) => {
            text.setPlaceholder('Default: 🟢');
            text.setValue(this.plugin.settings.vimStatusPromptMap.normal ||
                DEFAULT_SETTINGS.vimStatusPromptMap.normal);
            text.onChange((value) => {
                this.plugin.settings.vimStatusPromptMap.normal = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.normal;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Insert mode prompt')
            .setDesc('Set the status prompt text for insert mode.')
            .addText((text) => {
            text.setPlaceholder('Default: 🟠');
            text.setValue(this.plugin.settings.vimStatusPromptMap.insert ||
                DEFAULT_SETTINGS.vimStatusPromptMap.insert);
            text.onChange((value) => {
                this.plugin.settings.vimStatusPromptMap.insert = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.insert;
                console.log(this.plugin.settings.vimStatusPromptMap);
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Visual mode prompt')
            .setDesc('Set the status prompt text for visual mode.')
            .addText((text) => {
            text.setPlaceholder('Default: 🟡');
            text.setValue(this.plugin.settings.vimStatusPromptMap.visual ||
                DEFAULT_SETTINGS.vimStatusPromptMap.visual);
            text.onChange((value) => {
                this.plugin.settings.vimStatusPromptMap.visual = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.visual;
                this.plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName('Replace mode prompt')
            .setDesc('Set the status prompt text for replace mode.')
            .addText((text) => {
            text.setPlaceholder('Default: 🔴');
            text.setValue(this.plugin.settings.vimStatusPromptMap.replace ||
                DEFAULT_SETTINGS.vimStatusPromptMap.replace);
            text.onChange((value) => {
                this.plugin.settings.vimStatusPromptMap.replace = value ||
                    DEFAULT_SETTINGS.vimStatusPromptMap.replace;
                this.plugin.saveSettings();
            });
        });
    }
}

module.exports = VimrcPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL2tleWJvYXJkZXZlbnQtZnJvbS1lbGVjdHJvbi1hY2NlbGVyYXRvci9pbmRleC5qcyIsImFjdGlvbnMvZm9sbG93TGlua1VuZGVyQ3Vyc29yLnRzIiwiYWN0aW9ucy9tb3ZlU2tpcHBpbmdGb2xkcy50cyIsInV0aWxzL2p1bXBUb1BhdHRlcm4udHMiLCJtb3Rpb25zL2p1bXBUb0hlYWRpbmcudHMiLCJtb3Rpb25zL2p1bXBUb0xpbmsudHMiLCJ1dGlscy9vYnNpZGlhblZpbUNvbW1hbmQudHMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGlmaWVycyA9IC9eKENvbW1hbmRPckNvbnRyb2x8Q21kT3JDdHJsfENvbW1hbmR8Q21kfENvbnRyb2x8Q3RybHxBbHRHcnxPcHRpb258QWx0fFNoaWZ0fFN1cGVyKS9pO1xuY29uc3Qga2V5Q29kZXMgPSAvXihQbHVzfFNwYWNlfFRhYnxCYWNrc3BhY2V8RGVsZXRlfEluc2VydHxSZXR1cm58RW50ZXJ8VXB8RG93bnxMZWZ0fFJpZ2h0fEhvbWV8RW5kfFBhZ2VVcHxQYWdlRG93bnxFc2NhcGV8RXNjfFZvbHVtZVVwfFZvbHVtZURvd258Vm9sdW1lTXV0ZXxNZWRpYU5leHRUcmFja3xNZWRpYVByZXZpb3VzVHJhY2t8TWVkaWFTdG9wfE1lZGlhUGxheVBhdXNlfFByaW50U2NyZWVufEYyNHxGMjN8RjIyfEYyMXxGMjB8RjE5fEYxOHxGMTd8RjE2fEYxNXxGMTR8RjEzfEYxMnxGMTF8RjEwfEY5fEY4fEY3fEY2fEY1fEY0fEYzfEYyfEYxfFswLTlBLVopIUAjJCVeJiooOis8Xz4/fnt8fVwiOz0sXFwtLi9gW1xcXFxcXF0nXSkvaTtcbmNvbnN0IFVOU1VQUE9SVEVEID0ge307XG5cbmZ1bmN0aW9uIF9jb21tYW5kKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgQ29tbWFuZGAgbW9kaWZpZXIgc3BlY2lmaWVkLicpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRldmVudDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQsIHttZXRhS2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RvdWJsZSBgU3VwZXJgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7bWV0YUtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9jb21tYW5kb3Jjb250cm9sKGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG5cdFx0aWYgKGV2ZW50Lm1ldGFLZXkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb21tYW5kYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge21ldGFLZXk6IHRydWV9KSxcblx0XHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdFx0fTtcblx0fVxuXG5cdGlmIChldmVudC5jdHJsS2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYENvbnRyb2xgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7Y3RybEtleTogdHJ1ZX0pLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci5zbGljZShtb2RpZmllci5sZW5ndGgpXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAobW9kaWZpZXIgPT09ICdvcHRpb24nICYmIHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XG5cdFx0cmV0dXJuIFVOU1VQUE9SVEVEO1xuXHR9XG5cblx0aWYgKGV2ZW50LmFsdEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBBbHRgIG1vZGlmaWVyIHNwZWNpZmllZC4nKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7YWx0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpIHtcblx0aWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEb3VibGUgYFNoaWZ0YCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge3NoaWZ0S2V5OiB0cnVlfSksXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnNsaWNlKG1vZGlmaWVyLmxlbmd0aClcblx0fTtcbn1cblxuZnVuY3Rpb24gX2NvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcikge1xuXHRpZiAoZXZlbnQuY3RybEtleSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRG91YmxlIGBDb250cm9sYCBtb2RpZmllciBzcGVjaWZpZWQuJyk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2N0cmxLZXk6IHRydWV9KSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3Iuc2xpY2UobW9kaWZpZXIubGVuZ3RoKVxuXHR9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VNb2RpZmllcih7YWNjZWxlcmF0b3IsIGV2ZW50fSwgbW9kaWZpZXIpIHtcblx0c3dpdGNoIChtb2RpZmllcikge1xuXHRcdGNhc2UgJ2NvbW1hbmQnOlxuXHRcdGNhc2UgJ2NtZCc6IHtcblx0XHRcdHJldHVybiBfY29tbWFuZChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdzdXBlcic6IHtcblx0XHRcdHJldHVybiBfc3VwZXIoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnY29udHJvbCc6XG5cdFx0Y2FzZSAnY3RybCc6IHtcblx0XHRcdHJldHVybiBfY29udHJvbChhY2NlbGVyYXRvciwgZXZlbnQsIG1vZGlmaWVyKTtcblx0XHR9XG5cblx0XHRjYXNlICdjb21tYW5kb3Jjb250cm9sJzpcblx0XHRjYXNlICdjbWRvcmN0cmwnOiB7XG5cdFx0XHRyZXR1cm4gX2NvbW1hbmRvcmNvbnRyb2woYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRjYXNlICdhbHRncic6XG5cdFx0Y2FzZSAnYWx0Jzoge1xuXHRcdFx0cmV0dXJuIF9hbHQoYWNjZWxlcmF0b3IsIGV2ZW50LCBtb2RpZmllcik7XG5cdFx0fVxuXG5cdFx0Y2FzZSAnc2hpZnQnOiB7XG5cdFx0XHRyZXR1cm4gX3NoaWZ0KGFjY2VsZXJhdG9yLCBldmVudCwgbW9kaWZpZXIpO1xuXHRcdH1cblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRjb25zb2xlLmVycm9yKG1vZGlmaWVyKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZWR1Y2VQbHVzKHthY2NlbGVyYXRvciwgZXZlbnR9KSB7XG5cdHJldHVybiB7XG5cdFx0ZXZlbnQsXG5cdFx0YWNjZWxlcmF0b3I6IGFjY2VsZXJhdG9yLnRyaW0oKS5zbGljZSgxKVxuXHR9O1xufVxuXG5jb25zdCB2aXJ0dWFsS2V5Q29kZXMgPSB7XG5cdDA6ICdEaWdpdDAnLFxuXHQxOiAnRGlnaXQxJyxcblx0MjogJ0RpZ2l0MicsXG5cdDM6ICdEaWdpdDMnLFxuXHQ0OiAnRGlnaXQ0Jyxcblx0NTogJ0RpZ2l0NScsXG5cdDY6ICdEaWdpdDYnLFxuXHQ3OiAnRGlnaXQ3Jyxcblx0ODogJ0RpZ2l0OCcsXG5cdDk6ICdEaWdpdDknLFxuXHQnLSc6ICdNaW51cycsXG5cdCc9JzogJ0VxdWFsJyxcblx0UTogJ0tleVEnLFxuXHRXOiAnS2V5VycsXG5cdEU6ICdLZXlFJyxcblx0UjogJ0tleVInLFxuXHRUOiAnS2V5VCcsXG5cdFk6ICdLZXlZJyxcblx0VTogJ0tleVUnLFxuXHRJOiAnS2V5SScsXG5cdE86ICdLZXlPJyxcblx0UDogJ0tleVAnLFxuXHQnWyc6ICdCcmFja2V0TGVmdCcsXG5cdCddJzogJ0JyYWNrZXRSaWdodCcsXG5cdEE6ICdLZXlBJyxcblx0UzogJ0tleVMnLFxuXHREOiAnS2V5RCcsXG5cdEY6ICdLZXlGJyxcblx0RzogJ0tleUcnLFxuXHRIOiAnS2V5SCcsXG5cdEo6ICdLZXlKJyxcblx0SzogJ0tleUsnLFxuXHRMOiAnS2V5TCcsXG5cdCc7JzogJ1NlbWljb2xvbicsXG5cdCdcXCcnOiAnUXVvdGUnLFxuXHQnYCc6ICdCYWNrcXVvdGUnLFxuXHQnLyc6ICdCYWNrc2xhc2gnLFxuXHRaOiAnS2V5WicsXG5cdFg6ICdLZXlYJyxcblx0QzogJ0tleUMnLFxuXHRWOiAnS2V5VicsXG5cdEI6ICdLZXlCJyxcblx0TjogJ0tleU4nLFxuXHRNOiAnS2V5TScsXG5cdCcsJzogJ0NvbW1hJyxcblx0Jy4nOiAnUGVyaW9kJyxcblx0J1xcXFwnOiAnU2xhc2gnLFxuXHQnICc6ICdTcGFjZSdcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZUtleSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwga2V5KSB7XG5cdGlmIChrZXkubGVuZ3RoID4gMSB8fCBldmVudC5rZXkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYFVudmFsaWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRjb25zdCBjb2RlID1cblx0XHRrZXkudG9VcHBlckNhc2UoKSBpbiB2aXJ0dWFsS2V5Q29kZXMgP1xuXHRcdFx0dmlydHVhbEtleUNvZGVzW2tleS50b1VwcGVyQ2FzZSgpXSA6XG5cdFx0XHRudWxsO1xuXG5cdHJldHVybiB7XG5cdFx0ZXZlbnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LCB7a2V5fSwgY29kZSA/IHtjb2RlfSA6IG51bGwpLFxuXHRcdGFjY2VsZXJhdG9yOiBhY2NlbGVyYXRvci50cmltKCkuc2xpY2Uoa2V5Lmxlbmd0aClcblx0fTtcbn1cblxuY29uc3QgZG9tS2V5cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwge1xuXHRwbHVzOiAnQWRkJyxcblx0c3BhY2U6ICdTcGFjZScsXG5cdHRhYjogJ1RhYicsXG5cdGJhY2tzcGFjZTogJ0JhY2tzcGFjZScsXG5cdGRlbGV0ZTogJ0RlbGV0ZScsXG5cdGluc2VydDogJ0luc2VydCcsXG5cdHJldHVybjogJ1JldHVybicsXG5cdGVudGVyOiAnUmV0dXJuJyxcblx0dXA6ICdBcnJvd1VwJyxcblx0ZG93bjogJ0Fycm93RG93bicsXG5cdGxlZnQ6ICdBcnJvd0xlZnQnLFxuXHRyaWdodDogJ0Fycm93UmlnaHQnLFxuXHRob21lOiAnSG9tZScsXG5cdGVuZDogJ0VuZCcsXG5cdHBhZ2V1cDogJ1BhZ2VVcCcsXG5cdHBhZ2Vkb3duOiAnUGFnZURvd24nLFxuXHRlc2NhcGU6ICdFc2NhcGUnLFxuXHRlc2M6ICdFc2NhcGUnLFxuXHR2b2x1bWV1cDogJ0F1ZGlvVm9sdW1lVXAnLFxuXHR2b2x1bWVkb3duOiAnQXVkaW9Wb2x1bWVEb3duJyxcblx0dm9sdW1lbXV0ZTogJ0F1ZGlvVm9sdW1lTXV0ZScsXG5cdG1lZGlhbmV4dHRyYWNrOiAnTWVkaWFUcmFja05leHQnLFxuXHRtZWRpYXByZXZpb3VzdHJhY2s6ICdNZWRpYVRyYWNrUHJldmlvdXMnLFxuXHRtZWRpYXN0b3A6ICdNZWRpYVN0b3AnLFxuXHRtZWRpYXBsYXlwYXVzZTogJ01lZGlhUGxheVBhdXNlJyxcblx0cHJpbnRzY3JlZW46ICdQcmludFNjcmVlbidcbn0pO1xuXG4vLyBBZGQgZnVuY3Rpb24ga2V5c1xuZm9yIChsZXQgaSA9IDE7IGkgPD0gMjQ7IGkrKykge1xuXHRkb21LZXlzW2BmJHtpfWBdID0gYEYke2l9YDtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQ29kZSh7YWNjZWxlcmF0b3IsIGV2ZW50fSwge2NvZGUsIGtleX0pIHtcblx0aWYgKGV2ZW50LmNvZGUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZWQga2V5Y29kZSBcXGAke2tleX1cXGAuYCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGV2ZW50OiBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge2tleX0sIGNvZGUgPyB7Y29kZX0gOiBudWxsKSxcblx0XHRhY2NlbGVyYXRvcjogYWNjZWxlcmF0b3IudHJpbSgpLnNsaWNlKChrZXkgJiYga2V5Lmxlbmd0aCkgfHwgMClcblx0fTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYW5zZm9ybSBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcgaW50b1xuICogYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBhY2NlbGVyYXRvciBhbiBFbGVjdHJvbiBBY2NlbGVyYXRvciBzdHJpbmcsIGUuZy4gYEN0cmwrQ2Agb3IgYFNoaWZ0K1NwYWNlYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBET00gS2V5Ym9hcmRFdmVudCBvYmplY3QgZGVyaXZhdGUgZnJvbSB0aGUgYGFjY2VsZXJhdG9yYCBhcmd1bWVudC5cbiAqL1xuZnVuY3Rpb24gdG9LZXlFdmVudChhY2NlbGVyYXRvcikge1xuXHRsZXQgc3RhdGUgPSB7YWNjZWxlcmF0b3IsIGV2ZW50OiB7fX07XG5cdHdoaWxlIChzdGF0ZS5hY2NlbGVyYXRvciAhPT0gJycpIHtcblx0XHRjb25zdCBtb2RpZmllck1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2gobW9kaWZpZXJzKTtcblx0XHRpZiAobW9kaWZpZXJNYXRjaCkge1xuXHRcdFx0Y29uc3QgbW9kaWZpZXIgPSBtb2RpZmllck1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRzdGF0ZSA9IHJlZHVjZU1vZGlmaWVyKHN0YXRlLCBtb2RpZmllcik7XG5cdFx0XHRpZiAoc3RhdGUgPT09IFVOU1VQUE9SVEVEKSB7XG5cdFx0XHRcdHJldHVybiB7dW5zdXBwb3J0ZWRLZXlGb3JQbGF0Zm9ybTogdHJ1ZX07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChzdGF0ZS5hY2NlbGVyYXRvci50cmltKClbMF0gPT09ICcrJykge1xuXHRcdFx0c3RhdGUgPSByZWR1Y2VQbHVzKHN0YXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY29kZU1hdGNoID0gc3RhdGUuYWNjZWxlcmF0b3IubWF0Y2goa2V5Q29kZXMpO1xuXHRcdFx0aWYgKGNvZGVNYXRjaCkge1xuXHRcdFx0XHRjb25zdCBjb2RlID0gY29kZU1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChjb2RlIGluIGRvbUtleXMpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUNvZGUoc3RhdGUsIHtcblx0XHRcdFx0XHRcdGNvZGU6IGRvbUtleXNbY29kZV0sXG5cdFx0XHRcdFx0XHRrZXk6IGNvZGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHJlZHVjZUtleShzdGF0ZSwgY29kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVW52YWxpZCBhY2NlbGVyYXRvcjogXCIke3N0YXRlLmFjY2VsZXJhdG9yfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0YXRlLmV2ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0VU5TVVBQT1JURUQsXG5cdHJlZHVjZU1vZGlmaWVyLFxuXHRyZWR1Y2VQbHVzLFxuXHRyZWR1Y2VLZXksXG5cdHJlZHVjZUNvZGUsXG5cdHRvS2V5RXZlbnRcbn07XG4iLCJpbXBvcnQgeyBPYnNpZGlhbkFjdGlvbkZuIH0gZnJvbSBcIi4uL3V0aWxzL29ic2lkaWFuVmltQ29tbWFuZFwiO1xuXG4vKipcbiAqIEZvbGxvd3MgdGhlIGxpbmsgdW5kZXIgdGhlIGN1cnNvciwgdGVtcG9yYXJpbHkgbW92aW5nIHRoZSBjdXJzb3IgaWYgbmVjZXNzYXJ5IGZvciBmb2xsb3ctbGluayB0b1xuICogd29yayAoaS5lLiBpZiB0aGUgY3Vyc29yIGlzIG9uIGEgc3RhcnRpbmcgc3F1YXJlIGJyYWNrZXQpLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93TGlua1VuZGVyQ3Vyc29yOiBPYnNpZGlhbkFjdGlvbkZuID0gKHZpbXJjUGx1Z2luKSA9PiB7XG4gIGNvbnN0IG9ic2lkaWFuRWRpdG9yID0gdmltcmNQbHVnaW4uZ2V0QWN0aXZlT2JzaWRpYW5FZGl0b3IoKTtcbiAgY29uc3QgeyBsaW5lLCBjaCB9ID0gb2JzaWRpYW5FZGl0b3IuZ2V0Q3Vyc29yKCk7XG4gIGNvbnN0IGZpcnN0VHdvQ2hhcnMgPSBvYnNpZGlhbkVkaXRvci5nZXRSYW5nZShcbiAgICB7IGxpbmUsIGNoIH0sXG4gICAgeyBsaW5lLCBjaDogY2ggKyAyIH1cbiAgKTtcbiAgbGV0IG51bUNoYXJzTW92ZWQgPSAwO1xuICBmb3IgKGNvbnN0IGNoYXIgb2YgZmlyc3RUd29DaGFycykge1xuICAgIGlmIChjaGFyID09PSBcIltcIikge1xuICAgICAgb2JzaWRpYW5FZGl0b3IuZXhlYyhcImdvUmlnaHRcIik7XG4gICAgICBudW1DaGFyc01vdmVkKys7XG4gICAgfVxuICB9XG4gIHZpbXJjUGx1Z2luLmV4ZWN1dGVPYnNpZGlhbkNvbW1hbmQoXCJlZGl0b3I6Zm9sbG93LWxpbmtcIik7XG4gIC8vIE1vdmUgdGhlIGN1cnNvciBiYWNrIHRvIHdoZXJlIGl0IHdhc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYXJzTW92ZWQ7IGkrKykge1xuICAgIG9ic2lkaWFuRWRpdG9yLmV4ZWMoXCJnb0xlZnRcIik7XG4gIH1cbn07XG4iLCJpbXBvcnQgVmltcmNQbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IE9ic2lkaWFuQWN0aW9uRm4gfSBmcm9tIFwiLi4vdXRpbHMvb2JzaWRpYW5WaW1Db21tYW5kXCI7XG5cbi8qKlxuICogTW92ZXMgdGhlIGN1cnNvciBkb3duIGByZXBlYXRgIGxpbmVzLCBza2lwcGluZyBvdmVyIGZvbGRlZCBzZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vdmVEb3duU2tpcHBpbmdGb2xkczogT2JzaWRpYW5BY3Rpb25GbiA9IChcbiAgdmltcmNQbHVnaW4sXG4gIGNtLFxuICB7IHJlcGVhdCB9XG4pID0+IHtcbiAgbW92ZVNraXBwaW5nRm9sZHModmltcmNQbHVnaW4sIHJlcGVhdCwgXCJkb3duXCIpO1xufTtcblxuLyoqXG4gKiBNb3ZlcyB0aGUgY3Vyc29yIHVwIGByZXBlYXRgIGxpbmVzLCBza2lwcGluZyBvdmVyIGZvbGRlZCBzZWN0aW9ucy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vdmVVcFNraXBwaW5nRm9sZHM6IE9ic2lkaWFuQWN0aW9uRm4gPSAoXG4gIHZpbXJjUGx1Z2luLFxuICBjbSxcbiAgeyByZXBlYXQgfVxuKSA9PiB7XG4gIG1vdmVTa2lwcGluZ0ZvbGRzKHZpbXJjUGx1Z2luLCByZXBlYXQsIFwidXBcIik7XG59O1xuXG5mdW5jdGlvbiBtb3ZlU2tpcHBpbmdGb2xkcyhcbiAgdmltcmNQbHVnaW46IFZpbXJjUGx1Z2luLFxuICByZXBlYXQ6IG51bWJlcixcbiAgZGlyZWN0aW9uOiBcInVwXCIgfCBcImRvd25cIlxuKSB7XG4gIGNvbnN0IG9ic2lkaWFuRWRpdG9yID0gdmltcmNQbHVnaW4uZ2V0QWN0aXZlT2JzaWRpYW5FZGl0b3IoKTtcbiAgbGV0IHsgbGluZTogb2xkTGluZSwgY2g6IG9sZENoIH0gPSBvYnNpZGlhbkVkaXRvci5nZXRDdXJzb3IoKTtcbiAgY29uc3QgY29tbWFuZE5hbWUgPSBkaXJlY3Rpb24gPT09IFwidXBcIiA/IFwiZ29VcFwiIDogXCJnb0Rvd25cIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBlYXQ7IGkrKykge1xuICAgIG9ic2lkaWFuRWRpdG9yLmV4ZWMoY29tbWFuZE5hbWUpO1xuICAgIGNvbnN0IHsgbGluZTogbmV3TGluZSwgY2g6IG5ld0NoIH0gPSBvYnNpZGlhbkVkaXRvci5nZXRDdXJzb3IoKTtcbiAgICBpZiAobmV3TGluZSA9PT0gb2xkTGluZSAmJiBuZXdDaCA9PT0gb2xkQ2gpIHtcbiAgICAgIC8vIEdvaW5nIGluIHRoZSBzcGVjaWZpZWQgZGlyZWN0aW9uIGRvZXNuJ3QgZG8gYW55dGhpbmcgYW55bW9yZSwgc3RvcCBub3dcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgW29sZExpbmUsIG9sZENoXSA9IFtuZXdMaW5lLCBuZXdDaF07XG4gIH1cbn1cbiIsImltcG9ydCB7IEVkaXRvciBhcyBDb2RlTWlycm9yRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcbmltcG9ydCB7IEVkaXRvclBvc2l0aW9uIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIHJlcGVhdC10aCBpbnN0YW5jZSBvZiBhIHBhdHRlcm4gZnJvbSBhIGdpdmVuIGN1cnNvciBwb3NpdGlvbiwgaW4gdGhlXG4gKiBnaXZlbiBkaXJlY3Rpb247IGxvb3BpbmcgdG8gdGhlIG90aGVyIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2hlbiByZWFjaGluZyBvbmUgZW5kLiBSZXR1cm5zIHRoZVxuICogb3JpZ2luYWwgY3Vyc29yIHBvc2l0aW9uIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICpcbiAqIFVuZGVyIHRoZSBob29kLCB0byBhdm9pZCByZXBlYXRlZCBsb29wcyBvZiB0aGUgZG9jdW1lbnQ6IHdlIGdldCBhbGwgbWF0Y2hlcyBhdCBvbmNlLCBvcmRlciB0aGVtXG4gKiBhY2NvcmRpbmcgdG8gYGRpcmVjdGlvbmAgYW5kIGBjdXJzb3JQb3NpdGlvbmAsIGFuZCB1c2UgbW9kdWxvIGFyaXRobWV0aWMgdG8gcmV0dXJuIHRoZVxuICogYXBwcm9wcmlhdGUgbWF0Y2guXG4gKlxuICogQHBhcmFtIGNtIFRoZSBDb2RlTWlycm9yIGVkaXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSBjdXJzb3JQb3NpdGlvbiBUaGUgY3VycmVudCBjdXJzb3IgcG9zaXRpb24uXG4gKiBAcGFyYW0gcmVwZWF0IFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBqdW1wIChlLmcuIDEgdG8ganVtcCB0byB0aGUgdmVyeSBuZXh0IG1hdGNoKS4gSXNcbiAqIG1vZHVsby1lZCBmb3IgZWZmaWNpZW5jeS5cbiAqIEBwYXJhbSByZWdleCBUaGUgcmVnZXggcGF0dGVybiB0byBqdW1wIHRvLlxuICogQHBhcmFtIGZpbHRlck1hdGNoIE9wdGlvbmFsIGZpbHRlciBmdW5jdGlvbiB0byBydW4gb24gdGhlIHJlZ2V4IG1hdGNoZXMuIFJldHVybiBmYWxzZSB0byBpZ25vcmVcbiAqIGEgZ2l2ZW4gbWF0Y2guXG4gKiBAcGFyYW0gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gdG8ganVtcCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGp1bXBUb1BhdHRlcm4oe1xuICBjbSxcbiAgY3Vyc29yUG9zaXRpb24sXG4gIHJlcGVhdCxcbiAgcmVnZXgsXG4gIGZpbHRlck1hdGNoID0gKCkgPT4gdHJ1ZSxcbiAgZGlyZWN0aW9uLFxufToge1xuICBjbTogQ29kZU1pcnJvckVkaXRvcjtcbiAgY3Vyc29yUG9zaXRpb246IEVkaXRvclBvc2l0aW9uO1xuICByZXBlYXQ6IG51bWJlcjtcbiAgcmVnZXg6IFJlZ0V4cDtcbiAgZmlsdGVyTWF0Y2g/OiAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4gYm9vbGVhbjtcbiAgZGlyZWN0aW9uOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIjtcbn0pOiBFZGl0b3JQb3NpdGlvbiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBjbS5nZXRWYWx1ZSgpO1xuICBjb25zdCBjdXJzb3JJZHggPSBjbS5pbmRleEZyb21Qb3MoY3Vyc29yUG9zaXRpb24pO1xuICBjb25zdCBvcmRlcmVkTWF0Y2hlcyA9IGdldE9yZGVyZWRNYXRjaGVzKHsgY29udGVudCwgcmVnZXgsIGN1cnNvcklkeCwgZmlsdGVyTWF0Y2gsIGRpcmVjdGlvbiB9KTtcbiAgY29uc3QgZWZmZWN0aXZlUmVwZWF0ID0gKHJlcGVhdCAlIG9yZGVyZWRNYXRjaGVzLmxlbmd0aCkgfHwgb3JkZXJlZE1hdGNoZXMubGVuZ3RoO1xuICBjb25zdCBtYXRjaElkeCA9IG9yZGVyZWRNYXRjaGVzW2VmZmVjdGl2ZVJlcGVhdCAtIDFdPy5pbmRleDtcbiAgaWYgKG1hdGNoSWR4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY3Vyc29yUG9zaXRpb247XG4gIH1cbiAgY29uc3QgbmV3Q3Vyc29yUG9zaXRpb24gPSBjbS5wb3NGcm9tSW5kZXgobWF0Y2hJZHgpO1xuICByZXR1cm4gbmV3Q3Vyc29yUG9zaXRpb247XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBvcmRlcmVkIGFycmF5IG9mIGFsbCBtYXRjaGVzIG9mIGEgcmVnZXggaW4gYSBzdHJpbmcgaW4gdGhlIGdpdmVuIGRpcmVjdGlvbiBmcm9tIHRoZVxuICogY3Vyc29yIGluZGV4IChsb29waW5nIGFyb3VuZCB0byB0aGUgb3RoZXIgZW5kIG9mIHRoZSBkb2N1bWVudCB3aGVuIHJlYWNoaW5nIG9uZSBlbmQpLlxuICovXG5mdW5jdGlvbiBnZXRPcmRlcmVkTWF0Y2hlcyh7XG4gIGNvbnRlbnQsXG4gIHJlZ2V4LFxuICBjdXJzb3JJZHgsXG4gIGZpbHRlck1hdGNoLFxuICBkaXJlY3Rpb24sXG59OiB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgcmVnZXg6IFJlZ0V4cDtcbiAgY3Vyc29ySWR4OiBudW1iZXI7XG4gIGZpbHRlck1hdGNoOiAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4gYm9vbGVhbjtcbiAgZGlyZWN0aW9uOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIjtcbn0pOiBSZWdFeHBFeGVjQXJyYXlbXSB7XG4gIGNvbnN0IHsgcHJldmlvdXNNYXRjaGVzLCBjdXJyZW50TWF0Y2hlcywgbmV4dE1hdGNoZXMgfSA9IGdldEFuZEdyb3VwTWF0Y2hlcyhcbiAgICBjb250ZW50LFxuICAgIHJlZ2V4LFxuICAgIGN1cnNvcklkeCxcbiAgICBmaWx0ZXJNYXRjaFxuICApO1xuICBpZiAoZGlyZWN0aW9uID09PSBcIm5leHRcIikge1xuICAgIHJldHVybiBbLi4ubmV4dE1hdGNoZXMsIC4uLnByZXZpb3VzTWF0Y2hlcywgLi4uY3VycmVudE1hdGNoZXNdO1xuICB9XG4gIHJldHVybiBbXG4gICAgLi4ucHJldmlvdXNNYXRjaGVzLnJldmVyc2UoKSxcbiAgICAuLi5uZXh0TWF0Y2hlcy5yZXZlcnNlKCksXG4gICAgLi4uY3VycmVudE1hdGNoZXMucmV2ZXJzZSgpLFxuICBdO1xufVxuXG4vKipcbiAqIEZpbmRzIGFsbCBtYXRjaGVzIG9mIGEgcmVnZXggaW4gYSBzdHJpbmcgYW5kIGdyb3VwcyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGVcbiAqIGN1cnNvci5cbiAqL1xuZnVuY3Rpb24gZ2V0QW5kR3JvdXBNYXRjaGVzKFxuICBjb250ZW50OiBzdHJpbmcsXG4gIHJlZ2V4OiBSZWdFeHAsXG4gIGN1cnNvcklkeDogbnVtYmVyLFxuICBmaWx0ZXJNYXRjaDogKG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkpID0+IGJvb2xlYW5cbik6IHtcbiAgcHJldmlvdXNNYXRjaGVzOiBSZWdFeHBFeGVjQXJyYXlbXTtcbiAgY3VycmVudE1hdGNoZXM6IFJlZ0V4cEV4ZWNBcnJheVtdO1xuICBuZXh0TWF0Y2hlczogUmVnRXhwRXhlY0FycmF5W107XG59IHtcbiAgY29uc3QgZ2xvYmFsUmVnZXggPSBtYWtlR2xvYmFsUmVnZXgocmVnZXgpO1xuICBjb25zdCBhbGxNYXRjaGVzID0gWy4uLmNvbnRlbnQubWF0Y2hBbGwoZ2xvYmFsUmVnZXgpXS5maWx0ZXIoZmlsdGVyTWF0Y2gpO1xuICBjb25zdCBwcmV2aW91c01hdGNoZXMgPSBhbGxNYXRjaGVzLmZpbHRlcihcbiAgICAobWF0Y2gpID0+IG1hdGNoLmluZGV4IDwgY3Vyc29ySWR4ICYmICFpc1dpdGhpbk1hdGNoKG1hdGNoLCBjdXJzb3JJZHgpXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRNYXRjaGVzID0gYWxsTWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiBpc1dpdGhpbk1hdGNoKG1hdGNoLCBjdXJzb3JJZHgpKTtcbiAgY29uc3QgbmV4dE1hdGNoZXMgPSBhbGxNYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IG1hdGNoLmluZGV4ID4gY3Vyc29ySWR4KTtcbiAgcmV0dXJuIHsgcHJldmlvdXNNYXRjaGVzLCBjdXJyZW50TWF0Y2hlcywgbmV4dE1hdGNoZXMgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUdsb2JhbFJlZ2V4KHJlZ2V4OiBSZWdFeHApOiBSZWdFeHAge1xuICBjb25zdCBnbG9iYWxGbGFncyA9IGdldEdsb2JhbEZsYWdzKHJlZ2V4KTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXguc291cmNlLCBnbG9iYWxGbGFncyk7XG59XG5cbmZ1bmN0aW9uIGdldEdsb2JhbEZsYWdzKHJlZ2V4OiBSZWdFeHApOiBzdHJpbmcge1xuICBjb25zdCB7IGZsYWdzIH0gPSByZWdleDtcbiAgcmV0dXJuIGZsYWdzLmluY2x1ZGVzKFwiZ1wiKSA/IGZsYWdzIDogYCR7ZmxhZ3N9Z2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpdGhpbk1hdGNoKG1hdGNoOiBSZWdFeHBFeGVjQXJyYXksIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIG1hdGNoLmluZGV4IDw9IGluZGV4ICYmIGluZGV4IDwgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG59XG4iLCJpbXBvcnQgeyBFZGl0b3IgYXMgQ29kZU1pcnJvckVkaXRvciB9IGZyb20gXCJjb2RlbWlycm9yXCI7XG5pbXBvcnQgeyBFZGl0b3JQb3NpdGlvbiB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgaXNXaXRoaW5NYXRjaCwganVtcFRvUGF0dGVybiB9IGZyb20gXCIuLi91dGlscy9qdW1wVG9QYXR0ZXJuXCI7XG5pbXBvcnQgeyBNb3Rpb25GbiB9IGZyb20gXCIuLi91dGlscy92aW1BcGlcIjtcblxuLyoqIE5haXZlIFJlZ2V4IGZvciBhIE1hcmtkb3duIGhlYWRpbmcgKEgxIHRocm91Z2ggSDYpLiBcIk5haXZlXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBhY2NvdW50IGZvclxuICogd2hldGhlciB0aGUgbWF0Y2ggaXMgd2l0aGluIGEgY29kZWJsb2NrIChlLmcuIGl0IGNvdWxkIGJlIGEgUHl0aG9uIGNvbW1lbnQsIG5vdCBhIGhlYWRpbmcpLlxuICovXG5jb25zdCBOQUlWRV9IRUFESU5HX1JFR0VYID0gL14jezEsNn0gL2dtO1xuXG4vKiogUmVnZXggZm9yIGEgTWFya2Rvd24gZmVuY2VkIGNvZGVibG9jaywgd2hpY2ggYmVnaW5zIHdpdGggc29tZSBudW1iZXIgPj0zIG9mIGJhY2t0aWNrcyBhdCB0aGVcbiAqIHN0YXJ0IG9mIGEgbGluZS4gSXQgZWl0aGVyIGVuZHMgb24gdGhlIG5lYXJlc3QgZnV0dXJlIGxpbmUgdGhhdCBzdGFydHMgd2l0aCBhdCBsZWFzdCBhcyBtYW55XG4gKiBiYWNrdGlja3MgKFxcMSBiYWNrLXJlZmVyZW5jZSksIG9yIGV4dGVuZHMgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGlmIG5vIHN1Y2ggZnV0dXJlIGxpbmUgZXhpc3RzLlxuICovXG5jb25zdCBGRU5DRURfQ09ERUJMT0NLX1JFR0VYID0gLyheYGBgKykoLio/XlxcMXwuKikvZ21zO1xuXG4vKipcbiAqIEp1bXBzIHRvIHRoZSByZXBlYXQtdGggbmV4dCBoZWFkaW5nLlxuICovXG5leHBvcnQgY29uc3QganVtcFRvTmV4dEhlYWRpbmc6IE1vdGlvbkZuID0gKGNtLCBjdXJzb3JQb3NpdGlvbiwgeyByZXBlYXQgfSkgPT4ge1xuICByZXR1cm4ganVtcFRvSGVhZGluZyh7IGNtLCBjdXJzb3JQb3NpdGlvbiwgcmVwZWF0LCBkaXJlY3Rpb246IFwibmV4dFwiIH0pO1xufTtcblxuLyoqXG4gKiBKdW1wcyB0byB0aGUgcmVwZWF0LXRoIHByZXZpb3VzIGhlYWRpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBqdW1wVG9QcmV2aW91c0hlYWRpbmc6IE1vdGlvbkZuID0gKFxuICBjbSxcbiAgY3Vyc29yUG9zaXRpb24sXG4gIHsgcmVwZWF0IH1cbikgPT4ge1xuICByZXR1cm4ganVtcFRvSGVhZGluZyh7IGNtLCBjdXJzb3JQb3NpdGlvbiwgcmVwZWF0LCBkaXJlY3Rpb246IFwicHJldmlvdXNcIiB9KTtcbn07XG5cbi8qKlxuICogSnVtcHMgdG8gdGhlIHJlcGVhdC10aCBoZWFkaW5nIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24uXG4gKlxuICogVW5kZXIgdGhlIGhvb2QsIHdlIHVzZSB0aGUgbmFpdmUgaGVhZGluZyByZWdleCB0byBmaW5kIGFsbCBoZWFkaW5ncywgYW5kIHRoZW4gZmlsdGVyIG91dCB0aG9zZVxuICogdGhhdCBhcmUgd2l0aGluIGNvZGVibG9ja3MuIGBjb2RlYmxvY2tNYXRjaGVzYCBpcyBwYXNzZWQgaW4gYSBjbG9zdXJlIHRvIGF2b2lkIHJlcGVhdGVkXG4gKiBjb21wdXRhdGlvbi5cbiAqL1xuZnVuY3Rpb24ganVtcFRvSGVhZGluZyh7XG4gIGNtLFxuICBjdXJzb3JQb3NpdGlvbixcbiAgcmVwZWF0LFxuICBkaXJlY3Rpb24sXG59OiB7XG4gIGNtOiBDb2RlTWlycm9yRWRpdG9yO1xuICBjdXJzb3JQb3NpdGlvbjogRWRpdG9yUG9zaXRpb247XG4gIHJlcGVhdDogbnVtYmVyO1xuICBkaXJlY3Rpb246IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiO1xufSk6IEVkaXRvclBvc2l0aW9uIHtcbiAgY29uc3QgY29kZWJsb2NrTWF0Y2hlcyA9IGZpbmRBbGxDb2RlYmxvY2tzKGNtKTtcbiAgY29uc3QgZmlsdGVyTWF0Y2ggPSAobWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSkgPT4gIWlzTWF0Y2hXaXRoaW5Db2RlYmxvY2sobWF0Y2gsIGNvZGVibG9ja01hdGNoZXMpO1xuICByZXR1cm4ganVtcFRvUGF0dGVybih7XG4gICAgY20sXG4gICAgY3Vyc29yUG9zaXRpb24sXG4gICAgcmVwZWF0LFxuICAgIHJlZ2V4OiBOQUlWRV9IRUFESU5HX1JFR0VYLFxuICAgIGZpbHRlck1hdGNoLFxuICAgIGRpcmVjdGlvbixcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRBbGxDb2RlYmxvY2tzKGNtOiBDb2RlTWlycm9yRWRpdG9yKTogUmVnRXhwRXhlY0FycmF5W10ge1xuICBjb25zdCBjb250ZW50ID0gY20uZ2V0VmFsdWUoKTtcbiAgcmV0dXJuIFsuLi5jb250ZW50Lm1hdGNoQWxsKEZFTkNFRF9DT0RFQkxPQ0tfUkVHRVgpXTtcbn1cblxuZnVuY3Rpb24gaXNNYXRjaFdpdGhpbkNvZGVibG9jayhcbiAgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSxcbiAgY29kZWJsb2NrTWF0Y2hlczogUmVnRXhwRXhlY0FycmF5W11cbik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZWJsb2NrTWF0Y2hlcy5zb21lKChjb2RlYmxvY2tNYXRjaCkgPT4gaXNXaXRoaW5NYXRjaChjb2RlYmxvY2tNYXRjaCwgbWF0Y2guaW5kZXgpKTtcbn1cbiIsImltcG9ydCB7IGp1bXBUb1BhdHRlcm4gfSBmcm9tIFwiLi4vdXRpbHMvanVtcFRvUGF0dGVyblwiO1xuaW1wb3J0IHsgTW90aW9uRm4gfSBmcm9tIFwiLi4vdXRpbHMvdmltQXBpXCI7XG5cbmNvbnN0IFdJS0lMSU5LX1JFR0VYX1NUUklORyA9IFwiXFxcXFtcXFxcWy4qP1xcXFxdXFxcXF1cIjtcbmNvbnN0IE1BUktET1dOX0xJTktfUkVHRVhfU1RSSU5HID0gXCJcXFxcWy4qP1xcXFxdXFxcXCguKj9cXFxcKVwiO1xuY29uc3QgVVJMX1JFR0VYX1NUUklORyA9IFwiXFxcXHcrOi8vXFxcXFMrXCI7XG5cbi8qKlxuICogUmVnZXggZm9yIGEgbGluayAod2hpY2ggY2FuIGJlIGEgd2lraWxpbmssIGEgbWFya2Rvd24gbGluaywgb3IgYSBzdGFuZGFsb25lIFVSTCkuXG4gKi9cbmNvbnN0IExJTktfUkVHRVhfU1RSSU5HID0gYCR7V0lLSUxJTktfUkVHRVhfU1RSSU5HfXwke01BUktET1dOX0xJTktfUkVHRVhfU1RSSU5HfXwke1VSTF9SRUdFWF9TVFJJTkd9YDtcbmNvbnN0IExJTktfUkVHRVggPSBuZXcgUmVnRXhwKExJTktfUkVHRVhfU1RSSU5HLCBcImdcIik7XG5cbi8qKlxuICogSnVtcHMgdG8gdGhlIHJlcGVhdC10aCBuZXh0IGxpbmsuXG4gKlxuICogTm90ZSB0aGF0IGBqdW1wVG9QYXR0ZXJuYCB1c2VzIGBTdHJpbmcubWF0Y2hBbGxgLCB3aGljaCBpbnRlcm5hbGx5IHVwZGF0ZXMgYGxhc3RJbmRleGAgYWZ0ZXIgZWFjaFxuICogbWF0Y2g7IGFuZCB0aGF0IGBMSU5LX1JFR0VYYCBtYXRjaGVzIHdpa2lsaW5rcyAvIG1hcmtkb3duIGxpbmtzIGZpcnN0LiBTbywgdGhpcyB3b24ndCBjYXRjaFxuICogbm9uLXN0YW5kYWxvbmUgVVJMcyAoZS5nLiB0aGUgVVJMIGluIGEgbWFya2Rvd24gbGluaykuIFRoaXMgc2hvdWxkIGJlIGEgZ29vZCB0aGluZyBpbiBtb3N0IGNhc2VzO1xuICogb3RoZXJ3aXNlIGl0IGNvdWxkIGJlIHRlZGlvdXMgKGFzIGEgdXNlcikgZm9yIGVhY2ggbWFya2Rvd24gbGluayB0byBjb250YWluIHR3byBqdW1wYWJsZSBzcG90cy5cbiovXG5leHBvcnQgY29uc3QganVtcFRvTmV4dExpbms6IE1vdGlvbkZuID0gKGNtLCBjdXJzb3JQb3NpdGlvbiwgeyByZXBlYXQgfSkgPT4ge1xuICByZXR1cm4ganVtcFRvUGF0dGVybih7XG4gICAgY20sXG4gICAgY3Vyc29yUG9zaXRpb24sXG4gICAgcmVwZWF0LFxuICAgIHJlZ2V4OiBMSU5LX1JFR0VYLFxuICAgIGRpcmVjdGlvbjogXCJuZXh0XCIsXG4gIH0pO1xufTtcblxuLyoqXG4gKiBKdW1wcyB0byB0aGUgcmVwZWF0LXRoIHByZXZpb3VzIGxpbmsuXG4gKi9cbmV4cG9ydCBjb25zdCBqdW1wVG9QcmV2aW91c0xpbms6IE1vdGlvbkZuID0gKGNtLCBjdXJzb3JQb3NpdGlvbiwgeyByZXBlYXQgfSkgPT4ge1xuICByZXR1cm4ganVtcFRvUGF0dGVybih7XG4gICAgY20sXG4gICAgY3Vyc29yUG9zaXRpb24sXG4gICAgcmVwZWF0LFxuICAgIHJlZ2V4OiBMSU5LX1JFR0VYLFxuICAgIGRpcmVjdGlvbjogXCJwcmV2aW91c1wiLFxuICB9KTtcbn07XG4iLCIvKipcbiAqIFV0aWxpdHkgdHlwZXMgYW5kIGZ1bmN0aW9ucyBmb3IgZGVmaW5pbmcgT2JzaWRpYW4tc3BlY2lmaWMgVmltIGNvbW1hbmRzLlxuICovXG5cbmltcG9ydCB7IEVkaXRvciBhcyBDb2RlTWlycm9yRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcblxuaW1wb3J0IFZpbXJjUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgeyBNb3Rpb25GbiwgVmltQXBpIH0gZnJvbSBcIi4vdmltQXBpXCI7XG5cbmV4cG9ydCB0eXBlIE9ic2lkaWFuQWN0aW9uRm4gPSAoXG4gIHZpbXJjUGx1Z2luOiBWaW1yY1BsdWdpbiwgIC8vIEluY2x1ZGVkIHNvIHdlIGNhbiBydW4gT2JzaWRpYW4gY29tbWFuZHMgYXMgcGFydCBvZiB0aGUgYWN0aW9uXG4gIGNtOiBDb2RlTWlycm9yRWRpdG9yLFxuICBhY3Rpb25BcmdzOiB7IHJlcGVhdDogbnVtYmVyIH0sXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVBbmRNYXBPYnNpZGlhblZpbU1vdGlvbihcbiAgdmltT2JqZWN0OiBWaW1BcGksXG4gIG1vdGlvbkZuOiBNb3Rpb25GbixcbiAgbWFwcGluZzogc3RyaW5nXG4pIHtcbiAgdmltT2JqZWN0LmRlZmluZU1vdGlvbihtb3Rpb25Gbi5uYW1lLCBtb3Rpb25Gbik7XG4gIHZpbU9iamVjdC5tYXBDb21tYW5kKG1hcHBpbmcsIFwibW90aW9uXCIsIG1vdGlvbkZuLm5hbWUsIHVuZGVmaW5lZCwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lQW5kTWFwT2JzaWRpYW5WaW1BY3Rpb24oXG4gIHZpbU9iamVjdDogVmltQXBpLFxuICB2aW1yY1BsdWdpbjogVmltcmNQbHVnaW4sXG4gIG9ic2lkaWFuQWN0aW9uRm46IE9ic2lkaWFuQWN0aW9uRm4sXG4gIG1hcHBpbmc6IHN0cmluZ1xuKSB7XG4gIHZpbU9iamVjdC5kZWZpbmVBY3Rpb24ob2JzaWRpYW5BY3Rpb25Gbi5uYW1lLCAoY20sIGFjdGlvbkFyZ3MpID0+IHtcbiAgICBvYnNpZGlhbkFjdGlvbkZuKHZpbXJjUGx1Z2luLCBjbSwgYWN0aW9uQXJncyk7XG4gIH0pO1xuICB2aW1PYmplY3QubWFwQ29tbWFuZChtYXBwaW5nLCBcImFjdGlvblwiLCBvYnNpZGlhbkFjdGlvbkZuLm5hbWUsIHVuZGVmaW5lZCwge30pO1xufVxuIiwiaW1wb3J0ICogYXMga2V5RnJvbUFjY2VsZXJhdG9yIGZyb20gJ2tleWJvYXJkZXZlbnQtZnJvbS1lbGVjdHJvbi1hY2NlbGVyYXRvcic7XHJcbmltcG9ydCB7IEFwcCwgRWRpdG9yU2VsZWN0aW9uLCBNYXJrZG93blZpZXcsIE5vdGljZSwgRWRpdG9yIGFzIE9ic2lkaWFuRWRpdG9yLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5pbXBvcnQgeyBmb2xsb3dMaW5rVW5kZXJDdXJzb3IgfSBmcm9tICcuL2FjdGlvbnMvZm9sbG93TGlua1VuZGVyQ3Vyc29yJztcclxuaW1wb3J0IHsgbW92ZURvd25Ta2lwcGluZ0ZvbGRzLCBtb3ZlVXBTa2lwcGluZ0ZvbGRzIH0gZnJvbSAnLi9hY3Rpb25zL21vdmVTa2lwcGluZ0ZvbGRzJztcclxuaW1wb3J0IHsganVtcFRvTmV4dEhlYWRpbmcsIGp1bXBUb1ByZXZpb3VzSGVhZGluZyB9IGZyb20gJy4vbW90aW9ucy9qdW1wVG9IZWFkaW5nJztcclxuaW1wb3J0IHsganVtcFRvTmV4dExpbmssIGp1bXBUb1ByZXZpb3VzTGluayB9IGZyb20gJy4vbW90aW9ucy9qdW1wVG9MaW5rJztcclxuaW1wb3J0IHsgZGVmaW5lQW5kTWFwT2JzaWRpYW5WaW1BY3Rpb24sIGRlZmluZUFuZE1hcE9ic2lkaWFuVmltTW90aW9uIH0gZnJvbSAnLi91dGlscy9vYnNpZGlhblZpbUNvbW1hbmQnO1xyXG5pbXBvcnQgeyBWaW1BcGkgfSBmcm9tICcuL3V0aWxzL3ZpbUFwaSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IENvZGVNaXJyb3I6IGFueTtcclxuXHJcbmNvbnN0IGVudW0gdmltU3RhdHVzIHtcclxuXHRub3JtYWwgPSAnbm9ybWFsJyxcclxuXHRpbnNlcnQgPSAnaW5zZXJ0JyxcclxuXHR2aXN1YWwgPSAndmlzdWFsJyxcclxuXHRyZXBsYWNlID0gJ3JlcGxhY2UnLFxyXG59XHJcbnR5cGUgVmltU3RhdHVzUHJvbXB0ID0gc3RyaW5nO1xyXG50eXBlIFZpbVN0YXR1c1Byb21wdE1hcCA9IHtcclxuXHRbc3RhdHVzIGluIHZpbVN0YXR1c106IFZpbVN0YXR1c1Byb21wdDtcclxufTtcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcblx0dmltcmNGaWxlTmFtZTogc3RyaW5nLFxyXG5cdGRpc3BsYXlDaG9yZDogYm9vbGVhbixcclxuXHRkaXNwbGF5VmltTW9kZTogYm9vbGVhbixcclxuXHRmaXhlZE5vcm1hbE1vZGVMYXlvdXQ6IGJvb2xlYW4sXHJcblx0Y2FwdHVyZWRLZXlib2FyZE1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcclxuXHRzdXBwb3J0SnNDb21tYW5kcz86IGJvb2xlYW5cclxuXHR2aW1TdGF0dXNQcm9tcHRNYXA6IFZpbVN0YXR1c1Byb21wdE1hcDtcclxufVxyXG5cclxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogU2V0dGluZ3MgPSB7XHJcblx0dmltcmNGaWxlTmFtZTogXCIub2JzaWRpYW4udmltcmNcIixcclxuXHRkaXNwbGF5Q2hvcmQ6IGZhbHNlLFxyXG5cdGRpc3BsYXlWaW1Nb2RlOiBmYWxzZSxcclxuXHRmaXhlZE5vcm1hbE1vZGVMYXlvdXQ6IGZhbHNlLFxyXG5cdGNhcHR1cmVkS2V5Ym9hcmRNYXA6IHt9LFxyXG5cdHN1cHBvcnRKc0NvbW1hbmRzOiBmYWxzZSxcclxuXHR2aW1TdGF0dXNQcm9tcHRNYXA6IHtcclxuXHRcdG5vcm1hbDogJ/Cfn6InLFxyXG5cdFx0aW5zZXJ0OiAn8J+foCcsXHJcblx0XHR2aXN1YWw6ICfwn5+hJyxcclxuXHRcdHJlcGxhY2U6ICfwn5S0JyxcclxuXHR9LFxyXG59XHJcblxyXG5jb25zdCB2aW1TdGF0dXNQcm9tcHRDbGFzcyA9IFwidmltcmMtc3VwcG9ydC12aW0tbW9kZVwiO1xyXG5cclxuLy8gTk9URTogdG8gZnV0dXJlIG1haW50YWluZXJzLCBwbGVhc2UgbWFrZSBzdXJlIGFsbCBtYXBwaW5nIGNvbW1hbmRzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGFycmF5LlxyXG5jb25zdCBtYXBwaW5nQ29tbWFuZHM6IFN0cmluZ1tdID0gW1xyXG5cdFwibWFwXCIsXHJcblx0XCJubWFwXCIsXHJcblx0XCJub3JlbWFwXCIsXHJcblx0XCJpdW5tYXBcIixcclxuXHRcIm51bm1hcFwiLFxyXG5cdFwidnVubWFwXCIsXHJcbl1cclxuXHJcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpIHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpbXJjUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcclxuXHRzZXR0aW5nczogU2V0dGluZ3M7XHJcblxyXG5cdHByaXZhdGUgY29kZU1pcnJvclZpbU9iamVjdDogYW55ID0gbnVsbDtcclxuXHRwcml2YXRlIGluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgbGFzdFlhbmtCdWZmZXI6IHN0cmluZ1tdID0gW1wiXCJdO1xyXG5cdHByaXZhdGUgbGFzdFN5c3RlbUNsaXBib2FyZCA9IFwiXCI7XHJcblx0cHJpdmF0ZSB5YW5rVG9TeXN0ZW1DbGlwYm9hcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwcml2YXRlIGN1cnJlbnRLZXlDaG9yZDogYW55ID0gW107XHJcblx0cHJpdmF0ZSB2aW1DaG9yZFN0YXR1c0JhcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG5cdHByaXZhdGUgdmltU3RhdHVzQmFyOiBIVE1MRWxlbWVudCA9IG51bGw7XHJcblx0cHJpdmF0ZSBjdXJyZW50VmltU3RhdHVzOiB2aW1TdGF0dXMgPSB2aW1TdGF0dXMubm9ybWFsO1xyXG5cdHByaXZhdGUgY3VzdG9tVmltS2V5YmluZHM6IHsgW25hbWU6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cdHByaXZhdGUgY3VycmVudFNlbGVjdGlvbjogW0VkaXRvclNlbGVjdGlvbl0gPSBudWxsO1xyXG5cdHByaXZhdGUgaXNJbnNlcnRNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHVwZGF0ZVZpbVN0YXR1c0JhcigpIHtcclxuXHRcdHRoaXMudmltU3RhdHVzQmFyLnNldFRleHQoXHJcblx0XHRcdHRoaXMuc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwW3RoaXMuY3VycmVudFZpbVN0YXR1c11cclxuXHRcdCk7XHJcblx0XHR0aGlzLnZpbVN0YXR1c0Jhci5kYXRhc2V0LnZpbU1vZGUgPSB0aGlzLmN1cnJlbnRWaW1TdGF0dXM7XHJcblx0fVxyXG5cclxuXHRhc3luYyBjYXB0dXJlS2V5Ym9hcmRMYXlvdXQoKSB7XHJcblx0XHQvLyBUaGlzIGlzIGV4cGVyaW1lbnRhbCBBUEkgYW5kIGl0IG1pZ2h0IGJyZWFrIGF0IHNvbWUgcG9pbnQ6XHJcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRMYXlvdXRNYXBcclxuXHRcdGxldCBrZXlNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuXHRcdGxldCBsYXlvdXQgPSBhd2FpdCAobmF2aWdhdG9yIGFzIGFueSkua2V5Ym9hcmQuZ2V0TGF5b3V0TWFwKCk7XHJcblx0XHRsZXQgZG9uZUl0ZXJhdGluZyA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0bGV0IGNvdW50ZWQgPSAwO1xyXG5cdFx0XHRsYXlvdXQuZm9yRWFjaCgodmFsdWU6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGtleU1hcFtpbmRleF0gPSB2YWx1ZTtcclxuXHRcdFx0XHRjb3VudGVkICs9IDE7XHJcblx0XHRcdFx0aWYgKGNvdW50ZWQgPT09IGxheW91dC5zaXplKVxyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0YXdhaXQgZG9uZUl0ZXJhdGluZztcclxuXHRcdG5ldyBOb3RpY2UoJ0tleWJvYXJkIGxheW91dCBjYXB0dXJlZCcpO1xyXG5cdFx0cmV0dXJuIGtleU1hcDtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGluaXRpYWxpemUoKSB7XHJcblx0XHRpZiAodGhpcy5pbml0aWFsaXplZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCA9ICh3aW5kb3cgYXMgYW55KS5Db2RlTWlycm9yQWRhcHRlcj8uVmltO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJZYW5rRXZlbnRzKGFjdGl2ZVdpbmRvdyk7XHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJ3aW5kb3ctb3BlblwiLCAod29ya3NwYWNlV2luZG93LCB3KSA9PiB7XHJcblx0XHRcdHRoaXMucmVnaXN0ZXJZYW5rRXZlbnRzKHcpO1xyXG5cdFx0fSlcclxuXHJcblx0XHR0aGlzLnByZXBhcmVDaG9yZERpc3BsYXkoKTtcclxuXHRcdHRoaXMucHJlcGFyZVZpbU1vZGVEaXNwbGF5KCk7XHJcblxyXG5cdFx0Ly8gVHdvIGV2ZW50cyBjb3NcclxuXHRcdC8vIHRoaXMgZG9uJ3QgdHJpZ2dlciBvbiBsb2FkaW5nL3JlbG9hZGluZyBvYnNpZGlhbiB3aXRoIG5vdGUgb3BlbmVkXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkV2ZW50KCk7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZVZpbUV2ZW50cygpO1xyXG5cdFx0fSk7XHJcblx0XHQvLyBhbmQgdGhpcyBkb24ndCB0cmlnZ2VyIG9uIG9wZW5pbmcgc2FtZSBmaWxlIGluIG5ldyBwYW5lXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJmaWxlLW9wZW5cIiwgYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkV2ZW50KCk7XHJcblxyXG5cdFx0XHR0aGlzLnVwZGF0ZVZpbUV2ZW50cygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RlcllhbmtFdmVudHMod2luOiBXaW5kb3cpIHtcclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudCh3aW4uZG9jdW1lbnQsICdjbGljaycsICgpID0+IHtcclxuXHRcdFx0dGhpcy5jYXB0dXJlWWFua0J1ZmZlcih3aW4pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRG9tRXZlbnQod2luLmRvY3VtZW50LCAna2V5dXAnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuY2FwdHVyZVlhbmtCdWZmZXIod2luKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5yZWdpc3RlckRvbUV2ZW50KHdpbi5kb2N1bWVudCwgJ2ZvY3VzaW4nLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuY2FwdHVyZVlhbmtCdWZmZXIod2luKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVTZWxlY3Rpb25FdmVudCgpIHtcclxuXHRcdGNvbnN0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdGlmICghdmlldykgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBjbSA9IHRoaXMuZ2V0Q29kZU1pcnJvcih2aWV3KTtcclxuXHRcdGlmICghY20pIHJldHVybjtcclxuXHRcdGlmIChcclxuXHRcdFx0dGhpcy5nZXRDdXJzb3JBY3Rpdml0eUhhbmRsZXJzKGNtKS5zb21lKFxyXG5cdFx0XHRcdChlOiB7IG5hbWU6IHN0cmluZyB9KSA9PiBlLm5hbWUgPT09IFwidXBkYXRlU2VsZWN0aW9uXCIpXHJcblx0XHQpIHJldHVybjtcclxuXHRcdGNtLm9uKFwiY3Vyc29yQWN0aXZpdHlcIiwgYXN5bmMgKGNtOiBDb2RlTWlycm9yLkVkaXRvcikgPT4gdGhpcy51cGRhdGVTZWxlY3Rpb24oY20pKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZVNlbGVjdGlvbihjbTogYW55KSB7XHJcblx0XHR0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSBjbS5saXN0U2VsZWN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRDdXJzb3JBY3Rpdml0eUhhbmRsZXJzKGNtOiBDb2RlTWlycm9yLkVkaXRvcikge1xyXG5cdFx0cmV0dXJuIChjbSBhcyBhbnkpLl9oYW5kbGVycy5jdXJzb3JBY3Rpdml0eTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHVwZGF0ZVZpbUV2ZW50cygpIHtcclxuXHRcdGlmICghKHRoaXMuYXBwIGFzIEFueSkuaXNWaW1FbmFibGVkKCkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRpZiAodmlldykge1xyXG5cdFx0XHRjb25zdCBjbUVkaXRvciA9IHRoaXMuZ2V0Q29kZU1pcnJvcih2aWV3KTtcclxuXHJcblx0XHRcdC8vIFNlZSBodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCN2aW1hcGlfZXZlbnRzIGZvciBldmVudHMuXHJcblx0XHRcdHRoaXMuaXNJbnNlcnRNb2RlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlWaW1Nb2RlKVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlVmltU3RhdHVzQmFyKCk7XHJcblxyXG5cdFx0XHRpZiAoIWNtRWRpdG9yKSByZXR1cm47XHJcblx0XHRcdGNtRWRpdG9yLm9mZigndmltLW1vZGUtY2hhbmdlJywgdGhpcy5sb2dWaW1Nb2RlQ2hhbmdlKTtcclxuXHRcdFx0Y21FZGl0b3Iub24oJ3ZpbS1tb2RlLWNoYW5nZScsIHRoaXMubG9nVmltTW9kZUNoYW5nZSk7XHJcblxyXG5cdFx0XHR0aGlzLmN1cnJlbnRLZXlDaG9yZCA9IFtdO1xyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1rZXlwcmVzcycsIHRoaXMub25WaW1LZXlwcmVzcyk7XHJcblx0XHRcdGNtRWRpdG9yLm9uKCd2aW0ta2V5cHJlc3MnLCB0aGlzLm9uVmltS2V5cHJlc3MpO1xyXG5cdFx0XHRjbUVkaXRvci5vZmYoJ3ZpbS1jb21tYW5kLWRvbmUnLCB0aGlzLm9uVmltQ29tbWFuZERvbmUpO1xyXG5cdFx0XHRjbUVkaXRvci5vbigndmltLWNvbW1hbmQtZG9uZScsIHRoaXMub25WaW1Db21tYW5kRG9uZSk7XHJcblx0XHRcdENvZGVNaXJyb3Iub2ZmKGNtRWRpdG9yLmdldElucHV0RmllbGQoKSwgJ2tleWRvd24nLCB0aGlzLm9uS2V5ZG93bik7XHJcblx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IuZ2V0SW5wdXRGaWVsZCgpLCAna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFNldHRpbmdzVGFiKHRoaXMuYXBwLCB0aGlzKSlcclxuXHJcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBWaW1yYyBwbHVnaW4nKTtcclxuXHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oJ2FjdGl2ZS1sZWFmLWNoYW5nZScsIGFzeW5jICgpID0+IHtcclxuXHRcdFx0aWYgKCF0aGlzLmluaXRpYWxpemVkKVxyXG5cdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cdFx0XHRpZiAodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmxvYWRlZFZpbXJjKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0bGV0IGZpbGVOYW1lID0gdGhpcy5zZXR0aW5ncy52aW1yY0ZpbGVOYW1lO1xyXG5cdFx0XHRpZiAoIWZpbGVOYW1lIHx8IGZpbGVOYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRmaWxlTmFtZSA9IERFRkFVTFRfU0VUVElOR1MudmltcmNGaWxlTmFtZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnQ29uZmlndXJlZCBWaW1yYyBmaWxlIG5hbWUgaXMgaWxsZWdhbCwgZmFsbGluZy1iYWNrIHRvIGRlZmF1bHQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgdmltcmNDb250ZW50ID0gJyc7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dmltcmNDb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGZpbGVOYW1lKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBsb2FkaW5nIHZpbXJjIGZpbGUnLCBmaWxlTmFtZSwgJ2Zyb20gdGhlIHZhdWx0IHJvb3QnLCBlLm1lc3NhZ2UpXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5yZWFkVmltSW5pdCh2aW1yY0NvbnRlbnQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGRhdGEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xyXG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdGxvZ1ZpbU1vZGVDaGFuZ2UgPSBhc3luYyAoY206IGFueSkgPT4ge1xyXG5cdFx0aWYgKCFjbSkgcmV0dXJuO1xyXG5cdFx0dGhpcy5pc0luc2VydE1vZGUgPSBjbS5tb2RlID09PSAnaW5zZXJ0JztcclxuXHRcdHN3aXRjaCAoY20ubW9kZSkge1xyXG5cdFx0XHRjYXNlIFwiaW5zZXJ0XCI6XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VmltU3RhdHVzID0gdmltU3RhdHVzLmluc2VydDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm5vcm1hbFwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5ub3JtYWw7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJ2aXN1YWxcIjpcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRWaW1TdGF0dXMgPSB2aW1TdGF0dXMudmlzdWFsO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwicmVwbGFjZVwiOlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFZpbVN0YXR1cyA9IHZpbVN0YXR1cy5yZXBsYWNlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUpXHJcblx0XHRcdHRoaXMudXBkYXRlVmltU3RhdHVzQmFyKCk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgVmltcmMgcGx1Z2luIChidXQgVmltIGNvbW1hbmRzIHRoYXQgd2VyZSBhbHJlYWR5IGxvYWRlZCB3aWxsIHN0aWxsIHdvcmspJyk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEFjdGl2ZVZpZXcoKTogTWFya2Rvd25WaWV3IHtcclxuXHRcdHJldHVybiB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG5cdH1cclxuXHJcblx0Z2V0QWN0aXZlT2JzaWRpYW5FZGl0b3IoKTogT2JzaWRpYW5FZGl0b3Ige1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0QWN0aXZlVmlldygpLmVkaXRvcjtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0Q29kZU1pcnJvcih2aWV3OiBNYXJrZG93blZpZXcpOiBDb2RlTWlycm9yLkVkaXRvciB7XHJcblx0XHRyZXR1cm4gKHZpZXcgYXMgYW55KS5lZGl0TW9kZT8uZWRpdG9yPy5jbT8uY207XHJcblx0fVxyXG5cclxuXHRyZWFkVmltSW5pdCh2aW1Db21tYW5kczogc3RyaW5nKSB7XHJcblx0XHRsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0aWYgKHZpZXcpIHtcclxuXHRcdFx0dmFyIGNtRWRpdG9yID0gdGhpcy5nZXRDb2RlTWlycm9yKHZpZXcpO1xyXG5cdFx0XHRpZiAoY21FZGl0b3IgJiYgIXRoaXMuY29kZU1pcnJvclZpbU9iamVjdC5sb2FkZWRWaW1yYykge1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lQmFzaWNDb21tYW5kcyh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lQW5kTWFwT2JzaWRpYW5WaW1Db21tYW5kcyh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lU2VuZEtleXModGhpcy5jb2RlTWlycm9yVmltT2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZU9iQ29tbWFuZCh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lU3Vycm91bmQodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0KTtcclxuXHRcdFx0XHR0aGlzLmRlZmluZUpzQ29tbWFuZCh0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QpO1xyXG5cdFx0XHRcdHRoaXMuZGVmaW5lSnNGaWxlKHRoaXMuY29kZU1pcnJvclZpbU9iamVjdCk7XHJcblx0XHRcdFx0dGhpcy5kZWZpbmVTb3VyY2UodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0KTtcclxuXHJcblx0XHRcdFx0dGhpcy5sb2FkVmltQ29tbWFuZHModmltQ29tbWFuZHMpO1xyXG5cclxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSBsb2FkIGl0IGp1c3Qgb25jZSBwZXIgQ29kZU1pcnJvciBpbnN0YW5jZS5cclxuXHRcdFx0XHQvLyBUaGlzIGlzIHN1cHBvc2VkIHRvIHdvcmsgYmVjYXVzZSB0aGUgVmltIHN0YXRlIGlzIGtlcHQgYXQgdGhlIGtleW1hcCBsZXZlbCwgaG9wZWZ1bGx5XHJcblx0XHRcdFx0Ly8gdGhlcmUgd2lsbCBub3QgYmUgYnVncyBjYXVzZWQgYnkgb3BlcmF0aW9ucyB0aGF0IGFyZSBrZXB0IGF0IHRoZSBvYmplY3QgbGV2ZWwgaW5zdGVhZFxyXG5cdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC5sb2FkZWRWaW1yYyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChjbUVkaXRvcikge1xyXG5cdFx0XHRcdGNtRWRpdG9yLm9mZigndmltLW1vZGUtY2hhbmdlJywgdGhpcy5sb2dWaW1Nb2RlQ2hhbmdlKTtcclxuXHRcdFx0XHRjbUVkaXRvci5vbigndmltLW1vZGUtY2hhbmdlJywgdGhpcy5sb2dWaW1Nb2RlQ2hhbmdlKTtcclxuXHRcdFx0XHRDb2RlTWlycm9yLm9mZihjbUVkaXRvci5nZXRJbnB1dEZpZWxkKCksICdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xyXG5cdFx0XHRcdENvZGVNaXJyb3Iub24oY21FZGl0b3IuZ2V0SW5wdXRGaWVsZCgpLCAna2V5ZG93bicsIHRoaXMub25LZXlkb3duKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bG9hZFZpbUNvbW1hbmRzKHZpbUNvbW1hbmRzOiBzdHJpbmcpIHtcclxuXHRcdGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRpZiAodmlldykge1xyXG5cdFx0XHR2YXIgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3Iodmlldyk7XHJcblxyXG5cdFx0XHR2aW1Db21tYW5kcy5zcGxpdChcIlxcblwiKS5mb3JFYWNoKFxyXG5cdFx0XHRcdGZ1bmN0aW9uIChsaW5lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIGFycjogW3N0cmluZ10pIHtcclxuXHRcdFx0XHRcdGlmIChsaW5lLnRyaW0oKS5sZW5ndGggPiAwICYmIGxpbmUudHJpbSgpWzBdICE9ICdcIicpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHNwbGl0ID0gbGluZS5zcGxpdChcIiBcIilcclxuXHRcdFx0XHRcdFx0aWYgKG1hcHBpbmdDb21tYW5kcy5pbmNsdWRlcyhzcGxpdFswXSkpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBIYXZlIHRvIGRvIHRoaXMgYmVjYXVzZSBcInZpbS1jb21tYW5kLWRvbmVcIiBldmVudCBkb2Vzbid0IGFjdHVhbGx5IHdvcmsgcHJvcGVybHksIG9yIHNvbWV0aGluZy5cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmN1c3RvbVZpbUtleWJpbmRzW3NwbGl0WzFdXSA9IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuaGFuZGxlRXgoY21FZGl0b3IsIGxpbmUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0uYmluZCh0aGlzKSAvLyBGYXN0ZXIgdGhhbiBhbiBhcnJvdyBmdW5jdGlvbi4gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTAzNzU0NDAvYmluZGluZy12cy1hcnJvdy1mdW5jdGlvbi1mb3ItcmVhY3Qtb25jbGljay1ldmVudFxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWZpbmVCYXNpY0NvbW1hbmRzKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHR2aW1PYmplY3QuZGVmaW5lT3B0aW9uKCdjbGlwYm9hcmQnLCAnJywgJ3N0cmluZycsIFsnY2xpcCddLCAodmFsdWU6IHN0cmluZywgY206IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodmFsdWUudHJpbSgpID09ICd1bm5hbWVkJyB8fCB2YWx1ZS50cmltKCkgPT0gJ3VubmFtZWRwbHVzJykge1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiVmltIGlzIG5vdyBzZXQgdG8geWFuayB0byBzeXN0ZW0gY2xpcGJvYXJkLlwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGNsaXBib2FyZCBvcHRpb24sIHN1cHBvcnRlZCBhcmUgJ3VubmFtZWQnIGFuZCAndW5uYW1lZHBsdXMnIChhbmQgdGhleSBkbyB0aGUgc2FtZSlcIilcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcHRpb24oJ3RhYnN0b3AnLCA0LCAnbnVtYmVyJywgW10sICh2YWx1ZTogbnVtYmVyLCBjbTogYW55KSA9PiB7XHJcblx0XHRcdGlmICh2YWx1ZSAmJiBjbSkge1xyXG5cdFx0XHRcdGNtLnNldE9wdGlvbigndGFiU2l6ZScsIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdpdW5tYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmIChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSkge1xyXG5cdFx0XHRcdHRoaXMuY29kZU1pcnJvclZpbU9iamVjdC51bm1hcChwYXJhbXMuYXJnU3RyaW5nLnRyaW0oKSwgJ2luc2VydCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoJ251bm1hcCcsICcnLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpKSB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LnVubWFwKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpLCAnbm9ybWFsJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgndnVubWFwJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAocGFyYW1zLmFyZ1N0cmluZy50cmltKCkpIHtcclxuXHRcdFx0XHR0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QudW5tYXAocGFyYW1zLmFyZ1N0cmluZy50cmltKCksICd2aXN1YWwnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdub3JlbWFwJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXBhcmFtcz8uYXJncz8ubGVuZ3RoKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1hcHBpbmc6IG5vcmVtYXAnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpKSB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0Lm5vcmVtYXAuYXBwbHkodGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LCBwYXJhbXMuYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEFsbG93IHRoZSB1c2VyIHRvIHJlZ2lzdGVyIGFuIEV4IGNvbW1hbmRcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnZXhtYXAnLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmIChwYXJhbXM/LmFyZ3M/Lmxlbmd0aCAmJiBwYXJhbXMuYXJncy5sZW5ndGggPCAyKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBleG1hcCByZXF1aXJlcyBhdCBsZWFzdCAyIHBhcmFtZXRlcnM6IFtuYW1lXSBbYWN0aW9ucy4uLl1gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY29tbWFuZE5hbWUgPSBwYXJhbXMuYXJnc1swXTtcclxuXHRcdFx0cGFyYW1zLmFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0bGV0IGNvbW1hbmRDb250ZW50ID0gcGFyYW1zLmFyZ3Muam9pbignICcpO1xyXG5cdFx0XHQvLyBUaGUgY29udGVudCBvZiB0aGUgdXNlcidzIEV4IGNvbW1hbmQgaXMganVzdCB0aGUgcmVtYWluaW5nIHBhcmFtZXRlcnMgb2YgdGhlIGV4bWFwIGNvbW1hbmRcclxuXHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmRlZmluZUV4KGNvbW1hbmROYW1lLCAnJywgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmhhbmRsZUV4KGNtLCBjb21tYW5kQ29udGVudCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuICBkZWZpbmVBbmRNYXBPYnNpZGlhblZpbUNvbW1hbmRzKHZpbU9iamVjdDogVmltQXBpKSB7XHJcblx0XHRkZWZpbmVBbmRNYXBPYnNpZGlhblZpbU1vdGlvbih2aW1PYmplY3QsIGp1bXBUb05leHRIZWFkaW5nLCAnXV0nKTtcclxuXHRcdGRlZmluZUFuZE1hcE9ic2lkaWFuVmltTW90aW9uKHZpbU9iamVjdCwganVtcFRvUHJldmlvdXNIZWFkaW5nLCAnW1snKTtcclxuXHRcdGRlZmluZUFuZE1hcE9ic2lkaWFuVmltTW90aW9uKHZpbU9iamVjdCwganVtcFRvTmV4dExpbmssICdnbCcpO1xyXG5cdFx0ZGVmaW5lQW5kTWFwT2JzaWRpYW5WaW1Nb3Rpb24odmltT2JqZWN0LCBqdW1wVG9QcmV2aW91c0xpbmssICdnTCcpO1xyXG5cclxuXHRcdGRlZmluZUFuZE1hcE9ic2lkaWFuVmltQWN0aW9uKHZpbU9iamVjdCwgdGhpcywgbW92ZURvd25Ta2lwcGluZ0ZvbGRzLCAnemonKTtcclxuXHRcdGRlZmluZUFuZE1hcE9ic2lkaWFuVmltQWN0aW9uKHZpbU9iamVjdCwgdGhpcywgbW92ZVVwU2tpcHBpbmdGb2xkcywgJ3prJyk7XHJcblx0XHRkZWZpbmVBbmRNYXBPYnNpZGlhblZpbUFjdGlvbih2aW1PYmplY3QsIHRoaXMsIGZvbGxvd0xpbmtVbmRlckN1cnNvciwgJ2dmJyk7XHJcbiAgfVxyXG5cclxuXHRkZWZpbmVTZW5kS2V5cyh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdzZW5ka2V5cycsICcnLCBhc3luYyAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKCFwYXJhbXM/LmFyZ3M/Lmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBUaGUgc2VuZGtleXMgY29tbWFuZCByZXF1aXJlcyBhIGxpc3Qgb2Yga2V5cywgZS5nLiBzZW5kS2V5cyBDdHJsK3AgYSBiIEVudGVyYCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBhbGxHb29kID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGV2ZW50czogS2V5Ym9hcmRFdmVudFtdID0gW107XHJcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIHBhcmFtcy5hcmdzKSB7XHJcblx0XHRcdFx0aWYgKGtleS5zdGFydHNXaXRoKCd3YWl0JykpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGRlbGF5ID0ga2V5LnNsaWNlKDQpO1xyXG5cdFx0XHRcdFx0YXdhaXQgc2xlZXAoZGVsYXkgKiAxMDAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQga2V5RXZlbnQ6IEtleWJvYXJkRXZlbnQgPSBudWxsO1xyXG5cdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0a2V5RXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIGtleUZyb21BY2NlbGVyYXRvci50b0tleUV2ZW50KGtleSkpO1xyXG5cdFx0XHRcdFx0XHRldmVudHMucHVzaChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHRhbGxHb29kID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgS2V5ICcke2tleX0nIGNvdWxkbid0IGJlIHJlYWQgYXMgYW4gRWxlY3Ryb24gQWNjZWxlcmF0b3JgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChhbGxHb29kKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoa2V5RXZlbnQgb2YgZXZlbnRzKVxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGtleUV2ZW50KSksICcqJyk7XHJcblx0XHRcdFx0XHRcdC8vIHZpZXcuY29udGFpbmVyRWwuZGlzcGF0Y2hFdmVudChrZXlFdmVudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGVPYnNpZGlhbkNvbW1hbmQoY29tbWFuZE5hbWU6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgYXZhaWxhYmxlQ29tbWFuZHMgPSAodGhpcy5hcHAgYXMgYW55KS5jb21tYW5kcy5jb21tYW5kcztcclxuXHRcdGlmICghKGNvbW1hbmROYW1lIGluIGF2YWlsYWJsZUNvbW1hbmRzKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYENvbW1hbmQgJHtjb21tYW5kTmFtZX0gd2FzIG5vdCBmb3VuZCwgdHJ5ICdvYmNvbW1hbmQnIHdpdGggbm8gcGFyYW1zIHRvIHNlZSBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgd2hhdCdzIGF2YWlsYWJsZWApO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0Y29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3I7XHJcblx0XHRjb25zdCBjb21tYW5kID0gYXZhaWxhYmxlQ29tbWFuZHNbY29tbWFuZE5hbWVdO1xyXG5cdFx0Y29uc3Qge2NhbGxiYWNrLCBjaGVja0NhbGxiYWNrLCBlZGl0b3JDYWxsYmFjaywgZWRpdG9yQ2hlY2tDYWxsYmFja30gPSBjb21tYW5kO1xyXG5cdFx0aWYgKGVkaXRvckNoZWNrQ2FsbGJhY2spXHJcblx0XHRcdGVkaXRvckNoZWNrQ2FsbGJhY2soZmFsc2UsIGVkaXRvciwgdmlldyk7XHJcblx0XHRlbHNlIGlmIChlZGl0b3JDYWxsYmFjaylcclxuXHRcdFx0ZWRpdG9yQ2FsbGJhY2soZWRpdG9yLCB2aWV3KTtcclxuXHRcdGVsc2UgaWYgKGNoZWNrQ2FsbGJhY2spXHJcblx0XHRcdGNoZWNrQ2FsbGJhY2soZmFsc2UpO1xyXG5cdFx0ZWxzZSBpZiAoY2FsbGJhY2spXHJcblx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgQ29tbWFuZCAke2NvbW1hbmROYW1lfSBkb2Vzbid0IGhhdmUgYW4gT2JzaWRpYW4gY2FsbGJhY2tgKTtcclxuXHR9XHJcblxyXG5cdGRlZmluZU9iQ29tbWFuZCh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdvYmNvbW1hbmQnLCAnJywgYXN5bmMgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmICghcGFyYW1zPy5hcmdzPy5sZW5ndGggfHwgcGFyYW1zLmFyZ3MubGVuZ3RoICE9IDEpIHtcclxuXHRcdFx0XHRjb25zdCBhdmFpbGFibGVDb21tYW5kcyA9ICh0aGlzLmFwcCBhcyBhbnkpLmNvbW1hbmRzLmNvbW1hbmRzO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBBdmFpbGFibGUgY29tbWFuZHM6ICR7T2JqZWN0LmtleXMoYXZhaWxhYmxlQ29tbWFuZHMpLmpvaW4oJ1xcbicpfWApXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBvYmNvbW1hbmQgcmVxdWlyZXMgZXhhY3RseSAxIHBhcmFtZXRlcmApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGNvbW1hbmROYW1lID0gcGFyYW1zLmFyZ3NbMF07XHJcblx0XHRcdHRoaXMuZXhlY3V0ZU9ic2lkaWFuQ29tbWFuZChjb21tYW5kTmFtZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZVN1cnJvdW5kKHZpbU9iamVjdDogYW55KSB7XHJcblx0XHQvLyBGdW5jdGlvbiB0byBzdXJyb3VuZCBzZWxlY3RlZCB0ZXh0IG9yIGhpZ2hsaWdodGVkIHdvcmQuXHJcblx0XHR2YXIgc3Vycm91bmRGdW5jID0gKHBhcmFtczogc3RyaW5nW10pID0+IHtcclxuXHRcdFx0dmFyIGVkaXRvciA9IHRoaXMuZ2V0QWN0aXZlVmlldygpLmVkaXRvcjtcclxuXHRcdFx0aWYgKCFwYXJhbXM/Lmxlbmd0aCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcInN1cnJvdW5kIHJlcXVpcmVzIGV4YWN0bHkgMiBwYXJhbWV0ZXJzOiBwcmVmaXggYW5kIHBvc3RmaXggdGV4dC5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IG5ld0FyZ3MgPSBwYXJhbXMuam9pbihcIiBcIikubWF0Y2goLyhcXFxcLnxbXlxcc1xcXFxcXFxcXSspKy9nKTtcclxuXHRcdFx0aWYgKG5ld0FyZ3MubGVuZ3RoICE9IDIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJzdXJyb3VuZCByZXF1aXJlcyBleGFjdGx5IDIgcGFyYW1ldGVyczogcHJlZml4IGFuZCBwb3N0Zml4IHRleHQuXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgYmVnaW5uaW5nID0gbmV3QXJnc1swXS5yZXBsYWNlKFwiXFxcXFxcXFxcIiwgXCJcXFxcXCIpLnJlcGxhY2UoXCJcXFxcIFwiLCBcIiBcIik7IC8vIEdldCB0aGUgYmVnaW5uaW5nIHN1cnJvdW5kIHRleHRcclxuXHRcdFx0bGV0IGVuZGluZyA9IG5ld0FyZ3NbMV0ucmVwbGFjZShcIlxcXFxcXFxcXCIsIFwiXFxcXFwiKS5yZXBsYWNlKFwiXFxcXCBcIiwgXCIgXCIpOyAvLyBHZXQgdGhlIGVuZGluZyBzdXJyb3VuZCB0ZXh0XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFNlbGVjdGlvbnMgPSB0aGlzLmN1cnJlbnRTZWxlY3Rpb247XHJcblx0XHRcdHZhciBjaG9zZW5TZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9ucz8uWzBdID8gY3VycmVudFNlbGVjdGlvbnNbMF0gOiB7YW5jaG9yOiBlZGl0b3IuZ2V0Q3Vyc29yKCksIGhlYWQ6IGVkaXRvci5nZXRDdXJzb3IoKX07XHJcblx0XHRcdGlmIChjdXJyZW50U2VsZWN0aW9ucz8ubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiV0FSTklORzogTXVsdGlwbGUgc2VsZWN0aW9ucyBpbiBzdXJyb3VuZC4gQXR0ZW1wdCB0byBzZWxlY3QgbWF0Y2hpbmcgY3Vyc29yLiAob2JzaWRpYW4tdmltcmMtc3VwcG9ydClcIilcclxuXHRcdFx0XHRjb25zdCBjdXJzb3JQb3MgPSBlZGl0b3IuZ2V0Q3Vyc29yKCk7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBzZWxlY3Rpb24gb2YgY3VycmVudFNlbGVjdGlvbnMpIHtcclxuXHRcdFx0XHRcdGlmIChzZWxlY3Rpb24uaGVhZC5saW5lID09IGN1cnNvclBvcy5saW5lICYmIHNlbGVjdGlvbi5oZWFkLmNoID09IGN1cnNvclBvcy5jaCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIlJFU09MVkVEOiBTZWxlY3Rpb24gbWF0Y2hpbmcgY3Vyc29yIGZvdW5kLiAob2JzaWRpYW4tdmltcmMtc3VwcG9ydClcIilcclxuXHRcdFx0XHRcdFx0Y2hvc2VuU2VsZWN0aW9uID0gc2VsZWN0aW9uO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVkaXRvci5wb3NUb09mZnNldChjaG9zZW5TZWxlY3Rpb24uYW5jaG9yKSA9PT0gZWRpdG9yLnBvc1RvT2Zmc2V0KGNob3NlblNlbGVjdGlvbi5oZWFkKSkge1xyXG5cdFx0XHRcdC8vIE5vIHJhbmdlIG9mIHNlbGVjdGVkIHRleHQsIHNvIHNlbGVjdCB3b3JkLlxyXG5cdFx0XHRcdGxldCB3b3JkQXQgPSBlZGl0b3Iud29yZEF0KGNob3NlblNlbGVjdGlvbi5oZWFkKTtcclxuXHRcdFx0XHRpZiAod29yZEF0KSB7XHJcblx0XHRcdFx0XHRjaG9zZW5TZWxlY3Rpb24gPSB7YW5jaG9yOiB3b3JkQXQuZnJvbSwgaGVhZDogd29yZEF0LnRvfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVkaXRvci5wb3NUb09mZnNldChjaG9zZW5TZWxlY3Rpb24uYW5jaG9yKSA+IGVkaXRvci5wb3NUb09mZnNldChjaG9zZW5TZWxlY3Rpb24uaGVhZCkpIHtcclxuXHRcdFx0XHRbY2hvc2VuU2VsZWN0aW9uLmFuY2hvciwgY2hvc2VuU2VsZWN0aW9uLmhlYWRdID0gW2Nob3NlblNlbGVjdGlvbi5oZWFkLCBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yXTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY3VyclRleHQgPSBlZGl0b3IuZ2V0UmFuZ2UoY2hvc2VuU2VsZWN0aW9uLmFuY2hvciwgY2hvc2VuU2VsZWN0aW9uLmhlYWQpO1xyXG5cdFx0XHRlZGl0b3IucmVwbGFjZVJhbmdlKGJlZ2lubmluZyArIGN1cnJUZXh0ICsgZW5kaW5nLCBjaG9zZW5TZWxlY3Rpb24uYW5jaG9yLCBjaG9zZW5TZWxlY3Rpb24uaGVhZCk7XHJcblx0XHRcdC8vIElmIG5vIHNlbGVjdGlvbiwgcGxhY2UgY3Vyc29yIGJldHdlZW4gYmVnaW5uaW5nIGFuZCBlbmRpbmdcclxuXHRcdFx0aWYgKGVkaXRvci5wb3NUb09mZnNldChjaG9zZW5TZWxlY3Rpb24uYW5jaG9yKSA9PT0gZWRpdG9yLnBvc1RvT2Zmc2V0KGNob3NlblNlbGVjdGlvbi5oZWFkKSkge1xyXG5cdFx0XHRcdGNob3NlblNlbGVjdGlvbi5oZWFkLmNoICs9IGJlZ2lubmluZy5sZW5ndGg7XHJcblx0XHRcdFx0ZWRpdG9yLnNldEN1cnNvcihjaG9zZW5TZWxlY3Rpb24uaGVhZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR2aW1PYmplY3QuZGVmaW5lRXgoXCJzdXJyb3VuZFwiLCBcIlwiLCAoY206IGFueSwgcGFyYW1zOiBhbnkpID0+IHsgc3Vycm91bmRGdW5jKHBhcmFtcy5hcmdzKTsgfSk7XHJcblxyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KFwicGFzdGVpbnRvXCIsIFwiXCIsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHQvLyBVc2luZyB0aGUgcmVnaXN0ZXIgZm9yIHdoZW4gdGhpcy55YW5rVG9TeXN0ZW1DbGlwYm9hcmQgPT0gZmFsc2VcclxuXHRcdFx0c3Vycm91bmRGdW5jKFxyXG5cdFx0XHRcdFsnWycsXHJcblx0XHRcdFx0ICddKCcgKyB2aW1PYmplY3QuZ2V0UmVnaXN0ZXJDb250cm9sbGVyKCkuZ2V0UmVnaXN0ZXIoJ3lhbmsnKS5rZXlCdWZmZXIgKyBcIilcIl0pO1xyXG5cdFx0fSlcclxuXHJcblx0XHR2YXIgZWRpdG9yID0gdGhpcy5nZXRBY3RpdmVWaWV3KCkuZWRpdG9yO1xyXG5cdFx0Ly8gSGFuZGxlIHRoZSBzdXJyb3VuZCBkaWFsb2cgaW5wdXRcclxuXHRcdHZhciBzdXJyb3VuZERpYWxvZ0NhbGxiYWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0aWYgKCgvXlxcWyskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mIFsgYW5kIG1hdGNoIHRoZW0gd2l0aCBdXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCJdXCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgaWYgKCgvXlxcKCskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mICggYW5kIG1hdGNoIHRoZW0gd2l0aCApXHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCIpXCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgaWYgKCgvXlxceyskLykudGVzdCh2YWx1ZSkpIHsgLy8gY2hlY2sgZm9yIDEtaW5mIHsgYW5kIG1hdGNoIHRoZW0gd2l0aCB9XHJcblx0XHRcdFx0c3Vycm91bmRGdW5jKFt2YWx1ZSwgXCJ9XCIucmVwZWF0KHZhbHVlLmxlbmd0aCldKVxyXG5cdFx0XHR9IGVsc2UgeyAvLyBFbHNlLCBqdXN0IHB1dCBpdCBiZWZvcmUgYW5kIGFmdGVyLlxyXG5cdFx0XHRcdHN1cnJvdW5kRnVuYyhbdmFsdWUsIHZhbHVlXSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZpbU9iamVjdC5kZWZpbmVPcGVyYXRvcihcInN1cnJvdW5kT3BlcmF0b3JcIiwgKCkgPT4ge1xyXG5cdFx0XHRsZXQgcCA9IFwiPHNwYW4+U3Vycm91bmQgd2l0aDogPGlucHV0IHR5cGU9J3RleHQnPjwvc3Bhbj5cIlxyXG5cdFx0XHRDb2RlTWlycm9yLm9wZW5EaWFsb2cocCwgc3Vycm91bmREaWFsb2dDYWxsYmFjaywgeyBib3R0b206IHRydWUsIHNlbGVjdFZhbHVlT25PcGVuOiBmYWxzZSB9KVxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0dmltT2JqZWN0Lm1hcENvbW1hbmQoXCI8QS15PnNcIiwgXCJvcGVyYXRvclwiLCBcInN1cnJvdW5kT3BlcmF0b3JcIilcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyBjYXB0dXJlWWFua0J1ZmZlcih3aW46IFdpbmRvdykge1xyXG5cdFx0aWYgKCF0aGlzLnlhbmtUb1N5c3RlbUNsaXBib2FyZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB5YW5rUmVnaXN0ZXIgPSB0aGlzLmNvZGVNaXJyb3JWaW1PYmplY3QuZ2V0UmVnaXN0ZXJDb250cm9sbGVyKCkuZ2V0UmVnaXN0ZXIoJ3lhbmsnKTtcclxuXHRcdGNvbnN0IGN1cnJlbnRZYW5rQnVmZmVyID0geWFua1JlZ2lzdGVyLmtleUJ1ZmZlcjtcclxuXHJcblx0XHQvLyB5YW5rIC0+IGNsaXBib2FyZFxyXG5cdFx0Y29uc3QgYnVmID0gY3VycmVudFlhbmtCdWZmZXJbMF1cclxuXHRcdGlmIChidWYgIT09IHRoaXMubGFzdFlhbmtCdWZmZXJbMF0pIHtcclxuXHRcdFx0YXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1Zik7XHJcblx0XHRcdHRoaXMubGFzdFlhbmtCdWZmZXIgPSBjdXJyZW50WWFua0J1ZmZlcjtcclxuXHRcdFx0dGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gYXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gY2xpcGJvYXJkIC0+IHlhbmtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRDbGlwYm9hcmRUZXh0ID0gYXdhaXQgd2luLm5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKTtcclxuXHRcdFx0aWYgKGN1cnJlbnRDbGlwYm9hcmRUZXh0ICE9PSB0aGlzLmxhc3RTeXN0ZW1DbGlwYm9hcmQpIHtcclxuXHRcdFx0XHR5YW5rUmVnaXN0ZXIuc2V0VGV4dChjdXJyZW50Q2xpcGJvYXJkVGV4dCk7XHJcblx0XHRcdFx0dGhpcy5sYXN0WWFua0J1ZmZlciA9IHlhbmtSZWdpc3Rlci5rZXlCdWZmZXI7XHJcblx0XHRcdFx0dGhpcy5sYXN0U3lzdGVtQ2xpcGJvYXJkID0gY3VycmVudENsaXBib2FyZFRleHQ7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0Ly8gWFhYOiBBdm9pZCBcIlVuY2F1Z2h0IChpbiBwcm9taXNlKSBET01FeGNlcHRpb246IERvY3VtZW50IGlzIG5vdCBmb2N1c2VkLlwiXHJcblx0XHRcdC8vIFhYWDogSXQgaXMgbm90IGdvb2QgYnV0IGVhc3kgd29ya2Fyb3VuZFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJlcGFyZUNob3JkRGlzcGxheSgpIHtcclxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmRpc3BsYXlDaG9yZCkge1xyXG5cdFx0XHQvLyBBZGQgc3RhdHVzIGJhciBpdGVtXHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuXHJcblx0XHRcdC8vIE1vdmUgdmltQ2hvcmRTdGF0dXNCYXIgdG8gdGhlIGxlZnRtb3N0IHBvc2l0aW9uIGFuZCBjZW50ZXIgaXQuXHJcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnBhcmVudEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXIucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy52aW1DaG9yZFN0YXR1c0JhciwgcGFyZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR0aGlzLnZpbUNob3JkU3RhdHVzQmFyLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCJhdXRvXCI7XHJcblxyXG5cdFx0XHRjb25zdCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRcdGlmICghdmlldykgcmV0dXJuO1xyXG5cdFx0XHRsZXQgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3Iodmlldyk7XHJcblx0XHRcdC8vIFNlZSBodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCN2aW1hcGlfZXZlbnRzIGZvciBldmVudHMuXHJcblx0XHRcdGNtRWRpdG9yLm9mZigndmltLWtleXByZXNzJywgdGhpcy5vblZpbUtleXByZXNzKTtcclxuXHRcdFx0Y21FZGl0b3Iub24oJ3ZpbS1rZXlwcmVzcycsIHRoaXMub25WaW1LZXlwcmVzcyk7XHJcblx0XHRcdGNtRWRpdG9yLm9mZigndmltLWNvbW1hbmQtZG9uZScsIHRoaXMub25WaW1Db21tYW5kRG9uZSk7XHJcblx0XHRcdGNtRWRpdG9yLm9uKCd2aW0tY29tbWFuZC1kb25lJywgdGhpcy5vblZpbUNvbW1hbmREb25lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uVmltS2V5cHJlc3MgPSBhc3luYyAodmltS2V5OiBhbnkpID0+IHtcclxuXHRcdGlmICh2aW1LZXkgIT0gXCI8RXNjPlwiKSB7IC8vIFRPRE8gZmlndXJlIG91dCB3aGF0IHRvIGFjdHVhbGx5IGxvb2sgZm9yIHRvIGV4aXQgY29tbWFuZHMuXHJcblx0XHRcdHRoaXMuY3VycmVudEtleUNob3JkLnB1c2godmltS2V5KTtcclxuXHRcdFx0aWYgKHRoaXMuY3VzdG9tVmltS2V5YmluZHNbdGhpcy5jdXJyZW50S2V5Q2hvcmQuam9pbihcIlwiKV0gIT0gdW5kZWZpbmVkKSB7IC8vIEN1c3RvbSBrZXkgY2hvcmQgZXhpc3RzLlxyXG5cdFx0XHRcdHRoaXMuY3VycmVudEtleUNob3JkID0gW107XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY3VycmVudEtleUNob3JkID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQnVpbGQga2V5Y2hvcmQgdGV4dFxyXG5cdFx0bGV0IHRlbXBTID0gXCJcIjtcclxuXHRcdGZvciAoY29uc3QgcyBvZiB0aGlzLmN1cnJlbnRLZXlDaG9yZCkge1xyXG5cdFx0XHR0ZW1wUyArPSBcIiBcIiArIHM7XHJcblx0XHR9XHJcblx0XHRpZiAodGVtcFMgIT0gXCJcIikge1xyXG5cdFx0XHR0ZW1wUyArPSBcIi1cIjtcclxuXHRcdH1cclxuXHRcdHRoaXMudmltQ2hvcmRTdGF0dXNCYXI/LnNldFRleHQodGVtcFMpO1xyXG5cdH1cclxuXHJcblx0b25WaW1Db21tYW5kRG9uZSA9IGFzeW5jIChyZWFzb246IGFueSkgPT4ge1xyXG5cdFx0dGhpcy52aW1DaG9yZFN0YXR1c0Jhcj8uc2V0VGV4dChcIlwiKTtcclxuXHRcdHRoaXMuY3VycmVudEtleUNob3JkID0gW107XHJcblx0fVxyXG5cclxuXHRwcmVwYXJlVmltTW9kZURpc3BsYXkoKSB7XHJcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5kaXNwbGF5VmltTW9kZSkge1xyXG5cdFx0XHR0aGlzLnZpbVN0YXR1c0JhciA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpIC8vIEFkZCBzdGF0dXMgYmFyIGl0ZW1cclxuXHRcdFx0dGhpcy52aW1TdGF0dXNCYXIuc2V0VGV4dChcclxuXHRcdFx0XHR0aGlzLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcFt2aW1TdGF0dXMubm9ybWFsXVxyXG5cdFx0XHQpOyAvLyBJbml0IHRoZSB2aW1TdGF0dXNCYXIgd2l0aCBub3JtYWwgbW9kZVxyXG5cdFx0XHR0aGlzLnZpbVN0YXR1c0Jhci5hZGRDbGFzcyh2aW1TdGF0dXNQcm9tcHRDbGFzcyk7XHJcblx0XHRcdHRoaXMudmltU3RhdHVzQmFyLmRhdGFzZXQudmltTW9kZSA9IHRoaXMuY3VycmVudFZpbVN0YXR1cztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uS2V5ZG93biA9IChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuZml4ZWROb3JtYWxNb2RlTGF5b3V0KSB7XHJcblx0XHRcdGNvbnN0IGtleU1hcCA9IHRoaXMuc2V0dGluZ3MuY2FwdHVyZWRLZXlib2FyZE1hcDtcclxuXHRcdFx0aWYgKCF0aGlzLmlzSW5zZXJ0TW9kZSAmJiAhZXYuc2hpZnRLZXkgJiZcclxuXHRcdFx0XHRldi5jb2RlIGluIGtleU1hcCAmJiBldi5rZXkgIT0ga2V5TWFwW2V2LmNvZGVdKSB7XHJcblx0XHRcdFx0bGV0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTtcclxuXHRcdFx0XHRpZiAodmlldykge1xyXG5cdFx0XHRcdFx0Y29uc3QgY21FZGl0b3IgPSB0aGlzLmdldENvZGVNaXJyb3Iodmlldyk7XHJcblx0XHRcdFx0XHRpZiAoY21FZGl0b3IpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb2RlTWlycm9yVmltT2JqZWN0LmhhbmRsZUtleShjbUVkaXRvciwga2V5TWFwW2V2LmNvZGVdLCAnbWFwcGluZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZWZpbmVKc0NvbW1hbmQodmltT2JqZWN0OiBhbnkpIHtcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnanNjb21tYW5kJywgJycsIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3Muc3VwcG9ydEpzQ29tbWFuZHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSlMgY29tbWFuZHMgYXJlIHR1cm5lZCBvZmY7IGVuYWJsZSB0aGVtIHZpYSB0aGUgVmltcmMgcGx1Z2luIGNvbmZpZ3VyYXRpb24gaWYgeW91J3JlIHN1cmUgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmdcIik7XHJcblx0XHRcdGNvbnN0IGpzQ29kZSA9IHBhcmFtcy5hcmdTdHJpbmcudHJpbSgpIGFzIHN0cmluZztcclxuXHRcdFx0aWYgKGpzQ29kZVswXSAhPSAneycgfHwganNDb2RlW2pzQ29kZS5sZW5ndGggLSAxXSAhPSAnfScpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYW4gYXJndW1lbnQgd2hpY2ggaXMgSlMgY29kZSBzdXJyb3VuZGVkIGJ5IGN1cmx5IGJyYWNrZXRzOiB7Li4ufVwiKTtcclxuXHRcdFx0bGV0IGN1cnJlbnRTZWxlY3Rpb25zID0gdGhpcy5jdXJyZW50U2VsZWN0aW9uO1xyXG5cdFx0XHR2YXIgY2hvc2VuU2VsZWN0aW9uID0gY3VycmVudFNlbGVjdGlvbnMgJiYgY3VycmVudFNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IGN1cnJlbnRTZWxlY3Rpb25zWzBdIDogbnVsbDtcclxuXHRcdFx0Y29uc3QgY29tbWFuZCA9IEZ1bmN0aW9uKCdlZGl0b3InLCAndmlldycsICdzZWxlY3Rpb24nLCBqc0NvZGUpO1xyXG5cdFx0XHRjb25zdCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcblx0XHRcdGNvbW1hbmQodmlldy5lZGl0b3IsIHZpZXcsIGNob3NlblNlbGVjdGlvbik7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRlZmluZUpzRmlsZSh2aW1PYmplY3Q6IGFueSkge1xyXG5cdFx0dmltT2JqZWN0LmRlZmluZUV4KCdqc2ZpbGUnLCAnJywgYXN5bmMgKGNtOiBhbnksIHBhcmFtczogYW55KSA9PiB7XHJcblx0XHRcdGlmICghdGhpcy5zZXR0aW5ncy5zdXBwb3J0SnNDb21tYW5kcylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJKUyBjb21tYW5kcyBhcmUgdHVybmVkIG9mZjsgZW5hYmxlIHRoZW0gdmlhIHRoZSBWaW1yYyBwbHVnaW4gY29uZmlndXJhdGlvbiBpZiB5b3UncmUgc3VyZSB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZ1wiKTtcclxuXHRcdFx0aWYgKHBhcmFtcz8uYXJncz8ubGVuZ3RoIDwgMSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBmb3JtYXQ6IGZpbGVOYW1lIHtleHRyYUNvZGV9XCIpO1xyXG5cdFx0XHRsZXQgZXh0cmFDb2RlID0gJyc7XHJcblx0XHRcdGNvbnN0IGZpbGVOYW1lID0gcGFyYW1zLmFyZ3NbMF07XHJcblx0XHRcdGlmIChwYXJhbXMuYXJncy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0cGFyYW1zLmFyZ3Muc2hpZnQoKTtcclxuXHRcdFx0XHRleHRyYUNvZGUgPSBwYXJhbXMuYXJncy5qb2luKCcgJykudHJpbSgpIGFzIHN0cmluZztcclxuXHRcdFx0XHRpZiAoZXh0cmFDb2RlWzBdICE9ICd7JyB8fCBleHRyYUNvZGVbZXh0cmFDb2RlLmxlbmd0aCAtIDFdICE9ICd9JylcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGFuIGV4dHJhIGNvZGUgYXJndW1lbnQgd2hpY2ggaXMgSlMgY29kZSBzdXJyb3VuZGVkIGJ5IGN1cmx5IGJyYWNrZXRzOiB7Li4ufVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY3VycmVudFNlbGVjdGlvbnMgPSB0aGlzLmN1cnJlbnRTZWxlY3Rpb247XHJcblx0XHRcdHZhciBjaG9zZW5TZWxlY3Rpb24gPSBjdXJyZW50U2VsZWN0aW9ucyAmJiBjdXJyZW50U2VsZWN0aW9ucy5sZW5ndGggPiAwID8gY3VycmVudFNlbGVjdGlvbnNbMF0gOiBudWxsO1xyXG5cdFx0XHRsZXQgY29udGVudCA9ICcnO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLnJlYWQoZmlsZU5hbWUpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVhZCBmaWxlICR7cGFyYW1zLmFyZ3NbMF19IGZyb20gdmF1bHQgcm9vdDogJHtlLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgY29tbWFuZCA9IEZ1bmN0aW9uKCdlZGl0b3InLCAndmlldycsICdzZWxlY3Rpb24nLCBjb250ZW50ICsgZXh0cmFDb2RlKTtcclxuXHRcdFx0Y29uc3QgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xyXG5cdFx0XHRjb21tYW5kKHZpZXcuZWRpdG9yLCB2aWV3LCBjaG9zZW5TZWxlY3Rpb24pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRkZWZpbmVTb3VyY2UodmltT2JqZWN0OiBhbnkpIHtcclxuXHRcdHZpbU9iamVjdC5kZWZpbmVFeCgnc291cmNlJywgJycsIGFzeW5jIChjbTogYW55LCBwYXJhbXM6IGFueSkgPT4ge1xyXG5cdFx0XHRpZiAocGFyYW1zPy5hcmdzPy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGZvcm1hdDogc291cmNlIFtmaWxlTmFtZV1cIik7XHJcblx0XHRcdGNvbnN0IGZpbGVOYW1lID0gcGFyYW1zLmFyZ1N0cmluZy50cmltKCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGZpbGVOYW1lKS50aGVuKHZpbXJjQ29udGVudCA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRWaW1Db21tYW5kcyh2aW1yY0NvbnRlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgdmltcmMgZmlsZScsIGZpbGVOYW1lLCAnZnJvbSB0aGUgdmF1bHQgcm9vdCcsIGUubWVzc2FnZSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcclxuXHRwbHVnaW46IFZpbXJjUGx1Z2luO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBWaW1yY1BsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xyXG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0bGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdWaW1yYyBTZXR0aW5ncycgfSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdWaW1yYyBmaWxlIG5hbWUnKVxyXG5cdFx0XHQuc2V0RGVzYygnUmVsYXRpdmUgdG8gdmF1bHQgZGlyZWN0b3J5IChyZXF1aXJlcyByZXN0YXJ0KScpXHJcblx0XHRcdC5hZGRUZXh0KCh0ZXh0KSA9PiB7XHJcblx0XHRcdFx0dGV4dC5zZXRQbGFjZWhvbGRlcihERUZBVUxUX1NFVFRJTkdTLnZpbXJjRmlsZU5hbWUpO1xyXG5cdFx0XHRcdHRleHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudmltcmNGaWxlTmFtZSB8fCBERUZBVUxUX1NFVFRJTkdTLnZpbXJjRmlsZU5hbWUpO1xyXG5cdFx0XHRcdHRleHQub25DaGFuZ2UodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltcmNGaWxlTmFtZSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdWaW0gY2hvcmQgZGlzcGxheScpXHJcblx0XHRcdC5zZXREZXNjKCdEaXNwbGF5cyB0aGUgY3VycmVudCBjaG9yZCB1bnRpbCBjb21wbGV0aW9uLiBFeDogXCI8U3BhY2U+IGYtXCIgKHJlcXVpcmVzIHJlc3RhcnQpJylcclxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XHJcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlDaG9yZCB8fCBERUZBVUxUX1NFVFRJTkdTLmRpc3BsYXlDaG9yZCk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmRpc3BsYXlDaG9yZCA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXHJcblx0XHRcdC5zZXROYW1lKCdWaW0gbW9kZSBkaXNwbGF5JylcclxuXHRcdFx0LnNldERlc2MoJ0Rpc3BsYXlzIHRoZSBjdXJyZW50IHZpbSBtb2RlIChyZXF1aXJlcyByZXN0YXJ0KScpXHJcblx0XHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4ge1xyXG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kaXNwbGF5VmltTW9kZSB8fCBERUZBVUxUX1NFVFRJTkdTLmRpc3BsYXlWaW1Nb2RlKTtcclxuXHRcdFx0XHR0b2dnbGUub25DaGFuZ2UodmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZGlzcGxheVZpbU1vZGUgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnVXNlIGEgZml4ZWQga2V5Ym9hcmQgbGF5b3V0IGZvciBOb3JtYWwgbW9kZScpXHJcblx0XHRcdC5zZXREZXNjKCdEZWZpbmUgYSBrZXlib2FyZCBsYXlvdXQgdG8gYWx3YXlzIHVzZSB3aGVuIGluIE5vcm1hbCBtb2RlLCByZWdhcmRsZXNzIG9mIHRoZSBpbnB1dCBsYW5ndWFnZSAoZXhwZXJpbWVudGFsKS4nKVxyXG5cdFx0XHQuYWRkQnV0dG9uKGFzeW5jIChidXR0b24pID0+IHtcclxuXHRcdFx0XHRidXR0b24uc2V0QnV0dG9uVGV4dCgnQ2FwdHVyZSBjdXJyZW50IGxheW91dCcpO1xyXG5cdFx0XHRcdGJ1dHRvbi5vbkNsaWNrKGFzeW5jICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmNhcHR1cmVkS2V5Ym9hcmRNYXAgPSBhd2FpdCB0aGlzLnBsdWdpbi5jYXB0dXJlS2V5Ym9hcmRMYXlvdXQoKTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZml4ZWROb3JtYWxNb2RlTGF5b3V0IHx8IERFRkFVTFRfU0VUVElOR1MuZml4ZWROb3JtYWxNb2RlTGF5b3V0KTtcclxuXHRcdFx0XHR0b2dnbGUub25DaGFuZ2UoYXN5bmMgdmFsdWUgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MuZml4ZWROb3JtYWxNb2RlTGF5b3V0ID0gdmFsdWU7XHJcblx0XHRcdFx0XHRpZiAodmFsdWUgJiYgT2JqZWN0LmtleXModGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FwdHVyZWRLZXlib2FyZE1hcCkubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXB0dXJlZEtleWJvYXJkTWFwID0gYXdhaXQgdGhpcy5wbHVnaW4uY2FwdHVyZUtleWJvYXJkTGF5b3V0KCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1N1cHBvcnQgSlMgY29tbWFuZHMgKGJld2FyZSEpJylcclxuXHRcdFx0LnNldERlc2MoXCJTdXBwb3J0IHRoZSAnanNjb21tYW5kJyBhbmQgJ2pzZmlsZScgY29tbWFuZHMsIHdoaWNoIGFsbG93IGRlZmluaW5nIEV4IGNvbW1hbmRzIHVzaW5nIEphdmFzY3JpcHQuIFdBUk5JTkchIFJldmlldyB0aGUgUkVBRE1FIHRvIHVuZGVyc3RhbmQgd2h5IHRoaXMgbWF5IGJlIGRhbmdlcm91cyBiZWZvcmUgZW5hYmxpbmcuXCIpXHJcblx0XHRcdC5hZGRUb2dnbGUodG9nZ2xlID0+IHtcclxuXHRcdFx0XHR0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3VwcG9ydEpzQ29tbWFuZHMgPz8gREVGQVVMVF9TRVRUSU5HUy5zdXBwb3J0SnNDb21tYW5kcyk7XHJcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKHZhbHVlID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnN1cHBvcnRKc0NvbW1hbmRzID0gdmFsdWU7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7dGV4dDogJ1ZpbSBNb2RlIERpc3BsYXkgUHJvbXB0J30pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnTm9ybWFsIG1vZGUgcHJvbXB0JylcclxuXHRcdFx0LnNldERlc2MoJ1NldCB0aGUgc3RhdHVzIHByb21wdCB0ZXh0IGZvciBub3JtYWwgbW9kZS4nKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4ge1xyXG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoJ0RlZmF1bHQ6IPCfn6InKTtcclxuXHRcdFx0XHR0ZXh0LnNldFZhbHVlKFxyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLm5vcm1hbCB8fFxyXG5cdFx0XHRcdFx0XHRERUZBVUxUX1NFVFRJTkdTLnZpbVN0YXR1c1Byb21wdE1hcC5ub3JtYWxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRleHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1TdGF0dXNQcm9tcHRNYXAubm9ybWFsID0gdmFsdWUgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAubm9ybWFsO1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxyXG5cdFx0XHQuc2V0TmFtZSgnSW5zZXJ0IG1vZGUgcHJvbXB0JylcclxuXHRcdFx0LnNldERlc2MoJ1NldCB0aGUgc3RhdHVzIHByb21wdCB0ZXh0IGZvciBpbnNlcnQgbW9kZS4nKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4ge1xyXG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoJ0RlZmF1bHQ6IPCfn6AnKTtcclxuXHRcdFx0XHR0ZXh0LnNldFZhbHVlKFxyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLmluc2VydCB8fFxyXG5cdFx0XHRcdFx0XHRERUZBVUxUX1NFVFRJTkdTLnZpbVN0YXR1c1Byb21wdE1hcC5pbnNlcnRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdHRleHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy52aW1TdGF0dXNQcm9tcHRNYXAuaW5zZXJ0ID0gdmFsdWUgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAuaW5zZXJ0O1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwKTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1Zpc3VhbCBtb2RlIHByb21wdCcpXHJcblx0XHRcdC5zZXREZXNjKCdTZXQgdGhlIHN0YXR1cyBwcm9tcHQgdGV4dCBmb3IgdmlzdWFsIG1vZGUuJylcclxuXHRcdFx0LmFkZFRleHQoKHRleHQpID0+IHtcclxuXHRcdFx0XHR0ZXh0LnNldFBsYWNlaG9sZGVyKCdEZWZhdWx0OiDwn5+hJyk7XHJcblx0XHRcdFx0dGV4dC5zZXRWYWx1ZShcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC52aXN1YWwgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAudmlzdWFsXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHR0ZXh0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLnZpc3VhbCA9IHZhbHVlIHx8XHJcblx0XHRcdFx0XHRcdERFRkFVTFRfU0VUVElOR1MudmltU3RhdHVzUHJvbXB0TWFwLnZpc3VhbDtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1JlcGxhY2UgbW9kZSBwcm9tcHQnKVxyXG5cdFx0XHQuc2V0RGVzYygnU2V0IHRoZSBzdGF0dXMgcHJvbXB0IHRleHQgZm9yIHJlcGxhY2UgbW9kZS4nKVxyXG5cdFx0XHQuYWRkVGV4dCgodGV4dCkgPT4ge1xyXG5cdFx0XHRcdHRleHQuc2V0UGxhY2Vob2xkZXIoJ0RlZmF1bHQ6IPCflLQnKTtcclxuXHRcdFx0XHR0ZXh0LnNldFZhbHVlKFxyXG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3MudmltU3RhdHVzUHJvbXB0TWFwLnJlcGxhY2UgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAucmVwbGFjZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0dGV4dC5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnZpbVN0YXR1c1Byb21wdE1hcC5yZXBsYWNlID0gdmFsdWUgfHxcclxuXHRcdFx0XHRcdFx0REVGQVVMVF9TRVRUSU5HUy52aW1TdGF0dXNQcm9tcHRNYXAucmVwbGFjZTtcclxuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBsdWdpbiIsIk5vdGljZSIsIk1hcmtkb3duVmlldyIsImtleUZyb21BY2NlbGVyYXRvci50b0tleUV2ZW50IiwiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLFNBQVMsR0FBRyxzRkFB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Q0Q7QUFDQSxTQUFTLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRTtBQUMxQyxDQUFDLE9BQU87QUFDUixFQUFFLEtBQUs7QUFDUCxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxQyxFQUFFLENBQUM7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxNQUFNLGVBQWUsR0FBRztBQUN4QixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxDQUFDLEVBQUUsUUFBUTtBQUNaLENBQUMsQ0FBQyxFQUFFLFFBQVE7QUFDWixDQUFDLENBQUMsRUFBRSxRQUFRO0FBQ1osQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUNiLENBQUMsR0FBRyxFQUFFLE9BQU87QUFDYixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxHQUFHLEVBQUUsYUFBYTtBQUNuQixDQUFDLEdBQUcsRUFBRSxjQUFjO0FBQ3BCLENBQUMsQ0FBQyxFQUFFLE1BQU07QUFDVixDQUFDLENBQUMsRUFBRSxNQUFNO0FBQ1YsQ0FBQyxDQUFDLEVBQUUsTUFBTTtBQUNWLENBQUMsQ0FBQyxFQUFFLE1B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
