import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { generateMonthDates, tanggalIndonesia } from "@/utils/allUtility";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const MoodTrackerPages = () => {
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handlePrevMonth = () => {
        const prevMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
        setSelectedDate(prevMonth)
        setDates(generateMonthDates(prevMonth.getFullYear(), prevMonth.getMonth()))
    }
    
    const handleNextMonth = () => {
        const nextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
        setSelectedDate(nextMonth)
        setDates(generateMonthDates(nextMonth.getFullYear(), nextMonth.getMonth()))
    }

    useEffect(() => {
        const monthDates = generateMonthDates(selectedDate.getFullYear(), selectedDate.getMonth())
        setDates(monthDates)
    }, [])
    return(
        <Fragment>
            <section className="text-center ">
                <h1 className="text-xl font-sans font-semibold text-slate-700">How You Feel Today ?</h1>
                <small>Share your feel today with emoticon</small>
            </section>
            <section className="bg-white p-4 rounded-md">
                <div className="flex items-center gap-2 justify-center">
                    <Button variant="ghost" onClick={handlePrevMonth}><ChevronLeft size={15} /></Button>
                    <span>{tanggalIndonesia(selectedDate)}</span>
                    <Button variant="ghost" onClick={handleNextMonth}><ChevronRight size={15} /></Button>
                </div>
                <div className="grid grid-cols-7 mt-4 text-center">
                    {["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"].map((hari) => (
                        <div key={hari} className="border p-4">
                        <span className="hidden sm:inline">{hari}</span>
                        <span className="sm:hidden">{hari.charAt(0)}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {dates.map((dat, index) => {
                        const tanggalSekarang = format(dat.date, "yyyy-MM-dd")
                        const hariIni = format(new Date(), "yyyy-MM-dd") === tanggalSekarang;

                        return (
                            <Dialog
                                key={index}
                            >
                                <DialogTrigger>
                                <div
                                    className={cn(
                                    "border p-4 py-6 lg:py-10 relative hover:bg-gray-50",
                                    !dat.currentMonth && "text-gray-400"
                                    )}
                                >   
                                    {hariIni && (
                                        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
                                    )}
                                    <span className="absolute top-2 right-2">{dat.day}</span>
                                </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                    <DialogTitle>Gimana Mood Kamu hari ini</DialogTitle>
                                    <DialogDescription>
                                        Yukkk bagikan ekspresif kamu hari ini
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        )
                    })}
                </div>
            </section>
        </Fragment>
    )
}

MoodTrackerPages.layout = 'Homelayout'
export default MoodTrackerPages;