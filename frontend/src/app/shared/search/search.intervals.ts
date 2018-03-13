import * as moment from 'moment';
import { _ } from 'i18n';


export interface Interval {
    id: string;
    name: string;
    after: Date;
    before: Date;
}


/**
 * Predefined published at intervals.
 */
export const PUBLISH_INTERVALS: Interval[] = [{
    id:     'any',
    name:   _('Any time'),
    after:  null,
    before: null
  }, {
    id:     'today',
    name:   _('Published today'),
    after:  dayBefore('day'),
    before: dayAfter('day')
  }, {
    id:     'week',
    name:   _('Published this week'),
    after:  dayBefore('week'),
    before: dayAfter('week')
  }, {
    id:     'month',
    name:   _('Published this month'),
    after:  dayBefore('month'),
    before: dayAfter('month')
  }, {
    id:     'year',
    name:   _('Published this year'),
    after:  dayBefore('year'),
    before: dayAfter('year')
  }
];


/**
 * Returns a day before the given unit of time.
 *
 * @returns     Date object
 */
function dayBefore(unit: any): Date {
    return moment().startOf(unit).subtract(1, 'days').toDate();
}


/**
 * Returns a day after the given unit of time.
 *
 * @returns     Date object
 */
function dayAfter(unit: any): Date {
    return moment().endOf(unit).add(1, 'days').toDate();
}
