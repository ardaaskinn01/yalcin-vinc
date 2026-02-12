import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-black text-secondary mb-10">Kullanım Şartları</h1>

                <div className="prose prose-lg text-gray-600 space-y-6">
                    <p>
                        Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">1. Hizmet Tanımı</h2>
                    <p>
                        Yalçın Vinç, Karaburun ve çevresinde vinç kiralama, tekne taşıma ve araç kurtarma hizmetleri hakkında bilgi vermek amacıyla bu siteyi işletmektedir.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">2. Değişiklikler</h2>
                    <p>
                        Yalçın Vinç, bu kullanım şartlarını dilediği zaman güncelleme hakkını saklı tutar.
                    </p>

                    <h2 className="text-2xl font-bold text-secondary mt-10">3. İletişim</h2>
                    <p>
                        Her türlü soru ve görüşünüz için: <br />
                        <strong>Telefon:</strong> 0553 065 32 57
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
