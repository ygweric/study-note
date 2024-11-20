# h5 Evnet详解





# Window Event Attributes

| Attribute | Value | Description |
| --- | --- | --- |
| **onhashchange** | _script_ | Script to be run when there has been changes to the anchor part of the a URL |
| **onload** | _script_ | Fires after the page is finished loading |
| **onpopstate** | _script_ | Script to be run when the window's history changes |
| onafterprint | _script_ | Script to be run after the document is printed |
| onbeforeprint | _script_ | Script to be run before the document is printed |
| onbeforeunload | _script_ | Script to be run when the document is about to be unloaded |
| onerror | _script_ | Script to be run when an error occurs |
| onmessage | _script_ | Script to be run when the message is triggered |
| onoffline | _script_ | Script to be run when the browser starts to work offline |
| ononline | _script_ | Script to be run when the browser starts to work online |
| onpagehide | _script_ | Script to be run when a user navigates away from a page |
| onpageshow | _script_ | Script to be run when a user navigates to a page |
| onresize | _script_ | Fires when the browser window is resized |
| onstorage | _script_ | Script to be run when a Web Storage area is updated |
| onunload | _script_ | Fires once a page has unloaded (or the browser window has been closed) |





# Keyboard Events

| Attribute | Value | Description |
| --- | --- | --- |
| onkeydown | _script_ | Fires when a user is pressing a key |
| onkeypress | _script_ | Fires when a user presses a key |
| onkeyup | _script_ | Fires when a user releases a key |



# Mouse Events

| Attribute | Value | Description |
| --- | --- | --- |
| onclick | _script_ | Fires on a mouse click on the element |
| ondblclick | _script_ | Fires on a mouse double-click on the element |
| onmousedown | _script_ | Fires when a mouse button is pressed down on an element |
| onmousemove | _script_ | Fires when the mouse pointer is moving while it is over an element |
| onmouseout | _script_ | Fires when the mouse pointer moves out of an element |
| onmouseover | _script_ | Fires when the mouse pointer moves over an element |
| onmouseup | _script_ | Fires when a mouse button is released over an element |
| onmousewheel | _script_ | Deprecated. Use the onwheel attribute instead |
| onwheel | _script_ | Fires when the mouse wheel rolls up or down over an element |


# Drag Events

| Attribute | Value | Description |
| --- | --- | --- |
| ondrag | _script_ | Script to be run when an element is dragged |
| ondragend | _script_ | Script to be run at the end of a drag operation |
| ondragenter | _script_ | Script to be run when an element has been dragged to a valid drop target |
| ondragleave | _script_ | Script to be run when an element leaves a valid drop target |
| ondragover | _script_ | Script to be run when an element is being dragged over a valid drop target |
| ondragstart | _script_ | Script to be run at the start of a drag operation |
| ondrop | _script_ | Script to be run when dragged element is being dropped |
| onscroll | _script_ | Script to be run when an element's scrollbar is being scrolled |

# Clipboard Events

| Attribute | Value | Description |
| --- | --- | --- |
| oncopy | _script_ | Fires when the user copies the content of an element |
| oncut | _script_ | Fires when the user cuts the content of an element |
| onpaste | _script_ | Fires when the user pastes some content in an element |


# Media Events

| Attribute | Value | Description |
| --- | --- | --- |
| onabort | _script_ | Script to be run on abort |
| oncanplay | _script_ | Script to be run when a file is ready to start playing (when it has buffered enough to begin) |
| oncanplaythrough | _script_ | Script to be run when a file can be played all the way to the end without pausing for buffering |
| oncuechange | _script_ | Script to be run when the cue changes in a <track> element |
| ondurationchange | _script_ | Script to be run when the length of the media changes |
| onemptied | _script_ | Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects) |
| onended | _script_ | Script to be run when the media has reach the end (a useful event for messages like "thanks for listening") |
| onerror | _script_ | Script to be run when an error occurs when the file is being loaded |
| onloadeddata | _script_ | Script to be run when media data is loaded |
| onloadedmetadata | _script_ | Script to be run when meta data (like dimensions and duration) are loaded |
| onloadstart | _script_ | Script to be run just as the file begins to load before anything is actually loaded |
| onpause | _script_ | Script to be run when the media is paused either by the user or programmatically |
| onplay | _script_ | Script to be run when the media is ready to start playing |
| onplaying | _script_ | Script to be run when the media actually has started playing |
| onprogress | _script_ | Script to be run when the browser is in the process of getting the media data |
| onratechange | _script_ | Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode) |
| onseeked | _script_ | Script to be run when the seeking attribute is set to false indicating that seeking has ended |
| onseeking | _script_ | Script to be run when the seeking attribute is set to true indicating that seeking is active |
| onstalled | _script_ | Script to be run when the browser is unable to fetch the media data for whatever reason |
| onsuspend | _script_ | Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason |
| ontimeupdate | _script_ | Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media) |
| onvolumechange | _script_ | Script to be run each time the volume is changed which (includes setting the volume to "mute") |
| onwaiting | _script_ | Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data) |

