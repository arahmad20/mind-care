export function tanggalIndonesia(tanggal){
    const tanggalObj = new Date(tanggal);
    const opsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const tanggalIndonesia = tanggalObj.toLocaleDateString('id-ID', opsi);
    return tanggalIndonesia;
}

export function generateMonthDates(year, month) {
    const dates = []
  
    const firstDayOfMonth = new Date(year, month, 1)
    const lastDayOfMonth = new Date(year, month + 1, 0)
  
    const firstDayWeekday = firstDayOfMonth.getDay() // Minggu = 0
    const lastDayDate = lastDayOfMonth.getDate()
  
    const daysBefore = (firstDayWeekday + 6) % 7 // Ubah: Senin = 0, Minggu = 6
  
    // Tambahkan hari dari bulan sebelumnya (jika perlu)
    for (let i = daysBefore; i > 0; i--) {
        const date = new Date(year, month, 1 - i)
        dates.push({
            day: date.getDate(),
            currentMonth: false,
            date
        })
    }
  
    // Hari dalam bulan saat ini
    for (let i = 1; i <= lastDayDate; i++) {
        const date = new Date(year, month, i)
        dates.push({
            day: i,
            currentMonth: true,
            date
        })
    }
  
    // Tambahkan hari dari bulan selanjutnya (untuk melengkapi minggu terakhir)
    const totalCells = Math.ceil(dates.length / 7) * 7
    const nextDays = totalCells - dates.length
  
    for (let i = 1; i <= nextDays; i++) {
        const date = new Date(year, month + 1, i)
        dates.push({
            day: i,
            currentMonth: false,
            date
        })
    }
  
    return dates
}