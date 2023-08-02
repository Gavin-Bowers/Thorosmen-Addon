var newBuild = {
    "/pa/units/th-addon/fefkins/fefkins.json": ["combat", 0, { row: 0, column: 6 }],
    "/pa/units/th-addon/land_wall_big/land_wall_big.json": ["utility", 0, { row: 1, column: 0 }],
    "/pa/units/th-addon/spy_sat/spy_sat.json": ["orbital", 0, { row: 1, column: 4 }]
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}