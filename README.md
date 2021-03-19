# Terraforming Mars Overlay


## Installation

1. Download latest release from https://github.com/almenjonatan/terraforming-mars-overlay/releases (assets)

2. Add overlay.dll into \Terraforming Mars\Mods folder

3. Unpack overlay.zip at a location you see fit

4. Start Frontend.exe which should be located in the unzipped folder, when prompted add an exception to windows defender

5.  Navigate to http://localhost:5000/player/YourTerraformingMarsId (Asmodee Site), it should state that it's waiting for player

6. Start an online game.


## Build

If you do not trust the prebuilt version you can build it yourselves from source with

dotnet publish -r win-x64 -p:PublishSingleFile=true --self-contained true
