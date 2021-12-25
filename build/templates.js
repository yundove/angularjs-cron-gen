angular.module('angular-cron-gen').run(['$templateCache', function($templateCache) {$templateCache.put('angular-cron-gen/cron-gen-time-select.html','<div class="inline-block">\r\n    <select is="ui-select"\r\n            class="hour-types"\r\n            name="{{namePrefix}}HourType"\r\n            data-ng-if="!$ctrl.use24HourTime"\r\n            data-ng-disabled="$ctrl.isDisabled"\r\n            data-ng-change="$ctrl.onChange()"\r\n            data-ng-model="$ctrl.model.hourType"\r\n            data-ng-options="hourType as $ctrl.ampmDisplay(hourType) for hourType in $ctrl.selectOptions.hourTypes"\r\n            data-ng-required="$ctrl.isRequired"\r\n            data-ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select is="ui-select"\r\n            class="hours"\r\n            name="{{namePrefix}}Hours"\r\n            data-ng-disabled="$ctrl.isDisabled"\r\n            data-ng-change="$ctrl.onChange()"\r\n            data-ng-required="$ctrl.isRequired"\r\n            data-ng-model="$ctrl.model.hours"\r\n            data-ng-options="hour as $ctrl.cronGenService.padNumber(hour) for hour in $ctrl.selectOptions.hours"\r\n            data-ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select is="ui-select"\r\n            class="minutes"\r\n            name="{{namePrefix}}Minutes"\r\n            data-ng-disabled="$ctrl.isDisabled"\r\n            data-ng-change="$ctrl.onChange()"\r\n            data-ng-required="$ctrl.isRequired"\r\n            data-ng-model="$ctrl.model.minutes"\r\n            data-ng-options="minute as $ctrl.cronGenService.padNumber(minute) for minute in $ctrl.selectOptions.minutes"\r\n            data-ng-class="$ctrl.selectClass">\r\n    </select>\r\n    <select is="ui-select"\r\n            class="seconds"\r\n            name="{{namePrefix}}Seconds"\r\n            data-ng-show="!$ctrl.hideSeconds"\r\n            data-ng-disabled="$ctrl.isDisabled"\r\n            data-ng-change="$ctrl.onChange()"\r\n            data-ng-required="$ctrl.isRequired"\r\n            data-ng-model="$ctrl.model.seconds"\r\n            data-ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n            data-ng-class="$ctrl.selectClass">\r\n    </select>\r\n</div>');
$templateCache.put('angular-cron-gen/cron-gen.html','<div class="cron-gen-main" data-ng-cloak>\r\n\r\n  <div class="ui-tab-tabs">\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideMinutesTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="minutes" name="tab-button" class="ui-tab-tab" is-tab>\u5206\u949F</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideHourlyTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="hourly" name="tab-button" class="ui-tab-tab" is-tab>\u5C0F\u65F6</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideDailyTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="daily" name="tab-button" class="ui-tab-tab" is-tab>\u65E5</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideWeeklyTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="weekly" name="tab-button" class="ui-tab-tab" is-tab>\u5468</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideMonthlyTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="monthly" name="tab-button" class="ui-tab-tab" is-tab>\u6708</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideYearlyTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="yearly" name="tab-button" class="ui-tab-tab" is-tab>\u5E74</button>\r\n    <button data-ng-show="!$ctrl.parsedOptions.hideAdvancedTab" data-ng-click="$ctrl.setActiveTab($event)" data-target="advanced" name="tab-button" class="ui-tab-tab" is-tab open>\u81EA\u5B9A\u4E49</button>\r\n  </div>\r\n  \r\n  <div data-ng-show="!$ctrl.parsedOptions.hideMinutesTab" id="minutes" class="ui-tab-content">\r\n    <div>\r\n      \u6BCF\u9694\r\n      <select is="ui-select"\r\n              class="minutes"\r\n              name="minutesMinutes"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'minutes\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.minutes.minutes"\r\n              data-ng-required="$ctrl.activeTab === \'minutes\'"\r\n              data-ng-options="minute as minute for minute in $ctrl.selectOptions.minutes"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u5206\u949F\u6267\u884C\u4E00\u6B21\r\n\r\n      <span data-ng-show="!$ctrl.parsedOptions.hideSeconds">\uFF0C\u5728\u7B2C</span>\r\n      <select is="ui-select"\r\n              class="seconds"\r\n              name="minutesSeconds"\r\n              data-ng-show="!$ctrl.parsedOptions.hideSeconds"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'minutes\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.minutes.seconds"\r\n              data-ng-required="$ctrl.activeTab === \'minutes\'"\r\n              data-ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <span data-ng-show="!$ctrl.parsedOptions.hideSeconds">\u79D2\u6267\u884C</span>\r\n    </div>\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideHourlyTab" id="hourly" class="ui-tab-content">\r\n    <div>\r\n      \u6BCF\u9694\r\n      <select is="ui-select"\r\n              class="hours"\r\n              name="hourlyHours"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.hourly.hours"\r\n              data-ng-required="$ctrl.activeTab === \'hourly\'"\r\n              data-ng-options="hour as hour for hour in $ctrl.selectOptions.hours"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u5C0F\u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u5728\r\n      <select is="ui-select"\r\n              class="minutes"\r\n              name="hourlyMinutes"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.hourly.minutes"\r\n              data-ng-required="$ctrl.activeTab === \'hourly\'"\r\n              data-ng-options="minute as $ctrl.cronGenService.padNumber(minute) for minute in $ctrl.selectOptions.fullMinutes"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u5206\r\n      <span data-ng-show="$ctrl.parsedOptions.hideSeconds">\u6267\u884C</span>\r\n      <span data-ng-show="!$ctrl.parsedOptions.hideSeconds"></span>\r\n      <select is="ui-select"\r\n              class="seconds"\r\n              name="hourlySeconds"\r\n              data-ng-show="!$ctrl.parsedOptions.hideSeconds"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'hourly\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.hourly.seconds"\r\n              data-ng-required="$ctrl.activeTab === \'hourly\'"\r\n              data-ng-options="second as $ctrl.cronGenService.padNumber(second) for second in $ctrl.selectOptions.seconds"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <span data-ng-show="!$ctrl.parsedOptions.hideSeconds">\u79D2\u6267\u884C</span>\r\n    </div>\r\n\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideDailyTab" id="daily" class="ui-tab-content">\r\n    <div>\r\n      <input type="radio"\r\n             is="ui-radio"\r\n             value="everyDays"\r\n             name="daily-radio"\r\n             data-ng-disabled="$ctrl.ngDisabled"\r\n             data-ng-change="$ctrl.regenerateCron()"\r\n             data-ng-model="$ctrl.state.daily.subTab"\r\n             data-ng-class="$ctrl.state.formRadioClass"\r\n             checked="checked">\r\n      \u6BCF\u9694\r\n      <select is="ui-select"\r\n              class="days"\r\n              name="dailyEveryDaysDays"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyDays\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.daily.everyDays.days"\r\n              data-ng-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyDays\'"\r\n              data-ng-options="monthDay as monthDay for monthDay in $ctrl.selectOptions.monthDays"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u5929\u6267\u884C\u4E00\u6B21\uFF0C\u5728\r\n      <cron-gen-time-select\r\n        is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyDays\'"\r\n        on-change="$ctrl.regenerateCron()"\r\n        name-prefix="dailyEveryDays"\r\n        is-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyDays\'"\r\n        model="$ctrl.state.daily.everyDays"\r\n        select-class="$ctrl.parsedOptions.formSelectClass"\r\n        use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n        hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n      </cron-gen-time-select>\r\n      \u6267\u884C\r\n    </div>\r\n    <div>\r\n      <input type="radio"\r\n             is="ui-radio"\r\n             value="everyWeekDay"\r\n             data-ng-disabled="$ctrl.ngDisabled"\r\n             data-ng-change="$ctrl.regenerateCron()"\r\n             data-ng-model="$ctrl.state.daily.subTab"\r\n             data-ng-class="$ctrl.state.formRadioClass"\r\n             name="daily-radio">\r\n      \u5728\u5468\u4E00\u5230\u5468\u4E94\u5DE5\u4F5C\u65E5\r\n      <cron-gen-time-select\r\n        is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'daily\' || $ctrl.state.daily.subTab !== \'everyWeekDay\'"\r\n        on-change="$ctrl.regenerateCron()"\r\n        name-prefix="dailyEveryWeekDay"\r\n        is-required="$ctrl.activeTab === \'daily\' && $ctrl.state.daily.subTab === \'everyWeekDay\'"\r\n        model="$ctrl.state.daily.everyWeekDay"\r\n        select-class="$ctrl.parsedOptions.formSelectClass"\r\n        use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n        hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n      </cron-gen-time-select>\r\n      \u6267\u884C\r\n    </div>\r\n\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideWeeklyTab" id="weekly" class="ui-tab-content">\r\n    <div class="well well-small row">\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklyMON"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.MON"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u4E00\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklyTUE"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.TUE"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u4E8C\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklyWED"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.WED"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u4E09\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklyTHU"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.THU"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u56DB\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklyFRI"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.FRI"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u4E94\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklySAT"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.SAT"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u516D\r\n      </div>\r\n      <div class="col-sm-6">\r\n        <input type="checkbox"\r\n               is="ui-checkbox"\r\n               name="weeklySUN"\r\n               data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n               data-ng-change="$ctrl.regenerateCron()"\r\n               data-ng-model="$ctrl.state.weekly.SUN"\r\n               data-ng-class="$ctrl.parsedOptions.formCheckboxClass">\r\n        \u5468\u65E5\r\n      </div>\r\n    </div>\r\n\r\n    <cron-gen-time-select\r\n      is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'weekly\'"\r\n      on-change="$ctrl.regenerateCron()"\r\n      name-prefix="weekly"\r\n      is-required="$ctrl.activeTab === \'weekly\'"\r\n      model="$ctrl.state.weekly"\r\n      select-class="$ctrl.parsedOptions.formSelectClass"\r\n      use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n      hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n    </cron-gen-time-select>\r\n    \u6267\u884C\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideMonthlyTab" id="monthly" class="ui-tab-content">\r\n    <div>\r\n\r\n      \u5728\u6BCF\u6708\r\n      <select is="ui-select"\r\n              class="month-days"\r\n              name="monthlySpecificDayDay"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.monthly.specificDay.day"\r\n              data-ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n              data-ng-options="monthDaysWithLast as $ctrl.monthDayDisplay(monthDaysWithLast) for monthDaysWithLast in $ctrl.selectOptions.monthDaysWithLasts"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n\r\n      <cron-gen-time-select\r\n        is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n        on-change="$ctrl.regenerateCron()"\r\n        name-prefix="monthlySpecificDay"\r\n        is-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n        model="$ctrl.state.monthly.specificDay"\r\n        select-class="$ctrl.parsedOptions.formSelectClass"\r\n        use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n        hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n      </cron-gen-time-select>\r\n      \u6267\u884C\uFF0C\u6BCF\u9694\r\n      <select is="ui-select"\r\n              class="months-small"\r\n              name="monthlySpecificDayMonths"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'monthly\' || $ctrl.state.monthly.subTab !== \'specificDay\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.monthly.specificDay.months"\r\n              data-ng-required="$ctrl.activeTab === \'monthly\' && $ctrl.state.monthly.subTab === \'specificDay\'"\r\n              data-ng-options="month as month for month in $ctrl.selectOptions.months"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u4E2A\u6708\u6267\u884C\u4E00\u6B21\r\n    </div>\r\n\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideYearlyTab" id="yearly" class="ui-tab-content">\r\n    <div>\r\n      <input type="radio"\r\n             is="ui-radio"\r\n             value="specificMonthDay"\r\n             data-ng-disabled="$ctrl.ngDisabled"\r\n             data-ng-change="$ctrl.regenerateCron()"\r\n             data-ng-model="$ctrl.state.yearly.subTab"\r\n             data-ng-class="$ctrl.state.formRadioClass"\r\n             name="yearly-radio">\r\n      \u6BCF\u5E74\r\n      <select is="ui-select"\r\n              class="months"\r\n              name="yearlySpecificMonthDayMonth"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.yearly.specificMonthDay.month"\r\n              data-ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n              data-ng-options="month as $ctrl.monthDisplay(month) for month in $ctrl.selectOptions.months"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <select is="ui-select"\r\n              class="month-days"\r\n              name="yearlySpecificMonthDayDay"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.yearly.specificMonthDay.day"\r\n              data-ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n              data-ng-options="monthDaysWithLast as $ctrl.monthDayDisplay(monthDaysWithLast) for monthDaysWithLast in $ctrl.selectOptions.monthDaysWithLasts"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <cron-gen-time-select\r\n        is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthDay\'"\r\n        on-change="$ctrl.regenerateCron()"\r\n        is-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthDay\'"\r\n        name-prefix="yearlySpecificMonthDay"\r\n        model="$ctrl.state.yearly.specificMonthDay"\r\n        select-class="$ctrl.parsedOptions.formSelectClass"\r\n        use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n        hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n      </cron-gen-time-select>\r\n      \u6267\u884C\u4E00\u6B21\r\n    </div>\r\n    <div>\r\n      <input type="radio"\r\n             is="ui-radio"\r\n             value="specificMonthWeek"\r\n             data-ng-disabled="$ctrl.ngDisabled"\r\n             data-ng-change="$ctrl.regenerateCron()"\r\n             data-ng-model="$ctrl.state.yearly.subTab"\r\n             data-ng-class="$ctrl.state.formRadioClass"\r\n             name="yearly-radio">\r\n      \u6BCF\u5E74\r\n      <select is="ui-select"\r\n              class="months"\r\n              name="yearlySpecificMonthWeekMontMonth"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.yearly.specificMonthWeek.month"\r\n              data-ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n              data-ng-options="month as $ctrl.monthDisplay(month) for month in $ctrl.selectOptions.months"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      \u7684\r\n      <select is="ui-select"\r\n              class="day-order-in-month"\r\n              name="yearlySpecificMonthWeekMonthWeek"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.yearly.specificMonthWeek.monthWeek"\r\n              data-ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n              data-ng-options="monthWeek as $ctrl.monthWeekDisplay(monthWeek) for monthWeek in $ctrl.selectOptions.monthWeeks"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <select is="ui-select"\r\n              class="week-days"\r\n              name="yearlySpecificMonthWeekMonthDay"\r\n              data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n              data-ng-change="$ctrl.regenerateCron()"\r\n              data-ng-model="$ctrl.state.yearly.specificMonthWeek.day"\r\n              data-ng-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n              data-ng-options="day as $ctrl.dayDisplay(day) for day in $ctrl.selectOptions.days"\r\n              data-ng-class="$ctrl.parsedOptions.formSelectClass">\r\n      </select>\r\n      <cron-gen-time-select\r\n        is-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'yearly\' || $ctrl.state.yearly.subTab !== \'specificMonthWeek\'"\r\n        on-change="$ctrl.regenerateCron()"\r\n        name-prefix="yearlySpecificMonthWeek"\r\n        is-required="$ctrl.activeTab === \'yearly\' && $ctrl.state.yearly.subTab === \'specificMonthWeek\'"\r\n        model="$ctrl.state.yearly.specificMonthWeek"\r\n        select-class="$ctrl.parsedOptions.formSelectClass"\r\n        use-24-hour-time="$ctrl.parsedOptions.use24HourTime"\r\n        hide-seconds="$ctrl.parsedOptions.hideSeconds">\r\n      </cron-gen-time-select>\r\n      \u6267\u884C\u4E00\u6B21\r\n    </div>\r\n\r\n  </div>\r\n  <div data-ng-show="!$ctrl.parsedOptions.hideAdvancedTab" id="advanced" class="ui-tab-content active">\r\n   <div>\r\n     Cron \u8868\u8FBE\u5F0F\r\n     <input type="text"\r\n            is="ui-input"\r\n            class="advanced-cron-gen-input"\r\n            name="advancedExpression"\r\n            data-ng-disabled="$ctrl.ngDisabled || $ctrl.activeTab !== \'advanced\'"\r\n            data-ng-change="$ctrl.regenerateCron()"\r\n            data-ng-model="$ctrl.state.advanced.expression"\r\n            data-ng-required="$ctrl.activeTab === \'advanced\'"\r\n            data-ng-class="$ctrl.parsedOptions.formInputClass">\r\n   </div>\r\n  </div>\r\n</div>\r\n');}]);