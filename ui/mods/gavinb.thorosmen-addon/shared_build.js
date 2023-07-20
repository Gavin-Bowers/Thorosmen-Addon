var newBuild = {
    "/pa/units/th-addon/fefkins/fefkins.json": ["combat", 0, { row: 0, column: 6 }],
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}