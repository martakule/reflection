const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
console.log("systemSettingDark ", systemSettingDark.matches);

const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
console.log("systemSettingLight ", systemSettingLight.matches);
