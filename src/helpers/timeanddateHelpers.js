import moment from 'moment'

export function extractInfoFromDate(unixdate) {

    let friendlyMonth =moment.unix(unixdate/1000).format('MMMM')
    let month =moment.unix(unixdate/1000).month()
    let year =moment.unix(unixdate/1000).format('YYYY')
    let date =moment.unix(unixdate/1000).format('DD')
    let unfriendlyDate =moment.unix(unixdate/1000).format("DD MMM YYYY" )
    let friendlyTimeFromNow =moment.unix(unixdate/1000).fromNow()
    return  {
      friendlyMonth,
      year,
      date,
      friendlyTimeFromNow,
      unfriendlyDate,
      month,
    }
    }

export function formattedDate(isodate) {

    const format1= moment(isodate).fromNow()
    

    return {
        format1
    }

    }