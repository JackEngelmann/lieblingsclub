import * as R from 'ramda'
import moment, { Moment, weekdaysMin } from 'moment'
import React from 'react'
import './Calendar.scss'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

type Props = {
  monthSelection: Moment
  selectedDate: Moment | undefined
  setSelectedDate(selectedDate: Moment): void
  setMonthSelection(monthSelection: Moment): void
}

const cn = 'calendar'

export function Calendar(props: Props) {
  useTranslation()
  const {
    setSelectedDate,
    selectedDate,
    monthSelection,
    setMonthSelection,
  } = props
  const weeksInMonth = getWeeksInMonth(
    monthSelection.year(),
    monthSelection.month()
  )

  function renderHeader() {
    return (
      <div className={`${cn}__header`}>
        <div
          className={`${cn}__month-switcher`}
          onClick={() =>
            setMonthSelection(moment(monthSelection).subtract(1, 'month'))
          }
        >
          ←
        </div>
        <div>{monthSelection.format('MMMM YYYY')}</div>
        <div
          className={`${cn}__month-switcher`}
          onClick={() =>
            setMonthSelection(moment(monthSelection).add(1, 'month'))
          }
        >
          →
        </div>
      </div>
    )
  }

  function renderWeek(week: Moment[]) {
    return (
      <div className={`${cn}__week`} key={'week-from-' + week[0].toISOString()}>
        {week.map(renderDay)}
      </div>
    )
  }

  function renderDay(day: Moment) {
    const isInMonth = day.month() === monthSelection.month()
    const isWeekend = [0, 6].includes(day.day())
    const isSelected = selectedDate && selectedDate.isSame(day, 'day')
    return (
      <div
        key={day.toISOString()}
        className={classNames(`${cn}__date`, {
          [`${cn}__date--weekend`]: isWeekend,
          [`${cn}__date--selected`]: isSelected,
        })}
        onClick={() => setSelectedDate(day)}
      >
        {isInMonth && day.date()}
      </div>
    )
  }

  function renderWeekdayHeader() {
    const renderWeekDay = (weekday: number) => (
      <div className={`${cn}__weekday`} key={weekday}>
        {weekdaysMin(true)[weekday]}
      </div>
    )
    return (
      <div className={`${cn}__week-header`}>{R.times(renderWeekDay, 7)}</div>
    )
  }

  return (
    <div className={`${cn}__wrapper`}>
      {renderHeader()}
      {renderWeekdayHeader()}
      {weeksInMonth.map(renderWeek)}
    </div>
  )
}

function getWeeksInMonth(year: number, month: number) {
  const firstDayOfFirstWeek = moment()
    .year(year)
    .month(month)
    .startOf('month')
    .startOf('week')
  const daysInWeeks: Moment[][] = []
  let day: Moment = moment(firstDayOfFirstWeek)
  const lastDayOfLastWeek = moment()
    .year(year)
    .month(month)
    .endOf('month')
    .endOf('week')
  while (true) {
    const isFirstDayOfWeek = day.weekday() === 0
    if (day.isAfter(lastDayOfLastWeek)) break
    if (isFirstDayOfWeek) {
      daysInWeeks.push([day])
    } else {
      const lastWeek = daysInWeeks[daysInWeeks.length - 1]
      lastWeek.push(day)
    }
    day = moment(day).add(1, 'day')
  }
  return daysInWeeks
}
