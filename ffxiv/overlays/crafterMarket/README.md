# How to use

1. Look up guides to install and configure ACT [like this one](https://gist.github.com/TomRichter/e044a3dff5c50024cf514ffb20a201a9)
2. Get ngld's [OverlayPlugin](https://github.com/ngld/OverlayPlugin) (works with [older fork by hibiyasleep](https://github.com/hibiyasleep/OverlayPlugin/) too)
3. In Plugins > OverlayPlugin.dll create a new overlay
4. Make a new MiniParse overlay (or LogParse if using hibiyasleep version)
5. Enter `http://nubleh.github.io/ffxiv/overlays/crafterMarket/` as the source
6. In Plugins > FFXIV Settings, make sure "(Debug) Log all Network Packets" is enabled.
7. In the game, search for items on the marketboard.



![screenshot](https://cdn.discordapp.com/attachments/593732629828861953/655578075769339915/unknown.png)

# Where does it get item data from?

A mix of garlandtools and xivapi

# What are all the paissa doing?

They protect the seats while the overlay fetches item data and icon images.  
The overlay tries to be polite and only runs 1 xhr request at a time.

Any downloaded item data is saved to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for subsequent uses.

# What does the "reset cache" button do?

It clears the item data and price data from localStorage.  
This forces the overlay to redownload item data (from the api servers mentioned above).

# Where does it get price data from?

From network logs that come from ACT every time you search for something on the MB.
