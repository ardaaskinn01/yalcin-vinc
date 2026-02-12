import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-black text-secondary mb-10">Gizlilik Politikası</h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>
                        Yalçın Vinç olarak gizliliğinize önem veriyoruz. Bu gizlilik politikası, web sitemizi kullandığınızda toplanan bilgiler ve bu bilgilerin nasıl kullanıldığı hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">1. Toplanan Veriler</h2>
                    <p>
                        Google Ads ve Analytics gibi araçlar aracılığıyla anonim kullanım verileri (ziyaret süresi, cihaz bilgisi vb.) toplanabilir.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">2. Verilerin Kullanımı</h2>
                    <p>
                        Toplanan veriler yalnızca aşağıdaki amaçlar için kullanılır:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Hizmet kalitemizi artırmak.</li>
                        <li>Google Ads üzerinden reklam performansını ölçmek.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-secondary mt-10">4. Üçüncü Taraflar</h2>
                    <p>
                        Verileriniz, yasal zorunluluklar dışında üçüncü taraflarla asla paylaşılmaz. Google Ads kullanımı nedeniyle Google ile anonim veriler paylaşılabilir.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">5. İletişim</h2>
                    <p>
                        Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz: <br />
                        <strong>Telefon:</strong> 0553 065 32 57
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
