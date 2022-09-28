# Cumulocity Device Chart Widget Plugin [<img width="35" src="https://user-images.githubusercontent.com/67993842/97668428-f360cc80-1aa7-11eb-8801-da578bda4334.png"/>](https://github.com/SoftwareAG/cumulocity-device-chart-widget-plugin/releases/download/1.0.0-BETA/cumulocity-device-chart-widget-plugin-1.0.0-beta.zip)

This Device Chart Widget is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit. It displays the chart based on the device-specific inventory data.
By Default the chart displays the count based on the input in the group by field of configuration. But if the input is provided in the value field of the widget configuration it gives the value sum of the provided field from device managed object.

The widget also comes with an inbuilt color picker, which helps one to customize chart/border colors. The charts available include

Vertical Bar Chart

Horizontal Bar Chart

Donut Chart

Pie Chart

Radar Chart

Polar Chart

Scatter Chart (Data set not ideal for this chart)

Bubble Chart (Data set not ideal for this chart)

### Please note that this plugin is in currently under BETA mode.

### Please choose Device Chart Widget release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | DEVICE CHART WIDGET PLUGIN  |
|--------------------|------------|-----------------------------|
| 1.4.x(coming soon) | >= 1015.x.x| 1.x.x                       |


## Prerequisites:
   Cumulocity c8ycli >=1014.x.x
   
## Installation

  
### Runtime Deployment?

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-device-chart-widget-plugin/releases/download/1.0.0-BETA/cumulocity-device-chart-widget-plugin-1.0.0-beta.zip) and install via Administrations(Beta mode) --> Ecosystems --> Applications --> Packages 

### Local Development?

**Requirements:**
* Git
* NodeJS (release builds are currently built with `v14.18.0`)
* NPM (Included with NodeJS)

**Instructions**
1. Clone the repository: 
```
git clone https://github.com/SoftwareAG/cumulocity-device-chart-widget-plugin.git
```
2. Change directory: 
```
cd cumulocity-device-chart-widget-plugin
```
3. Install the dependencies: 
```
npm install
```
4. (Optional) Local development server: 
```
npm start -- --shell cockpit
```
5. Build the app: 
```
npm run build
```
6. Deploy the app: 
```
npm run deploy
```


------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECH Community Forums](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
