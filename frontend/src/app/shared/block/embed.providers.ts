/** Embed provider */
export interface EmbedProvider {
    id: string;
    name: string;
    href: string;
}


/**
 * Trusted embed providers.
 */
export const EMBED_PROVIDERS: EmbedProvider[] = [{
        id: "instamaps",
        name: "Instamaps",
        href: "//www.instamaps.cat/visor.html?embed=1&" +
              "fons=ortoMap&text={text}&link={href}#15/{y}/{x}"
    }, {
        id: "youtube",
        name: "YouTube",
        href: "//www.youtube.com/embed/{video_id}"
    }
];
