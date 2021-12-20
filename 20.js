const urls = [
    "https://www.facebook.com",
    "http://google.com",
    "mailto:example@gmail.com",
    "tel:599999999",
    "invalid url",
    "ftp://ftp01.com/html/",
    "http://example.com"
];

urls.filter(url => url.startsWith('http')).forEach(u => console.log(u))