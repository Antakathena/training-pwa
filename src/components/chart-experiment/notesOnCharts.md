In PWA, had to @import the ag-grid.css and alpine theme from node_modules in the app.css. It wouldn't work when the import was in the component css file.

To make the tooltip title visible you need to specify the series' yName, or labelName in the case of 'pie' series. These configs supply the keys used to fetch the display names, because the keys themselves may not be presentable or descriptive.