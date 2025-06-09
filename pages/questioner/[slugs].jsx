import Seo from "@/components/layouts/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { optionPh19, QuestinoPhq9 } from "@/lib/data-pertanyaan";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react"

const DetailQuestionerPages = () => {
    const router = useRouter();
    const slugs = router.query.slugs;
    const [tabs, setTabs] = useState(`first`)
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleNext = (value) => {
        const newAnswers = [...answers];
        newAnswers[current] = value;
        setAnswers(newAnswers);
      
        if (current + 1 < QuestinoPhq9.length) {
          setCurrent(current + 1);
        } else {
          // tetap naikkan current untuk memicu tampilan hasil
          setCurrent(current + 1);
        }
    };
      

    const score = answers.reduce((a, b) => a + b, 0);

    let judul;
    switch (slugs) {
        case 'stress':
            judul = 'Stress Relief'
            break;
            
        default:
            judul = '-'
        break;
    }

    if (current == QuestinoPhq9.length) {
        return (
            <Fragment>
                <Seo title={`Detail `+slugs} />
                <div className="relative min-h-screen">
                    <section className="flex items-center gap-2 p-2">
                        <div onClick={() => router.back()} className="rounded-full w-10 h-10 bg-white flex items-center justify-center">
                            <ChevronLeft />
                        </div>
                        <div>
                            <h2 className="font-semibold text-lg text-slate-700">{judul}</h2>
                        </div>
                    </section>
                    <Card className="max-w-xl mx-auto mt-10 p-6 text-center">
                        <h2 className="text-xl font-semibold mb-4">Hasil Tes</h2>
                        <p className="text-lg">Skor Total Anda: {score}</p>
                        <p className="mt-2">
                            {score < 5
                                ? "Tingkat stres/depresi Anda tergolong rendah."
                                : score < 10
                                ? "Anda mungkin mengalami stres ringan."
                                : score < 15
                                    ? "Anda mengalami gejala sedang."
                                    : "Gejala berat, disarankan berkonsultasi dengan profesional."}
                        </p>
                        <Button className="mt-6" onClick={() => { setAnswers([]); setCurrent(0); }}>Ulangi Tes</Button>
                    </Card>
                </div>
            </Fragment>
        );
    }

    console.log(QuestinoPhq9.length, current)

    return(
        <Fragment>
            <Seo title={`Detail `+slugs} />
            <div className="relative min-h-screen">
                <section className="flex items-center gap-2 p-2">
                    <div onClick={() => router.back()} className="rounded-full w-10 h-10 bg-white flex items-center justify-center">
                        <ChevronLeft />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-slate-700">{judul}</h2>
                    </div>
                </section>
                {tabs === `first` ? 
                    <div className="p-4">
                        <div data-aos="fade-up" className="bg-white p-4 rounded-md shadow-lg shadow-blue-100">
                            Stress relief adalah ......
                        </div>
                        <div className="fixed bottom-0 right-0 left-0 z-50 w-full p-4">
                            <button onClick={() => setTabs(`secondary`)} className="bg-secondary p-2 px-4 w-full rounded-md text-center font-semibold text-slate-700">
                                Test Sekarang
                            </button>
                        </div>
                    </div>
                :
                    <div className="p-4">
                        <Card data-aos="fade-up" className="p-6">
                            <Progress value={((current + 1) / QuestinoPhq9.length) * 100} className="mb-4" />
                            <CardContent>
                                <p className="text-lg mb-4 font-medium">{QuestinoPhq9[current].question}</p>
                                <RadioGroup onValueChange={(v) => handleNext(parseInt(v))} className="space-y-2">
                                    {optionPh19.map((c, i) => (
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                key={i}
                                                value={String(c.value)}
                                                className=""
                                                id={`q${current}_c${i}`}
                                            >
                                            </RadioGroupItem>
                                            <Label htmlFor="option-two">{c.label}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </div>
                }
            </div>
        </Fragment>
    )
}

DetailQuestionerPages.layout = 'Blanklayout'
export default DetailQuestionerPages;