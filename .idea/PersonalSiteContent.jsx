import React from 'react';

const PersonalSite = () => {
    const services = [
        {
            id: 1,
            icon: "fas fa-laptop-medical",
            title: "טכנאי מחשבים PC ומומחה IT",
            description: "תמיכה טכנית Tier 1, פתרון תקלות חומרה ותוכנה, והכנת עמדות מחשוב מקצה לקצה. ניסיון עשיר במוקדי תמיכה בענן (IT Cloud) והשתלטות מרחוק."
        },
        {
            id: 2,
            icon: "fas fa-network-wired",
            title: "ניהול רשתות ותשתיות ענן",
            description: "ניהול משתמשים ב-Active Directory, הגדרת חיבורי VPN מאובטחים (FortiVPN), ותמיכה מלאה בסביבת Microsoft 365."
        },
        {
            id: 3,
            icon: "fas fa-user-shield",
            title: "ייעוץ טכנולוגי ואבטחת סייבר",
            description: "ניטור וזיהוי אירועי סייבר, בדיקות תוכנה וסיוע מחקרי בחולשות ומוצרים טכנולוגיים. ניסיון ממערך הסייבר הלאומי."
        },
        {
            id: 4,
            icon: "fas fa-code",
            title: "פיתוח Backend ומסדי נתונים",
            description: "פיתוח בשפות Java, Python, C#, ו-Go. כתיבת שאילתות SQL מורכבות וניתוח נתונים מתקדם ב-Excel."
        },
        {
            id: 5,
            icon: "fas fa-chalkboard-teacher",
            title: "הטמעה והדרכת מערכות",
            description: "הדרכה פרטנית של צוותים על מערכות CRM ומערכות מידע ייעודיות (כמו במגזר הרפואי וברשות המיסים)."
        },
        {
            id: 6,
            icon: "fas fa-tools",
            title: "ניהול קריאות ותמיכה אפליקטיבית",
            description: "שימוש שוטף במערכות SysAid ו-AnyDesk למתן מענה מהיר ומקצועי ל-11 חטיבות שונות בארגון."
        }
    ];

    return (
        <div dir="rtl" className="font-sans text-gray-800 bg-gray-50">

            {/* About Section */}
            <section id="about" className="py-16 px-6 bg-white border-b">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-blue-700">קצת עלי</h2>
                    <p className="text-xl leading-relaxed mb-8">
                        אני מהנדס תוכנה (B.Sc) ואיש IT מנוסה, המשלב רקע אקדמי חזק עם ניסיון מעשי "בידיים" כטכנאי מחשבים PC ומומחה לתמיכה טכנית. לאורך שנותיי המקצועיות צברתי מומחיות בפתרון תקלות מורכבות, ניהול משתמשים ב-Active Directory ומתן שירות במוקדי תמיכה בענן עבור חטיבות טכנולוגיות גדולות.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold">
                        <div className="p-3 bg-blue-50 rounded-lg shadow-sm border border-blue-100">B.Sc הנדסת תוכנה</div>
                        <div className="p-3 bg-blue-50 rounded-lg shadow-sm border border-blue-100">טכנאי מחשבים PC</div>
                        <div className="p-3 bg-blue-50 rounded-lg shadow-sm border border-blue-100">Active Directory</div>
                        <div className="p-3 bg-blue-50 rounded-lg shadow-sm border border-blue-100">Cloud IT Support</div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">שירותים ומקצועיות</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-600">
                                <div className="text-4xl text-blue-600 mb-4">
                                    <i className={service.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills / Tools Bar */}
            <section className="bg-blue-900 py-10 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h4 className="text-lg font-light mb-6 opacity-80 uppercase tracking-widest">טכנולוגיות וכלים שאני שולט בהם</h4>
                    <div className="flex flex-wrap justify-center gap-6 text-2xl">
                        <span title="Windows & Active Directory"><i className="fab fa-windows"></i></span>
                        <span title="Python"><i className="fab fa-python"></i></span>
                        <span title="Java"><i className="fab fa-java"></i></span>
                        <span title="SQL & Databases"><i className="fas fa-database"></i></span>
                        <span title="Networking & VPN"><i className="fas fa-network-wired"></i></span>
                        <span title="Microsoft Office 365"><i className="fas fa-envelope-open-text"></i></span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PersonalSite;