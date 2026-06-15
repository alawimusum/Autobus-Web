const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// نقول للسيرفر إن أي ملفات تصاميم أو صور بتكون داخل مجلد اسمه public
app.use(express.static(path.join(__dirname, 'public')));

// لما أحد يفتح الموقع، عطه الصفحة التعريفية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تشغيل السيرفر بطريقة تقبل التشغيل المحلي وتناسب Vercel لاحقاً
app.listen(process.env.PORT || PORT, () => {
    console.log(`السيرفر شغال تمام على الرابط: http://localhost:${PORT}`);
});