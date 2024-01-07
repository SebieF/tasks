/**
 * Nextcloud - Tasks
 *
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * global helper function to load an ics asset by name
 *
 * @param {string} assetName The asset to load
 * @return {string}
 */
const loadICS = (assetName) => {
	const vcalendars = {
		'vcalendars/vcalendar-default': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-default-location': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
LOCATION:Nextcloud Headquarter
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-reltype-child': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
RELATED-TO;RELTYPE=CHILD:255ce6ca-fbae-4263-89c5-5743f8456b22
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-reltype-sibling': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
RELATED-TO;RELTYPE=SIBLING:255ce6ca-fbae-4263-89c5-5743f8456b22
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-reltype-parent': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
RELATED-TO;RELTYPE=PARENT:255ce6ca-fbae-4263-89c5-5743f8456b22
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-reltype-default': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Test 1
RELATED-TO:255ce6ca-fbae-4263-89c5-5743f8456b22
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-sortOrder1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18ga
SUMMARY:Test 1
X-APPLE-SORT-ORDER:1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-sortOrder2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18gb
SUMMARY:Test 2
X-APPLE-SORT-ORDER:2
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-sortOrder6': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18gc
SUMMARY:Test 3
X-APPLE-SORT-ORDER:6
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-sortOrderByCreated1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183910
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18gd
SUMMARY:Test 4
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-sortOrderByCreated2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18ge
SUMMARY:Test 5
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-categories-multiple': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz28g
CATEGORIES:cat1,cat2
CATEGORIES:cat3
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-categories-single': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz31g
CATEGORIES:cat1,cat2
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-categories-none': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz29f
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-categories-empty': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz29f
SUMMARY:Test 1
CATEGORIES:
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz18g
SUMMARY:Calendar 1 - Task 1
PRIORITY:1
DUE:20190101T123400
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz19g
SUMMARY:Calendar 1 - Task 2
PRIORITY:9
DTSTART:20190918T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo3': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz20g
SUMMARY:Calendar 1 - Task 3
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo3_1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen4kz20g
UID:pwen4kz23g
SUMMARY:Calendar 1 - Task 3 - Subtask 1
DUE:20190101T123400
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo3_1_1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen4kz23g
UID:pwen4kz24g
SUMMARY:Calendar 1 - Task 3 - Subtask 1 - Subsubtask 1
PRIORITY:1
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo3_2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen4kz20g
UID:pwen4kz25g
SUMMARY:Calendar 1 - Task 3 - Subtask 2
DTSTART:20190918T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo4': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz30g
SUMMARY:Calendar 1 - Task 4
DTSTART:20190918T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo4_1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen4kz30g
UID:pwen4kz31g
SUMMARY:Calendar 1 - Task 4 - Subtask 1
PRIORITY:1
PERCENT-COMPLETE:100
STATUS:COMPLETED
COMPLETED:20190918T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo5': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz40g
SUMMARY:Calendar 1 - Task 5
PRIORITY:9
PERCENT-COMPLETE:100
STATUS:COMPLETED
COMPLETED:20190918T095816
DTSTART:20190918T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo6': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz41g
SUMMARY:Calendar 1 - Task 6
PRIORITY:9
DTSTART:20190102T095816
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar1/vcalendar-vtodo7': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz48g
SUMMARY:Calendar 1 - Task 7
PRIORITY:1
STATUS:CANCELLED
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz21g
SUMMARY:Calendar 2 - Task 1
DUE:20190103T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
UID:pwen4kz22g
SUMMARY:Calendar 2 - Task 2
DUE:20190107T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo3': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20171119T183919
DTSTAMP:20180918T095816
LAST-MODIFIED:20190918T095816
UID:pwen9kz22g
SUMMARY:Calendar 2 - Task 3
DUE:20180107T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo4': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20171119T183919
DTSTAMP:20180918T095816
LAST-MODIFIED:20190918T095816
UID:pwen8kz22g
SUMMARY:Calendar 2 - Task 4
DUE:20190101T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo4_1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20171119T183919
DTSTAMP:20180918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen8kz22g
UID:pwen7kz22g
SUMMARY:Calendar 2 - Task 4 - Subtask 1
DUE:20190103T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo4_2': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20171119T183919
DTSTAMP:20180918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen8kz22g
UID:pwen2kz37g
SUMMARY:Calendar 2 - Task 4 - Subtask 2
DUE:20190203T120000
END:VTODO
END:VCALENDAR`,
		'vcalendars/calendar2/vcalendar-vtodo4_2_1': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20171119T183919
DTSTAMP:20180918T095816
LAST-MODIFIED:20190918T095816
RELATED-TO:pwen2kz37g
UID:pwen2kz38g
SUMMARY:Calendar 2 - Task 4 - Subtask 2 - Subsubtask 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-due-2019': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20170101T180000
DTSTAMP:20180101T180000
LAST-MODIFIED:20180101T180000
UID:task01
SUMMARY:Test 1
DUE:20191119T183901
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-due-2018': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20170101T180000
DTSTAMP:20180101T180000
LAST-MODIFIED:20180101T180000
UID:task02
SUMMARY:Test 1
DUE:20181119T183901
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-due-undefined': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20170101T180000
DTSTAMP:20180101T180000
LAST-MODIFIED:20180101T180000
UID:task03
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-due-2015': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20170101T180000
DTSTAMP:20180101T180000
LAST-MODIFIED:20180101T180000
UID:task04
SUMMARY:Test 1
DUE:20151119T183901
END:VTODO
END:VCALENDAR`,
		'vcalendars/vcalendar-status-completed': `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nextcloud Tasks 0.11.3
BEGIN:VTODO
CREATED:20181119T183919
DTSTAMP:20190918T095816
LAST-MODIFIED:20190918T095816
STATUS:COMPLETED
UID:pwen4kz18g
SUMMARY:Test 1
END:VTODO
END:VCALENDAR`,
	}
	return vcalendars[assetName]
}

export {
	loadICS,
}
