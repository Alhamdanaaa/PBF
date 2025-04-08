import Image from "next/image";

export const metadata = {
  title: "Website Pribadi",
  description: "Halaman tentang saya.",
  openGraph: {
    title: "Tentang Saya",
    description: "Halaman tentang saya.",
  },
};

export default function Home() {
  return (
    <div className="mt-16 px-8 max-w-5xl mx-auto text-white">
      <header className="text-center">
        <h1 className="font-bold text-5xl">Tentang Saya</h1>
        <p className="text-lg mt-4 text-white max-w-2xl mx-auto">
          Saya seorang mahasiswa Teknik Informatika yang memiliki ketertarikan dalam Data Science.
        </p>
      </header>

      <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-12 mb-8">
        <div className="relative w-56 h-56 md:w-64 md:h-64">
          <Image
            className="rounded-full shadow-xl border-4 border-blue-500"
            src="/images/profile.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold">Halo, saya Alhamdana Fariz Al Furqaan!</h2>
          <p className="text-white mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, assumenda cum eaque facilis doloribus reiciendis magnam quisquam ipsa blanditiis accusamus pariatur amet optio accusantium voluptas quaerat cupiditate asperiores dolorum? Delectus quidem maiores adipisci eaque iusto nulla. Dolore perferendis quo ipsa fuga aperiam illo necessitatibus quis dolorem dicta rerum, expedita molestiae?
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href=""
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition font-medium"
              rel="noopener noreferrer"
            >
              Lihat LinkedIn Saya
            </a>
            <a
              href=""
              className="bg-white text-black px-5 py-2 rounded-lg shadow hover:bg-gray-300 transition font-medium"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}