/**
 * TinyMCE setting
 */
export const EDITOR_SETTINGS: any = {
    // Default locale

    language: 'en',

    // Editor layout

    branding: false,
    menubar: false,
    resize: true,

    // Content

    entity_encoding: 'raw',
    invalid_elements: 'html,body,iframe',

    // Assets

    skin_url: asset_path('skin'),
    content_css: asset_path('content.css'),
    language_url: asset_path('messages.js'),
    theme_url: asset_path('theme.min.js'),

    // Plugins

    external_plugins: {
        image: plugin_path('image'),
        link: plugin_path('link'),
        lists: plugin_path('lists')
    },

    // Toolbar

    toolbar: toolbar([
        toolset(['bold', 'italic', 'styleselect']),
        toolset(['bullist', 'numlist', 'indent', 'outdent']),
        toolset(['link', 'image'])
    ])
};


/**
 * Returns the path to an asset.
 */
function asset_path(path: string) {
    return `assets/tinymce/${path}`;
}


/**
 * Returns the path to an plugin.
 */
function plugin_path(name: string) {
    return `assets/tinymce/plugins/${name}/plugin.min.js`;
}


/**
 * Returns a string representing a toolset.
 */
function toolset(items: string[]) {
    return items.join(' ');
}


/**
 * Returns a string representing a toolbar.
 */
function toolbar(items: string[]) {
    return items.join(' | ');
}
