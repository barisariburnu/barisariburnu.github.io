# Değişiklik Günlüğü

## [2026-08-27]

### Eklendi

- KUVVET Google Play yayını için İngilizce gizlilik politikası, hizmet şartları,
  ödeme yardımı, hesap silme ve AGPL kaynak teklifi sayfaları eklendi.
- Yasal sayfalar için mobil uyumlu ortak stil eklendi.
- Next.js yapılandırması GitHub Pages aracının tanıdığı JavaScript biçimine geçirildi; KUVVET'in
  uygulama içi yasal bağlantılarıyla aynı olan sonu `/` ile biten URL'ler kalıcı hâle getirildi.

### Doğrulama

- Production statik export ile tüm yeni sayfaların üretildiği doğrulandı.

## [2026-08-11]

### Eklendi

- AdMob yayıncı doğrulaması için alan adı kökünde yayımlanacak
  `public/app-ads.txt` kaydı eklendi.
- Proje çalışma kuralları için `AGENTS.md` ve değişiklik takibi için bu günlük
  oluşturuldu.

### Doğrulama

- `bun install --frozen-lockfile` başarıyla tamamlandı.
- `bun run build` başarıyla tamamlandı; statik export 9 sayfayı üretti.
- `out/app-ads.txt` dosyasının doğru yayıncı kaydını içerdiği doğrulandı.
- Push ve GitHub Pages dağıtımı sonrasında
  `https://barisariburnu.com.tr/app-ads.txt` adresinin `200 OK`,
  `text/plain; charset=utf-8` ve doğru AdMob yayıncı kaydıyla yanıt verdiği
  doğrulandı.
