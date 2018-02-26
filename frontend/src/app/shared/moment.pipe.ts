import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'moment', pure: true })
export class MomentPipe implements PipeTransform {

    /**
     * Formats dates using the moment.js library.
     *
     * @example
     * { date | moment:'format':'llll' }
     *
     * @param value     String or date to format
     * @param method    Format method name
     * @param args      Arguments for the format method
     *
     * @returns         Date representation
     */
    transform(value: any, method?: string, args?: string | Array<string>): string {
        const date = moment(value);

        if (date.isValid() === false) {
            return '';
        }

        if (method === undefined) {
           return date.fromNow();
        }

        if (args === undefined) {
           return date[method]();
        }

        if (Array.isArray(args)) {
           return date[method].apply(date, args);
        }

        return date[method](args);
    }

}
