var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    bootstrapCustomizations: "./src/sass/variables.scss",
    mainSass: "./src/sass/react.scss",
    verbose: true,
    debug: false,
    styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?outputStyle=expanded"),
    scripts: {
        affix: true,
        alert: true,
        button: true,
        carousel: true,
        collapse: true,
        dropdown: true,
        modal: true,
        popover: true,
        scrollspy: true,
        slim_navigation: true,
        tab: true,
        tags: true,
        tooltip: true,
        transition: true,
    },
    styles: {
        "mixins": true,

        // Reset and dependencies
        "normalize": true,
        "print": true,
        "glyphicons": false,

        // Core CSS
        "scaffolding": true,
        "type": true,
        "code": true,
        "grid": true,
        "tables": true,
        "forms": true,
        "buttons": true,

        // Components
        "component-animations": true,
        "dropdowns": true,
        "button-groups": true,
        "input-groups": true,
        "navs": true,
        "navbar": true,
        "breadcrumbs": true,
        "pagination": true,
        "pager": true,
        "labels": true,
        "badges": true,
        "jumbotron": true,
        "thumbnails": true,
        "alerts": true,
        "progress-bars": true,
        "media": true,
        "list-group": true,
        "panels": true,
        "responsive-embed": true,
        "wells": true,
        "close": true,

        // Components w/ JavaScript
        "modals": true,
        "tooltip": true,
        "popovers": true,
        "carousel": true,

        // Utility classes
        "utilities": true,
        "responsive-utilities": true,
    },
}
