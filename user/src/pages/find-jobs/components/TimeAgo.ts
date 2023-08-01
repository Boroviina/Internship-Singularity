function TimeAgo(postDate: Date) {
    if(postDate === null || postDate === undefined) {
        return null;
    }
    const currentTime = new Date();
    const timeDifference = currentTime.getTime() - postDate.getTime();

    const oneMinute = 60 * 1000;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneWeek = oneDay * 7;
    const oneMonth = oneDay * 30;
    const oneYear = oneMonth * 12;

    // Calculate the time ago message based on the time difference
    if (timeDifference < oneMinute) {
        return 'Just now';
    } else if (timeDifference < oneHour) {
        const minutesAgo = Math.floor(timeDifference / oneMinute);
        return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDifference < oneDay) {
        const hoursAgo = Math.floor(timeDifference / oneHour);
        return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDifference < oneWeek) {
        const daysAgo = Math.floor(timeDifference / oneDay);
        return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    } else if (timeDifference < oneMonth) {
        const weeksAgo = Math.floor(timeDifference / oneWeek);
        return `${weeksAgo} ${weeksAgo === 1 ? 'week' : 'weeks'} ago`;
    } else if (timeDifference < oneYear) {
        const monthsAgo = Math.floor(timeDifference / oneMonth);
        return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`;
    } else {
        const yearsAgo = Math.floor(timeDifference / oneYear);
        return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`;
    }
}

export default TimeAgo;
