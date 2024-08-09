
const kZKSActions = {
  // Note: If they start with "command:", it means that "command=" will be added to the key element,
  // otherwise "oncommand=" will be added.

  // manage actions
  openNewTab: ["command:cmd_newNavigatorTabNoEvent","open-new-tab", "tab-action"],
  closeTab: ["command:cmd_close", "close-tab", "tab-action"],
  openNewWindow: ["command:cmd_newNavigator", "open-new-window", "tab-action"],
  openNewPrivateWindow: ["command:Tools:PrivateBrowsing", "open-new-private-window", "tab-action"],
  closeWindow: ["command:cmd_closeWindow", "close-window", "tab-action"],
  restoreLastTab: ["undoCloseTab()", "restore-last-session", "tab-action"],
  restoreLastWindow: ["command:History:UndoCloseWindow", "restore-last-window", "tab-action"],
  showNextTab: ["gBrowser.tabContainer.advanceSelectedTab(1, true)", "show-next-tab", "tab-action"],
  showPreviousTab: ["gBrowser.tabContainer.advanceSelectedTab(-1, true)", "show-previous-tab", "tab-action"],
  showAllTabsPanel: ["gTabsPanel.showAllTabsPanel()", "show-all-tabs-panel", "tab-action"],

  // Page actions
  sendWithMail: ["command:Browser:SendLink", "send-with-mail", "page-action"],
  savePage: ["command:Browser:SavePage", "save-page", "page-action"],
  printPage: ["command:cmd_print", "print-page", "page-action"],
  muteCurrentTab: ["command:cmd_toggleMute", "mute-current-tab", "page-action"],
  showSourceOfPage: ["command:View:PageSource", "show-source-of-page", "page-action"],
  showPageInfo: ["command:View:PageInfo", "show-page-info", "page-action"],
  
  // Visible actions
  zoomIn: ["command:cmd_fullZoomEnlarge", "zoom-in", "visible-action"],
  zoomOut: ["command:cmd_fullZoomReduce", "zoom-out", "visible-action"],
  resetZoom: ["command:cmd_fullZoomReset", "reset-zoom", "visible-action"],

  // History actions
  back: ["command:Browser:Back", "back", "history-action"],
  forward: ["command:Browser:Forward", "forward", "history-action"],
  stop: ["command:Browser:Stop", "stop", "history-action"],
  reload: ["command:Browser:Reload", "reload", "history-action"],
  forceReload: ["command:Browser:ReloadSkipCache", "force-reload", "history-action"],

  // search actions
  searchInThisPage: ["gLazyFindCommand('onFindCommand')", "search-in-this-page", "search-action"],
  showNextSearchResult: ["gLazyFindCommand('onFindAgainCommand', false)", "show-next-search-result", "search-action"],
  showPreviousSearchResult: ["gLazyFindCommand('onFindAgainCommand', true)", "show-previous-search-result", "search-action"],
  searchTheWeb: ["command:Tools:Search", "search-the-web", "search-action"],

  // Tools actions
  openMigrationWizard: ["command:cmd_file_importFromAnotherBrowser", "open-migration-wizard", "tools-action"],
  quitFromApplication: ["command:goQuitApplication", "quit-from-application", "tools-action"],
  enterIntoCustomizeMode: ["gCustomizeMode.enter()", "enter-into-customize-mode", "tools-action"],
  enterIntoOfflineMode: ["command:cmd_toggleOfflineStatus", "enter-into-offline-mode", "tools-action"],
  openScreenCapture: ["command:Browser:Screenshot", "open-screen-capture", "tools-action"],

  // Bookmark actions
  bookmarkThisPage: ["BrowserPageActions.doCommandForAction(PageActions.actionForID('bookmark'), event, this);", "bookmark-this-page", "bookmark-action"],
  openBookmarkAddTool: ["PlacesUIUtils.showBookmarkPagesDialog(PlacesCommandHook.uniqueCurrentPages)", "open-bookmark-add-tool", "bookmark-action"],
  openBookmarksManager: ["SidebarUI.toggle('viewBookmarksSidebar');", "open-bookmarks-manager", "bookmark-action"],
  toggleBookmarkToolbar: ["BookmarkingUI.toggleBookmarksToolbar('bookmark-tools')", "toggle-bookmark-toolbar", "bookmark-action"],

  // Open Page actions
  openGeneralPreferences: ["openPreferences()", "open-general-preferences", "open-page-action"],
  openPrivacyPreferences: ["openPreferences('panePrivacy')", "open-privacy-preferences", "open-page-action"],
  openWorkspacesPreferences: ["openPreferences('paneWorkspaces')", "open-workspaces-preferences", "open-page-action"],
  openContainersPreferences: ["openPreferences('paneContainers')", "open-containers-preferences", "open-page-action"],
  openSearchPreferences: ["openPreferences('paneSearch')", "open-search-preferences", "open-page-action"],
  openSyncPreferences: ["openPreferences('paneSync')", "open-sync-preferences", "open-page-action"],
  openTaskManager: ["command:View:AboutProcesses", "open-task-manager", "open-page-action"],
  openAddonsManager: ["command:Tools:Addons", "open-addons-manager", "open-page-action"],
  openHomePage: ["BrowserHome()", "open-home-page", "open-page-action"],

  // History actions
  forgetHistory: ["command:Tools:Sanitize", "forget-history", "history-action"],
  quickForgetHistory: ["PlacesUtils.history.clear(true)", "quick-forget-history", "history-action"],
  clearRecentHistory: ["command:cmd_closeWindow", "clear-recent-history", "history-action"],
  restoreLastSession: ["command:Browser:RestoreLastSession", "restore-last-session", "history-action"],
  searchHistory: ["command:History:SearchHistory", "search-history", "history-action"],
  manageHistory: ["PlacesCommandHook.showPlacesOrganizer('History')", "manage-history", "history-action"],

  // Downloads actions
  openDownloads: ["DownloadsPanel.showDownloadsHistory()", "open-downloads", "downloads-action"],

  // Sidebar actions
  showBookmarkSidebar: ["SidebarUI.show('viewBookmarksSidebar')", "show-bookmark-sidebar", "sidebar-action"],
  showHistorySidebar: ["SidebarUI.show('viewHistorySidebar')", "show-history-sidebar", "sidebar-action"],
  showSyncedTabsSidebar: ["SidebarUI.show('viewTabsSidebar')", "show-synced-tabs-sidebar", "sidebar-action"],
  reverseSidebarPosition: ["SidebarUI.reversePosition()", "reverse-sidebar", "sidebar-action"],
  hideSidebar: ["SidebarUI.hide()", "hide-sidebar", "sidebar-action"],
  toggleSidebar: ["SidebarUI.toggle()", "toggle-sidebar", "sidebar-action"],
  zenToggleWebPanels: ["gZenBrowserManagerSidebar.toggle()", "zen-toggle-web-panels", "sidebar-action"],
};

