import { Fragment, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

export default function DetailPagesAfirmasi({}) {

    const affirmations = [
        "Saya cukup, saya berharga, dan saya dicintai.",
        "Hari ini saya memilih untuk berpikir positif.",
        "Saya percaya diri dan mampu mengatasi tantangan.",
        "Saya pantas untuk bahagia dan damai.",
        "Saya berkembang setiap hari menjadi versi terbaik dari diri saya.",
        "Saya bersyukur atas semua hal baik dalam hidup saya.",
        "Saya melepaskan stres dan kekhawatiran dengan tenang.",
        "Saya pantas menerima cinta dan kesuksesan.",
        "Saya bangga dengan siapa saya hari ini.",
        "Saya mengizinkan diri saya untuk beristirahat dan menyembuhkan."
    ];

    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        let animationFrameId;

        const scroll = () => {
            if (!isPaused && containerRef.current) {
                setOffset((prev) => prev + 0.5); // kecepatan scroll
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const handleReset = () => {
        setOffset(0);
        setIsPaused(false);
    };

    return(
        <Fragment>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
                <div className="flex-grow overflow-hidden relative">
                    <div
                        ref={containerRef}
                        className="absolute w-full px-6 text-center space-y-8"
                        style={{ transform: `translateY(-${offset}px)` }}
                    >
                    {affirmations.map((text, index) => (
                        <p key={index} className="text-xl md:text-2xl font-medium text-slate-700">
                        {text}
                        </p>
                    ))}
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white shadow-md p-4 flex justify-center gap-4">
                    {isPaused ? (
                        <Button variant="default" onClick={() => setIsPaused(false)}>
                            Lanjutkan
                        </Button>
                        ) : (
                        <Button variant="outline" onClick={() => setIsPaused(true)}>
                            Jeda
                        </Button>
                    )}
                    <Button variant="secondary" onClick={handleReset}>
                        Putar Ulang
                    </Button>
                </div>
            </div>
        </Fragment>
    )
}