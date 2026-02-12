import React from 'react';

// Dynamically importing all assets would be complex without a bundler helper, 
// so we'll list the relative paths directly. In a real Vite project, 
// assets are usually imported or placed in 'public'.
// However, since they are in src/assets, we can import them.

// To keep it clean, let's create an array of image indices we found
const imageIndices = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const videoIndices = [1, 2];

const Gallery = () => {
    return (
        <div className="bg-[#fafafa] min-h-screen">
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">Galeri & Operasyonlar</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Yalçın Vinç olarak Karaburun yarımadasında gerçekleştirdiğimiz tekne kurtarma ve vinç operasyonlarımızdan kareler.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* Videos Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-black text-secondary mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 bg-primary"></span>
                        Videolarımız
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {videoIndices.map((idx) => (
                            <div key={`vid-${idx}`} className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border border-white/10 group relative">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    preload="metadata"
                                >
                                    <source src={`/src/assets/(${idx}).mp4`} type="video/mp4" />
                                    Tarayıcınız video etiketini desteklemiyor.
                                </video>
                                <div className="absolute inset-0 pointer-events-none border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 rounded-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Images Grid */}
                <h2 className="text-3xl font-black text-secondary mb-12 flex items-center gap-4">
                    <span className="w-12 h-1 bg-primary"></span>
                    Fotoğraflarımız
                </h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {imageIndices.map((idx) => (
                        <div
                            key={`img-${idx}`}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            <img
                                src={`/src/assets/(${idx}).jpeg`}
                                alt={`Yalçın Vinç Operasyon - ${idx}`}
                                className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
