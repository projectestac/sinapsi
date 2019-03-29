import { Component, Input, ViewChild } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Block, BlockType } from 'app/models';
import { EmbedProvider, EMBED_PROVIDERS } from './embed.providers';
import { _, format } from 'i18n';


@Component({
    selector: 'app-block',
    templateUrl: 'block.component.html',
    styleUrls: [ 'block.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent implements AfterViewInit {

    /** Block model */
    @Input() block: Block;

    /** Whether the block is interactive */
    @Input() locked = false;

    /** Block wrapper element */
    @ViewChild('blockElement') blockElement;


    /**
     * Component constructor
     */
     constructor(private sanitizer: DomSanitizer) {}


    /**
     * Fired after the content was initialized.
     */
    ngAfterViewInit() {
        if (this.blockType() === BlockType.TWITTER) {
            this.initTimeline(this.blockElement);
        }
    }


    /**
     * Returns this block's type.
     *
     * @returns     Block type
     */
    public blockType(): BlockType {
        return (this.block['options'] && this.block.options['type']) ?
            this.block.options['type'] : BlockType.BASIC;
    }


    /**
     * Returns this block's HREF option as an absolute URL.
     *
     * @param value         Href string
     * @returns             Block URL
     */
    public toAbsoluteURL(value: string): string {
        const href = value ? value.trim() : null;
        let url = null;

        if (href === null || href.length === 0) {
            return null;
        }

        try {
            const base = document.baseURI;
            const hasProtocol = /^https?:\/\//.test(href);
            url = hasProtocol ? new URL(href) : new URL(`${base}/${href}`);
        } catch (e) {}

        return url ? url.toString().replace(/^https?:\/\//, '//') : null;
    }


    /**
     * Obtains an iframe embed URL for the given block.
     *
     * @param block         Block instance
     * @returns             Embed URL
     */
    toEmbedUrl(block: Block): SafeHtml {
        const options = block['options'] || {};
        const provider_id = options['provider'];
        const provider = this.getEmbedProvider(provider_id);
        const params = {};

        Object.entries(options).forEach(([k, v]) => {
            const key = encodeURIComponent(String(k));
            const value = encodeURIComponent(String(v));
            params[key] = value;
        });

        const href = format(provider.href, params);

        return this.sanitizer.bypassSecurityTrustResourceUrl(href);
    }


    /**
     * Obtain the embed provider with the given identifier.
     *
     * @param id        Provider identifier
     * @return          Embed provider
     */
    private getEmbedProvider(id: string): EmbedProvider {
        return EMBED_PROVIDERS.find(e => (id == e.id));
    }


    /**
     * Initialize the Twitter timeline widget for a block.
     *
     * @param block     Block element
     */
    private initTimeline(block: ElementRef) {
        const element = block.nativeElement;
        twttr.ready(() => twttr.widgets.load(element));
    }

}
