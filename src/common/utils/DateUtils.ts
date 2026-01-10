// ============================================================================
// DateUtils.ts
//
// Utility functions for date manipulation and formatting.
// ============================================================================

export function parseMonthYear(dateString: string): Date {
    const [monthStr, yearStr] = dateString.split('-');
    const month = parseInt(monthStr) - 1;
    const year = parseInt(yearStr);
    return new Date(year, month);
}

export function extractYear(dateString: string): number {
    const date = parseMonthYear(dateString);
    return date.getFullYear();
}

export function extractMonthYear(dateString: string): string {
    const date = parseMonthYear(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString(undefined, options);
}

export function compareDatesDesc(dateA: string, dateB: string): number {
    const dA = parseMonthYear(dateA);
    const dB = parseMonthYear(dateB);

    return dB.getTime() - dA.getTime();
}