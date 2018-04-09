import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'stripTags', pure: true })
export class StripTagsPipe implements PipeTransform {

    /**
     * Strips HTML tags from a string.
     *
     * @param value     String to transform
     * @returns         String with tags stripped.
     */
    transform(value: any): string {
        return value ? value.replace(/(<[^>]*>)/ig, '') : null;
    }

}
