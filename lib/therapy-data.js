const therapyModules = [
    {
        id: 1,
        type: "Self-Therapy",
        slug: "latihan-pernapasan",
        title: "Latihan Pernapasan",
        description: "Latihan pernapasan sederhana untuk mengurangi kecemasan dan menenangkan pikiran.",
        content: `
            <p>Latihan pernapasan membantu tubuh dan pikiran untuk tenang. Kamu bisa melakukannya saat merasa stres atau cemas.</p>
            <ul>
            <li>Tarik napas dalam selama 4 detik</li>
            <li>Tahan selama 4 detik</li>
            <li>Buang napas perlahan selama 4 detik</li>
            <li>Ulangi selama 1-2 menit</li>
            </ul>
            <p>Coba fokus pada napasmu dan rasakan tubuhmu menjadi lebih rileks.</p>
        `,
        media: "/images/therapy/breathing.svg",
        action: "Mulai Latihan"
    },
    {
        id: 2,
        type: "Self-Therapy",
        slug: "jurnal-emosi",
        title: "Jurnal Emosi",
        description: "Catat dan pahami perasaanmu setiap hari untuk mengenali pola emosimu.",
        content: `
            <p>Menulis jurnal harian membantumu mengenali dan memahami pola emosi yang kamu alami setiap hari.</p>
            <p>Coba jawab pertanyaan ini:</p>
            <ul>
            <li>Apa yang kamu rasakan hari ini?</li>
            <li>Apa yang membuatmu merasa seperti itu?</li>
            <li>Bagaimana kamu meresponnya?</li>
            </ul>
            <p>Luangkan waktu 5-10 menit setiap hari untuk menuliskan perasaanmu.</p>
        `,
        media: "/images/therapy/journal.svg",
        action: "Tulis Jurnal"
    },
    {
        id: 3,
        type: "Self-Therapy",
        slug: "afirmasi-positif",
        title: "Afirmasi Positif",
        description: "Bangun pikiran positif dengan afirmasi harian yang dirancang untuk meningkatkan kepercayaan dirimu.",
        content: `
            <p>Afirmasi adalah kalimat-kalimat positif yang bisa membantu kamu membangun pola pikir yang sehat dan penuh semangat.</p>
            <p>Contoh afirmasi:</p>
            <ul>
            <li>Aku cukup dan berharga.</li>
            <li>Aku punya kendali atas hidupku.</li>
            <li>Hari ini aku memilih untuk tenang dan bahagia.</li>
            </ul>
            <p>Ucapkan dengan suara atau dalam hati setiap pagi atau saat merasa sedih.</p>
        `,
        media: "/images/therapy/affirmation.svg",
        action: "Baca Afirmasi"
    },
    {
        id: 4,
        type: "Education",
        slug: "cbt",
        title: "Apa itu CBT?",
        description: "Pelajari terapi CBT (Cognitive Behavioral Therapy) yang terbukti efektif mengatasi stres dan depresi.",
        content: `
            <p>CBT adalah terapi berbasis pendekatan kognitif dan perilaku yang bertujuan mengubah pola pikir negatif menjadi lebih sehat.</p>
            <p>Prinsip utama CBT adalah bahwa perasaan dan perilaku kita dipengaruhi oleh cara kita berpikir.</p>
            <p>CBT biasanya mencakup latihan mengidentifikasi pikiran negatif, menantangnya, dan menggantinya dengan pikiran yang lebih rasional dan mendukung.</p>
        `,
        media: "/images/therapy/cbt.svg",
        action: "Pelajari"
    },
    {
        id: 5,
        type: "Guided Audio",
        slug: "guided-audio",
        title: "Relaksasi Otot Progresif",
        description: "Dengarkan audio panduan untuk merilekskan tubuh dan pikiran.",
        content: `
            <p>Teknik ini melibatkan ketegangan dan pelepasan otot tubuh secara bergantian untuk membantu tubuh merasa rileks.</p>
            <ol>
            <li>Tegang dan tahan otot-otot tangan selama 5 detik, lalu lepaskan.</li>
            <li>Ulangi dengan kaki, bahu, dan wajah.</li>
            <li>Fokus pada perbedaan sensasi saat otot tegang dan rileks.</li>
            </ol>
            <p>Kamu juga bisa menggunakan panduan audio untuk memandu proses ini dengan lebih fokus.</p>
        `,
        media: "/images/therapy/audio.svg",
        action: "Dengarkan"
    },
];
  
export default therapyModules;  