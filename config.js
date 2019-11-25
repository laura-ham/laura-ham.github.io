var CONFIG = {
 "data": {
  "_lastModified": 1574669510729,
  "assetsPath": "/tmp/.mount_GapminmmFr90/resources/preview-data/",
  "ddfPath": "./data/ddf--gapminder--systema_globalis",
  "lastModified": 1574669510729,
  "path": "./data/ddf--gapminder--systema_globalis",
  "reader": "ddf"
 },
 "data_carbon_footprint2.csv": {
  "_lastModified": 1574669510729,
  "chartType": "BubbleChart",
  "format": "csv",
  "hasNameColumn": true,
  "lastModified": 1574669510729,
  "nameColumnPosition": 0,
  "path": "./data/carbon_footprint2.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": false,
  "ddfPath": "./data/carbon_footprint2.csv"
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
   "filter": {
    "country": {
     "un_state": true
    }
   },
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
    "data": "data_carbon_footprint2.csv",
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
    "data": "data_carbon_footprint2.csv",
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
    "data": "data_carbon_footprint2.csv",
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
    "use": "property",
    "which": "name"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [
    {
     "country": "col",
     "trailStartTime": "1961"
    },
    {
     "country": "fin",
     "trailStartTime": "1961"
    }
   ],
   "size": {
    "allow": {
     "scales": [
      "linear"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": 1400000000,
    "domainMin": 15,
    "extent": [
     0,
     0.85
    ],
    "fixBaseline": 0,
    "scaleType": "linear",
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
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "scaleType": "linear",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.3,
   "opacityRegular": 0.8,
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
   "showForecast": false,
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
    "xAxisGroups": {
     "income_per_person_gdppercapita_ppp_inflation_adjusted": [
      {
       "label": "incomegroups/level1",
       "label_short": "incomegroups/level1short",
       "max": 2650,
       "min": null
      },
      {
       "label": "incomegroups/level2",
       "label_short": "incomegroups/level2short",
       "max": 8000,
       "min": 2650
      },
      {
       "label": "incomegroups/level3",
       "label_short": "incomegroups/level3short",
       "max": 24200,
       "min": 8000
      },
      {
       "label": "incomegroups/level4",
       "label_short": "incomegroups/level4short",
       "max": null,
       "min": 24200
      }
     ]
    }
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
   "showForecastOverlay": true,
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
   "doubtDomain": [
    1800,
    1950,
    2015
   ],
   "doubtRange": [
    1,
    0.3,
    0.2
   ]
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
  "treemenu": {
   "folderStrategyByDataset": {
    "data": "spread",
    "data_fasttrack": "spread",
    "data_wdi": "folder:other_datasets"
   }
  },
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};