export const multiLanguageVerify = (languageType) => {
  const arabic = {
    //login view
    login_title: "مرحبا مجددا",
    login_subtitle: "مرحبا بعودتك فقد اشتقنا لك!",
    or: "أو تواصل مع",
    phone: "الهاتف الجوال",
    password: "كلمة المرور",
    login: "تسجيل",
    register_text: "ليس لديك حساب سابق؟",
    register: "تسجيل دخول",
    forgot_psw: "استعادة كلمة السر !",
    linkedin: "تسجيل الدخول باستخدام لينكد إن",
    instagram: "تسجيل الدخول باستخدام الانستغرام",
    //register view
    name: "الاسم",
    email: "البريد الالكتروني",
    login_text: "هل تملك حساب سابق؟",
    register_subtitle: "ادخل كامل البيانات بكل دقه",
    //verif view
    verif: "تأكيد رقم الهاتف",
    verif_desc: "الرجاء ادخال رمز التفعيل المرسل اليك",
    verif_text: "لم تتلقى رمز تفعيل",
    verif_btn: "إرسال مرة اخرى",
    verify: "تأكيد",
  };

  const english = {
    header: "header",
    sub_header: "sub_header",
    section_title_tec: "section_title_tec",
    more: "more",
    home: "الرئيسية",
    category: "التصنيفات",
    favorit: "المفضلة",
    chat: "الرسائل",
    profile: "الحساب",
    cart: "الحجوزات",
    notif: "الاشعارات",
    section_title_cat: "إختر ما يناسبك من الاقسام",
    section_title_pro: "أفضل الاستشاريين",
    slide_title: "إستشارات, تعليم و\n خدمات فنية",
    slide_desc:
      "العمال المدربون بمهارات خاصة ، خاصة في العلوم أو الهندسة ، ومهمتهم التأكد من عمل الآلات والمعدات بشكل صحيح ، وإصلاحها إذا لزم الأمر.",
    login_title: "تسجيل حساب",
    login_subtitle: "أدخل رقم الهاتف او البريد الالكتروني",
    email: "البريد الالكتروني",
    or: "او",
    phone: "الهاتف الجوال",
    login: "تسجيل",
    login_text: "هل تملك حساب سابق؟",
    register: "تسجيل دخول",
    name: "الاسم",
    password: "كلمة المرور",
    verif: "تأكيد رقم الهاتف",
    verif_desc: "الرجاء ادخال رمز التفعيل المرسل اليك",
    verif_text: "لم تتلقى رمز تفعيل",
    verif_btn: "إرسال مرة اخرى",
    verify: "تأكيد",
  };

  if (languageType == "eng") return english;
  if (languageType == "arabic") return arabic;
};
