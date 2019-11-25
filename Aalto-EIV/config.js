var CONFIG = {
 "data": {
  "_lastModified": 1574687696960,
  "hasNameColumn": true,
  "lastModified": 1574687696960,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/carbon_footprint2.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": false,
  "ddfPath": "./data/carbon_footprint2.csv"
 },
 "data_ddf--gapminder--systema_globalis": {
  "_lastModified": 1574687696960,
  "lastModified": 1574687696960,
  "path": "./data/ddf--gapminder--systema_globalis",
  "reader": "ddf",
  "ddfPath": "./data/ddf--gapminder--systema_globalis"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "country",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "world_4region",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "Total kcal/person/day",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "Total emission (g CO2 / person / day)",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "#8c30e8",
     "25": "#30a3e8",
     "50": "#30e85e",
     "75": "#e2c75a",
     "100": "#e83030",
     "_default": "#ffb600"
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "indicator",
    "which": "Meat (kilocalories per person per day)"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "indicator",
    "which": "name"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [
    {
     "country": "zwe",
     "labelOffset": [
      0.243,
      -0.139
     ],
     "trailStartTime": "1961"
    },
    {
     "country": "zmb",
     "labelOffset": [
      0.243,
      -0.046
     ],
     "trailStartTime": "1961"
    },
    {
     "country": "yem",
     "labelOffset": [
      0.216,
      0.018
     ],
     "trailStartTime": "1961"
    },
    {
     "country": "ven",
     "labelOffset": [
      0.204,
      0.079
     ],
     "trailStartTime": "1961"
    },
    {
     "country": "vnm",
     "labelOffset": [
      0.243,
      0.037
     ],
     "trailStartTime": "1961"
    },
    {
     "country": "fin",
     "labelOffset": [
      -0.211,
      -0.058
     ],
     "trailStartTime": "1961"
    }
   ],
   "size": {
    "allow": {
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data_ddf--gapminder--systema_globalis",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.85
    ],
    "fixBaseline": 0,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "population_total",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.33
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "constant",
    "which": "_default",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data_ddf--gapminder--systema_globalis",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data_ddf--gapminder--systema_globalis",
    "scaleType": "linear",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data_ddf--gapminder--systema_globalis",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2013",
   "endBeforeForecast": "2018",
   "endOrigin": null,
   "endSelected": "2013",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": true,
   "start": "1961",
   "startOrigin": null,
   "startSelected": "1961",
   "step": 1,
   "unit": "year",
   "value": "2013"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "decorations": {
    "enabled": true,
    "xAxisGroups": null
   },
   "labels": {
    "dragging": true,
    "removeLabelBox": false
   },
   "lockNonSelected": 0,
   "margin": {
    "left": 80.37,
    "top": 0
   },
   "showForecastOverlay": false,
   "superhighlightOnMinimapHover": true,
   "trails": true,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "sidebarCollapse": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};