// Section: ZenKeyboardShortcuts

const kZKSStorageKey = "zen.keyboard.shortcuts";
const kZKSKeyCodeMap = {
  F1: "VK_F1",
  F2: "VK_F2",
  F3: "VK_F3",
  F4: "VK_F4",
  F5: "VK_F5",
  F6: "VK_F6",
  F7: "VK_F7",
  F8: "VK_F8",
  F9: "VK_F9",
  F10: "VK_F10",
  F11: "VK_F11",
  F12: "VK_F12",
};

var gZenKeyboardShortcuts = {
  init() {
    this._initShortcuts();
  },

  get _savedShortcuts() {
    if (!this.__savedShortcuts) {
      try {
        this.__savedShortcuts = JSON.parse(Services.prefs.getStringPref(kZKSStorageKey));
      } catch (e) {
        console.error("Zen CKS: Error parsing saved shortcuts", e);
        this.__savedShortcuts = {};
      }
    }
    return this.__savedShortcuts;
  },

  setShortcut(id, shortcut) {
    if (!shortcut) {
      delete this._savedShortcuts[id];
    } else if (this.isValidShortcut(shortcut)) {
      this._savedShortcuts[id] = shortcut;
    }
    Services.prefs.setStringPref(kZKSStorageKey, JSON.stringify(this._savedShortcuts));
  },
    
  _initShortcuts() {
    if (window.location.href == "chrome://browser/content/browser.xhtml") {
      Services.prefs.addObserver(kZKSStorageKey, this._initSavedShortcuts.bind(this));
      Services.prefs.addObserver("zen.keyboard.shortcuts.disable-firefox", this._disableFirefoxShortcuts.bind(this));
      this._initSavedShortcuts();
      this._disableFirefoxShortcuts();
    }
  },

  _disableFirefoxShortcuts() {
    let disable = Services.prefs.getBoolPref("zen.keyboard.shortcuts.disable-firefox");
    let keySet = document.getElementById("mainKeyset");
    if (!keySet) {
      throw new Error("Zen CKS: No main keyset found");
    }
    if (disable) {
      console.log("Zen CKS: Disabling Firefox shortcuts");
      for (let child of keySet.children) {
        if (!child.id.startsWith("zen-key_")) {
          child.setAttribute("disabled", true);
        }
      }
    }
  },

  _getCommandAttribute(action) {
    if (action.startsWith("command:")) {
      return `command="${action.substring(8)}"`;
    }
    return `oncommand="${action}"`;
  },

  _createShortcutElement(_action) {
    let shortcut = this._savedShortcuts[_action];
    if (!shortcut) {
      return null;
    }

    const action = kZKSActions[_action][0];
    const keycode = shortcut.keycode?.toUpperCase();
    const key = shortcut.key?.toUpperCase();
    let modifiers = {
      control: shortcut.ctrl,
      alt: shortcut.alt,
      shift: shortcut.shift,
      meta: shortcut.meta
    };

    modifiers = Object.keys(modifiers).filter(mod => modifiers[mod]).join(",");

    if (keycode) {
      const key = kZKSKeyCodeMap[keycode] || keycode;
      return window.MozXULElement.parseXULToFragment(`
        <key 
          id="zen-key_${_action}"
          class="zen-keyboard-shortcut"
          keycode="${key}"
          ${this._getCommandAttribute(action)}
          modifiers="${modifiers}"/>
      `);
    }

    return window.MozXULElement.parseXULToFragment(`
      <key 
        id="zen-key_${_action}"
        class="zen-keyboard-shortcut"
        key="${key}" 
        ${this._getCommandAttribute(action)}
        modifiers="${modifiers}"/>
    `);
  },

  _initSavedShortcuts() {
    let keySet = document.getElementById("mainKeyset");
    if (!keySet) {
      throw new Error("Zen CKS: No main keyset found");
    }
    
    for (let action in kZKSActions) {
      let id = `zen-key_${action}`;
      let existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
      let shortcut = this._createShortcutElement(action);
      if (shortcut) {
        keySet.appendChild(shortcut);
      }
    }
  },

  getShortcut(action) {
    return this._savedShortcuts[action];
  },

  isValidShortcut(shortcut) {
    return shortcut && (shortcut.key || shortcut.keycode);
  },

  shortCutToString(shortcut) {
    let str = "";
    if (shortcut.ctrl) {
      str += "Ctrl+";
    }
    if (shortcut.alt) {
      str += "Alt+";
    }
    if (shortcut.shift) {
      str += "Shift+";
    }
    if (shortcut.meta) {
      str += "Meta+";
    }
    if (shortcut.keycode) {
      str += shortcut.keycode;
    } else if (shortcut.key) { // It can be undefined if edited from the settings
      str += shortcut.key;
    }
    return str;
  },
};

gZenKeyboardShortcuts.init();

// Section: gZenKeyboardShortcutsFunctions
